For the sake of simplicity, we will continue from the previous step of the tutorial using the program instance with specified program ID.

Program transactions are handled using the `Sails-JS` functions provided by the generated program.

In our case, we are working with a Fungible Token Program that includes a `VFT` service. This service contains all the necessary functions for managing tokens, such as minting and transferring. By utilizing these functions, we can easily perform all required transactions.

### Mint Tokens

To mint new tokens, you need to initiate a mint transaction using the program instance.

This involves specifying the recipient's address and the amount of tokens to mint.

The transaction is signed with a developer account and the necessary gas is calculated.

Once the transaction is sent and confirmed, the tokens are minted and added to the recipient's account.

### Transfer Tokens

Continuing interaction with our program, you can transfer tokens from one account to another.

This involves creating a transfer transaction by specifying the recipient's address and the amount of tokens to transfer.

The transaction is signed with a developer account and the necessary gas is calculated.

Once the transaction is sent and confirmed, the tokens are transferred to the recipient's account.
