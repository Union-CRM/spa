import styled, { css } from "styled-components";

//* CONTAINER SUBJECT DETAILS *//
export const ContainerDetails = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 2%;
  padding-top: 1%;
  position: relative;
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
          background-color: #008585;
          color: #fff;
        `;
      case "FINISHED":
        return css`
          background-color: #ffd012;
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


