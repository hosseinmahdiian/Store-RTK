import { BiDetail } from "react-icons/bi";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { productsQuantity, shortText } from "../helpers/helper";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";
// import { useCart } from "../context/CartProvider";

const Card = ({ data }) => {
  const { id, image, title, price } = data;
  const state = useSelector((store) => store.cart);
  const quantity = productsQuantity(state, id);
  const dispatch =useDispatch()

  return (
    <>
      <div className={style.card}>
        <img src={image} alt="img" />
        <h3>{shortText(title)}</h3>
        <p>{price}$</p>

        <div className={style.details}>
          <Link to={`/Products/${data.id}`}>
            <BiDetail />
          </Link>

          <Counter data={data} quantity={quantity} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
};

export default Card;
