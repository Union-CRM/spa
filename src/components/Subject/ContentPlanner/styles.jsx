import styled, { css } from "styled-components";

//* CONTAINER FATHER AND CHILD *//
export const ContainerFather = styled.div`
  justify-content: end;
  display: flex;
  grid-row: 1;
  @media (min-width: 100px) and (max-width: 500px) {
    grid-column: 1;
    display: grid;
    position: relative;
    top: 0px;
    left: 0;
    justify-content: start;
  }
`;

export const DivContainerAll = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 1%;
  position: relative;
  align-items: center;
`;

export const ContainerPlanner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 0%;
`;

//* BUTTON CREATE NEW PLANNER *//

export const ButtonCreatePlanner = styled.div`
  display: flex;
  width: 99%;
  padding-top: 1%;
  padding-right: 1.5%;
  position: relative;
  justify-content: end;
`;

export const ButtonAdd = styled.button`
  ${(props) => {
    switch (props.$mode) {
      case "FINISHED":
        return css`
          border: 1px solid #008585;
        `;
      case "IN PROGRESS":
        return css`
          border: 1px solid #00953b;
        `;

      case "CANCELED":
        return css`
          border: 1px solid #771300;
        `;

      default:
        return css`
          background-color: #6e6b6b;
        `;
    }
  }}
  background-color:transparent;
  width: ${(props) => props.$width || "fit - content"};
  height: ${(props) => props.$height || "fit-content"};
  padding: ${(props) => props.$padding || "7px"};
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 0.5em;
  cursor: pointer;
  span {
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
            background-color: #6e6b6b;
          `;
      }
    }}
    font-size:0.9rem;
  }
  :hover {
    opacity: 0.8;
  }
`;

/// CONTAINER CARDS ///

export const ContainerCards = styled.div`
  width: 98%;
  height: 100%;
  padding-top: 0;
  position: relative;
  background-color: ${(props) => (props.$mode ? "#fff" : "transparent")};
  padding-left: 1.5%;
  grid-row: 2;
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
//* CARDS PLANNER *//

export const CardPlanner = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "Finished":
        return css`
          border-bottom: 8px solid #008585;
        `;
      case "Scheduled":
        return css`
          border: none;
        `;

      case "Canceled":
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
  height: 70px;
  z-index: 9999999;
  margin-top: 3%;
  padding-bottom: 1%;
  position: relative;
  align-items: center;
  padding-right: 2%;
  border-radius: 6px;
  background-color: #f5f7fa;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  position: relative;
  justify-content: end;
`;

//* COMPONENT OPEN/CLOSE DETAILS *//
export const Circle = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "Finished":
        return css`
          background-color: #fff;
        `;
      case "Canceled":
        return css`
          background-color: #fff;
        `;
      case "Scheduled":
        return css`
          background-color: transparent;
        `;

      default:
        return css`
          background-color: #6e6b6b;
        `;
    }
  }}
  width:16px;
  height: 16px;
  cursor: pointer;
  bottom: 0;
  top: 6%;
  position: relative;
  border-radius: 100%;
  align-items: end;
  background-color: #fff;
`;

export const IconOpenClose = styled.div`
  ${(props) => {
    switch (props.$modes) {
      case "Finished":
        return css`
          color: #008585;
        `;
      case "Scheduled":
        return css`
          color: transparent;
        `;
      case "Canceled":
        return css`
          color: #771300;
        `;
      default:
        return css`
          background-color: #6e6b6b;
        `;
    }
  }}
  width:100%;
  height: 100%;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  align-items: end;
  justify-content: center;
  background-color: transparent;
  display: flex;
  svg {
    transform: rotateX(360deg);
    cursor: pointer;
    height: 100%;
    width: 100%;
    position: absolute;
    align-items: end;
  }
`;

/// CONTENTS CARDS ///

