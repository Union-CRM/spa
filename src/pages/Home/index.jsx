import React from "react";
import ContainerCards from "../../components/Client/ContainerCardClient";
import { ClientContextProvider } from "../../context/ClientContext";

import { Container, DivSection, DivClient, DivPlanner,H1Planners,HowManyPlanners, Graph } from "./styles";
import Grafico from "../../components/Grafico";
import PageBodyHome from "../../components/Geral/PageBody/PageBodyHome";
import PlannerCard from "../../components/Planner/PlannerCard";
import { useState } from "react";
import { BigCalender } from "../../components/Planner/Calendar";
import { PlannerContextProvider } from "../../context/PlannerContext";
import { usePlannerContext } from "../../hook/usePlannerContext";
/*const funcClientInfo =()=>{
  const [clientInfo,setClientInfo] = useState("Client Information"); 
  return {clientInfo,setClientInfo};
}*/
const dateOfTheDay = new Date();

function PlannerCount(){
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
              <ClientContextProvider>
                <ContainerCards />
              </ClientContextProvider>
              <DivPlanner>
              <H1Planners>Planners </H1Planners>
              <HowManyPlanners>({PlannerCount.length})</HowManyPlanners>{" "}
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
