import { bn } from 'fuels';

import { ASSET_LIST } from '../utils';

export const MOCK_ASSETS = ASSET_LIST.map((item) => ({
  assetId: item.assetId,
  amount: bn(14563943834),
}));

export const MOCK_ASSETS_AMOUNTS = ASSET_LIST.map((item, idx) => ({
  assetId: item.assetId,
  amount: bn(idx % 2 === 0 ? 14563943834 : -14563943834),
}));
