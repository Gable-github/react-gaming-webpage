import React, { useState } from "react";
import produce from "immer";
import { set } from "immer/dist/internal";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const handleOnClick = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClick={handleOnClick} />
    </div>
  );
}

export default App;
