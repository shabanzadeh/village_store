import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Shop from "./pages/shop/Shop.js";
import Cart from "./pages/cart/Cart.js";
import Nav from "./components/Nav.js";
import WohmenDress from "./pages/wohmenDress/wohmenDress.js";
import KidDress from "./pages/kidDress/kidDress.js";
import Kitchen from "./pages/kitchen/kitchen.tsx";
import Error from "./components/Error.js";
import Login from "./login/login.js";
import { ShopContextProvider } from "./context/shopContext.js";
import { AuthContext, AuthContextProvider } from "./context/authContext.js";
import { useContext } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Contact from "./components/Contact.tsx";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <AuthContextProvider>
      <ShopContextProvider>
        <Router>
          <Nav />
          <ErrorBoundary>
            <Routes>
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Shop categoryName="" categoryImage="" categoryLink="" />
                  </RequireAuth>
                }
              />
              <Route
                path="/wohmenDress"
                element={
                  <RequireAuth>
                    <WohmenDress />
                  </RequireAuth>
                }
              />

              <Route
                path="/childDress"
                element={
                  <RequireAuth>
                    <KidDress />
                  </RequireAuth>
                }
              />

              <Route
                path="/cart"
                element={
                  <RequireAuth>
                    <Cart />
                  </RequireAuth>
                }
              />
              <Route path="/kitchen" element={<Kitchen />}/>

              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </ErrorBoundary>
        </Router>
      </ShopContextProvider>
    </AuthContextProvider>
  );
}

export default App;
