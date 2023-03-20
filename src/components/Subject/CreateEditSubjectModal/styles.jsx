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
`;

export const DivFather = styled.div`
  margin-left: 0px;
  position: relative;
  left: 40px;
  margin-top: 25px;
  grid-row: 1;
`;

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
