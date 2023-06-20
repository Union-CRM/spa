import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4vh;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  padding: 1%;
`;

export const Header = styled.div`
  margin-top: 1.5%;
  display: flex;
  grid-column: 3;
  grid-template-columns: 50% 25% 25%;
  width: 80%;
  height: 20%;
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
  width: auto;
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
  margin-left: 5%;
  height: 29px;
`;

export const DivSelect = styled.div`
  width: 40%;
  margin-top: 0.2%;
  display: flex;
  justify-content: space-between;
`;

export const DivPlanner = styled.div`
  width: 100%;
  margin-left: 5%;
`;

export const DivUsers = styled.div`
  width: 100%;
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
  justify-content: center;
  cursor: pointer;
`;

export const Title = styled.div`
  width: 99%;
  height: 100%;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  align-items: center;
  color: #fff;
  position: relative;
  justify-content: center;
  border: 1px solid #a9a9a9;
  margin: 0 auto;
`;

export const DivButtons = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonPesquisar = styled.button`
  width: 80%;
  height: 5vh;
  background-color: #e41165;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  border: none;
  color: #ffffff;
  border-radius: 20px;
  margin-right: 5%;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  align-self: center;
  margin-top: 6%;
  margin-left: 15%;
`;

export const ButtonExportar = styled.button`
  width: 80%;
  height: 5vh;
  background-color: #007bff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  border: none;
  color: #ffffff;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  align-self: center;
  margin-top: 6%;
  margin-left: 5%;
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
  margin-top: 1%;
  font-size: 24px;
  color: #525b75;
  font-weight: 600;
  span {
    margin-right:2%;
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
