import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 100%;
  top: 0;
  height: 55vh;
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
  grid-column: 1;
`;
export const DivUser = styled.div`
  display: grid;
  grid-column: 1;
  width: 90%;
  height: 50vh;
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
`;
export const DivRealise = styled.div``;
export const DivBusiness = styled.div``;
