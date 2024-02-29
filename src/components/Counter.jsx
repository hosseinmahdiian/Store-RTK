import React from "react";

import style from "./Counter.module.css";
import { MdOutlineDelete } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";
import {
  addItem,
  decrease,
  increase,
  removItem,
} from "../features/cart/cartSlice";

const Counter = ({ dispatch, data, quantity }) => {
  return (
    <>
      <div className={style.action}>
        <div>
          {quantity == 1 ? (
            <button onClick={() => dispatch(removItem(data))}>
              <MdOutlineDelete />
            </button>
          ) : (
            quantity > 1 && (
              <button onClick={() => dispatch(decrease(data))}>-</button>
            )
          )}

          {!!quantity > 0 && <p>{quantity}</p>}

          {quantity == 0 ? (
            <button onClick={() => dispatch(addItem(data))}>
              <IoBagAddOutline />
            </button>
          ) : (
            <button onClick={() => dispatch(increase(data))}>+</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Counter;
