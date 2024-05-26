import { Link } from "react-router-dom";
import menImage from "../../assets/men.jpeg";
import kidImage from "../../assets/kid.jpeg";
import womenImage from "../../assets/wohmen.jpeg";
import stationeryImage from "../../assets/stationery.jpeg";
import toysImage from "../../assets/toys.jpg";
import kitchenImage from "../../assets/kitchen.jpg";
import cosmeticsImage from "../../assets/cosmetic.jpg";

type ShopPropsInterface = {
  categoryName: string;
  categoryImage: string;
  categoryLink: string;
};
const Shop = ({}: ShopPropsInterface) => {
  const categoriesList = [
    { categoryName: "Men", categoryImage: menImage, categoryLink: "/menDress" },
    {
      categoryName: "Kids",
      categoryImage: kidImage,
      categoryLink: "/kidDress",
    },
    {
      categoryName: "Women",
      categoryImage: womenImage,
      categoryLink: "/wohmenDress",
    },
    {
      categoryName: "Stationery",
      categoryImage: stationeryImage,
      categoryLink: "/stationery",
    },
    { categoryName: "Toys", categoryImage: toysImage, categoryLink: "/toys" },
    {
      categoryName: "Kitchen",
      categoryImage: kitchenImage,
      categoryLink: "/kitchen",
    },
    {
      categoryName: "Cosmetics",
      categoryImage: cosmeticsImage,
      categoryLink: "/cosmetic",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {categoriesList.map(
        ({ categoryName, categoryImage, categoryLink }, index) => (
          <Link key={index} to={categoryLink}>
            <div className="m-4 rounded-full bg-gray-100 flex items-center justify-center">
              <img
                src={categoryImage}
                alt={categoryName}
                className="w-40 h-40 sm:w-64 md:w-64 lg:w-40"
              />
              <div className="text-center mt-2">{categoryName}</div>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default Shop;
