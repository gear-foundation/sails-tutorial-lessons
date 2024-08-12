#![no_std]
use sails_rs::prelude::*;
use vft::{Service as BaseVftService, Storage};

#[derive(Encode, Decode, TypeInfo)]
pub enum Events {
    Minted { to: ActorId, value: U256 },
    Burned { from: ActorId, value: U256 },
}

#[derive(Clone)]
pub struct VftService {
    vft: BaseVftService,
}

impl VftService {
    pub fn init(name: String, symbol: String, decimals: u8) -> Self {
        VftService {
            vft: <BaseVftService>::seed(name, symbol, decimals),
        }
    }
}

#[gservice(extends = VftService, events = Events)]
impl VftService {
    pub fn new() -> Self {
        Self {
            vft: BaseVftService::new(),
        }
    }
    pub fn mint(&mut self, to: ActorId, value: U256) {
    }

    pub fn burn(&mut self, from: ActorId, value: U256) {

    }
}

impl AsRef<BaseVftService> for VftService {
    fn as_ref(&self) -> &BaseVftService {
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

