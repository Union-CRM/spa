import styled from "styled-components";

export const Wrapper = styled.div`
  height: 70%;
  margin-top: 1.5%;
`;

export const Dot = styled.div`
  height: 6px;
  padding-right: 6px;
  border-radius: 50%;
  //display: flex;
  align-self: center;
  margin-right: 3px;
  //overflow-x: visible;
  background-color: ${({ bgColor }) => bgColor};
`;

export const StyledEvent = styled.div`
  display: flex;
  background: #ffffff;
  color: #8a94ad;
  text-align: left !important;
  padding-left: 5px;
  font-size: 13px;
  cursor: pointer;
  text-transform: capitalize;
  //margin-left: 10px;
  margin-right: 1px;
  margin-bottom: 1.5px;
  white-space: nowrap;
  //overflow-x: hidden;
  //text-overflow: ellipsis;
  height: fit-content;
`;

export const SevenColGrid = styled.div`
  display: grid;
  width: 82vw;
  margin: 0 auto;
  grid-template-columns: repeat(7, 1fr);
  ${(props) => props.fullheight && `height: calc(100% );`}
  ${(props) => props.fullheight && `grid-template-rows: repeat(6, 1fr);`}
  div {
    //display: grid;
    border: 1px solid #f5f7fa;
    ${StyledEvent} {
      //display: none;
    }
    ${StyledEvent}:nth-child(-n + 3) {
      //display: block;
    }

    span {
      text-align: left;
      //padding-left: 10px;
      height: fit-content;
      margin-left: 10px;
      margin-right: 1px;
      margin-bottom: 3px;
      //white-space: nowrap;
      //overflow-x: hidden;
      //text-overflow: ellipsis;
    }

    span.active {
      //today
      background-color: #3874ff;
      //border-bottom: 2px solid red;
      color: white;
      position: relative;
      padding: 2px;
      border-radius: 50%;
      width: fit-content;

      //padding-right: 10px;
    }
    span.active::before {
      //content: "Today ";
      font-size: 14px;
    }
  }
`;

export const HeadDays = styled.span`
  font-family: "Houschka Rounded Alt";
  text-align: center;
  border: 1px solid;
  height: fit-content;
  padding: 5px;
  background: #007bff;
  color: #ffff;
  font-size: 20px;
  border-width: 0px 1px;
  border-style: solid;
  border-color: #f5f7fa;
`;

export const DateControls = styled.div`
  width: 100%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 50% 50%;
  width: 82vw;
  height: 15%;
  margin-bottom: 0.5%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;

  @media (max-width: 640px) {
    display: grid;
    grid-template-rows: 36% 50% 28%;
  }

  ion-icon {
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

export const SeeMore = styled.p`
  font-size: 12px;
  padding: 0 5px;
  cursor: pointer;
  display: inline-block;
`;

export const PortalWrapper = styled.div`
  background: white;
  position: absolute;
  width: 30%;
  height: 15%;
  top: 50%;
  left: 50%;
  /* border: 1px solid; */
  border-radius: 6px;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 20px black;
  padding: 40px;

  h2 {
    font-size: 2rem;
  }

  ion-icon {
    font-size: 2rem;
    color: red;
    background: lightblue;
    padding: 10px 20px;
    border-radius: 6px;
  }

  p {
    margin-bottom: 15px;
  }

  ion-icon[name="close-outline"] {
    position: absolute;
    top: 10px;
    right: 10px;
    background: red;
    color: lightblue;
  }
`;

export const DivDays = styled.div`
  font-family: "Nunito Sans";
  background-color: ${({ monthColor }) => monthColor};
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  padding-left: 3px;
  //overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: "[...]";
  color: ${({ dayColor }) => dayColor};
`;

export const Scheduled = styled.div`
  background-color: #ffde59;
  border-radius: 50%;
  height: 15px;
  padding-right: 16px;
  margin-left: 5px;
  align-self: center;
`;

export const Done = styled.div`
  background-color: #2cff7f;
  border-radius: 50%;
  height: 15px;
  padding-right: 16px;
  margin-left: inherit;
  align-self: center;
`;

export const Canceled = styled.div`
  background-color: #bb1e00;
  border-radius: 50%;
  height: 15px;
  padding-right: 16px;
  margin-left: inherit;
  align-self: center;
`;

export const Types = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
  justify-content: space-between;
  @media (max-width: 640px) {
    width: 80%;
  }
`;

export const DivCurrentDate = styled.button`
  grid-area: 2 / 1 / 3 / 2;
  font-size: 1.6rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  color: #007bff;
  height: fit-content;
  width: 100%;
  background-color: #f5f7fa;
  justify-content: flex-start;
  @media (max-width: 1200px) {
    font-size: 1rem;
    width: 200px;
    text-align: left;
    display: flex;
  }
`;

export const CurrentMonth = styled.div`
  grid-area: 2 / 2 / 3 / 2;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 978px) {
    grid-area: auto;
    //font
  }
`;

export const DivCreatePlanner = styled.div`
  grid-area: 1 / 3 / 2 / 6;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2%;
`;

export const PositionTodayDone = styled.div`
  grid-area: 2 / 3 / 3 / 3;
  flex-direction: row;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 976px) {
    grid-area: 2 / 4 / 3 / 2;
    font-size: initial;
    justify-content: center;
  }
`;

export const MonthYear = styled.p`
  font-size: 25px;

  @media (max-width: 850px) {
    font-size: 20px;
  }
`;

export const Container = styled.div`
  width: 85vw;
  height: 82vh;
  background-color: #f5f7fa;
  border: 1px solid #f5f7fa;
  border-radius: 20px;
  box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.25), 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const DivPrevMonth = styled.div`
  cursor: pointer;
  margin-right: 5%;
  margin-top: 1%;
`;

export const DivNextMonth = styled.div`
  cursor: pointer;
  margin-left: 5%;
  margin-top: 1%;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 3.5vh;
  padding: 2;
  position: Relative;
  border-radius: 8px;
  background-color: #fff;
  border: none;
  :focus {
    outline: none;
  }
`;

export const DivIcon = styled.input`
  height: 3.5vh;
  border-radius: 8px;
`;
export const DivIconSearch = styled.div`
  width: 22vw;
  height: 3.5vh;
  display: flex;
  position: relative;
  background: #fff;
  border: 2px solid #cbd0dd;
  border-radius: 8px;
`;
export const DivIconS = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
  background: transparent;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 1%;
`;

export const DivClose = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 55%;
  z-index: 0;
`;

export const PositionSubject = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-10%, -100%);
`;

export const DivMonth = styled.div`
  height: 60vh;
`;

export const DivNumberPlanner = styled.span`
  border: transparent;
  margin-right: 5%;
`;

export const Day = styled.span`
  border: transparent;
  display: inline-block;
`;

export const DivDayHeader = styled.span`
  display: flex;
  justify-content: space-between;
  height: fit-content;
  @media (max-height: 666px) {
    line-height: 12px;
  }
`;
