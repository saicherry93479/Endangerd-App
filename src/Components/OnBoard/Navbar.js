import React from "react";
import { useNavigate } from "react-router-dom";

import {
  NavHeader,
  NavItem,
  NavItems,
  OnBoardNav,
  SignInButton,
} from "./NavbarStyle";
const Navbar = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/signin");
  };
  return (
    <OnBoardNav>
      <NavHeader>En Dangerd</NavHeader>
      <NavItems>
        <NavItem>Explore</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>About</NavItem>
      </NavItems>
      <SignInButton onClick={clickHandler}>Sign In</SignInButton>
    </OnBoardNav>
  );
};

export default Navbar;
