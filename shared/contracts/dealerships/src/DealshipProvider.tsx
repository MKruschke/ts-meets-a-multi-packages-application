import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useMemo,
} from 'react';

type DealerShip = {
  id: string;
  name: string;
};

type DealerShips = {
  activeDealership: DealerShip;
  dealershipList: DealerShip[];
};

type DealerShipsContract = DealerShips & {
  changeDealerShip: (dealership: DealerShip) => void;
};

const Context = createContext<DealerShipsContract | undefined>(undefined);

const DealershipProvider: React.FC<{
  fallback: React.ReactNode;
}> = ({ fallback = null, children }) => {
  const [dealerShips, setDealerShips] = useState<DealerShips | undefined>(
    undefined
  );
  useEffect(() => {
    // fake fetch dealerships for current user via api
    setTimeout(() => {
      setDealerShips({
        activeDealership: { id: 'some-uuid', name: 'Dealership 1' },
        dealershipList: [{ id: 'some-uuid-2', name: 'Dealership 2' }],
      });
    }, 500);
  }, []);

  const value = useMemo(
    (): DealerShipsContract | undefined =>
      dealerShips
        ? {
            ...dealerShips,
            changeDealerShip: (dealerShip: DealerShip): void => {
              // add a function to switch the dealership
            },
          }
        : undefined,
    [dealerShips]
  );

  return (
    <Context.Provider value={value}>
      {value ? children : fallback}
    </Context.Provider>
  );
};

const useDealerShipContext = () => useContext(Context);

export { DealershipProvider, useDealerShipContext };
