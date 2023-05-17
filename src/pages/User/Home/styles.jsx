import styled from "styled-components";
import { DivButton } from "../../../components/Client/ContainerCardClient/styles";
import { CardsContainer as ContainerClient } from "../../../components/Client/ContainerCardClient/styles";
import { BoardStyle as BoardStyleClient } from "../../../components/Client/ContainerCardClient/styles";
import { ContainerGlobal } from "../../../components/Client/ContainerCardClient/styles";
import { DivIcons } from "../../../components/Client/ContainerCardClient/CardListView/styles";
import { DivP } from "../../../components/Planner/PlannerCard/styles";
import { ContainerCentral } from "../../../components/Client/AddEditClient/styles";
import { DivModal } from "../../../components/Client/ContainerCardClient/styles";
import { Card as ContainerCard } from "../../../components/Client/ContainerCardClient/CardListView/styles";
import { DivCard as ModaClient } from "../../../components/Planner/PlannerCard/styles";
import { Container as ContainerGraphic } from "../../../components/Grafico/styles";
import { ContainerCards as CardsPlanner } from "../../../components/Planner/PlannerCard/Card/styles";
import { DivUserInformation as UserInfoPlanner } from "../../../components/Planner/PlannerCard/Card/styles";
import { DivStatusTime as StatusTimePlanner } from "../../../components/Planner/PlannerCard/Card/styles";

//* PAGE GLOBAL *//
export const Content = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 50% 50%;
  top: 0;
  height: 70vh;
  width: 100%;
  min-width: 400px;
  position: relative;
  @media (min-width: 10px) and (max-width: 1006px) {
    display: flex;
    flex-direction: column;
    width: 95%;
  }
`;

export const DivInfo = styled.div`
  position: relative;
  top: 6%;
  right: 12%;
  z-index: 10;
`;

/////////////////////**///////////////////////////////

//* CLIENT *//

export const DivClient = styled.div`
  width: 100%;
  height: 95%;
  margin: 0;
  grid-column: 1;
  min-width: 400px;
  @media (min-width: 50px) and (max-width: 700px) {
    height: 54%;
  }
  @media (min-width: 701px) and (max-width: 1006px) {
    height: 54%;
  }

  ${ModaClient} {
    display: none;
    grid-template-columns: 0%;
  }

  ${ContainerGlobal} {
    width: 98%;
    height: 100%;
    grid-template-columns: 100%;
    background: #fff;
    min-width: 200px;
  }
  ${ContainerCentral} {
    display: none;
  }

  ${ContainerClient} {
    display: grid;
    z-index: 0 !important;
    background: #fff;
    width: 98%;
    height: 100%;
    grid-column: 1;
    position: relative;
    box-shadow: 5px 6px 5px -4px rgba(0, 0, 0, 0.25);
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
    display: none;
  }

  ${ContainerCard} {
    width: auto;
    height: 204px;
  }
`;

//////////////*****//////////////////////

//* PLANNER *//

export const DivPlanner = styled.div`
  position: relative;
  width: 100%;
  min-width: 50%;
  height: 95%;
  grid-column: 2;
  background: transparent;
  justify-content: end;
  display: flex;
  @media (min-width: 50px) and (max-width: 700px) {
  }
  @media (min-width: 601px) and (max-width: 1006px) {
    position: relative;
    justify-content: start;
  }

  ${ModaClient} {
    position: relative;
    left: 4%;
  }
  ${DivP} {
    width: 98%;
    height: 100%;
    min-width: 400px;
    margin-top: 0px;
    top: 0%;
    left: 0%;
    position: relative;
    background-color: #f5f7fa;
    border-color: white;
    border: 1px groove;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    @media (min-width: 601px) and (max-width: 1006px) {
      height: 75%;
    }
    @media (min-width: 200px) and (max-width: 600px) {
      height: 65%;
    }
  }
  ${CardsPlanner} {
    width: 90%;
    margin-left: 0%;
    background: white;
  }
  ${UserInfoPlanner} {
    width: 80%;
  }
  @media screen and (max-width: 1090) {
    width: 50%;
    min-width: 300px;
  }
  ${StatusTimePlanner} {
    width: 80%;
    @media screen and (max-width: 1090) {
      width: 80%;
    }
  }
`;

export const Graph1 = styled.div`
  /*min-width:900px;*/
  width: 100%;
  min-width: 400px;
  grid-column: 1;
  display: flex;
  /*justify-content:center;*/
  grid-row: 2;
  /*  height:20%;*/
  height: 22%;
  position: relative;
  margin: 0;
  padding-bottom: 1%;
  padding-top: 1%;
  background: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-bottom: 0;
  @media (min-width: 50px) and (max-width: 1006px) {
    display: flex;
    flex-direction: column;
    width: 93%;
  }
  ${ContainerGraphic} {
    margin-bottom: 5%;
    padding-left: 0%;
    @media (min-width: 50px) and (max-width: 1006px) {
      width: 95%;
    }
    @media (min-width: 1010px) and (max-width: 1500px) {
      width: 48%;
    }
  }
`;

// PENSAR //
export const H1Planners = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  font-family: "Houschka Rounded Alt";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  grid-row: 2;
  height: fit-content;
  border-bottom: 2px solid #007bff;
`;

export const HowManyPlanners = styled.div`
  font-size: 24px;
  color: #525b75;
  font-weight: 600;
  margin-right: 5%;
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
