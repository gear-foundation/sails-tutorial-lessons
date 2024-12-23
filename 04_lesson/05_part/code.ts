const unsubscribe = vftProgram.vft.subscribeToTransferEvent(
  async ({ from, to, value }) => {
    if (
      from !== aliceAccountAddress ||
      to !== bobAccountAddress ||
      value !== TOKENS_AMOUNT
    )
      return;

    const balance = await vftProgram.vft.balanceOf(aliceAccountAddress);
    const bobBalance = await vftProgram.vft.balanceOf(bobAccountAddress);

    console.log(`Alice's balance: ${balance}`);
    console.log(`Bob's balance: ${bobBalance}`);

    (await unsubscribe)();
  }
);
