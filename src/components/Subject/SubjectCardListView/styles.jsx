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
export const H1 = styled.h1`
  width: 100%;
  font-family: "Houschka Rounded Alt";
  font-size: 24px;
  line-height: 28px;
  margin-top: 10px;
`;
export const Container = styled.div`
  display: grid;
  grid-template-rows: 9% 91%;
  width: 700px;
  height: 830px;
  align-content: flex-start;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  position: relative;
  overflow: auto;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  margin-top: 64px;
  margin-right: 500px;
  border-radius: 8px;
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
  margin-left: 10px;
  margin-top: -15px;
`;
export const All = styled.span`
  font-family: "Houschka Rounded Alt";
  font-size: 14px;
  color: #525b75;
  line-height: 16px;
  font-weight: 600;
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
export const Finished = styled.span`
  font-family: "Houschka Rounded Alt";
  font-size: 14px;
  color: #525b75;
  font-weight: 600;
`;
export const Spans = styled.div`
  margin-top: 10px;
  display: flex;
`;
export const Canceled = styled.div`
  font-family: "Houschka Rounded Alt";
  font-size: 14px;
  color: #525b75;
  font-weight: 600;
`;
export const Top = styled.div`
  display: flex;
  margin-left: 10px;
`;
export const HowManyFinished = styled.span`
  color: #00953b;
`;
export const HowManyCancel = styled.span`
  color: #771300;
`;
export const HowManyAll = styled.span`
  color: #008585;
`;
export const HowManySubjectList = styled.span`
  color: #525b75;
`;
export const ButtonProgress = styled.button`
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  margin-right: 15px;
  margin-bottom: 15px;
  margin-left: 10px;
  &:hover {
    border-bottom: 2px solid #007bff;
  }
`;
export const ButtonFinished = styled.button`
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  margin-left: 5px;
  margin-bottom: 15px;
  &:hover {
    border-bottom: 2px solid #007bff;
  }
`;
export const ButtonCancel = styled.button`
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

export const ContainerFather = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 102%;
  height: auto;
  grid-template-rows: 50% 50%;
`;

export const DivModal = styled.div`
  grid-column: 2;
  flex-direction: row-reverse;
  display: flex;
`;

export const DivButton = styled.div`
  margin-top: 1.5%;
  margin-right: 1.5%;
`;
