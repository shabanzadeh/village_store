import { useContext } from 'react';
import {ItemProps, ShopContextProps} from '../../types/types'
import { ShopContext } from '../../context/shopContext';
import { count } from 'firebase/firestore';



const ProductW = (props: ItemProps) => {
  const { id, productImage, productName, price } = props.data;
  const {cartItems, addToCart, removeFromCart } = useContext<ShopContextProps | null>(ShopContext);
  const isThere = cartItems.some((item: number)=>item.id ===id)
  

  return (
    <div className="gap-4 p-4 bg-white rounded-lg shadow-md">
      <img
        src={productImage}
        alt={productName}
        className="w-full h-auto object-contain"
      />
      <div className="flex flex-col justify-center items-center">
        <h5 className="text-center font-semibold">{productName}</h5>
        <p className="text-center">Price: {price}</p>
        <div>
        <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded h-9 mr-1" onClick={() => addToCart(id)}>+
        
        </button>
        <span>{cartItems?.filter((row: ItemProps)=>row.id===id)[0]?.count} </span> 
        
       {isThere && <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded ml-1 h-9 w-7" onClick={() => removeFromCart(id)}> - </button>}
        </div>
      </div>
    </div>
  );
};

export default ProductW;
