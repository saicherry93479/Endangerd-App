import React from "react";

const AuthButton = ({
  text,
  color = "var(--mainColor--)",
  texColor = "white",
  weight = "400",
  clickHandler,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
        padding: "10px",
        borderRadius: "10px",
        marginTop: "20px",
        cursor: "pointer",
      }}
      onClick={clickHandler}
    >
      <p
        style={{ color: texColor, fontWeight: weight, letterSpacing: "1.2px" }}
      >
        {text}
      </p>
    </div>
  );
};

export default AuthButton;
