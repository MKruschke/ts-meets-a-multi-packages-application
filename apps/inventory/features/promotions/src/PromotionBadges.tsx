import React from 'react';

export enum PromotionType {
  TopAd = 'TopAd',
}

export type Promotion = {
  active: boolean;
  type: PromotionType;
};

const PromotionBadges: React.FC<{ promotions: Promotion[] }> = ({
  promotions,
}) => (
  <div>
    {promotions.map((promos) => (
      <span key={promos.type} className={promos.active ? 'active' : ''}>
        {promos.type}
      </span>
    ))}
  </div>
);

export { PromotionBadges };
