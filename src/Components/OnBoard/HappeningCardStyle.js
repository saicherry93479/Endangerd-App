import styled from "styled-components";

const HappeningCardMain = styled.div`
  width: 31%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 340px;
  padding: 30px 20px;

  box-shadow: rgb(0 0 0 / 8%) 0px 5px 16px;
  border-radius: 8px;
  border-top: 8px solid
    ${(props) => (props.color ? props.color : "var(--mainColor--)")};
`;
export { HappeningCardMain };
