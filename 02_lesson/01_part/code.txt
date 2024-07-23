#![no_std]
use sails::prelude::*;

pub struct Storage {
    name: String,
}

static mut STORAGE: Option<Storage> = None;

impl Storage {
    pub fn get() -> &'static Self {
        unsafe { STORAGE.as_ref().expect("Storage is not initialized") }
    }
}

#[derive(Default)]
pub struct Token;

#[gservice]
impl Token {
    pub fn init(name: String) {
        unsafe {
            STORAGE = Some(Storage {name});
        }
    }

    pub fn name(&self) -> &'static str {
        let storage = Storage::get();
        &storage.name
    }
}

#[derive(Default)]
pub struct MyProgram;

#[gprogram]
impl MyProgram {

    pub fn new(name: String) -> Self {
        Token::init(name);
        Self
    }

    pub fn token(&self) -> Token {
        Token::default()
    }
}
