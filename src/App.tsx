import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/Shop.js";
import Cart from "./pages/cart/Cart.js";
import Nav from "./components/Nav.js"
import WohmenDress from './pages/wohmenDress/wohmenDress.js'
import KidDress from "./pages/kidDress/kidDress.js";



function App() {
  return (
    <>
    <Router>
     <Nav />
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path= "/wohmenDress" element={< WohmenDress />} ></Route>
        <Route path = "/menDress"></Route>
        <Route path="/childDress" element = {< KidDress />}></Route>
        <Route path ="/plasticItem"></Route>
        <Route path ="/stantionery"></Route>
        <Route path="/cart" element={ < Cart />
        }></Route>
        <Route  path="*" element ={< Error/>}></Route>
      </Routes>
    </Router>
   
    </>
  );
}

export default App;
