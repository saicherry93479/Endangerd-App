import { setLogLevel } from "firebase/app";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import LoadingPage from "../utils/LoadingPage";
import { auth } from "../Firebase/firebase";
import { getUser, signOutUser } from "../Firebase/firebaseMethods";

import Footer from "./Footer";
import Happening from "./Happening";
import Hero from "./Hero";
import { OnBoard } from "./HomeStyle";
import Navbar from "./Navbar";
import { ErrorController } from "../Auth/LoginPage";

const Home = () => {
  const navigate = useNavigate();

  const { user, setUser, loading, setLoading } = useContext(userContext);
  useEffect(() => {
    console.log("in useefeect in onboard");

    authState();
  }, []);
  useEffect(() => {
    if (user.logedIn) {
      console.log("user is loogged in true see ", user.logedIn);
      ErrorController(setUser, navigate);
      navigate("/home");
      setLoading(false);
    }
  }, [user.logedIn]);

  const authState = async () => {
    onAuthStateChanged(auth, (userOne) => {
      console.log("user in authstate is ", userOne);
      if (userOne) {
        console.log("yes present at ");
        setUser({ logedIn: true });
      } else {
        console.log("user not present");
        setUser({ logedIn: false });
        setLoading(false);
      }
    });
  };

  return (
    <>
      {loading ? (
        <LoadingPage></LoadingPage>
      ) : (
        <OnBoard>
          <Navbar></Navbar>
          <Hero />
          <Happening />
          <Footer />
        </OnBoard>
      )}
    </>
  );
};

export default Home;
