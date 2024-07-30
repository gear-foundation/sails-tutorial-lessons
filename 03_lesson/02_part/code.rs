#![no_std]
use sails::prelude::*;
use vft::{Service as VftService, Storage};

#[derive(Encode, Decode, TypeInfo)]
pub enum Event {
    Minted { to: ActorId, value: U256 },
    Burned { from: ActorId, value: U256 },
}

#[derive(Clone)]
pub struct ExtendedService {
    vft: VftService,
}

impl ExtendedService {
    pub fn init(name: String, symbol: String, decimals: u8) -> Self {
        ExtendedService {
            vft: <VftService>::seed(name, symbol, decimals),
        }
    }
}
#[gservice(extends = VftService, events = Event)]
impl ExtendedService {
    pub fn new() -> Self {
        Self {
            vft: VftService::new(),
        }
    }
    pub fn mint(&mut self, to: ActorId, value: U256) {
        if value.is_zero() {
            panic!("Attempted to mint zero value");
        }
        let balances = Storage::balances();
        let total_supply = Storage::total_supply();

        let new_total_supply = total_supply
            .checked_add(value)
            .unwrap_or_else(|| panic!("Numeric overflow occurred"));

        let balance = balances
            .get(&to)
            .map_or(U256::zero(), |&balance| balance.into());
        let new_balance = balance
            .checked_add(value)
            .unwrap_or_else(|| panic!("Numeric overflow occurred"));

        let Some(non_zero_new_balance) = NonZeroU256::new(new_balance) else {
            unreachable!();
        };

        balances.insert(to, non_zero_new_balance);

        *total_supply = new_total_supply;
        let _ = self.notify_on(Event::Minted { to, value });
    }

    pub fn burn(&mut self, from: ActorId, value: U256) {
        if value.is_zero() {
            panic!("Attempted to burn zero value");
        }
        let balances = Storage::balances();
        let total_supply = Storage::total_supply();

        let new_total_supply = total_supply
            .checked_sub(value)
            .unwrap_or_else(|| panic!("Numeric unferflow occurred"));

        let balance = balances
            .get(&from)
            .map_or(U256::zero(), |&balance| balance.into());

        let new_balance = balance
            .checked_sub(value)
            .unwrap_or_else(|| panic!("Insufficient balance"));

        if let Some(non_zero_new_balance) = NonZeroU256::new(new_balance) {
            balances.insert(from, non_zero_new_balance);
        } else {
            balances.remove(&from);
        }

        *total_supply = new_total_supply;
        
        let _ = self.notify_on(Event::Burned { from, value });
    }
}

impl AsRef<VftService> for ExtendedService {
    fn as_ref(&self) -> &VftService {
        &self.vft
    }
}
