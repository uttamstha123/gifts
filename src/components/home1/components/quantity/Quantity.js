import React, { useState } from "react";
import { BsPlusLg, BsDashLg } from "react-icons/bs";
import "./quantity.css";
const Quantity = () => {
  const [qty, setQty] = useState(0);
  function increment() {
    setQty((val) => val + 1);
  }
  function decrement() {
    if (qty > 0 ) setQty((val) => val - 1);
  }
  return (
    <div className="quantity">
      <BsDashLg onClick={decrement} />
      <span>{qty}</span>
      <BsPlusLg onClick={increment} />
    </div>
  );
};

export default Quantity;
