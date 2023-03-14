import styled, { css } from "styled-components";

// Div Father
export const ContainerCentral = styled.div`
  justify-content: end;
  display: flex;
  grid-row: 1;
  @media (min-width: 100px) and (max-width: 500px) {
    grid-column: 1;
    display: grid;
    position: relative;
    top: 0px;
    left: 0;
    justify-content: start;
  }
`;

// Div Title
export const PositionTitle = styled.div`
  margin-left: 0px;
  height: 100%;
  grid-row: 1;
  display: grid;
  grid-template-columns: 80% 20%;
  @media (min-width: 50px) and (max-width: 500px) {
    display: grid;
    grid-template-columns: 70% 10%;
  }
`;

export const H1 = styled.h1`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  display: flex;
  height: 100%;
  align-items: center;
  width: 100%;
  padding-left: 9%;
  padding-top: 2%;
  grid-column: 1;
  @media (min-width: 50px) and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

/// Button Close

export const DivClose = styled.div`
  align-items: center;
  display: grid;
  width: 50%;
  @media (min-width: 50px) and (max-width: 500px) {
  }
`;

export const Close = styled.button`
  background-color: #2b2b2b;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  display: grid;
  width: 100%;
  height: 20px;
  :hover {
    opacity: 0.8;
  }
`;

// Children

export const Container = styled.div`
  grid-row: 1;
  grid-column: 2;
  width: 85%;
  min-width: 300px;
  height: 81vh;
  background: #fff;
  display: grid;
  border-left: 16.56px solid #007bff;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  grid-template-rows: 10% 75% 15%;
  @media (min-width: 100px) and (max-width: 502px) {
    height: 81vh;
    width: 100%;
    flex-direction: flex-start;
    position: relative;
  }
`;

// Div Content

export const Form = styled.div`
  position: relative;
  display: grid;
  height: 100%;
  width: 93%;
  padding-left: 7%;
  grid-row: 2;
  grid-template-rows: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;
  @media (min-width: 1600px) {
  }
`;

export const Input = styled.input`
  height: ${(props) => props.heightInput || "28px"};
  width: ${(props) => props.widthInput || "100%"};
  border-radius: 5px;
  border: 2px solid #888c95;
  background-color: ${(props) => props.backgroundInput || " rgba(0, 0, 0, 0) "};
  display: block;
  position: relative;

  @media (min-width: 1600px) {
    width: 40px;
  }
`;

export const Label = styled.label`
  padding-left: 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`;

// Divs

export const DivName = styled.div`
  grid-row: 1;
  width: 90%;
  height: 100%;
  display: grid;
`;

export const DivEmail = styled.div`
  width: 90%;
  height: 100%;
  grid-template-columns: 50% 50%;
  display: grid;
  grid-row: 2;
`;

export const DivCustomer = styled.div`
  grid-row: 3;
  width: 90%;
  height: auto;
  display: grid;
`;

export const DivBusiness = styled.div`
  grid-row: 4;
  width: 90%;
  height: auto;
  display: grid;
`;

export const DivRelease = styled.div`
  grid-row: 5;
  width: 90%;
  height: auto;
  display: grid;
`;

export const DivTag = styled.div`
  grid-row: 6;
  width: 90%;
  height: auto;
  display: grid;
`;

export const DivStatus = styled.div`
  grid-row: 7;
  width: 90%;
  height: auto;
  display: grid;
`;

// Button Save and Cancel

export const DivButton = styled.div`
  justify-content: center;
  display: grid;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-row: 3;
`;

export const PositionButtonCancel = styled.div``;

export const ClickButton = styled.div`
  display: block;
`;
