import styled, { css } from "styled-components";

export const BoardStyle = styled.div`
  height: 780px;
  width: 700px;
  display: grid;
  align-content: flex-start;
  background: rgba(255, 255, 255, 0.8);
  position: relative;
  grid-template-columns: 48% 48%;
  margin-top: 20px;
  grid-row: 2;
  margin-right: 500px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const IconTag = styled.span`
  padding-bottom: 10px;
  color: #fff;
`;

export const H1 = styled.h1`
  width: auto;
  font-family: "Houschka Rounded Alt";
  font-size: 24px;
  height: auto;
  font-style: normal;
  border-bottom: 2px solid #007bff;
  font-weight: 600;
  line-height: 28px;
  margin-top: 10px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 9% 91%;
  width: 110%;
  z-index: 1;
  height: 830px;
  align-content: flex-start;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  margin-top: 64px;
  margin-right: 0px;
  border-radius: 8px;
  position: relative;
  margin-top: -10px;
`;

export const Header = styled.div`
  margin-bottom: 20px;
  margin-left: 25px;
  width: 41%;
  height: 100px;
  display: grid;
  grid-template-columns: 50% 20% 30%;
  grid-template-rows: 50% 50%;
  grid-row: 1;
  position: fixed;
  z-index: 999;
  background-color: #ffffff;
`;
export const Active = styled.span`
  font-family: "Houschka Rounded Alt";
  font-size: 14px;
  font-weight: 600;
  color: #525b75;
  line-height: 16px;
`;
export const DivSpans = styled.div`
  margin-top: 10px;
  display: flex;
  grid-column: 1;
  grid-row: 2;
`;
export const Inactive = styled.div`
  font-family: "Houschka Rounded Alt";
  font-size: 14px;
  font-weight: 600;
  color: #525b75;
  line-height: 16px;
`;
export const DivButton = styled.div`
  margin-top: 10%;
  margin-right: 1.5%;
  display: grid;
  grid-column: 3;
  grid-row: 1;
  flex-direction: reverse;
`;

export const Top = styled.div`
  display: flex;
  margin-left: 0px;
`;

export const HowManyActive = styled.span`
  color: #00953b;
`;
export const HowManyInactive = styled.span`
  color: #7a7a7a;
`;
export const HowManySubjectList = styled.span`
  color: #525b75;
`;
export const ButtonActive = styled.button`
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  margin-bottom: 15px;
  &:hover {
    border-bottom: 2px solid #007bff;
  }
`;
export const ButtonInactive = styled.button`
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  margin-left: 16px;
  margin-bottom: 15px;
  &:hover {
    border-bottom: 2px solid #007bff;
  }
`;

export const ContainerFather = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 102%;
  height: auto;
  grid-template-rows: 50% 50%;
`;

export const DivModal = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case true:
        return css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 5;
        `;

      default:
        return css``;
    }
  }}
  display:grid;
  width: 102%;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  padding-top: 5.8%;
  padding-left: 6.6%;
`;
