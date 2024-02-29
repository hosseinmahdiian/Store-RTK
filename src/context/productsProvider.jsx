import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../Servises/config";

const productContex = createContext();

const ProductsProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await api.get(`/products`);
        setProducts(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);
  return (
    <productContex.Provider value={Products}>{children}</productContex.Provider>
  );
};

const useProducts = () => {
  const products = useContext(productContex);
  return products;
};

const useProductsDetails = (id) => {
  const products = useContext(productContex);
  const result = products.find((item) => item.id == id);
  return result;
};

export default ProductsProvider;
export { useProducts, useProductsDetails };
