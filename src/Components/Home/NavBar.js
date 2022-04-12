import { map } from "@firebase/util";
import React, {
  createRef,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import profile from "./../../Assets/Images/profile.png";

import { userContext } from "../../App";
import { NavHeader } from "../OnBoard/NavbarStyle";
import {
  Menu,
  MenuItem,
  MenuItemPara,
  NavItem,
  NavParent,
  NavTopParent,
  NavUser,
  ProfileImage,
} from "./NavBarStyle";
import { signOutUser } from "../Firebase/firebaseMethods";
import { useNavigate } from "react-router-dom";

const data = ["profile", "Events", "Adoptions", "More"];
const NavBar = ({ currentIndex, setCurrentIndex }) => {
  const navigate = useNavigate();
  const [displayMenu, setDisplayMenu] = useState(false);
  const { user } = useContext(userContext);

  const myRefs = useRef([]);
  myRefs.current = data.map(
    (element, i) => myRefs.current[i] ?? createRef(null)
  );
  useLayoutEffect(() => {
    console.log("user is ", user);
    myRefs.current[1].current.style.background = "var(--mainColor--)";
    myRefs.current[1].current.style.color = "white";
  }, []);
  const clickHandler = (index) => {
    data.forEach((value, inde) => {
      if (inde === index) {
        console.log("index is ", inde);
        setCurrentIndex(inde);
        myRefs.current[inde].current.style.background = "var(--mainColor--)";
        myRefs.current[inde].current.style.color = "white";
      } else {
        myRefs.current[inde].current.style.background = "transparent";
        myRefs.current[inde].current.style.color = "grey";
      }
    });
  };
  const mouseHandler = (inde) => {
    if (inde !== currentIndex) {
      myRefs.current[inde].current.style.background = "aliceblue";
    }
  };
  const mouseOut = (inde) => {
    if (inde !== currentIndex) {
      myRefs.current[inde].current.style.background = "transparent";
    }
  };
  return (
    <NavTopParent>
      <NavParent>
        <NavHeader>En Dangered</NavHeader>
        {data.map((value, index) => (
          <NavItem
            key={index}
            ref={myRefs.current[index]}
            onClick={() => clickHandler(index)}
            onMouseOver={() => mouseHandler(index)}
            onMouseOut={() => mouseOut(index)}
          >
            {value}
          </NavItem>
        ))}
      </NavParent>
      <NavUser>
        <ProfileImage>
          <img
            onClick={() => setDisplayMenu((p) => !p)}
            src={profile}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></img>
        </ProfileImage>
        <p>{user.username}</p>
        {displayMenu ? (
          <Menu>
            <MenuItem>
              <MenuItemPara>Events</MenuItemPara>
            </MenuItem>
            <MenuItem>
              <MenuItemPara>Profile</MenuItemPara>
            </MenuItem>
            <MenuItem>
              <MenuItemPara>Adoptions</MenuItemPara>
            </MenuItem>
            <MenuItem
              onClick={async () => {
                await signOutUser();
                navigate("/");
              }}
            >
              <MenuItemPara>Logout</MenuItemPara>
            </MenuItem>
          </Menu>
        ) : null}
      </NavUser>
    </NavTopParent>
  );
};

export default NavBar;
