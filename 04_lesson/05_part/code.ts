import { decodeAddress, GearApi } from '@gear-js/api';
import { Keyring } from '@polkadot/api';
import { mnemonicGenerate } from '@polkadot/util-crypto';

import { Program } from './lib';

const VARA_TESTNET_ENDPOINT = 'wss://testnet.vara.network';
const api = await GearApi.create({ providerAddress: VARA_TESTNET_ENDPOINT });

const mnemonic = mnemonicGenerate();
const keyring = new Keyring({ type: 'sr25519' }).addFromMnemonic(mnemonic);
const aliceKeyring = new Keyring({ type: 'sr25519' }).addFromUri('//Alice');
const accountAddress = decodeAddress(keyring.address);
const aliceAccountAddress = decodeAddress(aliceKeyring.address);

const TOKEN = {
  NAME: 'Tutorial Token',
  SYMBOL: 'TT',
  DECIMALS: 12,
} as const;

const TOKENS_AMOUNT = 1 * 10 ** TOKEN.DECIMALS;

const PROGRAM_ID = '0x00';
const vftProgram = new Program(api, PROGRAM_ID);

const mintTokens = async () => {
  const mintTransaction = await vftProgram.vft
    .mint(accountAddress, TOKENS_AMOUNT)
    .withAccount(keyring)
    .calculateGas();

  const { response: mintResponse } = await mintTransaction.signAndSend();

  const mintResult = await mintResponse();

  return mintResult;
};

const transferTokens = async () => {
  const transferTransaction = await vftProgram.vft
    .transfer(aliceAccountAddress, TOKENS_AMOUNT)
    .withAccount(keyring)
    .calculateGas();

  const { response: transferResponse } =
    await transferTransaction.signAndSend();

  const transferResult = await transferResponse();

  return transferResult;
};

const getBalance = async () => {
  const queryResult = await vftProgram.vft.balanceOf(accountAddress);

  return queryResult;
};

const getAliceBalance = async () => {
  const queryResult = await vftProgram.vft.balanceOf(aliceAccountAddress);

  return queryResult;
};

const unsubscribe = vftProgram.vft.subscribeToTransferEvent(
  async ({ from, to, value }) => {
    if (
      from !== accountAddress ||
      to !== aliceAccountAddress ||
      value !== TOKENS_AMOUNT
    )
      return;

    const balance = await getBalance();
    const aliceBalance = await getAliceBalance();

    (await unsubscribe)();
  }
);
