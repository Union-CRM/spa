import React from "react";
import {
  Container,
  DivUser,
  ContainerUp,
  ContainerLow,
  DivGroup,
  DivRealise,
  DivSubjPlanner,
  DivPlanner,
  ContainerLowLeft,
} from "./styles";
import ContainerCards from "./ContainerCardUser/index";
import ContainerCardsGroup from "./ContainerCardGroup";
import ContainerCardInfo from "./ContainerCardInfo/";
import ContainerSubjectPlanner from "./ContainerSubjetPlanner";
import PlannerCard from "../../Planner/PlannerCard";

const dateOfTheDay = new Date();

const Home = () => {
  return (
    <Container>
      <ContainerUp>
        <DivUser>
          <ContainerCards />
        </DivUser>
        <DivGroup>
          <ContainerCardsGroup />
        </DivGroup>
      </ContainerUp>
      <ContainerLow>
        <ContainerLowLeft>
          <DivRealise>
            <ContainerCardInfo />
          </DivRealise>
          <DivSubjPlanner>
            <ContainerSubjectPlanner />
          </DivSubjPlanner>
        </ContainerLowLeft>
        <DivPlanner>
          <PlannerCard date={dateOfTheDay} home={true} />
        </DivPlanner>
      </ContainerLow>
    </Container>
  );
};

export default Home;
