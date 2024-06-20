export type ItemProps = {
  id: number;
  count: number;
  itemId: number;
  data: {
    id: number;
    productName: string;
    price: number;
    productImage: string;
    count: number;
  };
};

export type ShopContextProps = {
  cartItems: ItemProps[];
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  sendWhatsAppMessage: (productName: string) => void;
};

export type ShopContextProviderProps = {
  children: React.ReactNode;
};

export type ShopPropsInterface = {
  categoryName: string;
  categoryImage: string;
  categoryLink: string;
};

export type User = {
  id: string;
  name: string;
  address: string;
  county: string;
  city: string;
  password: string;
  email: string;
};

export type AuthAction =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" };

export type AuthState = {
  currentUser: User | null;
};
