import { decodeAddress, GearApi } from '@gear-js/api';
import { Keyring } from '@polkadot/api';

import { Program } from './lib';

const VARA_TESTNET_ENDPOINT = 'wss://testnet.vara.network';
const api = await GearApi.create({ providerAddress: VARA_TESTNET_ENDPOINT });

const aliceKeyring = new Keyring({ type: 'sr25519' }).addFromUri('//Alice');
const bobKeyring = new Keyring({ type: 'sr25519' }).addFromUri('//Bob');
const aliceAccountAddress = decodeAddress(aliceKeyring.address);
const bobAccountAddress = decodeAddress(bobKeyring.address);

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
    .mint(aliceAccountAddress, TOKENS_AMOUNT)
    .withAccount(aliceKeyring)
    .calculateGas();

  const { response: mintResponse } = await mintTransaction.signAndSend();

  const mintResult = await mintResponse();

  return mintResult;
};

const transferTokens = async () => {
  const transferTransaction = await vftProgram.vft
    .transfer(bobAccountAddress, TOKENS_AMOUNT)
    .withAccount(aliceKeyring)
    .calculateGas();

  const { response: transferResponse } =
    await transferTransaction.signAndSend();

  const transferResult = await transferResponse();

  return transferResult;
};

const getAliceBalance = async () => {
  const queryResult = await vftProgram.vft.balanceOf(aliceAccountAddress);

  return queryResult;
};

const getBobBalance = async () => {
  const queryResult = await vftProgram.vft.balanceOf(bobAccountAddress);

  return queryResult;
};

const unsubscribe = vftProgram.vft.subscribeToTransferEvent(
  async ({ from, to, value }) => {
    if (
      from !== aliceAccountAddress ||
      to !== bobAccountAddress ||
      value !== TOKENS_AMOUNT
    )
      return;

    const aliceBalance = await getAliceBalance();
    const bobBalance = await getBobBalance();

    (await unsubscribe)();
  }
);
