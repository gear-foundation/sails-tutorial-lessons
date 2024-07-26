In this lesson, we will extend our fungible token contract by adding user balances and a method to mint new tokens.

We will enhance our contract by adding the following capabilities:

- Managing user balances
- Minting new tokens

Сode explanation

1. Storage Structure: We add a `balances` field to the `Storage` structure to manage user balances.
2. Storage Implementation:
    - `get`: Returns a reference to the storage. Used for read-only operations.
    - `get_mut`: Returns a mutable reference to the storage. Used for operations that modify the state.
3. Token Service Implementation:
    - Initialization (`init` method): Initializes the static storage with the token name and an empty balance map.
    - Minting (`mint` method): Increases the balance of a specified user by a specified amount. This method is mutable (`&mut self`) as it modifies the state.
    - Name Retrieval (`name` method): Returns the token name stored in the static storage. This method is non-mutable (`&self`) as it only queries the state.
    - Balance Query (`balance_of` method): Returns the balance of a specified user. This method is non-mutable (`&self`) as it only queries the state.
