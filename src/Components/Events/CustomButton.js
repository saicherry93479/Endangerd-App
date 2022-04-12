import React from "react";
import "./CustomButton.css";
const CustomButton = ({ tex, clickHandler, refS }) => {
  return (
    <button onClick={clickHandler} className="customButton" ref={refS ?? refS}>
      <div className="inner">
        <i class="fa-solid fa-plus"></i>
      </div>
      {tex}
    </button>
  );
};

export default CustomButton;
