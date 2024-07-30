In this lesson, we will create a simple program that outputs the classic "hello world" message.

Let's examine and explain the code provided on the right side.

To write contracts on Vara, we use the [Sails](https://github.com/gear-tech/sails/tree/master) library. Sails is a framework designed to simplify and clarify the process of building applications with the [Gear Protocol](https://gear-tech.io/).

The architecture of Sails applications is based on several key concepts.

The first concept is the **service**, which is represented by an implementation of a Rust struct marked with the `#[gservice]` attribute. The main responsibility of a service is to implement some aspect of the application's business logic. In this example, we have a simple method `hello_world` that returns the string "hello world" when called.

The second key concept is the **program**, which, similar to the service, is represented by an implementation of a Rust struct marked with the `#[gprogram]` attribute. The primary role of the program is to host one or more services and expose them to external consumers.

In the code above, we first import everything from the `sails::prelude` module.

We then define a struct `HelloWorld` and derive the `Default` trait for it, which provides a default value for the struct.

Next, we define the `HelloWorldService` with the `#[gservice]` attribute. This service has a single method `hello_world` that returns the string "Hello, world!".

Finally, we define the `MyProgram` struct with the `#[gprogram]` attribute. This program has a method `hello_world_svc` that creates a new instance of the `HelloWorld` struct using its default value. A set of program's **public** methods working over `&self` and having no other parameters are treated as exposed service constructors and are called each time when an incoming request message needs be dispatched to a selected service.

This simple example demonstrates how to use Sails to create a basic program that provides the "hello world" output.
