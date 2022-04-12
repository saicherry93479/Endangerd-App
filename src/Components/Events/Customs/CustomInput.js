import React, { useEffect } from "react";
import "./CustomInput.css";
const CustomInput = ({ header, value, setValue, type }) => {
  useEffect(() => {
    console.log("Hey i am custom Input  ");
  }, []);
  //   useEffect(() => {
  //     console.log("value changes ", value);
  //   }, [value]);
  return (
    <div className="customInput">
      <h2>{header}</h2>
      {type === "textarea" ? (
        <textarea
          maxLength={400}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      ) : (
        <input
          type={type ? type : "text"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
};

export default React.memo(CustomInput);
