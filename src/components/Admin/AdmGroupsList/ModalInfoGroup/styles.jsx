import styled from "styled-components";
import { ContainerOptions as ContainerUsers } from "../../../Admin/AdmGroupsList/UsersComponents/styles";

// Div Father
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

/// BUTTON CLOSE MODAL ////

export const ClickButton = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
`;

export const Close = styled.button`
  height: 100%;
  color: #000;
  padding-top: 2%;
  border: none;
  display: flex;
  position: relative;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
  justify-content: end;
  background-color: transparent;
  :hover {
    opacity: 0.8;
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

/// Button Close

export const DivClose = styled.div`
  align-items: center;
  display: grid;
  width: 50%;
  @media (min-width: 50px) and (max-width: 500px) {
  }
`;

// Children

export const Container = styled.div`
  grid-column: 2;
  width: 80%;
  min-width: 385px;
  height: 100%;
  background: #fff;
  display: grid;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  z-index: 1000;
  grid-template-rows: 10% 75% 15%;
  @media (min-width: 100px) and (max-width: 502px) {
    height:81vh;
    width: 100%;
    flex-direction: flex-start;
    position: relative;
    
  }
  @media (width: 500px) {
    height:40vh;
    width:100%;
    top:3%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 5px;
      height: 10px;
    }
  
    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }
  
    &::-webkit-scrollbar-track-piece {
      background-color: transparent;
      margin-top: 10px;
    }
  
    &::-webkit-scrollbar-thumb {
      height: 80%;
      background-color: #dfdfdf;
    }
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
  grid-template-rows: 40% 5% 55%;
  @media (min-width: 1600px) {
  }
`;



// Total Groups //

export const DivBetween = styled.div`
width: 93%;
height: 100%;
display:flex;
justify-content:space-between;
grid-row: 1;
`;


export const Content = styled.div`
justify-content:center;
align-items:center;
padding-top:10%;
`;

export const DivGroups = styled.div`
background: #F5F7FA;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
border-radius: 5px;
width:80%;
height:100%;
margin-right:5%;
@media (width: 500px) {
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }
  
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-track-piece {
    background-color: transparent;
    margin-top: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    height: 80%;
    background-color: #dfdfdf;
  }
  }
`;

export const IconGroup = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding-top:5%;
@media (width: 500px) {
  padding-top:0;
    }
`;

export const TitleDivGroup = styled.div`
color:#000;
opacity:60%;
font-size:1.1rem;
display:flex;
align-items:center;
justify-content:center;
font-weight:600;
@media (width: 500px) {
  font-size:0.9rem;
    }
`;


export const TotalGroups = styled.div`
color:#E41165;
font-size:2rem;
display:flex;
align-items:center;
justify-content:center;
font-weight:800;
@media (width: 500px) {
  font-size:1.2rem;
    }
`;

// Total Members //


export const DivTotalMembers = styled.div`
background: #F5F7FA;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
border-radius: 5px;
width:100%;
margin-left:2%;
height:100%;
@media (width: 500px) {
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }
  
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-track-piece {
    background-color: transparent;
    margin-top: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    height: 80%;
    background-color: #dfdfdf;
  }
  }
`;

export const IconMembers = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding-top:5%;
@media (width: 500px) {
  padding-top:0;
    }
`;

export const TitleDivMembers = styled.div`
color:#000;
opacity:60%;
font-size:1.1rem;
display:flex;
align-items:center;
justify-content:center;
font-weight:600;
padding-top:2%;
@media (width: 500px) {
  font-size:0.9rem;
    }
`;


export const TotalMembers = styled.div`
color:#E41165;
font-size:2rem;
display:flex;
align-items:center;
justify-content:center;
font-weight:800;
@media (width: 500px) {
  font-size:1.2rem;
    }
`;

// Graphic //

export const GraphicGroup = styled.div`
background: #F5F7FA;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
border-radius: 5px;
width:93%;
height:100%;
grid-row:3;
@media (width: 500px) {
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }
  
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-track-piece {
    background-color: transparent;
    margin-top: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    height: 80%;
    background-color: #dfdfdf;
  }
  }
`;

export const TitleGraphic = styled.div`
color:#000;
opacity:60%;
font-size:1rem;
display:flex;
align-items:left;
justify-content:start;
font-weight:600;
padding-top:2%;
padding-left:5%;
width:fit-content;
`;

export const DivGraphic = styled.div`
position:relative;
align-items:center;
display:flex;
justify-content:center;
`;