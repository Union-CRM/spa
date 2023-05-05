import styled, { css } from "styled-components";

//* CONTAINER FATHER *//
export const ContainerFather = styled.div`
  justify-content: end;
  display: flex;
  grid-row: 1;
  @media (min-width: 100px) and (max-width: 500px) {
    grid-column: 1;
    display: grid;
    position: relative;
    top: 0px;s
    left: 0;
    justify-content: start;
  }
`;

//* Modal Edit and Add Subject *//

export const ContainerDois = styled.div`
  width: 100%;
  grid-column: 2;
  position: absolute;
  height: 900px !important;
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
    }
  }}
  @media (min-width: 50px) and (max-width: 500px) {
    height: 100vh;
    width: 100%;
  }
`;

//* CONTAINER MODAL *//
export const Container = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "Active":
        return css`
          border-left: 16.56px solid #00953b;
        `;
      case "Inactive":
        return css`
          border-left: 16.56px solid #7a7a7a;
        `;
      default:
        return css`
          background-color: #6e6b6b;
        `;
    }
  }}
  width:75%;
  min-width: 390px;
  height: 100%;
  z-index: 1000;
  grid-column: 2;
  padding-left: 5%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  @media (min-width: 100px) and (max-width: 502px) {
    height: 81vh;
    width: 90%;
    flex-direction: flex-start;
    position: relative;
  }
  @media (min-width: 900px) and (max-width: 1824px) {
    width: 75%;
  }
  @media (min-width: 1825px) and (max-width: 2500) {
    width: 75%;
  }
`;

/// CONTAINER GLOBAL BORDER ///

export const BodyAll = styled.div`
  width: 95%;
  height: 100%;
  position: relative;
  align-items: center;
`;

export const ContainerBorder = styled.div`
  width: 99%;
  height: 70%;
  min-height: 100px;
  position: relative;
  margin-top: 0.9%;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: transparent;
  @media (min-width: 1700px) and (max-width: 2500px) {
  }
  @media (min-width: 100px) and (max-width: 1500px) {
    height: 68%;
  }
`;

/// BUTTON CLOSE MODAL ////

export const ClickButton = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
`;

export const Close = styled.button`
  height: 100%;
  color: #000;
  padding-top: 2%;
  border: none;
  display: flex;
  position: relative;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
  justify-content: end;
  background-color: transparent;
  :hover {
    opacity: 0.8;
  }
`;

/// STATUS SUBJECTS ////
export const Status = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "Active":
        return css`
          background-color: #00953b;
        `;
      case "Inactive":
        return css`
          background-color: #7a7a7a;
        `;
      default:
        return css`
          background-color: #6e6b6b;
        `;
    }
  }}
  padding:0.6%;
  display: flex;
  width: 110px;
  height: fit-content;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-transform: lowercase;
  span:first-letter {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: #fff;
  }
`;

export const DivStatus = styled.div`
  width: 100%;
  top: -1%;
  position: relative;
  height: fit-content;
`;

/// TITLE AND CREATEBY SUBJECT ///
export const DivTitle = styled.div`
  width: 100%;
  display: grid;
  padding-top: 1%;
  text-align: left;
  align-items: center;
  grid-template-columns: 15% 85%;
  padding-bottom:0.5%;
`;

export const DivNameManager = styled.div`
  width: 85%;
  display: grid;
  padding-top: 1%;
  text-align: left;
  align-items: center;
  grid-column:2;
  @media (min-width: 1900px) and (max-width: 2500px) {
    padding-left:5%;
  }
`;


export const ClientName = styled.h1`
  width: 100%;
  font-size: 1.1rem;
  padding-bottom: 1%;
  @media (min-width: 1825px) and (max-width: 2500px) {
    font-size: 1.5rem;
  }
`;

export const CreatedBy = styled.h2`
  width: 100%;
  height: 100%;
  grid-column: 1;
  font-weight: 500;
  font-size: 0.9rem;
  padding-top: 1%;
  padding-bottom: 1%;
  align-items: center;
  @media (min-width: 1825px) and (max-width: 2500px) {
    font-size: 1rem;
  }
`;

// Photo Client //

export const DivPhoto = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
`;

export const DivPhotoI = styled.div`
  background-color: #d9d9d9;
  border: 5px solid #007bff;
  width: 58px;
  height:59px;
  border-radius: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  @media (min-width: 100px) and (max-width: 1500px) {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 1920px) and (max-width: 2500px) {
    width: 50px;
    height:50px;
  }
`;


export const IconTag = styled.span`
  height: 100%;
  cursor: pointer;
  grid-column: 2;
  display: flex;
  align-items: center;
  justify-content: start;
`;

//* /// PAGES /// *//

export const DivPages = styled.div`
  width: 100%;
  height: 4%;
  position: relative;
  @media (min-width: 100px) and (max-width: 1724px) {
    height: 5%;
  }
`;

export const Pages = styled.div`
  grid-row: 1;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

export const TabButton = styled.button`
  ${(props) => {
    switch (props.$mode) {
      case "Active":
        return css`
          background-color: ${(props) => (props.active ? "#00953b" : "white")};
          color: ${(props) => (props.active ? "white" : "black")};
          :hover {
            background-color: #00953b;
            color: #fff;
          }
        `;
      case "Inactive":
        return css`
          background-color: ${(props) => (props.active ? "#7a7a7a" : "white")};
          color: ${(props) => (props.active ? "white" : "black")};
          :hover {
            background-color: #7a7a7a;
            color: #fff;
          }
        `;
      default:
        return css`
          background-color: #6e6b6b;
        `;
    }
  }}
  width:100%;
  height: 100%;
  display: grid;
  cursor: pointer;
  font-size: 0.9rem;
  margin-right: 0.8%;
  position: relative;
  align-items: center;
  border: 0.2px solid #656464;
  border-radius: 5px 5px 0px 0px;
  border: 0.2px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  background: white;
  width: 100%;
  height: auto;
  display: ${(props) => (props.active ? "block" : "none")};
`;

export const PageEdit = styled.button`
  width: 100%;
  height: 100%;
  display: grid;
  color: #000;
  cursor: pointer;
  font-size: 0.9rem;
  position: relative;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px 5px 0px 0px;
  border: 0.2px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  :hover {
    background-color: #000;
    color: #fff;
  }
  :focus {
    background-color: #00953b;
    color: #fff;
  }
  :active {
    background-color: #00953b;
  }
`;
