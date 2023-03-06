import styled from "styled-components";

export const ContainerFather = styled.div``;

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

export const Top = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const HowManySubjectList = styled.span`
  color: #525b75;
`;
export const DivButton = styled.div`
  margin-top: 1.5%;
  margin-right: 1.5%;

  padding-left: 50%;
`;


export const Line = styled.div`
  width: 128px;
  height: 0px;
  border: 2px solid #007bff;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: -15px;
`;

export const Spans = styled.div`
  margin-top: 10px;
  display: flex;
`;

export const ButtonFinished = styled.button`
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  margin-left: 25px;
  margin-bottom: 15px;
  &:hover {
    border-bottom: 2px solid #007bff;
  }
`;
export const Finished = styled.h2`
  font-family: "Houschka Rounded Alt";
  color: #525b75;
  @import  '../../../styles/GlobalStyle';
  
`;

export const HowManyFinished = styled.span`
  color: #00953b;
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

export const Canceled = styled.h2`
  font-family: "Houschka Rounded Alt";
  color: #525b75;
  @import  '../../../styles/GlobalStyle';
`;

export const HowManyCancel = styled.span`
color: #771300;
`;



export const LineGray = styled.div`
  width: 640px;
  height: 0px;
  border: 1px solid #d8d8d8;
`;

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


