
import React, { createContext, useState } from 'react';
import { ItemProps, ShopContextProps, ShopContextProviderProps } from '../types/types';

export const ShopContext = createContext<ShopContextProps | null>(null);

export const ShopContextProvider: React.FC<ShopContextProviderProps> = (props) => {
  const [cartItems, setCartsItems] = useState<ItemProps[]>([]);
  const sendWhatsAppMessage = (productName: string) => {
    const phone = '15901367047'; 
    const msg = encodeURIComponent(`Hello, a user has selected the product: ${productName}`);
    const href = `https://wa.me/${phone}/?text=${msg}`;
    window.open(href, '_blank');
  };

  const addToCart = (itemId: number) : any=> {
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
        return { ...item, count: item.count===0 ? 0:item.count - 1 };
     
      } else {
        return item;
      }
    }));
  };

  const clearCart = () => {
    setCartsItems([]);
  };

  const contextValue: ShopContextProps = { cartItems, addToCart, removeFromCart, sendWhatsAppMessage, clearCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
