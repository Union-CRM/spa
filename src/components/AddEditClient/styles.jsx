import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  height: 88vh;
  grid-template-rows: 80% 20%;
  display: grid;
  background-color: #fff;
  border-left: 16.56px solid #007bff;
  border-radius: 8px;
  padding-left: 0px;
  padding-right: 0px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  grid-column: 2;
  right: 35px;
  bottom: 10px;
  grid-row: 1;
  z-index: 99;
  position: relative;
`;

export const DivFather = styled.div`
  margin-left: 0px;
  position: relative;
  left: 40px;
  margin-top: 25px;
  grid-row: 1;
`;

export const PositionTitle = styled.div`
  margin-left: 0px;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const ClickButton = styled.div``;

export const DivButton = styled.div`
  justify-content: center;
  display: grid;
  margin-right: 25px;
  margin-top: 25px;
  line-height: 70px;
  grid-row: 2;
`;

export const DivDouble = styled.div`
  width: 92.5%;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const DivSingle = styled.div`
  grid-column: 2;
  display: grid;
`;

export const DivTag = styled.div`
  z-index: 5;
  margin-bottom: 35px;
  width: 86.5%;
  max-height: 50px;
`;

export const DivDivisor = styled.div`
  grid-column: 1;
  display: grid;
  width: 30%;
`;
