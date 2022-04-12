import React, { useState } from "react";
import styled from "styled-components";
const FormInput = ({ text, dataInput, setDataInput, typ }) => {
  return (
    <FormDiv>
      <FormHead>{text}</FormHead>
      <FormInputDiv
        type={typ ? typ : "text"}
        value={dataInput}
        onChange={(e) => setDataInput(e.target.value)}
      ></FormInputDiv>
    </FormDiv>
  );
};

const FormDiv = styled.div``;
const FormHead = styled.p`
  font-size: 15px;
  letter-spacing: 1.2px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 10px;
  margin-top: 10px;
`;
const FormInputDiv = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.6);
  outline: none;
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.7);
`;

export default FormInput;
