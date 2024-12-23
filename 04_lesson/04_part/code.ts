const balance = await vftProgram.vft.balanceOf(aliceAccountAddress);
const bobBalance = await vftProgram.vft.balanceOf(bobAccountAddress);

console.log(`Alice's balance: ${balance}`);
console.log(`Bob's balance: ${bobBalance}`);
