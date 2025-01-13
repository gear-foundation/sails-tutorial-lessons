import { decodeAddress, GearApi } from '@gear-js/api';
import { Keyring } from '@polkadot/api';
import { mnemonicGenerate } from '@polkadot/util-crypto';

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
