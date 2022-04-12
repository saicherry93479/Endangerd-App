import React, { useEffect } from "react";
import "./LoadingPage.css";
const LoadingPage = () => {
  useEffect(() => {
    console.log("in the loading page ");
  }, []);
  return (
    <div className="loadingPage">
      <h1>Loading .....</h1>
    </div>
  );
};

export default LoadingPage;
