import { Button, CardList, Stack } from '@fuel-ui/react';
import { useState } from 'react';

import { AccountItem } from '../AccountItem';

import type { Account } from '~/systems/Account';

export type AccountListProps = {
  accounts: Account[];
};

export function AccountList({ accounts }: AccountListProps) {
  const [showHidden, setShowHidden] = useState(() => false);

  function toggle() {
    setShowHidden((s) => !s);
  }

  return (
    <Stack gap="$3">
      <CardList isClickable>
        {accounts.map((account) => {
          return (
            <AccountItem
              key={account.address}
              account={account}
              isHidden={!showHidden && account.isHidden}
            />
          );
        })}
      </CardList>
      <Button size="xs" color="gray" variant="link" onPress={toggle}>
        {showHidden ? 'Hide' : 'Show'} hidden accounts
      </Button>
    </Stack>
  );
}
