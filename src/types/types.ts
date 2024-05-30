export type ItemProps = {
    id: number
    count: number
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

