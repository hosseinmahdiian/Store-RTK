import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { ImAttachment } from "react-icons/im";
import { LuLoader } from "react-icons/lu";
import style from "./BasketSidbar.module.css";
import { useDispatch } from "react-redux";
import { checkOut } from "../features/cart/cartSlice";

const BasketSidbar = ({ state }) => {
  const dispatch = useDispatch()

    if (!state.itemsCounter) {
        return (
            <p>
                Empty
            </p>
        )
    }

  return (
    <>
      <div className={style.container}>
        <div>
          <RiMoneyDollarCircleLine />
          <p>Total:</p>
          <span>{state.total} $</span>
        </div>
        <div>
          <ImAttachment />
          <p>Quantity:</p>
          <span>{state.itemsCounter}</span>
        </div>
        <div>
          <LuLoader />
          <p>Status:</p>
          <span>Pendein...</span>
        </div>

        <button onClick={() =>dispatch(checkOut())}>Checkout</button>
      </div>
    </>
  );
};

export default BasketSidbar;
