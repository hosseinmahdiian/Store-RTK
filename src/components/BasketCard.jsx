import React from "react";
import Counter from "./Counter";
import { useCart } from "../context/CartProvider";
import style from "./BasketCard.module.css";
import { shortText } from "../helpers/helper";
import { useDispatch } from "react-redux";

const BasketCard = ({ data }) => {
  const { image, quantity, title } = data;
  const dispatch = useDispatch()
  
  return (
    <>
      <div className={style.container}>
        <img src={image} alt={title} />
        <h3>{shortText(title)}</h3>
         <Counter data={data} quantity={quantity} dispatch={dispatch} />
      </div>
    </>
  );
};

export default BasketCard;
