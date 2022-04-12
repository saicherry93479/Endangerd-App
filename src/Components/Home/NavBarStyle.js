import styled from "styled-components";

export const NavItem = styled.div`
  /* background-color: yellow; */
  /* height: 15vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  padding-top: 50px;
  padding-bottom: 35px;
  cursor: pointer;
  transition: all 0.5s ease;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: grey;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: aliceblue;
  }
`;
export const NavTopParent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 60px;
  align-items: center;
  /* background-color: yellow; */
`;
export const NavUser = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
`;
export const NavParent = styled.div`
  display: flex;
  gap: 30px;

  /* background-color: red; */
  align-items: center;
`;

export const Menu = styled.div`
  background-color: white;
  position: absolute;
  top: 50px;
  left: -70px;
  border-radius: 10px;

  box-shadow: rgb(0 0 0 / 10%) 0px 5px 16px;
`;
export const MenuItem = styled.div`
  padding: 6px;
  padding-left: 20px;
  padding-right: 100px;
  &:nth-child(1) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:hover {
    background-color: var(--mainColor--);
  }
  cursor: pointer;
`;

export const MenuItemPara = styled.p`
  color: black;
`;

export const ProfileImage = styled.div`
  /* padding: 5px; */
  border: none;
  display: flex;
  height: 38px;
  width: 38px;
  /* background-color: red; */
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  &:hover {
    border: 0.4px solid var(--mainColor--);
  }
`;
