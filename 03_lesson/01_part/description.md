### Introduction
Using Sails, existing services can be combined into a new, unified service. This is achieved by using the `extends` argument within the `#[service]` attribute. For example, imagine you have two services: Service A and Service B. A new service, Service C, can be created that incorporates features from both Service A and Service B, as if they were originally designed to be part of a single service.

Let's take the existing [fungible token service](https://github.com/gear-foundation/standards/tree/master/vft-service) and extend it by adding new functionalities. The existing service already implements the standard token functionalities that must remain unchanged for any smart contract that is a token.

**Code Explanation**

The [`vft`](https://github.com/gear-foundation/standards/tree/master/vft-service) crate contains the standard fungible token service (`BaseVftService`). 

An `Events` enum is defined to handle custom events like `Minted` and `Burned`.

The `VftService` struct implements an `init` method to initialize the service with a token name, symbol, and decimals. It also includes a `new` method which initializes `VftService` using the default constructor of `BaseVftService` without any parameters.

Using the `#[service(extends = BaseVftService, events = Events)]` attribute, `BaseVftService` is extended to add custom events to `VftService`. This setup enables calling methods from `BaseVftService` within `VftService` and defining custom methods, like `mint` and `burn`.

The `AsRef` trait is implemented for `VftService`, referencing the embedded `BaseVftService` instance.Implementing `AsRef` allows easy access to the inner `BaseVftService` when needed, but it doesn’t directly relate to utilizing methods from `BaseVftService` within `VftService`. The methods can be directly accessed through the `vft` field without needing `AsRef`.

**Adding Admin Functionality:**

To enhance the security and control of the token service, an administrator role is introduced. The administrator will have exclusive rights to perform critical actions such as minting and burning tokens.

**Admin Storage and Access Control:**

- An `admin` field is added to the `VftService` struct to store the administrator's address (`ActorId`).
- The admin address is stored in a `static mut` variable, allowing for global access within the contract.
- The `set_admin` function is used to set or update the admin address. This function is called during the initialization of the contract to establish the initial admin and can later be used to change the admin via the `change_admin` function.
- The `get_admin` function retrieves the current admin address. It is marked as `unsafe` due to the use of a `static mut` variable, but in the context of smart contracts on the Gear Protocol, where messages are executed sequentially, this approach is safe.
- The `only_admin` function is implemented to ensure that only the administrator can execute specific functions. This function compares the caller's address (`gstd::msg::source()`) with the stored admin address. If the caller is not the admin, the transaction is aborted with an "Unauthorized access" error.