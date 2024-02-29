import React from "react";

import { PiShoppingBagLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import style from "./Layout.module.css";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const state = useSelector((store) => store.cart);
  // console.log(state);

  return (
    <>
      <header className={style.header}>
        <Link to="products">Stor</Link>
        <Link to="CheckoutPage">
          <PiShoppingBagLight />{" "}
          {!!state.itemsCounter > 0 && <span>{state.itemsCounter}</span>}
        </Link>
      </header>

      {children}

      <footer className={style.footer}>
        <p>Develop by Hossein M.Z</p>
      </footer>
    </>
  );
};

export default Layout;
