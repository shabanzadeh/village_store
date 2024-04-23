import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/wohmanDress"></Route>
          <Route path="menDress"></Route>
          <Route path="childDress"></Route>
          <Route path="plasticItems"></Route>
          <Route path="stantionery"></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
