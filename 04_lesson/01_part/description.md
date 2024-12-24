### Connecting to the API

With the help of the [Gear-JS API](https://github.com/gear-tech/gear-js/tree/main/api#getting-started) library, we are going to start by connecting to the Vara testnet using the provided endpoint URL. This connection enables interaction with the network for various operations.

### Setting Up Developer Accounts:

In this tutorial, we will use developer accounts to facilitate transactions and other network activities. Such accounts are convenient for testing and development purposes.

We create a new account by generating a mnemonic and using the `Keyring` to create and manage it.

Additionally, we'll create an account with predefined URI for Alice.

**Warning**: Developer accounts are intended for testing and development purposes only. Using developer accounts in production environments poses significant security risks, as these accounts are often publicly known and can be easily compromised. In a production environment, always use secure, user-managed accounts through a UI, allowing end-users to interact with the network using the wallet of their choice. This ensures better security and control over account management.

### Defining Token Constants

Define a constant to represent the token, including its name, symbol, and decimal places. This constant will be used throughout the tutorial to reference the token's properties.

Additionally, calculate the token amount based on the specified decimals.
