import React from "react";

import { createQueryObject } from "../helpers/helper";
import style from "./sidbar.module.css";
import { sidbarCatgory } from "../constant/constant";

const Sidbar = ({ query, setQuery }) => {
  const caetegoryHandler = (event) => {
    const { tagName } = event.target;
    if (tagName == "LI") {
      const category = event.target.innerText.toLocaleLowerCase();
      setQuery((query) => createQueryObject(query, { category }));
    }
  };

  return (
    <>
      <div className={style.sidbar}>
        <p>Category</p>
        <ul onClick={caetegoryHandler}>
          {sidbarCatgory.map((item) => (
            <li
              key={item.id}
              className={
                query.category == item.type.toLocaleLowerCase()
                  ? style.activ
                  : null
              }
            >
              {item.type}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidbar;
