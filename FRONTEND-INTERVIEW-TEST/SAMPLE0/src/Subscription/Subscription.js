import React, { useState } from "react";
import s from "./Subscription.module.scss";

export const Subscription = ({ setSubscription, subscription }) => {
  const [highlighted, setHighlighted] = useState(false);
  const handleSelect = () => {
    if (subscription === "true") {
      setSubscription(null);
      setHighlighted(false);
    } else {
      setSubscription("true");
      setHighlighted(true);
    }
  };

  const highlight = {
    backgroundColor: "#43d5b0",
    boxShadow: "#43d5b0 0px 4px 0px",
  };

  return (
    <div className={s.wrapper}>
      <h3>Filter by Subscription</h3>
      <div className={s.subscriptionContainer}>
        <span
          className={s.subscription}
          style={highlighted ? highlight : null}
          onClick={() => handleSelect()}
        >
          Subscription
        </span>
      </div>
    </div>
  );
};
