import styled, { css } from "styled-components";

//* CONTAINER FATHER *//
export const Container = styled.div`
  padding: 0px;
  height: 100%;
  padding-left: 0px;
  width: 96%;
`;

//* Modal Edit and Add Subject *//
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

//* CARDS SUBJECTS *//
export const Card = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "FINISHED":
        return css`
          border-left: 7px solid #008585;
        `;
      case "IN PROGRESS":
        return css`
          border-left: 7px solid #00953b;
        `;
      case "CANCELED":
        return css`
          border-left: 7px solid #771300;
        `;
      default:
        return css`
          border-left: 7px solid #6e6b6b;
        `;
    }
  }}
  grid-template-rows:50% 50%;
  display: grid;
  border-radius: 8px;
  background-color: #f5f7fa;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  width: auto;
  height: 204px;
  z-index: 0;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 10%;
  @media (min-width: 1355px) and (max-width: 1824px) {
    height: 185px;
    width: 90%;
    margin-bottom: 5%;
  }
`;

//** HEADER CARDS *//

export const Header = styled.div`
  grid-row: 1;
  display: grid;
  width: 100%;
  height: 100%;
  padding-top: 3%;
  grid-template-rows: 20% 80%;
  grid-template-columns: 1fr;
  position: relative;
  cursor: pointer;
`;

// Status Subject //
export const Status = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "FINISHED":
        return css`
          background-color: #008585;
        `;
      case "IN PROGRESS":
        return css`
          background-color: #00953b;
        `;
      case "CANCELED":
        return css`
          background-color: #771300;
        `;
      default:
        return css`
          background-color: #6e6b6b;
        `;
    }
  }}
  width: fit-content;
  height: 15px;
  border-radius: 8px;
  margin-top: 10px;
  padding-bottom: 2px;
  font-size: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const LabelStatus = styled.div`
  color: #ffffff;
  font-size: 0.8rem;
  margin-left: 0px;
  margin-top: 1px;
  padding-left: 5px;
  padding-right: 5px;
  text-transform: lowercase;
  span:first-letter {
    text-transform: uppercase;
    color: #fff;
  }
`;

//* DIVS DETAILS CARDS!! *//
export const DivDadosCard = styled.div`
  text-align: left;
  width: 96%;
  height: 100%;
  display: grid;
  grid-row: 2;
  height: fit-content;
  align-items: center;
  cursor: pointer;
`;

// Div Subject and CreatedBy {Name Manager} & Title Subject  //
export const DivSubjectAndCreatedBy = styled.span`
  font-family: "Houschka Rounded Alt";
  font-size: 1rem;
  margin-top: 2%;
  p {
    font-weight: 900;
  }
  @media (min-width: 1355px) and (max-width: 1824px) {
    font-size: 0.8rem;
    margin-top: 5%;
  }
`;

// Name Manager //
export const CreatedByManager = styled.div`
  font-size: 1rem;
  font-style: normal;
  color: #000000;
  @media (min-width: 1355px) and (max-width: 1824px) {
    font-size: 0.8rem;
  }
`;

// Div Icons //
export const DivIcons = styled.div`
  display: flex;
  grid-row: 1;
  justify-content: end;
  height: 100%;
  width: 100%;
  grid-column: 2;
  align-items: center;
`;

export const PositionEdit = styled.div`
  width: 12px;
  height: 12px;
  margin-top: 8px;
  cursor: pointer;
  display: flex;
  margin-right: 5%;
`;

// Div Status //
export const DivStatusSubject = styled.div`
  grid-row: 1;
  grid-column: 1;
`;

//* Div Info *//
export const DivInfo = styled.div`
  grid-row: 2;
  padding-top: 2%;
  position: relative;
  display: grid;
  width: 100%;
  grid-template-rows: 50% 50%;
  height: 100%;
  z-index: 0;
  cursor: pointer;
`;

export const DivReleaseAndBusiness = styled.div`
  grid-row: 1;
  height: fit-content;
`;

export const ReleaseTrain = styled.div`
  font-size: 0.9rem;
  @media (min-width: 1355px) and (max-width: 1824px) {
    font-size: 0.75rem;
  }
`;

export const Business = styled.div`
  font-size: 0.9rem;
  @media (min-width: 1355px) and (max-width: 1824px) {
    font-size: 0.75rem;
  }
`;

//* Clients Infos *//
export const BoxClient = styled.span`
  grid-row: 2;
  width: 90%;
  max-width: 90%;
  height: fit-content;
  padding-bottom: 10px;
  padding-top: 2%;
  padding-left: 0;
  border-radius: 8px;
  display: flex;
  background-color: #fff;
  border: 1px solid #888c95;
  @media (min-width: 1355px) and (max-width: 1824px) {
    margin-top: 1.5%;
    padding-bottom: 3%;
    padding-top: 2%;
  }
  @media (min-width: 1825px) and (max-width: 2000px) {
    margin-top: 1.5%;
  }
`;

export const Client = styled.div`
  color: #000000;
  width: fit-content;
  height: fit-content;
  align-items: center;
  margin-left: 2%;
  font-size: 0.9rem;
  font-weight: 900;
  display: flex;
  font-family: "Houschka Rounded Alt";
  p {
    font-weight: 900;
    margin-left: 10px;
  }
  @media (min-width: 1355px) and (max-width: 1824px) {
    font-size: 0.8rem;
    padding-left: 2%;
    p {
      font-weight: 900;
      margin-left: 10px;
    }
  }
`;

export const ClientName = styled.div`
  color: #656464;
  width: 100%;
  height: 100%;
  padding-left: 5%;
  font-size: 0.9rem;
  align-items: relative;
  display: flex;
  @media (min-width: 1355px) and (max-width: 1824px) {
    font-size: 0.8rem;
  }
`;
