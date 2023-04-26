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
//* PAGE GLOBAL *//
export const Content = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 50% 50%;

  top: 0;
  height: 70vh;
  width: 100%;
  min-width: 900px;
  position: relative;
  @media screen and (max-width: 755px) {
    display: flex;

    flex-direction: column;
  }
`;

/////////////////////**///////////////////////////////

//* CLIENT *//

export const DivClient = styled.div`
  width: 100%;
  height: 95%;

  margin: 0;
  grid-column: 1;
  min-width: 400px;
  @media screen and (max-width: 755px) {
    width: 65%;
  }
  ${ModaClient} {
    display: none;
    grid-template-columns: 0%;
  }

  ${ContainerGlobal} {
    width: 100%;
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
    top: -15px;
    width: 98%;
    height: 104%;
    grid-column: 1;
    position: relative;
    box-shadow: 5px 6px 5px -4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 8px 0px;
    overflow-y: scroll;
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
  width: fit-content;
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
