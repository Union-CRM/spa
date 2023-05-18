import styled, { css } from "styled-components";

// Div Father
export const ContainerCentral = styled.div`
  display: flex;
  justify-content: end;
  grid-row: 1;
  grid-column: 2;
  @media (min-width: 100px) and (max-width: 500px) {
    grid-column: 1;
    grid-row: 1;
    display: grid;
    position: relative;
    top: 0px;
    left: 0;
    justify-content: start;
  }
`;

// Div Title
export const DivHeader = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 40% 30%;
  grid-row: 1;
  margin: 7%;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 36px;
  width: 100%;
  grid-row: 1;
  @media (min-width: 50px) and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  grid-row: 2;
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
  width: 80%;
  height: 100%;
  display: grid;
  min-width: 400px;
  background: #fff;
  border-left: 16.56px solid #007bff;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  grid-template-rows: 10% 75% 10%;
  @media (min-width: 100px) and (max-width: 502px) {
    height: 81vh;
    width: 100%;
    flex-direction: flex-start;
    position: relative;
  }
`;

export const ContainerChildren = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  z-index: 1000;
  grid-row: 2;
`;

// Div Content

export const Form = styled.div`
  position: relative;
  display: grid;
  height: 100%;
  width: 93%;
  padding-left: 7%;
  grid-row: 2;
  grid-template-columns: 30% 70%;
  @media (min-width: 1600px) {
  }
`;

export const Input = styled.input`
  height: ${(props) => props.heightInput || "28px"};
  width: ${(props) => props.widthInput || "90%"};
  border-radius: 5px;
  border: 2px solid #888c95;
  background-color: ${(props) => props.backgroundInput || " rgba(0, 0, 0, 0) "};
  display: block;
  border: 2px solid ${(props) => (props.required ? "#b03535" : "#888C95")};
  @media (min-width: 1600px) {
  }
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`;

// Divs
<<<<<<< Updated upstream
=======

export const AlertaDate = styled.div`
 background-color: rgba(187, 30, 0, 1);
 border-radius:5px;
 padding:2px;
 height:fit-content;
 align-items:center;
 text-align:center;
 justify-content:center;
 span {
  color:#fff;
  text-align:center;
  font-size:0.9em;
 }

 `;

>>>>>>> Stashed changes
export const DivColumnOne = styled.div`
  grid-column: 1;
  display: grid;
`;

export const DivColumnTwo = styled.div`
  grid-column: 2;
  padding-left: 3%;
  display: grid;
  width: 89%;
`;

export const DivDate = styled.div`
  width: 93%;
  height: 100%;
  display: grid;
  padding-top: 2.5%;
`;

export const DivStart = styled.div`
  width: 93%;
  height: 100%;
  display: grid;
`;

export const DivFinish = styled.div`
  width: 93%;
  align-self: flex-end;
  flex: 0;
  display: flex;
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
  grid-row: 4;
`;

export const PositionButtonCancel = styled.div``;

export const ClickButton = styled.div`
  display: block;
`;

export const InputTime = styled.input`
  width: 100%;
  border-radius: 5px;
  height: 28px;
  border: 2px solid ${(props) => (props.required ? "#b03535" : "#888C95")};
  background-color: rgba(0, 0, 0, 0);
`;
