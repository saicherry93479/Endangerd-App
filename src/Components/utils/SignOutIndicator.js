import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SignOutIndicator = ({ subHeader }) => {
  const { state } = useLocation();
  useEffect(() => {
    console.log("eerror is ");
    console.log("state is ", state);
  }, []);

  return (
    <div className="signOutIndicator">
      <div>
        <h1>OOPS !</h1>

        <p>{subHeader ? subHeader : state.subTitle}</p>
        <button>Cintinue to HomePage</button>
      </div>
    </div>
  );
};

export default SignOutIndicator;
