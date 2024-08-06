Let's extend the fungible token contract by adding the ability to transfer tokens between users and by introducing events to notify off-chain subscribers about changes in the application state.

**Code explanation**

The `Token` contract has been extended to include a `transfer` method for sending tokens from one user to another. It now integrates events to notify off-chain subscribers about these transfers.

The `Events` enum defines the events that the `Token` service can emit. Each variant represents a specific event and its associated data. In this example, there are two events: `Transferred` and `Minted`. They have fields for the sender, receiver, and the token amount transferred or minted, respectively.

The `#[service(events = Events)]` attribute configures the `Token` service to emit events of type `Events`. This autogenerates a `notify_on` method, which emits events from within the service methods.

The `transfer` method handles the token transfer between users. It performs a balance check to ensure the sender has enough funds for the transfer. If the sender has a low balance, it triggers an error message showing "insufficient balance”. If the sender has enough balance, the method deducts the specified amount from the sender's balance, adds it to the recipient's balance, and emits a `Transferred` event using the `notify_on` method.

The `mint` method adds tokens to a user's balance and emits a `Minted` event.