import { readFileSync } from 'fs';

import { Program } from './lib';

const vftProgram = new Program(api);

const PROGRAM_ID =
  '0x69548a586ad7b83178ffdebfdd626236311f093e52589c9952aa40edec2e2d55';

const existingVftProgram = new Program(api, PROGRAM_ID);

const optWasmBuffer = readFileSync('./extended_vft.opt.wasm');

const uploadProgramTransaction = await vftProgram
  .newCtorFromCode(optWasmBuffer, TOKEN.NAME, TOKEN.SYMBOL, TOKEN.DECIMALS)
  .withAccount(aliceKeyring)
  .calculateGas();

const { response: uploadProgramResponse } =
  await uploadProgramTransaction.signAndSend();

await uploadProgramResponse();

const VFT_CODE_ID =
  '0xf7dba362cd66a35fb95c41b6a530ee287f013caecde32e4d8fa498a716913c3f';

const createProgramTransaction = vftProgram.newCtorFromCodeId(
  VFT_CODE_ID,
  TOKEN.NAME,
  TOKEN.SYMBOL,
  TOKEN.DECIMALS
);

const { response: createProgramResponse } =
  await createProgramTransaction.signAndSend();

await createProgramResponse();
