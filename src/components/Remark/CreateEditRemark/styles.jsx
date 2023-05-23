import styled from "styled-components";

// Div Father
export const ContainerCentral = styled.div`
  justify-content: end;
  display: flex;
  grid-row: 1;
  @media (min-width: 100px) and (max-width: 590px) {
    grid-column: 1;
    grid-row: 1;
    display: grid;
    position: absolute;
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

// Children

export const Container = styled.div`
  grid-column: 2;
  width: 80%;
  min-width: 350px;
  height: 100%;
  background: #fff;
  display: grid;
  border-left: 16.56px solid #007bff;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  grid-template-rows: 10% 70% 20%;
  
  @media (width: 500px) {
    height: 82vh;
    width: 375px;
    flex-direction: flex-start;
    position: relative;
  }
  @media (min-width: 1355px) and (max-width: 1824px) {
    width: 80%;
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
  grid-template-rows: 14.2% 14.2% 14.2% 14.2% 14.2% 29%;
  @media (min-width: 1355px) and (max-width: 1824px) {
    width: 93%;
    height: 100%;
  }
  @media (min-width: 1824px) and (max-width: 2000px) {
    width: 95%;
  }
`;

export const Input = styled.input`
  height: ${(props) => props.heightInput || "28px"};
  width: ${(props) => props.widthInput || "100%"};
  border-radius: 5px;
  border: 2px solid ${(props) => (props.required ? "#b03535" : "#888C95")};
  background-color: ${(props) => props.backgroundInput || " rgba(0, 0, 0, 0) "};
  display: block;
  position: relative;
  padding-left: 2%;
  @media (min-width: 1355px) and (max-width: 1824px) {
    height: 25px;
  }
`;

export const TextArea = styled.textarea`
  height: ${(props) => props.heightInput || "60px"};
  width: ${(props) => props.widthInput || "100%"};
  border-radius: 5px;
  border: 2px solid ${(props) => (props.required ? "#b03535" : "#888C95")};
  background-color: ${(props) => props.backgroundInput || " rgba(0, 0, 0, 0) "};
  display: block;
  resize: none;
  padding-left: 2%;
  position: relative;
  @media (min-width: 1355px) and (max-width: 1824px) {
    height: 60px;
  }
  @media (min-width: 1824px) and (max-width: 2000px) {
    height: 100px;
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
export const DivTitle = styled.div`
  grid-row: 1;
  width: 90%;
  height: 100%;
  display: grid;
`;
export const DivName = styled.div`
  grid-row: 2;
  width: 90%;
  height: 100%;
  display: grid;
`;

export const DivBusiness = styled.div`
  grid-row: 3;
  grid-template-columns: 50% 50%;
  width: 90%;
  height: 100%;
  display: grid;
`;

export const DivEmail = styled.div`
  grid-row: 4;
  grid-template-columns: 50% 50%;
  width: 90%;
  height: 100%;
  display: grid;
`;

export const DivDescription = styled.div`
  grid-row: 6;
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
  @media (650px) {
    
  }
  @media (min-width: 1355px) and (max-width: 1824px) {
    position: relative;
    height: 100%;
  }
  @media (min-width: 1824px) and (max-width: 2000px) {
    height: 85%;
  }
`;

export const PositionButtonCancel = styled.div` display:flex;
justify-content: center;
position: relative;
align-items: center;`;

export const ClickButton = styled.div`
  display:flex;
  justify-content: center;
  position: relative;
  align-items: center;
`;

export const DivDate = styled.div`
  display: block;
  flex-direction: column;
  width: 100%;
`;
export const DivDateAll = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
`;

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