import styled from "styled-components";
import { DivCard as ModaClient } from "../../Planner/PlannerCard/styles";
import { DivP } from "../../Planner/PlannerCard/styles";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 100%;
  top: 2%;
  height: 40%;
  width: 100%;
  min-width: 900px;
  position: relative;
  @media screen and (max-width: 755px) {
    display: flex;

    flex-direction: column;
  }
`;
export const ContainerUp = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 50% 50%;
`;
export const ContainerLow = styled.div`
  display: grid;
  grid-template-rows: 40% 100%;
  grid-template-columns: 50% 50%;
  height: 50%;
`;
export const DivUser = styled.div`
  display: grid;
  grid-column: 1;
  width: 90%;
  height: 45%;
`;

export const H1 = styled.h1`
  width: fit-content;
  font-family: "Houschka Rounded Alt";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  grid-row: 2;
  height: fit-content;
  border-bottom: 2px solid #e41165;
  @media (min-width: 100px) and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const HowManyClientList = styled.span`
  font-size: 24px;
  color: #525b75;
  font-weight: 600;
  @media (min-width: 100px) and (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

export const DivTitlePage = styled.div`
  padding-left: 10%;
  display: flex;
  grid-row: 2;
  grid-column: 1;
  width: 100%;
`;

export const DivGroup = styled.div`
  display: grid;
  grid-column: 2;
  width: 100%;
  height: 100%;
`;
export const DivRealise = styled.div`
  display: grid;
  grid-column: 1;
  grid-row: 2;
  width: 100%;
  top: 0;
`;
export const DivSubjPlanner = styled.div`
  display: grid;
  grid-column: 1;
  grid-row: 3;
  width: 100%;
  margin-top: 1.5%;
`;
export const DivPlanner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  grid-column: 2;
  margin-top: 10%;

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
export const ContainerLowLeft = styled.div`
  height: 80%;
  margin-top: 10%;
`;
