import { useContext } from 'react';
import { PRODUCTSWOHMEN } from '../../data/productsWohmen';
import { ShopContext } from '../../context/shopContext';
import ProductW from '../../pages/shop/productWohmen';
import { ShopContextProps, CartItem } from '../../types/types';

const Cart: React.FC = () => {
  const context = useContext<ShopContextProps | null>(ShopContext);

  if (!context) {
    return null;
  }

  const { cartItems } = context;

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 m-10 rounded-full">
        {PRODUCTSWOHMEN.map((p) => {
          if (
            cartItems.some(
              (i: CartItem) => i && i.id === p.id && i.count > 0
            )
          ) {
            return <ProductW key={p.id} data={p} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Cart;
