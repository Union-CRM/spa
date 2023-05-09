import styled, { css } from "styled-components";

//* CONTAINER SUBJECT DETAILS *//
export const ContainerDetails = styled.div`
  width: 98%;
  height: 50vh;
  padding-left: 2%;
  background:transparent;
  padding-top: 1%;
  position: relative;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: transparent;
    margin-top: 10px;
  }

  &::-webkit-scrollbar-thumb {
    height: 80%;
    background-color: #dfdfdf;
  }
  @media (min-width: 1500px) and (max-width: 2500px) {
    height: 380px;
  }
  @media (min-width: 1500px) and (max-width: 2500px) {
    height: 310px;
  }
  @media (min-height: 150px) and (max-height: 450px) {
    height: 370px;
  }
`;

/// INFO SUBJECTS ///

//* CARDS PLANNER *//

export const CardSubject = styled.div`
  width:94%;
  height: 56px;
  z-index: 9999999;
  margin-top: 3%;
  padding-bottom: 1%;
  position: relative;
  align-items: center;
  padding-right: 2%;
  background: #F5F7FA;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  position: relative;
  justify-content: end;
`;


export const DivGlobalCard = styled.div`
  display: flex;
  padding-top: 2%;
`;


/// Status Subject ////
export const StatusSubject = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "IN PROGRESS":
        return css`
          background-color:#00953b ;
          color: #fff;
        `;
      case "FINISHED":
        return css`
          background-color: #008585;
          color: #fff;
        `;
      case "CANCELED":
        return css`
          background-color: #771300;
          color: #fff;
        `;
      default:
        return css`
          background-color: #008585;
          color:#fff;
        `;
    }
  }}
  padding:1%;
  display: flex;
  width: 70px;
  height: 100%;
  border-radius: 5px;
  font-size: 0.75rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  text-transform: lowercase;
  span:first-letter {
    text-transform: uppercase;

  }
`;

export const DivStatusSubject = styled.div`
  padding-left:2%;
  align-items: center;
  justify-content: center;
  height:fit-content;
`;

/// Title Subject ////

export const DivTitleSubject = styled.div`

`;

export const TitleSubject = styled.div`
display:block;
padding-top:0.5%;
span {
font-weight:800;
opacity:0.80;}
`;


