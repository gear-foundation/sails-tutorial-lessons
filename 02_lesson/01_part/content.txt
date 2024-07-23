In this lesson, we will start writing a fungible token contract while exploring additional aspects of the Sails framework.

We will create a simple contract with the following state:

- User balances
- Token name

First, let's create a service that initializes the token name upon contract deployment and adds a method to return the specified name.

Step-by-step explanation:

1. Structure Definition: We define a `Storage` structure to store the token name.
2. Static State Storage: We use a static variable to hold our state. Before initialization, `STORAGE` is `None`, allowing us to handle the possibility of the storage being uninitialized.
3. Storage Implementation: The `Storage` struct has a `get` method that returns a reference to the storage.
4. Token Service Implementation: We define a `Token` struct and use the `#[gservice]` attribute to mark the `Token` struct as a service.
    - Initialization (`init` method): This method takes a `String` parameter `name` and initializes the static storage with this name.
    - Name Retrieval (`name` method): This method returns the name stored in the static storage.
5. Program Implementation: In the previous lesson, we had only a service constructor. Here, we add an application constructor. A set of its associated public functions returning `Self` are treated as application constructors. These will be called once at the beginning of the application’s lifetime, when the application is loaded onto the network.
    - Application Constructor (`new` method): This method initializes the token with the specified name by calling `Token::init` and returns an instance of `MyProgram`.
    - Token Service Access (`token` method): This method returns a default instance of the `Token` struct.
