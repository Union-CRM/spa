import styled, { css } from "styled-components";

// * CONTAINER REMARK *//
export const ContainerRemark = styled.div`
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
export const CardRemark = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "FINISHED":
        return css`
          border-bottom: 8px solid #008585;
        `;
      case "IN PROGRESS":
        return css`
          border-bottom: 8px solid #00953b;
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
  position: relative;
  align-items: center;
  padding-right: 2%;
  border-radius: 6px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
`;

//* COMPONENT OPEN/CLOSE DETAILS *//
export const Circle = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: relative;
  border-radius: 100%;
  bottom: 3px;
  background-color: #fff;
`;

export const IconOpenClose = styled.button`
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
          color: #771300;
        `;

      default:
        return css`
          color: #6e6b6b;
        `;
    }
  }}
  width:100%;
  height: 100%;
  border: none;
  justify-content: center;
  background-color: transparent;
  bottom: 0px;
  cursor: pointer;
  display: flex;
  transform: rotateX(180deg);
  @media (min-width: 1650px) and (max-width: 2500px) {
    top: 0;
    position: absolute;
  }
  svg {
    ${(props) => {
      switch (props.$mode) {
        case "FINISHED":
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
            color: #6e6b6b;
          `;
      }
    }}
    cursor:pointer;
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
      case "FINISHED":
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
          color: #6e6b6b;
        `;
    }
  }}
  height:50px;
  width: 100%;
  padding-top: 0%;
  text-align: left;
  padding-left: 2%;
  svg {
    width: 13px;
    height: 13px;
  }
  span {
    ${(props) => {
      switch (props.$mode) {
        case "FINISHED":
          return css`
            font-size: 0.82rem;
            color: #008585;
          `;
        case "IN PROGRESS":
          return css`
            font-size: 0.82rem;
            color: #00953b;
          `;

        case "CANCELED":
          return css`
            font-size: 0.82rem;
            color: #771300;
          `;

        default:
          return css`
            color: #6e6b6b;
          `;
      }
    }}
  }
  p {
    font-size: 0.9rem;
    color: #000;
    font-weight: 900;
  }
  @media (min-width: 1700px) and (max-width: 2500px) {
    span {
      font-size: 1rem;
    }
  }
`;

export const DivDateReturn = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "FINISHED":
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
          color: #6e6b6b;
        `;
    }
  }}
  height:50px;
  width: 100%;
  padding-top: 0%;
  text-align: left;
  padding-left: 2%;
  svg {
    width: 13px;
    height: 13px;
  }
  span {
    ${(props) => {
      switch (props.$mode) {
        case "FINISHED":
          return css`
            font-size: 0.82rem;
            color: #008585;
          `;
        case "IN PROGRESS":
          return css`
            font-size: 0.82rem;
            color: #00953b;
          `;

        case "CANCELED":
          return css`
            font-size: 0.82rem;
            color: #771300;
          `;

        default:
          return css`
            color: #6e6b6b;
          `;
      }
    }}
  }
  p {
    font-size: 0.9rem;
    color: #000;
    font-weight: 900;
  }
  @media (min-width: 1700px) and (max-width: 2500px) {
    span {
      font-size: 1rem;
    }
  }
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
      case "FINISHED":
        return css`
          border: 2px solid #008585;
        `;
      case "IN PROGRESS":
        return css`
          border: 2px solid #00953b;
        `;

      case "CANCELED":
        return css`
          border: 2px solid #771300;
        `;

      default:
        return css`
          color: #6e6b6b;
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
  padding-left: 3%;
  z-index: 99999999;
  padding-top: 2%;
  padding-left: 3%;
`;

export const NoteRemark = styled.div`
  width: 98%;
  height: 100%;
  padding-left: 0%;
  padding-bottom: 0%;
  opacity: 0.8;
  font-weight: 600;
  font-size: 0.84rem;
  position: relative;
  visibility: ${(props) => (props.$mode ? "hidden" : "visible")};
  span {
    position: relative;
    display: block;
    font-weight: 500;
    font-size: 0.95rem;
    padding-top: 0%;
    padding-right: 5%;
    text-align: justify;
    width: 100%;
    height: 100%;
  }
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
  margin-top: 3%;
  span {
    position: relative;
    display: block;
    font-size: 0.74rem;
    padding-top: 2%;
    padding-right: 5%;
    text-align: justify;
    width: 100%;
    height: 100%;
    min-height: 185px;
    max-height: 140px;
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
  z-index: 100000;
`;
