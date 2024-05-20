//  When clicking on the button, you should apply the 25% discount on the price
//	- Also background color must change (see CSS rules)
//	- Also  the comment text must change (No Discount => Discount !)
//	- Bonus : if discount applied, hide the button…
//
//  Tips: first listne to the button click and update your state accordingly, then use your state(s) to compute the different JSX outputs (color, text, visibility...)
import React from "react";
import { useState } from "react";

export default function App() {
  const [isDiscounted, setIsDiscounted] = useState(false);
  const [price, setPrice] = useState(100);
  function handleDiscount () {
      setIsDiscounted(true);
      setPrice(price * 0.75);
  }
  return (
    <div id="app" className={`${isDiscounted ? 'discount' : 'no-discount'}`}>
      <p>$ {price}</p>
      <p>{isDiscounted ? 'Discounted !' : 'No Discount' } </p>
      {!isDiscounted &&  <button onClick={handleDiscount}>  Apply Discount </button> } 
    </div>
  );
}
