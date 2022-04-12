import React from "react";

const CustomINputFile = ({ photo, setPhoto }) => {
  return (
    <div>
      {photo ? (
        <>
          <p>{photo.name}</p>{" "}
          <button onClick={() => setPhoto(null)}>Cancel</button>
        </>
      ) : (
        <input
          type={"file"}
          accept=".png,.jpeg,.jpg"
          onChange={(e) => {
            setPhoto(e.target.files[0]);
          }}
        ></input>
      )}
    </div>
  );
};

export default CustomINputFile;
