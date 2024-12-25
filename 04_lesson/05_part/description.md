In this step, subscribe to transfer events to monitor token transfers and update balances accordingly.

Using `Sails-JS` library, [events](https://github.com/gear-tech/sails/tree/master/js#events) are monitored via subscriptions.

A particular [service](https://github.com/gear-tech/sails/tree/master/js#services) of the program contains all the necessary [subscriptions](https://github.com/gear-tech/sails/tree/master/js/cli#event-subscription-methods) for available events, such as transfer and approval. By using them, react to specific transactions and update the state of the application in real-time.

### Subscribe to Transfer Events

Subscribe to transfer events using the `subscribeToTransferEvent` method from the `VFT` Service of the program instance.

This method allows listening for transfer events and executing a callback function when an event occurs.

### Handling Transfer Events

Filter out events that do not match the specific transaction of interest, keeping only transfers from the developer account to Alice with the specified token amount.

When a matching transfer event is detected, read the updated balances of developer and Alice accounts using the `balanceOf` method described in the previous step. This ensures that the latest balance information is available after the transfer.

Once the desired transaction is found and the balances are updated, unsubscribe from the transfer events to stop listening for further events.

This approach allows efficient monitoring and reaction to specific token transfers, ensuring that the application state remains up-to-date with the latest network state.
