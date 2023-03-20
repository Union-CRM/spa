import styled, { css } from "styled-components";

//* Container father and children *//
export const ContainerFather = styled.div`
  width: 100%;
  height: 80%;
  min-width: 700px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 15% 85%;
`;

//* HEADER CONTAINER *//

// Div Title and Button //
export const Top = styled.div`
  display: grid;
  grid-row: 2;
  grid-template-columns: 50% 50%;
  width: 100%;
`;

// Div Title Page //
export const DivTitlePage = styled.div`
  display: flex;
  grid-row: 2;
  grid-column: 1;
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-row: 1;
  grid-template-rows: 20% 50% 30%;
  position: relative;
  background: #ffffff;
  border-radius: 0px 8px 0px 0px;
  box-shadow: 6px 0px 5px -6px rgba(0, 0, 0, 0.25);
  z-index: 4;
  @media (min-width: 100px) and (max-width: 500px) {
    display: grid;
    grid-row: 1;
    position: relative;
    grid-column: 1;
    width: 100%;
    height: 100%;
  }
`;

//* Container children *//
export const Container = styled.div`
  display: grid;
  z-index: 0 !important;
  top: -15px;
  width: 100%;
  height: 104%;
  grid-column: 1;
  position: relative;
  box-shadow: 5px 6px 5px -4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 8px 0px;
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
    margin-top: 0px;
  }

  &::-webkit-scrollbar-thumb {
    height: 80%;
    background-color: #d9d9d9;
    margin-left: 20px;
    width: 15px;
    border-right: 6px solid white;
  }
`;

//Container cards

export const BoardStyle = styled.div`
  position: relative;
  z-index: 0 !important;
  width: 99%;
  top: 25px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
  grid-gap: 20px;
  grid-row: 1;
  display: grid;
  height: fit-content;
`;

//Modal Edit and Add Client
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
        return css``;
    }
  }}
  grid-template-columns:50% 50%;
  @media (min-width: 50px) and (max-width: 500px) {
    height: 100vh;
    width: 100%;
  }
`;

// *** Items Header ***//

// Title Subject List
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
  @media (min-width: 100px) and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

//Number of cards Clients
export const HowManyClientList = styled.span`
  font-size: 24px;
  color: #525b75;
  font-weight: 600;
  @media (min-width: 100px) and (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

//Div Button Create
export const DivButton = styled.div`
  display: grid;
  grid-column: 2;
  grid-row: 2;
  width: 90%;
  justify-content: end;
  align-items: center;
  text-align: center;
`;

//Div Buttons Status
export const DivSpans = styled.div`
  display: flex;
  grid-column: 1;
  grid-row: 3;
  @media (min-width: 100px) and (max-width: 500px) {
    display: flex;
    width: 100%;
  }
`;

//*** Status: ACTIVE AND INACTIVE ***//

//* Title Status Active and Inactive *//
export const Active = styled.span`
  font-family: "Houschka Rounded Alt";
  font-size: 14px;
  font-weight: 600;
  color: #525b75;
`;

export const Inactive = styled.span`
  font-family: "Houschka Rounded Alt";
  font-size: 14px;
  font-weight: 600;
  color: #525b75;
`;

// Number of status => ("") //
export const HowManyActive = styled.span`
  color: #00953b;
  font-weight: 600;
  @media (min-width: 100px) and (max-width: 500px) {
    display: inline;
  }
`;
export const HowManyInactive = styled.span`
  color: #7a7a7a;
  font-weight: 600;
  @media (min-width: 100px) and (max-width: 500px) {
    display: inline;
  }
`;

// Buttons Active and Inactive
export const ButtonActive = styled.button`
  cursor: pointer;
  border: none;
  height: auto;
  background: transparent;
  &:hover {
    border-bottom: 2px solid #007bff;
  }
`;
export const ButtonInactive = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  margin-left: 16px;
  &:hover {
    border-bottom: 2px solid #007bff;
  }
`;
