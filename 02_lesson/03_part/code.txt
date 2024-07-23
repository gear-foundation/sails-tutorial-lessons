#![no_std]
use sails::{prelude::*, collections::HashMap};

pub struct Storage {
    name: String,
    balances: HashMap<ActorId, U256>,
}

static mut STORAGE: Option<Storage> = None;

impl Storage {
    pub fn get() -> &'static Self {
        unsafe { STORAGE.as_ref().expect("Storage is not initialized") }
    }

    pub fn get_mut() -> &'static mut Self {
        unsafe { STORAGE.as_mut().expect("Storage is not initialized") }
    }
}

#[derive(Default)]
pub struct Token;

#[derive(Encode, TypeInfo)]
enum TokenEvent {
    Transfer { from: ActorId, to: ActorId, amount: U256 },
}

#[gservice(events = TokenEvent)]
impl Token {
    pub fn init(name: String) {
        unsafe {
            STORAGE = Some(Storage {
                name,
                balances: HashMap::new(),
            });
        }
    }

    pub fn mint(&mut self, to: ActorId, amount: U256) {
        let storage = Storage::get_mut();
        let balance = storage.balances.entry(to).or_insert(U256::zero());
        *balance += amount;
    }

    pub fn transfer(&mut self, from: ActorId, to: ActorId, amount: U256) {
        let storage = Storage::get_mut();
        let from_balance = storage.balances.entry(from).or_insert(U256::zero());

        if *from_balance < amount {
            panic!("Insufficient balance");
        }

        *from_balance -= amount;
        let to_balance = storage.balances.entry(to).or_insert(U256::zero());
        *to_balance += amount;

        let _ = self.notify_on(TokenEvent::Transfer { from, to, amount });
    }

    pub fn name(&self) -> &'static str {
        let storage = Storage::get();
        &storage.name
    }

    pub fn balance_of(&self, account: ActorId) -> U256 {
        let storage = Storage::get();
        *storage.balances.get(&account).unwrap_or(&U256::zero())
    }
}
