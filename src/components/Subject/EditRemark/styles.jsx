import styled, { css } from "styled-components";

// * CONTAINER REMARK *//
export const ContainerRemark = styled.div`
  position: relative;
`;

export const Input = styled.input`
  height: ${(props) => props.heightInput || "28px"};
  width: ${(props) => props.widthInput || "100%"};
  border-radius: 5px;
  background-color: ${(props) => props.backgroundInput || " #fff"};
  display: block;
  position: relative;
  padding-left: 2%;
  border: 2px solid ${(props) => (props.required ? "#b03535" : "#888C95")};
  @media (min-width: 1355px) and (max-width: 1824px) {
    height: 25px;
  }
`;

export const TextArea = styled.textarea`
  height: ${(props) => props.heightInput || "80px"};
  width: ${(props) => props.widthInput || "100%"};
  border-radius: 5px;
  border: 2px solid ${(props) => (props.required ? "#b03535" : "#888C95")};
  background-color: ${(props) => props.backgroundInput || " #fff"};
  display: block;
  resize: none;
  position: relative;
  @media (min-width: 1355px) and (max-width: 1824px) {
    height: 70px;
  }
  @media (min-width: 1824px) and (max-width: 2000px) {
    height: 100px;
  }
`;

/// CONTAINER CARDS ///

export const ContainerCards = styled.div`
  width: 98%;
  height: 24rem;
  padding-top: 0%;
  position: relative;
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

//* BUTTON CREATE NEW REMARK *//
export const ButtonCreateRemark = styled.div`
  display: flex;
  width: 99%;
  padding-right: 1.5%;
  position: relative;
  justify-content: right;
`;

export const ButtonAdd = styled.button`
  ${(props) => {
    switch (props.$mode) {
      case "FINISHED":
          return css`
            border: 1px solid#008585;
          `;
        case "IN PROGRESS":
          return css`
            border: 1px solid #00953b;
          `;

        case "CANCELED":
          return css`
            border: 1px solid #771300;
          `;
        case "NOT STARTED":
          return css`
            border: 1px solid#51bfd3;
          `;
        case "EXCELENT":
          return css`
            border: 1px solid rgb(0, 123, 255);
          `;
        case "NO ANSWERS":
          return css`
            border: 1px solid#d10e00;
          `;
        case "NO INTEREST":
          return css`
           border: 1px solid#faa3b1;
          `;
        case "GOOD":
          return css`
            border: 1px solid#680072;
          `;

        default:
          return css`
            border: 1px solid #6e6b6b;
          `;
      
    }
  }}
  background-color:transparent;
  width: ${(props) => props.$width || "60px"};
  height: ${(props) => props.$height || "40px"};
  padding: ${(props) => props.$padding || "7px"};
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
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
        case "NOT STARTED":
          return css`
            color: #51bfd3;
          `;
        case "EXCELENT":
          return css`
            color: rgb(0, 123, 255);
          `;
        case "NO ANSWERS":
          return css`
            color: #d10e00;
          `;
        case "NO INTEREST":
          return css`
            color: #faa3b1;
          `;
        case "GOOD":
          return css`
            color: #680072;
          `;

        default:
          return css`
            color: #6e6b6b;
          `;
      }
    }}
    font-size:0.9rem;
    align-items: center;
    text-align: center;
    display: flex;
  }
  :hover {
    opacity: 0.8;
  }
`;

//* CARDS REMARK *//
export const CardRemark = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "FINISHED":
          return css`
            border-bottom: 8px solid#008585;
          `;
        case "IN PROGRESS":
          return css`
            border-bottom: 8px solid #00953b;
          `;

        case "CANCELED":
          return css`
            border-bottom: 8px solid #771300;
          `;
        case "NOT STARTED":
          return css`
            border-bottom: 8px solid#51bfd3;
          `;
        case "EXCELENT":
          return css`
            border-bottom: 8px solid rgb(0, 123, 255);
          `;
        case "NO ANSWERS":
          return css`
            border-bottom: 8px solid#d10e00;
          `;
        case "NO INTEREST":
          return css`
           border-bottom: 8px solid#faa3b1;
          `;
        case "GOOD":
          return css`
            border-bottom: 8px solid#680072;
          `;

        default:
          return css`
            border-bottom: 8px solid #6e6b6b;
          `;
      
    }
  }}
    width:97%;
  z-index: 9999999;
  height: 21rem;
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
        case "NOT STARTED":
          return css`
            color: #51bfd3;
          `;
        case "EXCELENT":
          return css`
            color: rgb(0, 123, 255);
          `;
        case "NO ANSWERS":
          return css`
            color: #d10e00;
          `;
        case "NO INTEREST":
          return css`
            color: #faa3b1;
          `;
        case "GOOD":
          return css`
            color: #680072;
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
  cursor: pointer;
  justify-content: center;
  background-color: transparent;
  bottom: 0px;
  display: flex;
  transform: rotateX(180deg);
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
        case "NOT STARTED":
          return css`
            color: #51bfd3;
          `;
        case "EXCELENT":
          return css`
            color: rgb(0, 123, 255);
          `;
        case "NO ANSWERS":
          return css`
            color: #d10e00;
          `;
        case "NO INTEREST":
          return css`
            color: #faa3b1;
          `;
        case "GOOD":
          return css`
            color: #680072;
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
        case "NOT STARTED":
          return css`
            color: #51bfd3;
          `;
        case "EXCELENT":
          return css`
            color: rgb(0, 123, 255);
          `;
        case "NO ANSWERS":
          return css`
            color: #d10e00;
          `;
        case "NO INTEREST":
          return css`
            color: #faa3b1;
          `;
        case "GOOD":
          return css`
            color: #680072;
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
  font-size: 0.82rem;
  svg {
    width: 13px;
    height: 13px;
  }
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
        case "NOT STARTED":
          return css`
            color: #51bfd3;
          `;
        case "EXCELENT":
          return css`
            color: rgb(0, 123, 255);
          `;
        case "NO ANSWERS":
          return css`
            color: #d10e00;
          `;
        case "NO INTEREST":
          return css`
            color: #faa3b1;
          `;
        case "GOOD":
          return css`
            color: #680072;
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
        case "NOT STARTED":
          return css`
            color: #51bfd3;
          `;
        case "EXCELENT":
          return css`
            color: rgb(0, 123, 255);
          `;
        case "NO ANSWERS":
          return css`
            color: #d10e00;
           
          `;
        case "NO INTEREST":
          return css`
            color: #faa3b1;
          `;
        case "GOOD":
          return css`
            color: #680072;
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
  font-size: 0.82rem;

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
  padding-left: 5%;
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
  padding-bottom: 5%;
  z-index: 99999999;
  padding-top: 2%;
  padding-left: 3%;
`;

export const NoteText = styled.div`
  width: 98%;
  height: 100px;
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

/////// ABOUT REMARK ///////////

export const ContainerDetailsRemark = styled.div`
  width: 100%;
  height: 215px;
  position: absolute;
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
export const DivTitle = styled.div`
  width: 122%;
  position: relative;
  padding-bottom: 2%;

  span {
    position: relative;
    display: block;
    opacity: 0.8;
    padding-left: 0%;
    font-weight: 600;
    font-size: 0.84rem;
    width: 100%;
    height: 100%;

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

export const DivStatus = styled.div`
  width: 10vw;
  position: relative;
`;