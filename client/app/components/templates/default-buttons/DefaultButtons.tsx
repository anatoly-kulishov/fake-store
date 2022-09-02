import React, { FC } from 'react';

import Button from '@/components/ui/button';

export const DefaultButtons: FC = () => {
  return (
    <>
      <h2 className="text-lg font-medium mb-3">Buttons</h2>
      <div className="flex child:mr-2">
        <Button appearance="primary">Primary</Button>
        <Button appearance="primary" arrow="down">
          Down
        </Button>
        <Button appearance="primary" arrow="right">
          Right
        </Button>
        <Button appearance="ghost">Ghost</Button>
        <Button appearance="warning">Warning</Button>
        <Button appearance="danger">Danger</Button>
      </div>
    </>
  );
};
