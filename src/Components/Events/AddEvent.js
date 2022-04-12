import { async } from "@firebase/util";
import { click } from "@testing-library/user-event/dist/click";
import React, { useContext, useState } from "react";
import { userContext } from "../../App";
import AuthButton from "../Auth/AuthButton";
import { uplaodEvent } from "../Firebase/firebaseMethods";
import { HomeContext } from "../Home/HomePage";
import "./Add.css";
import CustomINputFile from "./CustomINputFile";
import CustomInput from "./Customs/CustomInput";
import EventButton from "./EventButton";
const AddEvent = ({ clickHandler }) => {
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [errors, setErrors] = useState([]);
  const { user } = useContext(userContext);

  const postEventHandler = async () => {
    console.log("clicked on post event handler ");
    console.log("username is ", user);
    console.log("values are ", title, " ", subTitle);
    if (!title || !subTitle || !photo) {
      console.log("first type error");
      if (!errors.includes("please enter all fields")) {
        setErrors((p) => [...p, "please enter all fields"]);
      }
    } else {
      if (errors.includes("please enter all fields")) {
        setErrors(errors.filter((data) => data !== "please enter all fields"));
      }
    }
    if (title.length < 6 || subTitle.length < 40) {
      console.log("second type error");
      if (!errors.includes("Title shoud >6 chars & Content should >40")) {
        setErrors((p) => [...p, "Title shoud >6 chars & Content should >40"]);
      }
    } else {
      console.log("no error ");
      if (errors.includes("Title shoud >6 chars & Content should >40")) {
        setErrors(
          errors.filter(
            (data) => data !== "Title shoud >6 chars & Content should >40"
          )
        );
        //   setErrors(a);
      }
    }

    // console.log("errors are ", errors);
    if (errors.length === 0) {
      setErrors([]);
      const data = {
        title: title,
        content: subTitle,
        file: photo,
        username: user.username,
      };
      const dataU = await uplaodEvent(data);
      if (dataU === "sucess") {
        console.log("sucessfully uploaded to db ");
        clickHandler();
      } else {
        console.log("not uploaded to ");
      }
    }
  };
  return (
    <div className="addTop">
      <div className="form addEvent">
        <div className="backForm" onClick={clickHandler}>
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <CustomInput header={"Title"} value={title} setValue={setTitle} />
        <CustomInput
          header={"Content"}
          type={"textarea"}
          value={subTitle}
          setValue={setSubTitle}
        />
        <div className="addFile">
          <h2>Add Photo</h2>
          <CustomINputFile photo={photo} setPhoto={setPhoto} />
        </div>
        <div className="errorFormTop">
          {errors.map((data, index) => (
            <div className="errorForm" key={index}>
              <i class="fa-solid fa-xmark" style={{ color: "crimson" }}></i>
              <p>{data}</p>
            </div>
          ))}
          <EventButton tex={"Post Event"} clickHandler={postEventHandler} />
        </div>
      </div>
    </div>
  );
};

// export const AddEventMemo = React.memo(AddEvent);
export default AddEvent;
