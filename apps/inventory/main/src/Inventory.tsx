import React, { useState, useEffect } from 'react';
import { PromotionBadges, Promotion } from '@dealer-central/promotion-feature';
import { useDealerShipContext } from '@dealer-central/dealership-contract';
type InventoryItem = {
  id: string;
  title: string;
  promotions: Promotion[];
};

const Inventory: React.FC = () => {
  const [inventoryItems /*, setInventoryItems*/] = useState<InventoryItem[]>(
    []
  );
  const dealershipContext = useDealerShipContext();

  useEffect(() => {
    // fetch()
  }, [dealershipContext?.activeDealership]);
  return (
    <ul>
      {inventoryItems.map((item) => (
        <li key={item.id}>
          <div>{item.title}</div>
          <div>
            <PromotionBadges promotions={item.promotions} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export { Inventory };
