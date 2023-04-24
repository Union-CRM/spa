import styled, { css } from "styled-components";

// * CONTAINER REMARK *//
export const ContainerPlanner = styled.div`
  position: relative;
`;

/// CONTAINER CARDS ///

export const ContainerCards = styled.div`
  width: 98%;
  height: 100%;
  padding-top: 0%;
  position: relative;
  background-color: ${(props) => (props.$mode ? "#fff" : "transparent")};
  padding-left: 1.5%;
  grid-row: ${(props) => (props.$mode ? "2" : "1")};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: white;
    margin-top: 15px;
  }

  &::-webkit-scrollbar-thumb {
    height: 80%;
    background-color: transparent;
  }
`;

//* CARDS REMARK *//
export const CardPlanner = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "DONE":
        return css`
          border-bottom: 8px solid #008585;
        `;
      case "SCHEDULED":
        return css`
          border: none;
        `;

      case "CANCELED":
        return css`
          border-bottom: 8px solid #771300;
        `;

      default:
        return css`
          background-color: #6e6b6b;
        `;
    }
  }}
  width:97%;
  z-index: 9999999;
  height: 100%;
  margin-top: 3%;
  position: relative;
  align-items: center;
  padding-right: 2%;
  border-radius: 6px;
  background-color: #f5f7fa;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
`;

//* COMPONENT OPEN/CLOSE DETAILS *//
export const Circle = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "DONE":
        return css`
          background-color: #fff;
        `;
      case "CANCELED":
        return css`
          background-color: #fff;
        `;
      case "SCHEDULED":
        return css`
          background-color: transparent;
        `;

      default:
        return css`
          background-color: transparent;
        `;
    }
  }}
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: relative;
  border-radius: 100%;
  bottom: 3px;
  background-color: #fff;
`;

export const IconOpenClose = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "DONE":
        return css`
          color: #008585;
        `;
      case "IN PROGRESS":
        return css`
          color: #00953b;
        `;

      case "CANCELED":
        return css`
          color: #771300;
        `;

      default:
        return css`
          background-color: transparent;
        `;
    }
  }}
  width:100%;
  height: 100%;
  border: none;
  cursor: pointer;
  justify-content: center;
  background-color: transparent;
  bottom: 0px;
  display: flex;
  transform: rotateX(180deg);
  svg {
    ${(props) => {
      switch (props.$modes) {
        case "DONE":
          return css`
            color: #008585;
          `;
        case "SCHEDULED":
          return css`
            color: transparent;
          `;
        case "CANCELED":
          return css`
            color: #771300;
          `;
        default:
          return css`
            background-color: transparent;
          `;
      }
    }}
    cursor: pointer;
    height: 100%;
    width: 100%;
    position: relative;
    top: 0px;
  }
`;

/// CONTENTS CARDS ///

export const DivGlobalCard = styled.div`
  display: flex;
  padding-top: 2%;
`;

export const DivDate = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "DONE":
        return css`
          color: #008585;
        `;
      case "SCHEDULED":
        return css`
          color: transparent;
        `;
      case "CANCELED":
        return css`
          color: #771300;
        `;
      default:
        return css``;
    }
  }}
  height:50px;
  width: 90%;
  padding-top: 0%;
  text-align: left;
  padding-left: 3%;
  border-right: 2px solid #eff1f6;
  svg {
    width: 13px;
    height: 13px;
    span {
      ${(props) => {
        switch (props.$mode) {
          case "DONE":
            return css`
              color: #008585;
            `;
          case "SCHEDULED":
            return css`
              color: transparent;
            `;
          case "CANCELED":
            return css`
              color: #771300;
            `;
          default:
            return css`
              background-color: transparent;
            `;
        }
      }}
    }
    font-size: 0.82rem;
  }
  p {
    font-size: 0.9rem;
    color: #000 !important;
    font-weight: 900;
  }
  @media (min-width: 1700px) and (max-width: 2500px) {
    span {
      font-size: 1rem;
    }
  }
`;

