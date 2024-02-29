// import { useCart } from "../context/CartProvider";
import BasketCard from "../components/BasketCard";

import style from "./CheckoutPage.module.css";
import BasketSidbar from "../components/BasketSidbar";
import { useSelector } from "react-redux";

const CheckoutPage = () => {

  const state = useSelector(store => store.cart)
  // console.log(state);

  return (
    <>
      <h2>Checkout Page</h2>
       <div className={style.container}>
        <div>
          <BasketSidbar state={state}  />
        </div>

        <div>
          {state.selectedItems.map((data) => (
            <BasketCard data={data} />
          ))}
        </div> 
      </div> 
    </>
  );
};

export default CheckoutPage;
