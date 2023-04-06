import React from "react";
import PageBody from "../../components/Geral/PageBody";
import Donut from "../../components/Admin/AdmGraphicGroup/Donut";
import ContainerCards from "../../components/Client/ContainerCardClient";
import { ClientContextProvider } from "../../context/ClientContext";

import {
  Container,
  DivSection,
  DivClient,
  DivPlanner,
  H1Planners,
  HowManyPlanners,
  Graph,
} from "./styles";
import Grafico from "../../components/Grafico";
import PageBodyHome from "../../components/Geral/PageBody/PageBodyHome";
import PlannerCard from "../../components/Planner/PlannerCard";
import { useState } from "react";
import { BigCalender } from "../../components/Planner/Calendar";
import { PlannerContextProvider } from "../../context/PlannerContext";
import { usePlannerContext } from "../../hook/usePlannerContext";

import IconSystem from "../../../src/assets/IconSystem";

import { Tooltip } from "react-tippy"
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
        <Container>
          <PageBodyHome>
            <DivClient>
                <ContainerCards />
             <DivPlanner>
                <H1Planners>
                  Planners
                  <HowManyPlanners>({PlannerCount.length})</HowManyPlanners>{" "}
                  <Tooltip
                    title="List of Planners of the Day"
                    theme="light"
                    duration={100}
                    delay={0}
                  >
                    <IconSystem
                      icon={"Info"}
                      width={"1.5vw"}
                      height={"2.1vh"}
                    ></IconSystem>
                  </Tooltip>
                </H1Planners>
                <PlannerContextProvider>
                  <PlannerCard date={dateOfTheDay} />
                </PlannerContextProvider>
              </DivPlanner>
            </DivClient>

            {/* <ClientCard/>*/}

            <Graph>
              <Grafico />
              <Grafico />
            </Graph>
          </PageBodyHome>
        </Container>
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

