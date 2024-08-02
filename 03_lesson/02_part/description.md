In this part, we'll focus on implementing the `mint` and `burn` functions to manage the token supply.

1. **Mint Function**:
    - The `mint` function mints new tokens and adds them to the specified account's balance.
    - It checks if the value is zero and panics if it is.
    - It calculates the new total supply and the new balance for the account.
    - If the new balance is valid, it updates the balances and total supply.
    - Finally, it emits a `Minted` event.
2. **Burn Function**:
    - The `burn` function burns tokens from the specified account's balance.
    - It checks if the value is zero and panics if it is.
    - It calculates the new total supply and the new balance for the account.
    - If the new balance is valid, it updates the balances and total supply.
    - If the new balance is zero, it removes the account from the balances.
    - Finally, it emits a `Burned` event.

Code on the right side