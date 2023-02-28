import styled from "styled-components";

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

export const H1 = styled.span`
  width: 100%;
  font-family: "Houschka Rounded Alt";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  margin-top: 10px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 9% 91%;
  width: 700px;
  z-index: 1;
  height: 830px;
  align-content: flex-start;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  overflow: auto;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  margin-top: 64px;
  margin-right: 0px;
  border-radius: 8px;
  position: relative;
  margin-top: -10px;
  &::-webkit-scrollbar {
    width: 18px;
    height: 10px;
    margin-right: 10px;
    float: right;
  }

  &::-webkit-scrollbar-track {
    box-shadow: 5px black;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    height: 80%;
    background-color: #afb2bb;
    margin-left: 20px;
    width: 15px;
    border-right: 6px solid white;
    border-top: 12px solid white;
  }
`;

export const Line = styled.div`
  width: 128px;
  height: 0px;
  border: 2px solid #007bff;
  border-radius: 10px;
  margin-left: 0px;
  margin-top: -15px;
`;

export const All = styled.span`
  font-family: "Houschka Rounded Alt";
  font-size: 14px;
  color: #525b75;
`;

export const Header = styled.div`
  margin-bottom: 20px;
  margin-left: 25px;
  width: 650px;
  height: 100px;
  display: grid;
  grid-row: 1;
  position: fixed;
  z-index: 1;
  background-color: #ffffff;
`;

export const Active = styled.span`
  font-family: "Houschka Rounded Alt";
  font-size: 14px;
  font-weight: 600;
  color: #525b75;
  line-height: 16px;
`;

export const Spans = styled.div`
  margin-top: 10px;
  display: flex;
`;

export const Inactive = styled.div`
  font-family: "Houschka Rounded Alt";
  font-size: 14px;
  font-weight: 600;
  color: #525b75;
  line-height: 16px;
`;

export const Button = styled.button`
  width: 250px;
  height: 35px;
  display: flex;
  margin-top: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 12.8px;
  line-height: 15px;
  color: #ffffff;
  margin-right: 40px;
  padding-left: 12px;
  border-radius: 8px;
  background-color: #007bff;
  text-align: center;
  border: none;
  cursor: pointer;
  :hover {
    transition: 0.5s;
    scale: 1.07;
  }
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
  color: #7a7a7a;
`;
export const IconPosition = styled.div`
  display: flex;
  margin-left: 12px;
  margin-top: 11px;
`;
export const SpanPosition = styled.div`
  display: flex;
  margin-left: 8px;
  margin-top: 9px;
  font-size: 16px;
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

export const LineGray = styled.div`
  width: 640px;
  height: 0px;
  border: 1px solid #d8d8d8;
`;

export const PositionModal = styled.div`
  margin-left: 200px;
`;

export const ContainerFather = styled.div`
  display: grid;
  width: 102%;
  height: auto;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%; ;
`;

export const ContainerSon = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: right;
`;
