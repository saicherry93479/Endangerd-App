import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import {
  fireBaseSignIn,
  getUser,
  signOutUser,
} from "../Firebase/firebaseMethods";
import AuthButton from "./AuthButton";
import AuthIcon from "./AuthIcon";
import FormInput from "./FormInput";
import GoogleButton from "./GoogleButton";
import { LoginForm, LoginPageMain, PageError } from "./LoginPageStyle";
import { FormTail, validationChecker } from "./utils";

const LoginPage = () => {
  // ########## states / variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user, setUser } = useContext(userContext);

  const navigate = useNavigate();

  // auth button in Login screne ################
  const loginHandler = async () => {
    console.log("clicked the button login");
    const valid = validationChecker(email, password);
    if (valid === "sucess") {
      console.log("sucessfully verified in first level ");
      errors.splice(errors.indexOf(valid), 1);

      const firebaseOutlet = await fireBaseSignIn(email, password);
      if (firebaseOutlet === "sucess") {
        setErrors([]);
        ErrorController(setUser, navigate);
        console.log("after this is ", user);

        navigate("/home");
      } else {
        if (!errors.includes(firebaseOutlet)) {
          setErrors((p) => [...p, firebaseOutlet]);
          console.log("error in firebase is ", errors);
        } else {
          console.log("alredy error present in firbase login");
        }
      }
    } else {
      if (!errors.includes(valid)) {
        setErrors((p) => [...p, valid]);
        console.log("error is ", valid);
      } else {
        console.log("alredy error present");
      }
    }
  };

  // #################### RENDER METHOD  ##############
  return (
    <LoginPageMain>
      <AuthIcon icon={<i class="fa-solid fa-unlock"></i>} />
      <GoogleButton text={"sign in with google"} />
      <p style={{ textAlign: "center", color: "rgba(0,0,0,0.6)" }}>or</p>

      <LoginForm>
        <FormInput
          text={"Email"}
          dataInput={email}
          setDataInput={setEmail}
        ></FormInput>
        <FormInput
          text={"Password"}
          dataInput={password}
          setDataInput={setPassword}
          typ="password"
        ></FormInput>
        <div style={{ margin: "20px 0px" }}>
          {errors.map((data, index) => (
            <PageError key={data}>
              <i class="fa-solid fa-xmark" style={{ color: "red" }}></i>
              <p style={{ fontSize: "12px", color: "black" }}>{data}</p>
            </PageError>
          ))}
        </div>
        <AuthButton text={"Sign In"} clickHandler={loginHandler} />
      </LoginForm>
      <FormTail
        head={"Don't Have an Account?"}
        subHead="Sign Up"
        to={"/signup"}
      />
    </LoginPageMain>
  );
};

export default LoginPage;

export const ErrorController = (setUser, navigate) => {
  const don = () =>
    signOutUser().then((res) => {
      if (res === "sucess") {
        navigate("/error", {
          state: {
            subTitle:
              "there is something went wrong with the database .please try after some time",
          },
        });
      }
    });
  getUser()
    .then((res) => {
      if (res !== "no document") {
        setUser((p) => ({ ...p, ...res }));
      } else {
        don();
      }
    })
    .catch((err) => {
      don();
    });
};
