import React from "react";
import {
  Container,
  DivUser,
  ContainerUp,
  ContainerLow,
  DivGroup,
  DivRealise,
  DivBusiness,
} from "./styles";
import ContainerCards from "./ContainerCardUser/index";
import ContainerCardsGroup from "./ContainerCardGroup";
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
        <DivRealise></DivRealise>
        <DivBusiness></DivBusiness>
      </ContainerLow>
    </Container>
  );
};

export default Home;
