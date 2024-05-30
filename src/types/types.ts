export type ItemProps = {
    id: number
    count: number
    itemId: number
    datta:{
    id: number,
    productName: string,
    price: number,
    productImage: string,
    count: number
    }
}

export type ShopContextProps={
    cartItems: ItemProps[],
    addToCart: (itemId: number) => void
    removeFromCart: (itemId: number) => void
}

export type ShopContextProviderProps = {
    children: React.ReactNode,
  
   
}
export type ShopPropsInterface = {
    categoryName: string;
    categoryImage: string;
    categoryLink: string;
  };
