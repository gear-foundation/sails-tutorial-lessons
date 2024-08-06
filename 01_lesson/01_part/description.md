# Sails tutorials

These lessons will show how easy it is to create smart contracts on the Vara platform using the [Sails](https://github.com/gear-tech/sails) framework. It provides the initial steps and core concepts for a confident start on Vara.

## What is Sails?

Sails is a library for bringing your experience of writing applications utilizing [Gear Protocol](https://gear-tech.io/) to the next level of simplicity and clarity.

It deals with things like:

- Eliminating the necessity of writing some low-level boilerplate code and letting you to stay
focused on your business problem
- Generated [IDL](https://en.wikipedia.org/wiki/Interface_description_language) file for your application
- Generated client allowing to interact with your application from code written in different languages and executed in different runtimes

### Building Your First Hello World Program

This lesson covers creating a program that outputs “Hello, world!”

The architecture of Sails applications is based on several key concepts.

1. **Service:** A Rust struct implementation marked with the `#[service]` attribute represents the **service,** which implements an aspect of the application's business logic.
2. **Program: A** Rust struct implementation marked with the `#[program]` attribute represents the **program**. The program's primary role is to host one or more services and expose them to external consumers.

The program requires the service to function. Program implementation must follow Gear protocol architecture.

Code explanation:

In the code on the right, the sails_rs::prelude module provides necessary imports.

The `#[service]` attribute defines the `HelloWorld` struct. This service has a single-method `greeting` that returns the string "Hello, world!".

The `#[program]` attribute defines the `MyProgram` struct. This program includes a method `hello_world` that creates a new instance of the `HelloWorld` struct. The program's **public** methods, taking `&self` and no other arguments, serve as exposed service constructors. These public methods are called each time an incoming request message needs to be sent to a selected service.