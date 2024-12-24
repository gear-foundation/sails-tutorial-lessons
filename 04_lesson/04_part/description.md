To read the balances of accounts, we utilize the `Sails-JS` [queries](https://github.com/gear-tech/sails/tree/master/js#queries) provided by the generated program.

Particular [service](https://github.com/gear-tech/sails/tree/master/js#services) of the program contains all the necessary [query methods](https://github.com/gear-tech/sails/tree/master/js/cli#query-methods) for managing tokens state, such as balance and allowance. By using them, we can easily obtain current state of the program.

### Reading Balances

To get the balance of Alice's account, use the `balanceOf` method from the `VFT` service of the program instance. This method takes Alice's account address as a parameter and returns the balance.

Similarly, to get the balance of Bob's account, use the `balanceOf` method from the `VFT` service of the program instance. This method takes Bob's account address as a parameter and returns the balance.
