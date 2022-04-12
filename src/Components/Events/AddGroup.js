import React, { useState } from "react";
import "./Add.css";
import CustomINputFile from "./CustomINputFile";
import CustomInput from "./Customs/CustomInput";
import EventButton from "./EventButton";
const AddGroup = ({ clickHandler }) => {
  const [photo, setPhoto] = useState(null);
  const [groupname, setGroupName] = useState("");
  const [grouptag, setGroupTag] = useState("");

  return (
    <div className="addTop">
      <div className="form addGroup">
        <div className="backForm" onClick={clickHandler}>
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <CustomInput
          header={"Group Name"}
          value={groupname}
          setValue={setGroupName}
        />
        <CustomInput
          header={"Group Tags"}
          value={grouptag}
          setValue={setGroupTag}
        />
        <div className="addFile">
          <h2>Group Icon</h2>
          <CustomINputFile photo={photo} setPhoto={setPhoto} />
        </div>
        <EventButton tex={"Create Group"} clickHandler={() => {}} />
      </div>
    </div>
  );
};

export default AddGroup;
