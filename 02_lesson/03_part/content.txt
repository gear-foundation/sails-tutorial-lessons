In this lesson, we will extend our fungible token contract by adding the ability to transfer tokens between users and by introducing events to notify off-chain subscribers about changes in the application state.

**Code explanation**

We extended the `Token` contract by adding a `transfer` method to send tokens from one user to another and by integrating events to notify off-chain subscribers about these transfers.

The `TokenEvent` enum defines the events that can be emitted by the `Token` service. Each variant represents a specific event and its associated data. In this example, we define a `Transfer` event with `from`, `to`, and `amount` fields.

The `#[gservice(events = TokenEvent)]` attribute configures the `Token` service to emit events of type `TokenEvent`. This automatically generates a `notify_on` method, which we use to emit events from within the service methods.

The `transfer` method transfers tokens from one user to another. It first checks if the sender has enough balance to complete the transfer. If not, it panics with an "Insufficient balance" message. Otherwise, it deducts the specified amount from the sender's balance, adds it to the recipient's balance, and emits a `Transfer` event using the `notify_on` method.