export const DivDate = styled.div`
${(props) => {
  switch (props.$mode) {
    case "Finished":
      return css`
        color: #008585;
      `;
    case "Progress":
      return css`
        color: #00953b;
      `;

    case "Canceled":
      return css`
        color: #771300;
      `;

    default:
      return css`
        color: #6e6b6b;
      `;
  }
}}
}
height:50px;
width:90%;
padding-top:0%;
text-align:left;
padding-left:3%;
border-right:2px solid #EFF1F6;
svg {
  width:13px;
  height:13px;
span {
  ${(props) => {
    switch (props.$mode) {
      case "Finished":
        return css`
          color: #008585;
        `;
      case "Progress":
        return css`
          color: #00953b;
        `;

      case "Canceled":
        return css`
          color: #771300;
        `;

      default:
        return css`
          color: #6e6b6b;
        `;
    }
  }}
}
  font-size:0.82rem;
}
p {
  font-size:0.9rem;
  color:#000 !important;
  font-weight:900;
}
@media (min-width: 1700px) and (max-width: 2500px) {
  span {
    font-size:1rem;
  }
}
`;

export const DivTime = styled.div`
${(props) => {
  switch (props.$mode) {
    case "Finished":
      return css`
        color: #008585;
      `;
    case "Progress":
      return css`
        color: #00953b;
      `;

    case "Canceled":
      return css`
        color: #771300;
      `;

    default:
      return css`
        color: #6e6b6b;
      `;
  }
}}
}
height:50px;
width:100%;
padding-top:0%;
text-align:left;
padding-left:2%;
svg {
  width:13px;
  height:13px;
}

p {
  font-size:0.8rem;
  color:#000;
  font-weight:900;
}
@media (min-width: 1700px) and (max-width: 2500px) {
  span {
    font-size:1rem;
  }
  p {
  font-size:1rem;
  color:#000;
  font-weight:900;
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
      case "Finished":
        return css`
          border: 3px solid #008585;
          color: #000;
        `;
      case "Scheduled":
        return css`
          border: 3px solid #ffd012;
        `;
      case "Canceled":
        return css`
          border: 3px solid #771300;
        `;
      default:
        return css`
          background-color: #6e6b6b;
        `;
    }
  }}
  background-color: #d9d9d9;
  width: 40px;
  height: 40px;
  display: flex;
  font-size: 0.8rem;
  font-weight: 600;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  @media (min-width: 100px) and (max-width: 1700px) {
    width: 28px;
    height: 28px;
  }
`;

////////////// Name and Email //////////////
export const DivDadosPlanner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const NameEmail = styled.div`
  font-size: 0.8rem;
  padding-left: 0%;
  width: 98%;
  font-weight: 600;
  opacity: 0.8;
  span {
    display: block;
    font-size: 0.74rem;
    font-weight: 500;
  }
  @media (min-width: 1700px) and (max-width: 2500px) {
    width: 90%;
  }
`;

/// Status Planner ////
export const StatusPlanner = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "Finished":
        return css`
          background-color: #008585;
          color: #fff;
        `;
      case "Scheduled":
        return css`
          background-color: #ffd012;
          color: #000;
        `;
      case "Canceled":
        return css`
          background-color: #771300;
          color: #fff;
        `;
      default:
        return css`
          background-color: #6e6b6b;
        `;
    }
  }}
  padding-left:4%;
  padding-right: 4%;
  display: flex;
  width: fit-content;
  height: fit-content;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  span {
    font-size: 0.7rem;
  }
`;

export const DivStatusPlanner = styled.div`
  padding-top: 2%;
`;

//* DETAILS ABOUT PLANNER *//

export const Span = styled.span`
  ${(props) => {
    switch (props.$mode) {
      case "Finished":
        return css`
          color: #008585;
        `;
      case "Scheduled":
        return css`
          color: #ffd012;
        `;
      case "Canceled":
        return css`
          color: #771300;
        `;
      default:
        return css`
          color: #00953b; ;
        `;
    }
  }}
