import React from "react";
import PageBody from "../../components/Geral/PageBody";
import Donut from "../../components/Admin/AdmGraphicGroup/Donut";
import ContainerCards from "../../components/Client/ContainerCardClient";
import { ClientContextProvider } from "../../context/ClientContext";

import {
  Content,
  DivClient,
  DivPlanner,
  H1Planners,
  HowManyPlanners,
  Graph1,
  Graph2,
} from "./styles";
import Grafico from "../../components/Grafico";
import PageBodyHome from "../../components/Geral/PageBody/PageBodyHome";
import PlannerCard from "../../components/Planner/PlannerCard";
import { useState } from "react";
import { BigCalender } from "../../components/Planner/Calendar";
import { PlannerContextProvider } from "../../context/PlannerContext";
import { usePlannerContext } from "../../hook/usePlannerContext";

import IconSystem from "../../../src/assets/IconSystem";

import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

/*const funcClientInfo =()=>{
  const [clientInfo,setClientInfo] = useState("Client Information"); 
  return {clientInfo,setClientInfo};
}*/
const dateOfTheDay = new Date();

function PlannerCount() {
  const { Planner } = usePlannerContext();

  return Planner;
}
class Home extends React.Component {
  render() {
    return (
      <>
        <PageBodyHome>
          <Content>
            <DivClient>
              <ClientContextProvider>
                <ContainerCards />
              </ClientContextProvider>
            </DivClient>

            <DivPlanner>
              <PlannerContextProvider>
                <PlannerCard date={dateOfTheDay} />
              </PlannerContextProvider>
            </DivPlanner>

          </Content>

          <Graph1>
              <Grafico value={0}  />

        
              <Grafico value={1} />
    
          </Graph1>

          

        </PageBodyHome>
      </>
    );
  }
}

export default Home;
{
  /* <Donut></Donut>
      <Donut></Donut>
    <Donut></Donut>*/
}
