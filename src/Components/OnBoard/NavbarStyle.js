import styled from "styled-components";

// Styled component named StyledButton
const OnBoardNav = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  padding: 10px 60px;
  align-items: center;
  margin-top: 30px;
`;

const NavHeader = styled.h1`
  color: var(--mainColor--);
  font-family: "Concert One", cursive;
`;

const NavItem = styled.p`
  cursor: pointer;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 25%;
  /* background-color: green; */
`;

const SignInButton = styled.p`
  color: var(--mainColor--);
  font-weight: 700;
  cursor: pointer;
`;

export { OnBoardNav, NavHeader, NavItems, SignInButton, NavItem };
