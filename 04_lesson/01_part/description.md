### Connecting to the API

With the help of the [Gear-JS API](https://github.com/gear-tech/gear-js/tree/main/api#getting-started) library, we are going to start by connecting to the Vara testnet using the provided endpoint URL. This connection enables interaction with the network for various operations.

### Setting Up Developer Accounts:

In this tutorial, we create two accounts with predefined URIs for Alice and Bob. These accounts are used to facilitate transactions and other network activities.

Use the `Keyring` to create and manage developer accounts.

While developer accounts are convenient for testing and development, in a production environment, you might replace them with accounts managed through a UI, allowing end-users to interact with the network by the wallet of their choice.

### Defining Token Constants

Define a constant to represent the token, including its name, symbol, and decimal places. This constant will be used throughout the tutorial to reference the token's properties.

Additionally, calculate the token amount based on the specified decimals.
