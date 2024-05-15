
import {PRODUCTSWOHMEN} from '../../data/productsWohmen';
import ProductW from '../shop/productWohmen'

const WohmenDress = () => {
  return (
    <div className="m-4 rounded-full bg-gray-100 flex items-center justify-center">
     {PRODUCTSWOHMEN.map((productData)=>{
      return (<><ProductW data={productData} /></>)

     })}
    </div>
  );
};

export default WohmenDress;
