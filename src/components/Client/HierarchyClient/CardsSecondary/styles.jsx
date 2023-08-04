import styled from "styled-components";

export const PhotoI = styled.div`
  background-color: #fff;
  border: 2px solid ${(props) => (props.IsActive ? "#007bff" : "#7a7a7a")};
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: grid;
  grid-row: 1;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 5%;
`;
export const Photo = styled.div`
  display: grid;
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Dados = styled.div`
  width: 96%;
  display: grid;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media (min-width: 1900px) and (max-width: 2500px) {
    padding-left: 5%;
  }
`;

export const DivAdjust = styled.div`
  display: flex;
`;
