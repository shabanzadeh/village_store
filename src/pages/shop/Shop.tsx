import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";


const Shop = ()=>{
    return(
        <div>
            
                <div className="m-4 rounded-full bg-gray-100 w-20 h-20 flex items-center justify-center">
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link >
                </div >
                <div className="m-4 rounded-full bg-gray-100 w-20 h-20 flex items-center justify-center">
                    <Link to="/wohmenDress">

                    </Link>
                </div>
                </div>
            
        
    )
}

export default Shop;