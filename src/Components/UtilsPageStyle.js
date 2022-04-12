import styled, { keyframes } from "styled-components";

const LoadingPage = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.9);

  width: 100vw;
  height: 100vh;
`;

const LoadingAnimation = keyframes`
0%{
    transform: rotate(0deg);
}
100%{
    transform: rotate(100deg);
}
`;

const LoadingText = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  border: 1.5px solid green;
  border-bottom-color: transparent;
  border-right-color: transparent;
  animation-name: ${LoadingAnimation};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
`;

export { LoadingPage, LoadingText };
