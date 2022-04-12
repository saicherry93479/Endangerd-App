import { Link } from "react-router-dom";
import { fireBaseSignIn } from "../Firebase/firebaseMethods";

export const validationChecker = (email, password) => {
  if (email.length < 6 || password.length < 6) {
    return "Min characters Should be 6";
  }
  return "sucess";
};

// ############# FRomTAILcomponnet
export const FormTail = ({ head, subHead, to }) => {
  return (
    <p>
      {head}
      <Link
        to={to}
        style={{ color: "var(--mainColor--) ", marginLeft: "10px" }}
      >
        {subHead}
      </Link>
    </p>
  );
};

// signup validation checker

export const signupvalidationChecker = (email, password, username) => {
  if (email.length < 6 || password.length < 6 || username.length < 6) {
    return "Min characters Should be 6";
  }
  return "sucess";
};
