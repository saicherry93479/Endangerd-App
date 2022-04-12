import styled from "styled-components";

const LoginPageMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: relative;
  /* background-color: red; */

  min-height: ${(props) => (props.signUp ? "100vh" : "80vh")};
  max-height: 100vh;
`;

const LoginForm = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 16px;
  color: white;
  width: 30%;
  padding: 20px 30px;
  height: max-content;
`;

const PageError = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  margin-left: 10px;
`;

export { LoginPageMain, LoginForm, PageError };
