import React from "react";
import s from "./Price.module.scss";

export const Price = ({ setPrice, price }) => {
  const handleSelect = (i) => {
    if (price === i) {
      setPrice(null);
      isPriceSelected(null);
    } else {
      setPrice(i);
      isPriceSelected(i);
    }
  };

  const prices = ["10", "30", "50", "100"];

  const isPriceSelected = (value) => price === value;
  const highlight = {
    backgroundColor: "#43d5b0",
    boxShadow: "#43d5b0 0px 4px 0px",
  };

  return (
    <div className={s.wrapper}>
      <h3>Filter by Price</h3>
      <div className={s.priceContainer}>
        {prices.map((i, index) => (
          <div
            className={s.price}
            onClick={() => handleSelect(i)}
            style={isPriceSelected(i) ? highlight : null}
            key={index}
          >
            &lt;£{i}
          </div>
        ))}
      </div>
    </div>
  );
};
