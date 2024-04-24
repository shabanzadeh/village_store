import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";

const Shop = ()=>{
    return(
        <ul>
            <li>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
            </li>
        </ul>
    )
}

export default Shop;