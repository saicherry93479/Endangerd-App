import React from "react";
import "./EventButton.css";
const EventButton = ({ tex, clickHandler }) => {
  return (
    <div className="eventButton">
      <button onClick={clickHandler}>{tex}</button>
    </div>
  );
};

export default EventButton;
