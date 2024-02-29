import React from "react";
import { IoIosSearch } from "react-icons/io";
import { createQueryObject } from "../helpers/helper";
import style from "./seachBox.module.css";

const SeachBox = ({ setQuery, search, setSearch, query }) => {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
    setSearch(query.search);
  };

  return (
    <>
      <div className={style.search}>
        <input
          type="text"
          placeholder="search..."
          value={search}
          onChange={(i) => {
            setSearch(i.target.value.toLocaleLowerCase());
          }}
        />

        <button onClick={searchHandler}>
          <IoIosSearch />
        </button>
      </div>
    </>
  );
};

export default SeachBox;
