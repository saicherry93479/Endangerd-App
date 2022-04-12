import styled from "styled-components";

const FooterMain = styled.div`
  display: flex;
  /* gap: 20px; */
  padding: 80px 60px;
  background-color: aliceblue;
  justify-content: space-around;
  align-items: flex-start;
`;

const FooterHeaderDiv = styled.div`
  flex-basis: 40%;
`;
const FooterDataDiv = styled.div``;
const FooterHeaderDivHeader = styled.h1`
  font-size: 45px;
  line-height: 60px;
  /* letter-spacing: 1.1px; */
  color: black;
`;

const FooterCustomText = styled.span`
  font-size: 45px;
  color: ${(props) => (props.color ? props.color : "black")};
`;

const FooterDataSubTitle = styled.p`
  font-size: 19px;
  color: black;
  font-weight: 400;
  margin: 5px 0px;
`;

export {
  FooterMain,
  FooterHeaderDiv,
  FooterDataDiv,
  FooterHeaderDivHeader,
  FooterCustomText,
  FooterDataSubTitle,
};
