import React from "react";
import ContainerCards from "../../../components/Client/ContainerCardClient";
import { Content, DivClient, DivPlanner, Graph1} from "./styles";
import Grafico from "../../../components/Grafico";
import PageBodyHome from "../../../components/Geral/PageBody/PageBodyHome";
import PlannerCard from "../../../components/Planner/PlannerCard";
import "react-tippy/dist/tippy.css";

const dateOfTheDay = new Date();

class Home extends React.Component {
  render() {
    return (
      <>
        <PageBodyHome>
          <Content>
            <DivClient>
              <ContainerCards />
            </DivClient>

            <DivPlanner>
              <PlannerCard date={dateOfTheDay} />
              
            </DivPlanner>

            
          </Content>

          <Graph1>
            <Grafico value={0} />
            <Grafico value={1} />
          </Graph1>
        </PageBodyHome>
      </>
    );
  }
}

export default Home;
