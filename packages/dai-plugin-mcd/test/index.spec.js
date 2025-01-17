import { COL1 } from '../src';
import { mcdMaker } from './helpers';
import addresses from '../contracts/addresses/testnet.json';

let maker;

beforeAll(async () => {
  maker = await mcdMaker();
});

test('contract address mapping', async () => {
  const address = maker
    .service('smartContract')
    .getContractAddressByName('PIP_ETH');
  expect(address).toEqual(addresses.PIP_ETH);
});

test('contract address overrides', async () => {
  const addr1 = '0x520cca6e73540fa2d483232d7545ee8fadd8a23d';
  const addr2 = '0xa0b85e616f0e7997982d57b2d5984a994f657a8d';

  const maker2 = await mcdMaker({
    addressOverrides: { PIP_ETH: addr1, COL1: addr2 }
  });

  const scs = maker2.service('smartContract');
  expect(scs.getContractAddress('PIP_ETH')).toEqual(addr1);
  expect(() => {
    maker2.service('token').getToken('COL1');
  }).not.toThrowError();
});

test('COL1 token basic functionality', async () => {
  const token = maker.getToken('COL1');
  expect(token.address()).toEqual(addresses.COL1);
  expect(await token.balance()).toEqual(COL1(1000));
});
