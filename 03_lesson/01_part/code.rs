#![no_std]
use sails_rs::{prelude::*};
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
    }

    pub fn burn(&mut self, from: ActorId, value: U256) {

    }
}

impl AsRef<VftService> for ExtendedService {
    fn as_ref(&self) -> &VftService {
        &self.vft
    }
}

pub struct MyProgram;

#[program]
impl MyProgram {
    pub fn new(name: String, symbol: String, decimals: u8) -> Self {
        VftService::init(name, symbol, decimals);
        Self
    }

    pub fn vft(&self) -> VftService {
        VftService::new()
    }
}

