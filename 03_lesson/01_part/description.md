### Introduction

Sails combines existing services into a new service. You can action the integration using the `extends` argument within the `#[service]` attribute. Imagine you have two services: Service A and Service B. You want to create a new service, Service C, that uses parts of Service A and Service B. Service C will have the same features as Service A and Service B as if they were always part of it.

Let's take the existing [fungible token service](https://github.com/gear-foundation/standards/tree/master/vft-service) and extend it by adding new functionalities. The existing service already implements the standard token functionalities that must remain unchanged for any smart contract that is a token.

**Code Explanation**

The [`vft`](https://github.com/gear-foundation/standards/tree/master/vft-service) crate contains the standard fungible token service (`BaseVftService`). Creating a new `VftService` struct containing `BaseVftService` as a field extends the standard fungible token service.

An `Events` enum is defined to handle custom events like `Minted` and `Burned`.

The `VftService` struct implements an `init` method to initialize the service with a token name, symbol, and decimals. It also includes a `new` method for creating a new instance of `VftService`.

Using the `#[service(extends = BaseVftService, events = Events)]` attribute, `BaseVftService` is extended to add custom events to `VftService`. This setup enables calling methods from `BaseVftService` within `VftService` and defining custom methods, like `mint` and `burn`.

The `AsRef` trait is implemented for `VftService`, referencing the embedded `BaseVftService` instance. This allows `VftService` to utilize methods from `BaseVftService`.