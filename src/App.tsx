import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Shop from "./pages/shop/Shop.js";
import Cart from "./pages/cart/Cart.js";
import Nav from "./components/Nav.js"
import WohmenDress from './pages/wohmenDress/wohmenDress.js'
import KidDress from "./pages/kidDress/kidDress.js";
import Error from "./components/Error.js"
import Login from "./login/login.js";
import { ShopContextProvider } from "./context/shopContext.js";


function App() {
  const currentUser = true;
  const RequireAuth = ({childern}): void=>{
    return currentUser ?(childern):(<Navigate to ="/login"/>);

  }

  return (
    <>
    <ShopContextProvider>
    <Router>
     <Nav />
      <Routes>
        <Route path="/" element={<RequireAuth ><Shop categoryName={""} categoryImage={""} categoryLink={""} /> </RequireAuth>}></Route>
        <Route path= "/wohmenDress" element={<RequireAuth>< WohmenDress /> </RequireAuth>} ></Route>
        <Route path = "/menDress"></Route>
        <Route path="/childDress" element = {<RequireAuth>< KidDress /></RequireAuth>}></Route>
        <Route path ="/plasticItem"></Route>
        <Route path ="/stantionery"></Route>
        <Route path="/cart" element={<RequireAuth> < Cart /></RequireAuth>
        }></Route>
        <Route path="/profile/:username?"></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route  path="*" element ={< Error/>}></Route>
      </Routes>
    </Router>
    </ShopContextProvider>
    </>
  );
}

export default App;
