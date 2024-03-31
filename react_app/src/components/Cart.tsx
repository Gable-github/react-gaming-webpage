import React from "react";
import Like from "./Like";

interface Props {
  cartItems: string[];
  onClick: () => void;
}

const Cart = ({ cartItems, onClick }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClick}>Clear all items</button>
    </>
  );
};

export default Cart;
