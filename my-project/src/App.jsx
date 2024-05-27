import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {} from "react-router-dom";

import Navbar2 from "./navbar/Navbar2.jsx";
import Vegetable from "./Products/Vegetable.jsx";
import Exotic from "./Products/Exotic.jsx";
import Herbal from "./Products/Herbal.jsx";
import SignIn from "./login page/SignIn.jsx";
import Cart from "./Cart/Cart.jsx";
import SignUp from "./login page/SignUp.jsx";
import Footer from "./Footer/Footer.jsx";
import Flower from "./Products/Flower.jsx";
import GrowBags from "./Products/GrowBags.jsx";
import FriutSeed from "./Products/FruitSeed.jsx";
import MicroGreen from "./Products/MicroGreen.jsx";

import Nav from "./navbar/nav.jsx";
import Home from "./Products/Home.jsx";
import axios from "axios";
import { useEffect } from "react";
import LogOut from "./login page/LogOut.jsx";
import CheckOut from "./Cart/CheckOut.jsx";


function App() {
  const [cart, setCart] = useState([]);
  const addNow = (data, name, url, price) => {
    setCart([...cart, { ...data, name, quantity: 1 }]);
    axios.post("http://localhost:4000/AddtoCart", {
      productName: name,
      productUrl: url,
      productPrice: price,
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/AddtoCart")
      .then((res) => setCart.json(res.cart))
      .catch((err) => console.log(err));
  }, [cart]);

  const remove = (index) => {
    const updatedtask = [...cart];
    updatedtask.splice(index, 1);
    setCart(updatedtask);
  };

  /* const value={
      cartItems,
      isLogin,
      addNow,
      remove,
    }*/

  return (
    <div>
      <BrowserRouter>
        <Navbar2 count={cart.length} />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home cart={cart} addNow={addNow} />} />
          <Route
            path="/Vegetable"
            element={<Vegetable cart={cart} addNow={addNow} />}
          />
          <Route
            path="/Exotic"
            element={<Exotic cart={cart} addNow={addNow} />}
          />
          <Route
            path="/Herbal"
            element={<Herbal cart={cart} addNow={addNow} />}
          />
          <Route
            path="/Flower"
            element={<Flower cart={cart} addNow={addNow} />}
          />
          <Route
            path="/GrowBags"
            element={<GrowBags cart={cart} addNow={addNow} />}
          />
          <Route
            path="/FruitSeed"
            element={<FriutSeed cart={cart} addNow={addNow} />}
          />
          <Route
            path="/MicroGreen"
            element={<MicroGreen cart={cart} addNow={addNow} />}
          />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/LogOut" element={<LogOut />} />

          <Route path="/cart" element={<Cart cart={cart} remove={remove} />} />
          <Route path="/CheckOut" element={<CheckOut/>}/>
         
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
