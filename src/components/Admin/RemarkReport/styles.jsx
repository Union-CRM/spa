import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4vh;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  padding: 1%;
`;

export const Header = styled.div`
  margin-top: 1%;
  display: flex;
  width: 100%;
  height: 30%;
`;

export const TitlePage = styled.label`
  width: 100%;
  align-items: end;
  display: flex;

  span {
    font-size: 1.5rem;
    height: fit-content;
    border-bottom: 2px solid #e41165;
    width: fit-content;
    font-weight: 600;
  }
`;

// Tippy //
export const DivInfo = styled.div`
  position: relative;
  top: 6%;
  left: 0.5%;
  @media (min-width: 100px) and (max-width: 600px) {
    display: flex;
  }
`;

export const InputDate = styled.input`
  width: 80%;
  max-width: 100%;
  height: 100%;
  color: #a0a0a0;
  border-radius: 8px;
  border: 2px solid ${(props) => (props.required ? "#b03535" : "#888C95")};
  @media (max-width: 1200px) {
    width: 85%;
  }
`;

export const Label = styled.div``;

export const DivDate = styled.div`
  height: 29px;
  justify-content: center;
`;

export const DivSelect = styled.div`
  width: 75%;
  margin-top: 0.2%;
  display: flex;
`;

export const DivPlanner = styled.div`
  width: 100%;
  margin-right: 4.5%;
`;

export const DivUsers = styled.div`
  width: 100%;
  padding-right: 40%;
`;
export const DivDates = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
`;

export const ContainerPlanilha = styled.div`
  width: 99%;
  border-radius: 5px;
  height: 70vh;
  border: 1px solid #fff;
  margin-top: 1%;
  overflow-y: scroll;
  position: relative;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  justify-content: start;
  align-content: start;
  display: grid;
  grid-template-columns: 100%;
  grid-column: 1;
  grid-template-rows: 5% 95%;
`;

export const HeaderPlanilha = styled.div`
  grid-row: 1;
  height: 100%;
  width: 100%;
  flex-direction: row;
  display: flex;
  align-items: center;
  background-color: #e41165;
  box-sizing: border-box;

  z-index: 0;
`;

export const DivCenter = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: row;
  margin-left: 5%;
  justify-content: center;
  cursor: pointer;
`;

export const Title = styled.div`
  width: 99%;
  height: 100%;
  display: flex;
  font-size: 0.9rem;
  font-weight: 600;
  align-items: center;
  color: #fff;
  position: relative;
  justify-content: center;
  border: 1px solid #a9a9a9;
  margin: 0 auto;
`;

export const DivButtons = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
`;

export const ButtonPesquisar = styled.button`
  width: 30%;
  height: 5vh;
  display: flex;
  background-color: #e41165;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  border: 1.5px solid #e41165;
  color: #ffffff;
  font-weight: 700;
  border-radius: 8px;
  margin-right: 2%;
  text-align: center;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  align-self: center;
  margin-top: 6%;
  justify-content: space-evenly;
`;

export const ButtonExportar = styled.button`
  width: 30%;
  height: 5vh;
  display: flex;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  border: 1.5px solid #e41165;
  color: #e41165;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  align-items: center;
  :hover {
    opacity: 0.7;
  }
  align-self: center;
  margin-top: 6%;
  margin-left: 5%;
  justify-content: space-evenly;
`;

export const ContainerRemarks = styled.div`
  width: 100%;
  //position: relative;
  flex-direction: column;
  display: flex;
  grid-row: 2;
  //background-color: #fff;
  //div:nth-child(even) {
  //background-color: pink;
  //}
`;

export const Total = styled.div`
  display: flex;
  width: fit-content;
  height: 1%;
  margin-top: 2.5%;
  font-size: 24px;
  color: #525b75;
  font-weight: 600;
  span {
    margin-right: 2%;
  }
`;

export const DivNumber = styled.div`
  display: flex;
  width: fit-content;
  height: 1%;
  margin-top: 1%;
  margin-left: 1%;
  font-size: 24px;
  color: #e41165;
  font-weight: 600;
`;

export const PositionArrow = styled.div`
  margin-left: auto;
  margin-right: 5%;
  width: fit-content;
  display: flex;
  align-items: center;
  grid-column: 3;
  cursor: pointer;
  justify-content: end;
`;

export const DivSvg = styled.div`
  align-items: center;
  justify-content: start;
`;

export const DivMsg = styled.div`
  align-items: center;
`;
