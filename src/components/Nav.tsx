import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-2">
        <div className="flex items-center justify-between w-full">
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link to="/" className="text-gray-700">Home</Link>
            <Link to="/about" className="text-gray-700">About</Link>
            <Link to="/login" className="text-gray-700">Login</Link>
          </div>
          <div className="text-center flex-grow">
            <div className="text-center h-20 pt-6 text-gray-800 text-xl font-semibold">
              Village Store
            </div>
          </div>
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
        <div className={`w-full block lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-center">
            <Link to="/" className="block mt-4 text-gray-700">Home</Link>
            <Link to="/about" className="block mt-4 text-gray-700">About</Link>
            <Link to="/login" className="block mt-4 text-gray-700">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
