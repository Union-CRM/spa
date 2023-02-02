import styled from "styled-components";

//Inputs
export const SelectOptions = styled.div`
  height: 38px;
  width: 240px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 5px;
  margin-top: 0px;
  grid-row: 2;
  grid-column: 2;
`;

export const Select = styled.select`
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0);
  margin-top: 0px;
  grid-row: 2;
`;

export const InputDouble = styled.input`
  height: 35px;
  width: 240px;
  border-radius: 5px;
  border: 0.3px solid #d9d9d9;
  background-color: rgba(0, 0, 0, 0);
  display: block;
  grid-row: 2;
  grid-column: 1;
  padding-left: 10px;
`;

export const Input = styled.input`
  height: 35px;
  width: 500px;
  border-radius: 5px;
  border: 0.3px solid #d9d9d9;
  background-color: rgba(0, 0, 0, 0);
  display: block;
  justify-content: space-between;
  padding-left: 10px;
  position: relative;
`;

//Divs and containers

export const Container = styled.div`
  box-sizing: border-box;
  width: auto;
  height: auto;
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, 0);
`;

export const Box = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  left: 0px;
  align-items: center;
`;

// Titles Labels

export const Label = styled.label`
  font-style: normal;
  margin-top: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.8);
`;

// Div Select
export const SelectDiv = styled.input`
  top: 40px;
  width: auto;
  height: auto;
  border-radius: 5px;
  border: 0.3px solid #d9d9d9;
  background-color: rgba(0, 0, 0, 0);
`;
