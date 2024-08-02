### Introduction

In this lesson, we will take the existing fungible token service from [Gear Foundation's repository](https://github.com/gear-foundation/standards/tree/master/vft-service) and extend it by adding new functionalities. The existing service already implements the standard token functionalities that must remain unchanged for any smart contract that is a token. Therefore, we can extend the ready-made service and add our own functions.

A standout feature of Sails is its capability to extend (or mix in) existing services. This is facilitated through the use of the `extends` argument in the `#[gservice]` attribute. Consider you have Service `A` and Service `B`, possibly sourced from external crates, and you aim to integrate their functionalities into a new Service `C`. This integration would result in methods and events from Services `A` and `B` being seamlessly incorporated into Service `C`, as if they were originally part of it. In such a case, the methods available in Service `C` represent a combination of those from Services `A` and `B`. Should a method name conflict arise, where both Services `A` and `B` contain a method with the same name, the method from the service specified first in the `extends` argument takes precedence. This strategy not only facilitates the blending of functionalities but also permits the overriding of specific methods from the original services by defining a method with the same name in the new service. With event names, conflicts are not allowed.
**Code Explanation**

We use the `vft` crate, which contains the standard fungible token service (`VftService`). We extend this service by creating a new `ExtendedService` struct that includes `VftService` as a field.

We define an `Event` enum to handle custom events like `Minted` and `Burned`.

The `ExtendedService` struct implements an `init` method to initialize the service with a token name, symbol, and decimals. It also implements the `new` method for creating a new instance of `ExtendedService`.

Using the `#[gservice(extends = VftService, events = Event)]` attribute, we extend `VftService` and add custom events to `ExtendedService`. This setup allows us to call methods from `VftService` within `ExtendedService` while also defining our own methods, such as `mint` and `burn`.
