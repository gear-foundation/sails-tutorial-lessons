For the sake of simplicity, we will continue from the previous step of the tutorial using the program instance with specified program ID.

Program transactions are handled using the `Sails-JS` [functions](https://github.com/gear-tech/sails/tree/master/js#functions) provided by the generated program.

Particular [service](https://github.com/gear-tech/sails/tree/master/js#services) of the program contains all the necessary [message methods](https://github.com/gear-tech/sails/tree/master/js/cli#message-methods) for managing tokens, such as minting and transferring. By utilizing them, we can easily perform all required transactions.

### Mint Tokens

To mint new tokens, you need to initiate a mint transaction using the program instance. To do it, use `mint` method from the `VFT` service of the program instance.

This involves specifying the recipient's address and the amount of tokens to mint.

The transaction is signed with a developer account and the necessary gas is calculated.

Once the transaction is sent and confirmed, the tokens are minted and added to the recipient's account.

### Transfer Tokens

Continuing interaction with our program, you can transfer tokens from one account to another. Similarly to minting tokens, take a look at `transfer` method from the `VFT` service of the program instance.

This involves creating a transfer transaction by specifying the recipient's address and the amount of tokens to transfer.

The transaction is signed with a developer account and the necessary gas is calculated.

Once the transaction is sent and confirmed, the tokens are transferred to the recipient's account.
