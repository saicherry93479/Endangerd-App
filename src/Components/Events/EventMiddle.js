import React, { useContext, useEffect } from "react";
import { HomeContext } from "../Home/HomePage";
import "./EventMiddle.css";
import Post from "./Post.js";
const EventMiddle = () => {
  const { events, setEvents } = useContext(HomeContext);
  useEffect(() => {
    // console.log("events are ", events);
  }, []);
  return (
    <div className="eventMiddle">
      {events.map((data) => (
        <Post data={data}></Post>
      ))}
    </div>
  );
};

export default EventMiddle;
