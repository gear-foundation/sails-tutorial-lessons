import { decodeAddress, GearApi } from '@gear-js/api';
import { Keyring } from '@polkadot/api';

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
