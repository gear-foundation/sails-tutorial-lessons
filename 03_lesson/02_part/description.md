Let's focus on implementing the `mint` and `burn` functions to manage the token supply.

1. **Mint Function**:
    - The `mint` function mints new tokens and adds them to the specified account's balance.
    - It checks if the value is zero and panics if it is.
    - The `mint` function also calculates the new total supply and the new balance for the account.
    - If the new token balance for the account is valid, the `mint` function updates the balances and total supply.
    - Finally, it emits a `Minted` event.
2. **Burn Function**:
    - The `burn` function burns tokens from the specified account's balance.
    - It checks if the value is zero and panics if it is.
    - The `burn` function also calculates the new total supply and the new balance for the account.
    - If the new token for the account balance is valid, the `burn` function updates the balances and total supply.
    - If the new balance is zero, it removes the account from the balances.
    - Finally, it emits a `Burned` event.
3. **Admin management**
    - The `change_admin` function provides the current administrator with the ability to transfer their administrative privileges to another address. This ensures that control over the contract can be handed over smoothly when required.
    - Before making any changes, the function first verifies that the caller is indeed the current administrator by using the `only_admin` function. If the caller is authorized, the `ADMIN` variable is then updated to reflect the new administrator's address.
    - The `admin_address` function allows users to query the current administrator's address. By calling this method, any user can retrieve the `ActorId` of the admin stored in the contract.



Congratulations on completing the lesson! You've learned how to write programs using the Sails framework. 

Next Steps:
- Check out the token standards on the [Gear Foundation's repository](https://github.com/gear-foundation/standards);
- Dive deeper into the [Sails documentation](https://github.com/gear-tech/sails) to learn about other advanced features and capabilities.

