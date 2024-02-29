import { PropagateLoader } from "react-spinners";

import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style.loder}>
      <PropagateLoader
        color="#fe4d42"
        cssOverride={{}}
        size={15}
        speedMultiplier={2}
      />
    </div>
  );
};

export default Loader;
