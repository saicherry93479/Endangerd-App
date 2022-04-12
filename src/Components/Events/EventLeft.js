import React, { useContext, useEffect, useRef, useState } from "react";

import CustomButton from "./CustomButton";
import "./EventLeft.css";
const EventLeft = ({ addEvent, addGroup, setAddEvent, setGroup }) => {
  const refOne = useRef(null);
  const refTwo = useRef(null);

  useEffect(() => {
    console.log("hey i am event left ");
    console.log("addevent and addGroup are ", addEvent, " ", addGroup);
  }, []);
  useEffect(() => {
    if (addEvent) {
      console.log("add evnt is true");
      refOne.current.style.backgroundColor = "var(--mainColor--)";
      refOne.current.style.color = "white";
    } else {
      console.log("addevent is false");
      refOne.current.style.backgroundColor = "aliceblue";
      refOne.current.style.color = "var(--mainColor--)";
    }
  }, [addEvent]);
  useEffect(() => {
    if (addGroup) {
      console.log("add group is true");
      refTwo.current.style.backgroundColor = "var(--mainColor--)";
      refTwo.current.style.color = "white";
    } else {
      console.log("add group is false");
      refTwo.current.style.backgroundColor = "aliceblue";
      refTwo.current.style.color = "var(--mainColor--)";
    }
  }, [addGroup]);
  const addEventHandler = (ref) => {
    console.log("addeventhandler is clicked ");
    if (ref === refOne) {
      setAddEvent((p) => !p);
      setGroup(false);
    }
    if (ref === refTwo) {
      setGroup((p) => !p);
      setAddEvent(false);
    }
  };

  //    ref.current.style.backgroundColor = "aliceblue";
  //    ref.current.style.color = "var(--mainColor--)";

  //      refs[index].current.style.backgroundColor = "var(--mainColor--)";
  //      refs[index].current.style.color = "white";
  return (
    <div className="eventLeft">
      <div>
        <CustomButton
          tex={"Add An Event"}
          clickHandler={() => addEventHandler(refOne)}
          refS={refOne}
        />
        <CustomButton
          tex={"Create  a Group"}
          clickHandler={() => addEventHandler(refTwo)}
          refS={refTwo}
        />
      </div>
      <div></div>
    </div>
  );
};

export default EventLeft;
