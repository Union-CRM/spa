import styled from "styled-components";

// Div Father
//ok
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
//ok
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
//ok
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

// Children
//ok
export const Container = styled.div`
  grid-row: 1;
  grid-column: 2;
  width: 80%;
  min-width: 300px;
  height: 81vh;
  background: #fff;
  display: grid;
  border-left: 16.56px solid #e41165;
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
//ok
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
//ok
export const Input = styled.input`
  height: ${(props) => props.heightInput || "28px"};
  width: ${(props) => props.widthInput || "100%"};
  border-radius: 5px;
  padding-left: 2%;
  border: 2px solid #888c95;
  background-color: ${(props) => props.backgroundInput || " rgba(0, 0, 0, 0) "};
  display: block;
  position: relative;

  @media (min-width: 1600px) {
    width: 40px;
  }
`;
//ok
export const Label = styled.label`
  padding-left: 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`;

// Divs
//ok
export const DivName = styled.div`
  grid-row: 1;
  width: 90%;
  height: 100%;
  display: grid;
`;
//ok
export const DivId = styled.div`
  width: 90%;
  height: 100%;
  grid-template-columns: 50% 50%;
  display: grid;
  grid-row: 2;
`;
//ok
export const DivEmail = styled.div`
  grid-row: 3;
  width: 90%;
  height: auto;
  display: grid;
`;
//ok
export const DivStatus = styled.div`
  grid-row: 4;
  width: 90%;
  height: auto;
  display: grid;
`;

// Button Save and Cancel
//ok
export const DivButton = styled.div`
  justify-content: center;
  display: grid;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-row: 3;
`;
//ok
export const PositionButtonCancel = styled.div``;
//ok
export const ClickButton = styled.div`
  display: block;
`;
