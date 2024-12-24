In this step, we will subscribe to transfer events to monitor token transfers and update balances accordingly. This is useful for reacting to specific transactions and updating the state of your application in real-time.

### Subscribe to Transfer Events

Using `Sails-JS` library, events are monitored via event subscriptions.

We subscribe to transfer events using the `subscribeToTransferEvent` method from the `VFT` Service of the program instance

This method allows us to listen for transfer events and execute a callback function when an event occurs.

### Handling Transfer Events

In our case, we filter out events that do not match the specific transaction we are interested in (transfers from Alice to Bob with the specified token amount).

When a matching transfer event is detected, we read the updated balances of Alice and Bob using the `balanceOf` method described in the previous step.This ensures that we have the latest balance information after the transfer.

Once the desired transaction is found and the balances are updated, we unsubscribe from the transfer events to stop listening for further events.

This approach allows us to efficiently monitor and react to specific token transfers, ensuring that our application state remains up-to-date with the latest network state.
