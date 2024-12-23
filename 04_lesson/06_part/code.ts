const transferTransaction = await vftProgram.vft
  .transfer(bobAccountAddress, TOKENS_AMOUNT)
  .withAccount(aliceKeyring)
  .calculateGas();

await transferTransaction.signAndSend();
