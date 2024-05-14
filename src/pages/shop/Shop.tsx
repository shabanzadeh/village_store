import { Link } from "react-router-dom";
import menImage from "../../assets/men.jpeg"
import kidImage from "../../assets/kid.jpeg"
import womenImage from "../../assets/wohmen.jpeg"
import stationeryImage from "../../assets/stationery.jpeg"
import toysImage from "../../assets/toys.jpg"
import kitchenImage from "../../assets/kitchen.jpg"
import cosmeticsImage from "../../assets/cosmetic.jpg"


const Shop = () => {
    const categories = [
        { name: "Men", image: menImage, link: "/menDress" },
        { name: "Kids", image: kidImage, link: "/kidDress" },
        { name: "Women", image: womenImage, link: "/womenDress" },
        { name: "Stationery", image: stationeryImage, link: "/stationery" },
        { name: "Toys", image: toysImage, link: "/toys" },
        {name: "Kitchen", image: kitchenImage, link: "/kitchen"},
        {name: "Cosmetics",image: cosmeticsImage, link: "/cosmetic"}
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
                <div key={index} className="m-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <Link to={category.link}>
                        <img src={category.image} alt={category.name} className="w-40 h-40 sm:w-64 md:w-64 lg:w-40" />
                        <div className="text-center mt-2">{category.name}</div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Shop;