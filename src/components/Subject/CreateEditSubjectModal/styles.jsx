import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 88vh;
  grid-template-rows: 80% 20%;
  display: grid;
  background-color: #ffffff;
  border-left: 19px solid #007bff;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  display: grid;

  height: 100%;
  width: 93%;
  padding-left: 7%;
  grid-row: 2;
  grid-template-rows: 14.2% 14.2% 14.2% 14.2% 14.2% 29%;
  @media (min-width: 1355px) and (max-width: 1824px) {
    width: 95%;
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
  border: 2px solid #888c95;
  background-color: ${(props) => props.backgroundInput || " rgba(0, 0, 0, 0) "};
  display: block;
  position: relative;
  padding-left: 2%;
  @media (min-width: 1355px) and (max-width: 1824px) {
    height: 25px;
  }

`;

export const DivFather = styled.div`
  margin-left: 0px;
  position: relative;
  left: 40px;
  margin-top: 25px;
  grid-row: 1;
`;


export const DivSubject = styled.div`
  grid-row: 4;
  width: 90%;
  height: auto;
  display: grid;
`;

export const DivStatus = styled.div`
  grid-row: 5;
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

export const PositionTitle = styled.div`
  margin-bottom: 25px;

`;

export const PositionButtonSave = styled.div`
  margin-left: 122px;
  line-height: 70px;
`;
export const PositionButtonCancel = styled.div`
  margin-left: 122px;
`;
