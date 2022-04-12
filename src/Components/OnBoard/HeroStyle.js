import styled from "styled-components";

const HeroMain = styled.div`
  /* background-color: red; */
  height: 85vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const HeroPara = styled.p`
  font-size: 60px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  width: 75%;
  text-align: center;
  letter-spacing: 1.1px;
`;
const HeroParaSpan = styled.span`
  font-weight: bold;
  font-size: ${(props) => (props.bg ? "20px" : "65px")};
  color: ${(props) =>
    props.bg
      ? "rgba(0, 0, 0, 0.5)"
      : props.color
      ? "var(--mainColor--)"
      : "rgba(0, 0, 0, 0.9)"};
  font-family: ${(props) =>
    props.bg ? "Fredericka the Great" : '"Concert One", cursive'};
`;

const HeroSecond = styled.div`
  /* background-color: red; */
  margin-top: 20px;
`;
const HeroSecondDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`;
const HeroCustomCircle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  background-color: var(--mainColor--);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const HeroInput = styled.input`
  outline: none;
  border: none;
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 16px;
  color: white;
  border-radius: 20px;
  width: 400px;
  padding: 15px 20px;
  font-size: 20px;
  color: var(--mainColor--);
  font-weight: 800;
  text-decoration: none;
`;
export {
  HeroMain,
  HeroPara,
  HeroParaSpan,
  HeroSecond,
  HeroSecondDiv,
  HeroInput,
  HeroCustomCircle,
};
