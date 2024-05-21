import React from "react";
import s from "./Sidebar.module.scss";

export const Sidebar = ({ children }) => {
  return (
    <div className={s.container}>
      <h2>Filters</h2>
      {children}
    </div>
  );
};
