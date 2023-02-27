import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  background-color: #ffffff;
  border-left: 16.56px solid #007bff;
  border-radius: 8px;
  padding-left: 30px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-column: 2;
  right: 40px;
  bottom: 10px;
  grid-row: 1;
  position: relative;
`;

export const PositionTitle = styled.div`
  margin-left: 0px;
  margin-top: 25px;
`;

export const SpanTitle = styled.span`
  font-family: "Houschka Rounded Alt";
  font-style: normal;
  font-weight: 600;
  padding-left: 0px;
  font-size: 32px;
  line-height: 36px;
`;

export const NameClient = styled.div`
  margin-left: 4%;
  margin-bottom: 15px;
`;

export const SpanDiv = styled.div`
  margin-left: 44px;
`;

export const Span = styled.span`
  font-family: "Houschka Rounded Alt";
`;

export const TextBox = styled.textarea`
  width: 515px;
  height: 55px;
  border: 1px solid black;
  margin-left: 44px;
  margin-top: -10px;
  resize: none;
`;

export const Buttton = styled.div``;

export const SubTitle = styled.p`
  margin-left: 4%;
  margin-bottom: 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.8);
  margin-left: 0;
`;

export const DivButton = styled.div`
  justify-content: center;
  display: grid;
  width: 100%;
  margin-top: 25px;
`;

export const DivDouble = styled.div`
  justify-content: space-between;
  display: flex;
  width: 80%;
`;

export const DivSingle = styled.div`
  display: flex;
  justify-content: space-between;
`;
