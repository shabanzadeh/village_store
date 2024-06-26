
import { PRODUCTSWOHMEN } from '../../data/productsWohmen';
import ProductAll from '../shop/productAll';

const WohmenDress = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 m-10 rounded-full">
     {PRODUCTSWOHMEN.map((productData)=>{
      return (<><ProductAll data={productData} /></>)

     })}
    </div>
  );
};

export default WohmenDress;
