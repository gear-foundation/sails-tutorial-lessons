#![no_std]
use sails::prelude::*;

#[derive(Default)]
pub struct HelloWorld(());

#[gservice]
impl HelloWorldService {
    pub fn hello_world `(&self) > &'static str {
       "Hello, world!"
    }
}

struct MyProgram;

#[gprogram]
impl MyProgram {

    pub fn hello_world_svc(&self) -> HelloWorld {
        HelloWorld::default()
    }
}
