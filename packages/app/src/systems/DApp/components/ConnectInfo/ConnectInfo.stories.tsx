import { Box } from '@fuel-ui/react';
import type { Story } from '@storybook/react';

import type { ConnectInfoProps } from './ConnectInfo';
import { ConnectInfo } from './ConnectInfo';

import { MOCK_ACCOUNTS } from '~/systems/Account';

export default {
  component: ConnectInfo,
  title: 'DApp/Components/ConnectInfo',
};

const URL = 'fuellabs.github.io/swayswap/';

export const Usage: Story<ConnectInfoProps> = (args) => (
  <Box css={{ width: 300 }}>
    <ConnectInfo {...args} url={URL} account={MOCK_ACCOUNTS[0]} />
  </Box>
);
