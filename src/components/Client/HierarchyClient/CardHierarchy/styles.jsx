import styled from "styled-components";

export const Container = styled.div`
  height: ${(props) => (props.$mode ? "40px" : "auto")};
  width: 98%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  background: #f5f7fa;
  overflow: hidden;
  transition: height 0.8s ease;
  padding-bottom: 2%;
  position: relative;
  padding-right: 2%;
  margin-left: 2%;
  margin-top: 2%;
  justify-content: center;
  span {
    color: #ff6347;
    background-color: #f5f7fa;
    border-top: none;
    width: 150%;
    font-size: 12px;
    text-align: center;
    transition: height 0.8s ease;
  }
`;

export const CardHierarchy = styled.div`
  width: 90%;
  display: grid;
  padding-top: 3%;
  text-align: left;
  align-items: center;
  grid-template-columns: 80% 18% 2%;
  padding-bottom: 0.5%;
  margin-left: 5%;
`;

export const DivPhoto = styled.div`
  display: grid;
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  justify-content: left;
  align-items: center;
  cursor: pointer;
`;

export const DivPhotoI = styled.div`
  background-color: #fff;
  border: 3px solid #7a7a7a;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
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

export const DivDadosCard = styled.div`
  width: 98%;
  display: grid;
  margin: 3% 3% 3% 0;
  text-align: left;
  align-items: center;
  grid-column: 1;
  margin-bottom: 2%;
  @media (min-width: 1900px) and (max-width: 2500px) {
    padding-left: 5%;
  }
`;

export const PositionArrow = styled.div`
  margin-left: 0 auto;
  width: fit-content;
  display: flex;
  align-items: end;
  grid-column: 3;
  cursor: pointer;
`;
export const DivSecondPositions = styled.div`
  width: 101%;
  height: min-content;
  border-top: 1px solid #7a7a7a50;
  background-color: #fbfbfc;
  margin-top: 3%;
  transition: height 0.8s ease-in;
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(3, auto);
  position: relative;
`;