`;
export const ContainerComplete = styled.div`
  width: 95%;
  height: 100%;
  position: relative;
  display: ${(props) => (props.$mode ? "none" : "block")};
  visibility: ${(props) => (props.$mode ? "hidden" : "visible")};
  padding-top: 2%;
  padding-left: 3%;
  z-index: 99999999;
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
    min-height: 170px;
    max-height: 180px;
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
export const DivGlobalCard = styled.div`
  display: flex;
  padding-top: 2%;
`;

export const Guest = styled.div`
  width: 98%;
  height: 100%;
  padding-left: 0%;
  padding-bottom: 3%;
  font-weight: 550;
  font-size: 0.84rem;
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

//************* PLANNER SCHUDELED *****************//

export const CardScheduled = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "Finished":
        return css`
          border-bottom: 8px solid #008585;
        `;
      case "Scheduled":
        return css`
          border: none;
        `;

      case "Canceled":
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
  margin-top: 2%;
  padding-bottom: 1%;
  position: relative;
  align-items: center;
  padding-right: 2%;
  border-radius: 6px;
  background-color: #f5f7fa;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  position: relative;
  justify-content: end;
`;

export const DivDateScheduled = styled.div`
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
}
height:50px;
width:90%;
padding-top:0%;
text-align:left;
padding-left:3%;
border-right:2px solid #EFF1F6;
svg {
  width:13px;
  height:13px;
span {
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
}
  font-size:0.82rem;
}
p {
  font-size:0.9rem;
  color:#000 !important;
  font-weight:900;
}
@media (min-width: 1700px) and (max-width: 2500px) {
  span {
    font-size:1rem;
  }
}
`;

export const DivTimeScheduled = styled.div`
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
}
height:50px;
width:100%;
padding-top:0%;
text-align:left;
padding-left:2%;
svg {
  width:13px;
  height:13px;
}

p {
  font-size:0.8rem;
  color:#000;
  font-weight:900;
}
@media (min-width: 1700px) and (max-width: 2500px) {
  span {
    font-size:1rem;
  }
  p {
  font-size:1rem;
  color:#000;
  font-weight:900;
}
}
`;

// PHOTO //

export const DivPhotoScheduled = styled.div`
  width: 50%;
  height: 100%;
`;

export const DivPhotoIIScheduled = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  padding-left: 2%;
`;

export const PhotoScheduled = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "Finished":
        return css`
          border: 3px solid #008585;
          color: #000;
        `;
      case "Scheduled":
        return css`
          border: 3px solid #ffd012;
        `;
      case "Canceled":
        return css`
          border: 3px solid #771300;
        `;
      default:
        return css`
          background-color: #6e6b6b;
        `;
    }
  }}
  background-color: #d9d9d9;
  width: 40px;
  height: 40px;
  display: flex;
  font-size: 0.8rem;
  font-weight: 600;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  @media (min-width: 100px) and (max-width: 1700px) {
    width: 28px;
    height: 28px;
  }
`;

////////////// Name and Email //////////////
export const DivDadosPlannerScheduled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const NameEmailScheduled = styled.div`
  font-size: 0.8rem;
  padding-left: 0%;
  width: 98%;
  font-weight: 600;
  opacity: 0.8;
  span {
    display: block;
    font-size: 0.74rem;
    font-weight: 500;
  }
  @media (min-width: 1700px) and (max-width: 2500px) {
    width: 90%;
  }
`;

/// Status Planner ////
export const StatusPlannerScheduled = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "Finished":
        return css`
          background-color: #008585;
          color: #fff;
        `;
      case "Scheduled":
        return css`
          background-color: #ffd012;
          color: #000;
        `;
      case "Canceled":
        return css`
          background-color: #771300;
          color: #fff;
        `;
      default:
        return css`
          background-color: #6e6b6b;
        `;
    }
  }}
  padding-left:4%;
  padding-right: 4%;
  display: flex;
  width: fit-content;
  height: fit-content;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  span {
    font-size: 0.7rem;
  }
`;

export const DivStatusPlannerScheduled = styled.div`
  padding-top: 2%;
`;
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
