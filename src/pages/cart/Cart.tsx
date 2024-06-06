import { useContext } from 'react';
import { ShopContext } from '../../context/shopContext';
import { PORODUCTSKITCHEN } from '../../data/productkitchen';
import { PRODUCTSWOHMEN } from '../../data/productsWohmen';
import { PORODUCTSCOSMETIC } from '../../data/productCosmetics';
import { ItemProps, ShopContextProps } from '../../types/types';
import ProductAll from '../shop/productAll';

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
              (i: ItemProps) => i && i.id === p.id && i.count > 0
            )
          ) {
            return <ProductAll key={p.id} data={p} />;
          }
          return null;
        })}
        {PORODUCTSKITCHEN.map((p)=>{
          if(
            cartItems.some(
              (i: ItemProps)=>i && i.id === p.id && i.count>0

            )
          )
          return <ProductAll key={p.id } data = {p} />
        })}
        {PORODUCTSCOSMETIC.map((p)=>{
          if(
            cartItems.some(
              (i: ItemProps)=>i && i.id === p.id && i.count>0

            )
          )
          return <ProductAll key={p.id } data = {p} />
        })}

        <div>
      
        </div>
      </div>
    </div>
  );
};

export default Cart;
