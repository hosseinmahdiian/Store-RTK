import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductsDetails } from "../context/productsProvider";

import { BiCategory } from "react-icons/bi";
import { IoPricetagOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

import style from "./Detailspage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import Loader from "../components/Loader";

const Detailspage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const details = useSelector((store) =>
    store.product.products.find((item) => item.id == +id)
  );
  console.log(details);
  
  if(!details ) return (<Loader/>)

  return (
    <>
      <h2>Details page </h2>
      <div className={style.container}>
        <div className={style.divImg}>
          <img className={style.img} src={details.image} alt={details.title} />
        </div>
        <div className={style.seccontainer}>
          <h3 className={style.title}>{details.title}</h3>
          <p className={style.dscription}>{details.description}</p>
          <div className={style.container}>
            <div>
              <span className={style.category}>
                <BiCategory />
                <p>{details.category}</p>
              </span>
              <br />
              <span className={style.price}>
                <IoPricetagOutline />
                <p>{details.price} $</p>
              </span>
            </div>
            <Link to="/products">
              <IoIosArrowBack />
              <span>Back to stor</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailspage;