export const DivTime = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "DONE":
        return css`
          color: #008585;
        `;
      case "SCHEDULED":
        return css`
          color: transparent;
        `;
      case "CANCELED":
        return css`
          color: #771300;
        `;
      default:
        return css``;
    }
  }}
  height:50px;
  width: 100%;
  padding-top: 0%;
  text-align: left;
  padding-left: 2%;
  svg {
    ${(props) => {
      switch (props.$modes) {
        case "DONE":
          return css`
            color: #008585;
          `;
        case "SCHEDULED":
          return css`
            color: transparent;
          `;
        case "CANCELED":
          return css`
            color: #771300;
          `;
        default:
          return css``;
      }
    }}
    width: 13px;
    height: 13px;
  }

  p {
    font-size: 0.8rem;
    color: #000;
    font-weight: 900;
  }
  @media (min-width: 1700px) and (max-width: 2500px) {
    span {
      font-size: 1rem;
    }
    p {
      font-size: 1rem;
      color: #000;
      font-weight: 900;
    }
  }
`;

export const Span = styled.span`
  ${(props) => {
    switch (props.$mode) {
      case "DONE":
        return css`
          color: #008585;
        `;
      case "SCHEDULED":
        return css`
          color: transparent;
        `;
      case "CANCELED":
        return css`
          color: #771300;
        `;
      default:
        return css`
          background-color: transparent;
        `;
    }
  }}
`;

// PHOTO //

export const DivPhoto = styled.div`
  width: 50%;
  height: 100%;
`;

export const DivPhotoII = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  padding-left: 2%;
`;

export const Photo = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "DONE":
        return css`
          border: 3px solid #008585;
          color: #000;
        `;
      case "SCHEDULED":
        return css`
          border: 3px solid #ffd012;
        `;
      case "CANCELED":
        return css`
          border: 3px solid #771300;
        `;
      default:
        return css`
          background-color: #6e6b6b;
        `;
    }
  }}
  width: 40px;
  height: 40px;
  display: flex;
  font-size: 0.8rem;
  font-weight: 600;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  border-radius: 100%;
  @media (min-width: 100px) and (max-width: 1700px) {
    width: 28px;
    height: 28px;
  }
`;

////////////// Name and Email //////////////
export const DivDadosRemark = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const NameEmail = styled.div`
  font-size: 0.8rem;
  padding-left: 2%;
  width: 98%;
  height: 100%;
  font-weight: 600;
  opacity: 0.8;
  span {
    display: block;
    font-size: 0.74rem;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-weight: 500;
  }
  @media (min-width: 1700px) and (max-width: 2500px) {
    width: 90%;
  }
`;

/// teste ///

export const ContainerComplete = styled.div`
  width: 95%;
  height: 100%;
  position: relative;
  display: ${(props) => (props.$mode ? "none" : "block")};
  visibility: ${(props) => (props.$mode ? "hidden" : "visible")};
  z-index: 99999999;
  padding-top: 2%;
  padding-left: 3%;
  padding-left: 3%;
`;

export const NoteText = styled.div`
  width: 98%;
  height: 100%;
  opacity: 0.8;
  padding-left: 0%;
  font-weight: 600;
  font-size: 0.84rem;
  position: relative;
  visibility: ${(props) => (props.$mode ? "hidden" : "visible")};
  z-index: 99999999;
  span {
    position: relative;
    display: block;
    font-size: 0.74rem;
    padding-top: 2%;
    padding-right: 5%;
    text-align: justify;
    width: 100%;
    height: 100%;
    min-height: 200px;
    max-height: 220px;
    font-weight: 500;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track-piece {
      background-color: transparent;
      margin-top: 5px;
    }

    &::-webkit-scrollbar-thumb {
      height: 80%;
      background-color: #dfdfdf;
    }
  }
`;

export const Guest = styled.div`
  width: 98%;
  height: 100%;
  padding-left: 0%;
  font-weight: 550;
  font-size: 0.84rem;
  opacity: 0.8;
  font-weight: 600;
  position: relative;
  visibility: ${(props) => (props.$mode ? "hidden" : "visible")};
  span {
    position: relative;
    font-size: 0.74rem;
    padding-top: 2%;
    padding-right: 5%;
    text-align: justify;
    width: 100%;
    height: 100%;
    min-height: 200px;
    max-height: 220px;
    font-weight: 400;
    color: #888c95;
  }
`;

/////// ABOUT REMARK ///////////

export const ContainerDetailsRemark = styled.div`
  width: 100%;
  height: 215px;
  position: absolute;
  background-color: red;
`;
export const IconTag = styled.div`
  position: relative;
  display: ${(props) => (props.$mode ? "none" : "block")};
  visibility: ${(props) => (props.$mode ? "hidden" : "visible")};
  padding-top: 0;
  padding-left: 3%;
  padding-bottom: 10%;
  cursor: pointer;
`;
