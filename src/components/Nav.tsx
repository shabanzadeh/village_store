import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { AuthContext } from '../context/authContext';
import CarouselShop from './Carousel';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(ShopContext);
  const { currentUser } = useContext(AuthContext);
  const itemCount = cartItems.reduce((prev, current) => prev + current.count, 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onChangeLocale = (e) => {
    const { value } = e.target;
    console.log(value); // Hier können Sie die Funktionalität zum Ändern der Sprache hinzufügen
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-2">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select onChange={onChangeLocale} className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded">
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="fr">Français</option>
              <option value="fa">Persian</option>
              {/* Fügen Sie hier weitere Sprachen hinzu */}
            </select>
          </div>
          <Link to="/" className="text-gray-700">Home</Link>
          <Link to="/contact" className="text-gray-700">Contact</Link>
          <Link to="/cart" className="text-gray-700">
            Cart
            <span className="bg-red-500 text-white rounded-full px-2 ml-1">{itemCount}</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {currentUser ? (
            <>
              <span className="text-gray-700">Welcome, {currentUser.name || currentUser.email}</span>
              <Link to="/logout" className="text-gray-700">Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700">Login</Link>
              <Link to="/register" className="text-gray-700">Register</Link>
            </>
          )}
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700 hover:text-gray-900 hover:border-gray-900"
              onClick={toggleMenu}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`w-full block lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center">
          <Link to="/" className="block mt-4 text-gray-700">Home</Link>
          <Link to="/contact" className="block mt-4 text-gray-700">Contact</Link>
          <Link to="/cart" className="block mt-4 text-gray-700">
            Cart
            <span>{itemCount}</span>
          </Link>
          {currentUser ? (
            <>
              <span className="mt-4 text-gray-700">Welcome, {currentUser.name || currentUser.email}</span>
              <Link to="/logout" className="block mt-4 text-gray-700">Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="block mt-4 text-gray-700">Login</Link>
              <Link to="/register" className="block mt-4 text-gray-700">Register</Link>
            </>
          )}
        </div>
      </div>
      <div className="overflow-hidden flex items-center justify-center bg-cyan-600">
        <CarouselShop />
      </div>
    </nav>
  );
};

export default Nav;
