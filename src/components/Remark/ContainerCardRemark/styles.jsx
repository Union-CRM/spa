import styled, { css } from "styled-components";

// Container father and children
export const ContainerGlobal = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  min-width: 400px;
  position: relative;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  @media (width: 500px) {
    width: 790px;
  }
  @media (min-width: 1824px) and (max-width: 2000px) {
    width: 100%;
    height: 85vh;
  }
`;

//* Container father and children *//
export const ContainerHeaderAndCards = styled.div`
  width: 100%;
  min-width: 340px;
  height: 100%;
  grid-column: 1;
  grid-row: 1;
  position: relative;
  display: grid;
  border-radius: 8px;
  grid-template-rows: 15% 85%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  @media (min-width: 50px) and (max-width: 1360px) {
    height: 80vh;
    width: 100%;
  }
  @media (min-width: 1355px) and (max-width: 1824px) {
    width: 100%;
  }
`;

//* Header Container *//

export const HeaderContainerCards = styled.div`
  z-index: 4;
  grid-row: 1;
  width: auto;
  height: 100%;
  display: grid;
  background-color: #ffffff;
  border-radius: 8px 8px 0px 0px;
  grid-template-rows: 20% 50% 30%;
  @media (min-width: 100px) and (max-width: 500px) {
    display: grid;
    grid-row: 1;
    position: relative;
    grid-column: 1;
    width: 100%;
    height: 100%;
  }
`;

export const DivInfo = styled.div`
  position: relative;
  top: 6%;
  left: 1%;
`;

// Div Title and Button //
export const Top = styled.div`
  display: grid;
  grid-row: 2;
  grid-template-columns: 50% 50%;
  width: 100%;
`;

//** Line **//
export const LineDivisor = styled.div`
  width: 92%;
  height: 2px;
  margin-left: 5%;
  background-color: #e3e6ed;
  position: absolute;
`;

//* CONTAINER CARDS *//
export const ContainerCards = styled.div`
  padding-left: 2%;
  height: 100%;
  grid-column: 1;
  grid-row: 2;
  width: auto;
  display: grid;
  position: relative;
  background-color: #fff;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 18px;
    height: 10px;
    margin-right: 10px;
    float: right;
  }

  &::-webkit-scrollbar-track {
    box-shadow: 5px black;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: white;
    margin-top: 25px;
    padding-top: 0px;
  }

  &::-webkit-scrollbar-thumb {
    height: 80%;
    width: 15px;
    margin-left: 20px;
    background-color: #d9d9d9;
    border-right: 6px solid white;
  }
`;

// Cards //
export const BoardStyle = styled.div`
  width: 99%;
  top: 20px;
  grid-gap: 20px;
  grid-row: 1;
  display: grid;
  position: relative;
  height: fit-content;
  grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
  @media (min-width: 1355px) and (max-width: 1724px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
  }
`;

//* Modal Edit and Add Remark *//
export const DivModal = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case true:
        return css`
          z-index: 1000;
          height: 100vh;
          width: 100vw;
          background: rgba(0, 0, 0, 0.8);
          position: fixed;
          top: 0;
          left: 0;
        `;

      default:
    }
  }}
  grid-template-columns:50% 50%;
  @media (min-width: 50px) and (max-width: 500px) {
    height: 100vh;
    width: 100%;
  }
`;

// *** ITEMS HEADER ***//

// Div Title Page //
export const DivTitlePage = styled.div`
  padding-left: 10%;
  display: flex;
  grid-row: 2;
  grid-column: 1;
  width: 100%;
`;

// Title Subject List //
export const H1 = styled.h1`
  width: fit-content;
  font-family: "Houschka Rounded Alt";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  grid-row: 2;
  height: fit-content;
  border-bottom: 2px solid #007bff;
  @media (min-width: 50px) and (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

// Number of cards Remark //
export const HowManyRemarkList = styled.span`
  font-size: 24px;
  color: #525b75;
  font-weight: 600;
`;

/// Div Buttons Create ///
export const DivButton = styled.div`
  display: grid;
  grid-column: 2;
  grid-row: 2;
  width: 90%;
  justify-content: end;
  align-items: center;
  @media (min-width: 100px) and (max-width: 500px) {
    width: 90%;
    top: -10%;
    position: relative;
  }
`;

/// Div Buttons Status ///
export const DivSpans = styled.div`
  display: flex;
  grid-column: 1;
  grid-row: 3;
  padding-left: 5%;
  position: relative;
  @media (min-width: 100px) and (max-width: 500px) {
    display: flex;
    width: 80%;
  }
`;

//*** Status: PROGRESS, FINISHED AND CANCEL ***//

//* Title Status  *//

export const Progress = styled.span`
  font-family: "Houschka Rounded Alt";
  font-size: 14px;
  color: #525b75;
  line-height: 20px;
  font-weight: 600;
`;

export const Finished = styled.span`
  font-family: "Houschka Rounded Alt";
  font-size: 14px;
  line-height: 20px;
  color: #525b75;
  font-weight: 600;
`;

export const Canceled = styled.div`
  font-family: "Houschka Rounded Alt";
  font-size: 14px;
  line-height: 20px;
  color: #525b75;
  font-weight: 600;
`;

//* Number of status => ("") *//
export const HowManyFinished = styled.span`
  color: #008585;
  font-weight: 600;
`;
export const HowManyCancel = styled.span`
  color: #771300;
  font-weight: 600;
`;

export const HowManyProgress = styled.span`
  color: #00953b;
  font-weight: 600;
`;

/// Buttons Status ///
export const ButtonProgress = styled.button`
  cursor: pointer;
  border: none;
  width: fit-content;
  height: fit-content;
  background-color: white;
  margin-right: 3%;
  &:hover {
    border-bottom: 2px solid #007bff;
  }
`;
export const ButtonFinished = styled.button`
  cursor: pointer;
  border: none;
  height: fit-content;
  width: fit-content;
  margin-right: 3%;
  background-color: white;
  &:hover {
    border-bottom: 2px solid #007bff;
  }
`;
export const ButtonCancel = styled.button`
  cursor: pointer;
  border: none;
  height: fit-content;
  width: fit-content;
  margin-right: 10px;
  background-color: transparent;
  &:hover {
    border-bottom: 2px solid #007bff;
  }
`;



export const ContainerLimit = styled.div`
color:#007bff;
align-items:center;
text-align:center;
justify-content: center;
font-weight: 800;
text-decoration: underline;
padding-bottom: 2%;
cursor: pointer;
width:100%;
bottom: 0;
margin-top: 35px;
`;