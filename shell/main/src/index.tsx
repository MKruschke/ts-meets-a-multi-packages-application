import React from 'react';
import { Inventory } from '@dealer-central/inventory-app';
import { DealershipProvider } from '@dealer-central/dealership-contract';

const Shell: React.FC = () => (
  <DealershipProvider fallback={<div>Loading...</div>}>
    <Inventory />
  </DealershipProvider>
);

export { Shell };
