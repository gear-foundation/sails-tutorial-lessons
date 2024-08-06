Next, extend the fungible token contract by adding user balances and a method to mint new tokens.

The addition of the following capabilities will enhance the contract:

- Managing user balances
- Minting new tokens

Сode explanation

1. **Storage Structure**: The `State` structure is expanded to include a `balances` field for managing user balances.
2. Storage Implementation:
    - `get`: Returns a reference to the storage for read-only operations.
    - `get_mut`: Returns a mutable reference to the storage for operations that modify the state.
3. Token Service Implementation:
    - **Initialization (`init` method)**: Initializes the static storage with the token name and an empty balance map.
    - Minting (`mint` method): Increases the balance of a specified user by a specified amount. This method is mutable (`&mut self`) as it changes the state.
    - Name Retrieval (`name` method): Returns the token name stored in the static storage. This method is non-mutable (`&self`) as it only queries the state.
    - Balance Query (`balance_of` method): Returns the balance of a specified user. This method is non-mutable (`&self`) as it only queries the state.