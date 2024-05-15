const ProductW = (props) => {
  const { productImage, productName, price } = props.data;

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
        <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          +
        </button>
      </div>
    </div>
  );
};

export default ProductW;
