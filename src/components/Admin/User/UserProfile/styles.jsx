import styled from "styled-components";

import { ContainerHeaderAndCards } from "../../../../components/Client/ContainerCardClient/styles";
import { DivButton } from "../../../../components/Client/ContainerCardClient/styles";
import { CardsContainer as ContainerClient } from "../../../../components/Client/ContainerCardClient/styles";
import { BoardStyle as BoardStyleClient } from "../../../../components/Client/ContainerCardClient/styles";
import { ContainerGlobal } from "../ContainerCardUser/styles";

import { DivIcons } from "../../../../components/Client/ContainerCardClient/CardListView/styles";
import { DivP } from "../../../../components/Planner/PlannerCard/styles";
import { ContainerCentral } from "../../../../components/Client/AddEditClient/styles";
import { Card as ContainerCard } from "../../../../components/Client/ContainerCardClient/CardListView/styles";
import { DivCard as ModaClient } from "../../../../components/Planner/PlannerCard/styles";
import { Container as BigCalender } from "../../../Planner/Calendar/styles";
//* PAGE GLOBAL *//

export const Header = styled.div`
  grid-column: ${(props) => props.$column};
  grid-row: ${(props) => props.$row};
  width: auto;
  min-width: 102.8%;
  border-radius: 8px;
  margin-top: 1%;
  height: 14%;
  display: grid;
  grid-template-columns: 10% 30% 60%;
  grid-template-rows: 50% 50%;
  background: #e5f2ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  margin-bottom: 1%;
  @media (min-width: 50px) and (max-width: 500px) {
    width: 94%;
    height: 10%;
    grid-template-columns: 1fr;
    grid-template-rows: 50% 50%;
    display: grid;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 50% 50%;
  top: 0;
  height: 55vh;
  width: 100%;
  min-width: 400px;
  position: relative;
  @media (min-width: 10px) and (max-width: 1006px) {
    display: flex;
    flex-direction: column;
    width: 95%;
  }
`;

/////////////////////**///////////////////////////////

//* CLIENT *//

export const DivClient = styled.div`
  width: 200%;
  height: 90%;

  margin: 0;
  grid-column: 1;
  min-width: 400px;
  @media screen and (max-width: 755px) {
    width: 65%;
  }

  ${ContainerHeaderAndCards} {
    box-shadow: none;
  }

  ${ModaClient} {
    display: block;
    grid-column: 2;
    position: absolute;
  }

  ${ContainerGlobal} {
    width: 100%;
    height: 100%;
    grid-template-columns: 100%;
    background: #fff;
    min-width: 200px;
  }
  ${ContainerCentral} {
    display: fixed;

    z-index: 20;
  }

  ${ContainerClient} {
    display: grid;
    background: #fff;

    width: 98%;
    height: 40.3vh;
    grid-column: 1;
    position: relative;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 8px 0px;
    overflow-y: scroll;
    @media (min-width: 50px) and (max-width: 1006px) {
      height: 39%;
    }
    @media (min-width: 1007px) and (max-width: 1360px) {
      height: 80%;
    }
    @media (min-width: 701px) and (max-width: 1006px) {
      height: 54%;
    }

    ${BoardStyleClient} {
      width: 100%;
      height: 100%;
      background: #fff;
    }

    ${DivButton} {
      display: none;
    }

    ${DivIcons} {
      display: flex;
    }

    ${ContainerCard} {
      width: auto;
      height: 204px;
    }
  }
`;

//////////////*****//////////////////////

//* PLANNER *//

export const DivPlanner = styled.div`
  position: relative;
  width: 100%;
  height: 95%;
  grid-column: 2;
  left: 5%;

  ${ModaClient} {
    position: relative;
    left: 4%;
  }
  ${DivP} {
    width: 100%;
    height: 100%;
    min-width: 400px;
    margin-top: 0px;
    top: 0%;
    left: 0%;
    position: relative;
    border-color: white;
    background-color: #fff;
    border: 1px groove;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  }
  @media screen and (max-width: 1090) {
    width: 50%;
    min-width: 300px;
  }
`;

export const Graph1 = styled.div`
  /*min-width:900px;*/
  width: 100%;
  grid-column: 1;
  display: flex;
  justify-content: space-between;
  /*justify-content:center;*/
  grid-row: 2;
  /*  height:20%;*/
  height: auto;

  position: relative;
  margin: 0;
  padding-bottom: 1%;
  padding-right: 2%;
  padding-top: 1%;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-bottom: 0;
`;

export const DivPhoto = styled.div`
  display: grid;
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const DivPhotoI = styled.div`
  background-color: #d9d9d9;
  border: 5px solid #007bff;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: grid;
  grid-column: 1;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

export const DivDadosCard = styled.div`
  text-align: left;

  width: 96%;
  height: fit-content;
  display: grid;
  grid-row: 1;
  align-items: center;
  grid-column: 2;
  padding-left: 3%;
  margin-top: 5%;
`;

export const DivLevel = styled.span`
  display: flex;
  grid-row: 2;
  grid-column: 1;
  height: fit-content;
  width: 100%;
  position: relative;
  margin-top: 20%;
  flex-direction: row;
  justify-content: center;
  span {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const Dot = styled.div`
  height: 10px;
  padding-right: 10px;
  border-radius: 50%;
  margin-top: 1%;
  //display: flex;
  align-self: center;
  margin-right: 3px;
  //overflow-x: visible;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const DivButtonUser = styled.div`
  display: flex;
  grid-row: 1;
  grid-column: 3;
  height: fit-content;
  width: 100%;
  margin-top: 3%;
  position: relative;
  flex-direction: row;
  justify-content: left;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: #ffffff;
  border-radius: 8px;
  width: 30%;
  height: 52px;
  margin-left: 5%;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  line-height: 52px;
  display: grid;
  grid-template-columns: 70% 30%;
  cursor: pointer;
  border: none;
  box-shadow: 5px 5px 5px rgba(18, 38, 63, 0.0313726);

  :hover {
    opacity: 0.8;
  }
  @media (min-width: 1600px) {
    height: 40px;
  }
`;
export const Circle = styled.div`
  background: #007bff;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  display: flex;
  margin-left: 10%;
  align-self: center;
  justify-content: center;
  flex-direction: row;
  grid-column: 2;
`;

export const DivIcon = styled.div`
  display: flex;
  grid-row: 1;
  justify-content: end;
  padding-right: 5%;
  grid-gap: 5px;
  height: 100%;

  align-items: center;
  top: 10px;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  line-height: 52px;
  grid-template-columns: 1;
  font-family: "Houschka Rounded Alt";
  cursor: pointer;
  color: #000000;
`;

export const DivCalendar = styled.div`
  position: fixed;
  width: 80%;
  height: 90%;
  top: 5%;
  left: 10.5%;
  //opacity: 0.55;
  z-index: 20;

  ${BigCalender} {
    position: fixed;
    width: 84%;
    height: 87%;

    grid-template-columns: 100%;
    background: #ffff;
    min-width: 200px;
    z-index: 20;
  }
`;

export const DivClose = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #00000034;
  z-index: 20;
`;

export const DivSubject = styled.div`
  position: fixed;
  width: 80%;
  height: 100%;
  top: 15%;
  left: 12.5%;
  z-index: 25;
`;

export const DivPath = styled.div`
  font: Houschka Rounded Alt;
`;

export const PreviousPath = styled.span`
  cursor: pointer;
`;

export const CurrentPath = styled.span`
  cursor: pointer;
  color: #e41165;
`;
