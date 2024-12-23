const mintTransaction = await vftProgram.vft
  .mint(aliceAccountAddress, TOKENS_AMOUNT)
  .withAccount(aliceKeyring)
  .calculateGas();

const { response: mintResponse } = await mintTransaction.signAndSend();
await mintResponse();
