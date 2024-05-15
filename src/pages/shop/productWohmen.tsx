const ProductW = (props) => {
  const { id, productImage, productName, price } = props.data;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <img
        className="w-full h-full sm:w-full md:w-full lg:w-full xl:w-full"
        src={productImage}
        alt={productName}
      />
     <h5> {productName}</h5>
     <p>price:  {price}</p>
     <button>+</button>
     
    </div>
  );
};

export default ProductW;
