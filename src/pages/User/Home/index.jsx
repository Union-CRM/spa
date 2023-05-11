import React from "react";
import ContainerCards from "../../../components/Client/ContainerCardClient";
import { Content, DivClient, DivPlanner, Graph1} from "./styles";
import Grafico from "../../../components/Grafico";
import PageBodyHome from "../../../components/Geral/PageBody/PageBodyHome";
import PlannerCard from "../../../components/Planner/PlannerCard";
import { usePlannerContext } from "../../../hook/usePlannerContext";
import { CustomerContextProvider } from "../../../context/CustomerContext";

// hook/usePlannerContext

import "react-tippy/dist/tippy.css";

const dateOfTheDay = new Date();

class Home extends React.Component {
  render() {
    return (
      <>
        <PageBodyHome>
          <CustomerContextProvider>
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
          </CustomerContextProvider>
        </PageBodyHome>
      </>
    );
  }
}

export default Home;
