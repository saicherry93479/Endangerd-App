import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUserDatabase, fireBaseSignUp } from "../Firebase/firebaseMethods";
import AuthButton from "./AuthButton";
import AuthIcon from "./AuthIcon";
import FormInput from "./FormInput";
import GoogleButton from "./GoogleButton";

import { LoginForm, LoginPageMain, PageError } from "./LoginPageStyle";
import { FormTail, signupvalidationChecker } from "./utils";

const SignUpPage = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const signUpHandler = async () => {
    console.log("clicked the signup button");
    const valid = signupvalidationChecker(email, password, username);
    if (valid === "sucess") {
      console.log("sucessfully verified in first level ");
      errors.splice(errors.indexOf(valid), 1);

      const firebaseOutlet = await fireBaseSignUp(email, password);
      if (firebaseOutlet === "sucess") {
        errors.splice(errors.indexOf(firebaseOutlet), 1);
        const databas = await addUserDatabase({ username: username });
        if (databas === "sucess") {
          setErrors([]);
          navigate("/home");
        } else {
          if (!errors.includes(databas)) {
            setErrors((p) => [...p, databas]);
          }
        }
      } else {
        if (!errors.includes(firebaseOutlet)) {
          setErrors((p) => [...p, firebaseOutlet]);
          console.log("error in firebase signup is ", errors);
        } else {
          console.log("alredy error present in firbase signup");
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

  return (
    <LoginPageMain signUp={true}>
      <AuthIcon icon={<i class="fa-solid fa-arrow-right"></i>} />
      <p
        style={{
          color: "rgba(0,0,0,0.6)",
          fontWeight: "bold",
          letterSpacing: "1.2px",
        }}
      >
        Let's Get Started
      </p>
      <LoginForm>
        <FormInput
          text={"Email"}
          dataInput={email}
          setDataInput={setEmail}
        ></FormInput>
        <FormInput
          text={"Username"}
          dataInput={username}
          setDataInput={setUsername}
        ></FormInput>
        <FormInput
          text={"Password"}
          typ={"password"}
          dataInput={password}
          setDataInput={setPassword}
        ></FormInput>
        <div style={{ margin: "20px 0px" }}>
          {errors.map((data, index) => (
            <PageError key={data}>
              <i class="fa-solid fa-xmark" style={{ color: "red" }}></i>
              <p style={{ fontSize: "12px", color: "black" }}>{data}</p>
            </PageError>
          ))}
        </div>
        <AuthButton text={"Sign Up"} clickHandler={signUpHandler} />
      </LoginForm>
      <FormTail
        head={"Already Have an Account?"}
        subHead="Sign In"
        to={"/signin"}
      />
      <p style={{ textAlign: "center", color: "rgba(0,0,0,0.6)" }}>or</p>
      <GoogleButton text="Sign Up with Google" />
    </LoginPageMain>
  );
};

export default SignUpPage;
