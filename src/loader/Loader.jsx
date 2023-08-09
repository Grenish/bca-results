import React from "react";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style.main}>
      <div className={style.typewriter}>
        <div className={style.slide}>
          <i></i>
        </div>
        <div className={style.paper}></div>
        <div className={style.keyboard}></div>
      </div>
      <div className="">Loading...</div>
    </div>
  );
};

export default Loader;
