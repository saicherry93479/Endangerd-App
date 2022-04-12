import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AddEvent, { AddEventMemo } from "./AddEvent";
import AddGroup from "./AddGroup";
import "./Event.css";
import EventLeft from "./EventLeft";
import EventMiddle from "./EventMiddle";
import EventRight from "./EventRight";
const Event = () => {
  const [addEvent, setAddEvent] = useState(false);
  const [addGroup, setGroup] = useState(false);
  useEffect(() => {
    console.log("hey i am evnet");
    console.log("addEvent and addgroup are ", addEvent, " ", addGroup);
  }, []);
  const navigate = useNavigate();

  const backHandler = () => {
    setAddEvent(false);
    setGroup(false);
  };

  return (
    <div className="eventTop">
      <EventLeft
        addEvent={addEvent}
        addGroup={addGroup}
        setAddEvent={setAddEvent}
        setGroup={setGroup}
      />
      {addEvent ? (
        <AddEvent clickHandler={backHandler} />
      ) : addGroup ? (
        <AddGroup clickHandler={backHandler}></AddGroup>
      ) : (
        <>
          <EventMiddle />
          <EventRight />
        </>
      )}
    </div>
  );
};

export default Event;
