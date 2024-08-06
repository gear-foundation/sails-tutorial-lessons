#![no_std]
use sails_rs::{prelude::*};

pub struct State {
    name: String,
}

static mut STATE: Option<State> = None;

impl State {
    pub fn get() -> &'static Self {
        unsafe { STATE.as_ref().expect("State is not initialized") }
    }
}

#[derive(Default)]
pub struct Token;

#[service]
impl Token {
    pub fn init(name: String) {
        unsafe {
            STATE = Some(State {
                name,
            });
        }
    }

    pub fn name(&self) -> &'static str {
        let state = State::get();
        &state.name
    }
}

pub struct MyProgram;

#[program]
impl MyProgram {
    pub fn new(name: String) -> Self {
        Token::init(name);
        Self
    }

    #[route("token")]
    pub fn token_svc(&self) -> Token {
        Token::default()
    }
}
