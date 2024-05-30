
import React, { createContext, useState } from 'react';
import { ItemProps, ShopContextProps, ShopContextProviderProps } from '../types/types';

export const ShopContext = createContext<ShopContextProps | null>(null);

export const ShopContextProvider: React.FC<ShopContextProviderProps> = (props) => {
  const [cartItems, setCartsItems] = useState<ItemProps[]>([]);

  const addToCart = (itemId: number) => {
    if(!cartItems?.find((item) => item.id === itemId))
    setCartsItems([...cartItems, { id: itemId, count: 1 }])
    else
    setCartsItems(cartItems.map((item)=>{

      if(item.id === itemId)
      return {...item, count:item.count+1}}))

  };

  const removeFromCart = (itemId: number) => {
    setCartsItems(cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, count: item.count - 1 };
      } else {
        return item;
      }
    }));
  };

  const contextValue: ShopContextProps = { cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
