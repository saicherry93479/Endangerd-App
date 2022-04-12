import React from "react";

const GoogleButton = ({ text, color = "aliceBlue" }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        display: "flex",
        borderRadius: "12px",
        gap: "30px",

        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px 20px",
        width: "30%",
      }}
    >
      <p style={{}}>{text}</p>
      <i
        class="fa-brands fa-google"
        style={{ color: "var(--mainColor--)", fontSize: "20px" }}
      ></i>
    </div>
  );
};

export default GoogleButton;
