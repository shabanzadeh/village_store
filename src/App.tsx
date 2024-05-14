import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/Shop.js";
import Cart from "./pages/cart/Cart.js";
import Nav from "./components/Nav.js"


function App() {
  return (
    <>
    <Router>
      < Nav />
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path= "/wohmenDress" ></Route>
        <Route path = "/menDress"></Route>
        <Route path="/childDress"></Route>
        <Route path ="/plasticItem"></Route>
        <Route path ="/stantionery"></Route>
        <Route path="/cart" element={ < Cart />
        }></Route>
      </Routes>
    </Router>
   
    </>
  );
}

export default App;
