import React, { useState, useEffect } from 'react';
import { PromotionBadges } from '@dealer-central/promotion-feature';
import { useDealerShipContext } from '@dealer-central/dealership-contract';
const Inventory: React.FC<{}> = () => {
  const [inventoryItems /*, setInventoryItems*/] = useState([]);
  const dealershipContext = useDealerShipContext();
  useEffect(() => {
    // fetch()
  }, [
    dealershipContext === null || dealershipContext === void 0
      ? void 0
      : dealershipContext.activeDealership,
  ]);
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
//# sourceMappingURL=Inventory.jsx.map
