import React, {ReactNode, createContext, useState} from 'react';
import {DataProp} from '../data/data';

export type FavoriteContextType = {
  favoritedItems: DataProp[];
  setFavoritedItems: React.Dispatch<React.SetStateAction<DataProp[]>>;
  handleAddItemToFavorite: (item: DataProp) => void;
  handleRemoveItemFromFavorite: (id: number) => void;
};
export const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined,
);
type FavoriteProviderChildrenProp = {
  children: ReactNode;
};

const FavoriteProvider: React.FC<FavoriteProviderChildrenProp> = ({
  children,
}) => {
  const [favoritedItems, setFavoritedItems] = useState<DataProp[]>([]);

  const handleAddItemToFavorite = (item: DataProp): void => {
    setFavoritedItems([...favoritedItems, item]);
  };

  const handleRemoveItemFromFavorite = (id: number): void => {
    let itemToremove = favoritedItems.filter(item => item.id !== id);
    setFavoritedItems(itemToremove);
  };

  const FavoriteContextValue: FavoriteContextType = {
    favoritedItems,
    setFavoritedItems,
    handleAddItemToFavorite,
    handleRemoveItemFromFavorite,
  };
  return (
    <FavoriteContext.Provider value={FavoriteContextValue}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
