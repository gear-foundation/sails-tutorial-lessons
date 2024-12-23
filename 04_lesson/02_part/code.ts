import { decodeAddress, GearApi } from '@gear-js/api';
import { Keyring } from '@polkadot/api';
import { readFileSync } from 'fs';

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

const uploadProgram = async () => {
  const vftProgram = new Program(api);
  const optWasmBuffer = readFileSync('./extended_vft.opt.wasm');

  const uploadProgramTransaction = await vftProgram
    .newCtorFromCode(optWasmBuffer, TOKEN.NAME, TOKEN.SYMBOL, TOKEN.DECIMALS)
    .withAccount(aliceKeyring)
    .calculateGas();

  const { response: uploadProgramResponse } =
    await uploadProgramTransaction.signAndSend();

  await uploadProgramResponse();

  return vftProgram.programId;
};

const createProgram = async () => {
  const vftProgram = new Program(api);
  const CODE_ID = '0x00';

  const createProgramTransaction = await vftProgram
    .newCtorFromCodeId(CODE_ID, TOKEN.NAME, TOKEN.SYMBOL, TOKEN.DECIMALS)
    .withAccount(aliceKeyring)
    .calculateGas();

  const { response: createProgramResponse } =
    await createProgramTransaction.signAndSend();

  await createProgramResponse();

  return vftProgram.programId;
};

const PROGRAM_ID = '0x00';
const vftProgram = new Program(api, PROGRAM_ID);
