// components/Login.js
import React, { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api/firebase";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { ShopContext } from '../context/shopContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const shopContext = useContext(ShopContext);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          id: user.uid,
          email: user.email,
          name: user.displayName || "User" 
        };
        dispatch({ type: "LOGIN", payload: userData });
        localStorage.setItem("user", JSON.stringify(userData));
        if (shopContext) {
          shopContext.clearCart();  // Leert den Warenkorb beim Anmelden
        }
        console.log("User logged in: ", userData);
        navigate("/");
      })
      .catch((error) => {
        setError(true);
        console.error("Error logging in: ", error.code, error.message);
      });
  };

  return (
    <div className="flex overflow-hidden justify-center items-center py-40">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Sign In
          </button>
        </div>
        {error && <span className="text-red-500 mt-2 font-size-10">Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default Login;
