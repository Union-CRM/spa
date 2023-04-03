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


`

export const StyledEvent = styled.div`
  display:flex;
  background: #ffffff;
  color: #8A94AD;
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
  ${(props) =>
    props.fullheight &&
    `grid-template-rows: repeat(6, 1fr);`}
  div {
    //display: grid;
    border: 1px solid #F5F7FA;
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

    span.active { //today
      background-color: #3874FF;
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
font-family: 'Houschka Rounded Alt';
  text-align: center;
  border: 1px solid;
  height: fit-content;
  padding: 5px;
  background: #E5F2FF;
  color: #000000;
  font-size: 20px;
  border-width: 0px 1px;
  border-style: solid;
  border-color: #F5F7FA;
`;

export const DateControls = styled.div`
  width: 100%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 50% 50%;
  width: 82vw;
  height: 20%;
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
  font-family: 'Nunito Sans';
  background-color: ${({ monthColor }) => monthColor};
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  padding-left:3px;
  //overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: "[...]";
  color:${({ dayColor }) => dayColor};

`

export const Scheduled = styled.div`
  background-color: #FFDE59;
  border-radius: 50%;
  height: 15px;
  padding-right: 16px;
  margin-left: 5px;
  align-self: center;
`

export const Done = styled.div`
  background-color: #2CFF7F;
  border-radius: 50%;
  height: 15px;
  padding-right: 16px;
  margin-left: inherit;
  align-self: center;
`

export const Canceled = styled.div`
  background-color: #BB1E00;
  border-radius: 50%;
  height: 15px;
  padding-right: 16px;
  margin-left: inherit;
  align-self: center;
`

export const Types = styled.div`
  display: flex;
  width: 20vw;
  justify-content: space-between;
  
`

export const DivCurrentDate = styled.button`
  grid-area: 2 / 1 / 3 / 2; 
  font-size: 25px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  color: #007BFF;
  height: fit-content;
  width: fit-content;
  justify-content: flex-start;
  background-color: #FFFFFF;
  @media (max-width: 640px) {
    inline-size: max-content;

  }
`

export const CurrentMonth = styled.div`
  grid-area: 2 / 2 / 3 / 2; 
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 640px) {
    grid-area: 2 / 1 / 3 / 2;
  }
`

export const DivCreatePlanner = styled.div`
  grid-area: 1 / 3 / 2 / 6;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2%;
`

export const PositionTodayDone = styled.div`
  grid-area: 2 / 3 / 3 / 3;
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
`

export const MonthYear = styled.p`
  font-size: 25px;
`

export const Container = styled.div`
 width: 85vw;
 height: 85vh;
 border: 1px solid #F5F7FA;
 border-radius: 20px;
 box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.25),
  2px 2px 4px rgba(0, 0, 0, 0.3);
`

export const DivPrevMonth = styled.div`
  cursor: pointer;
  margin-right: 5%;
  margin-top: 1%;
`

export const DivNextMonth = styled.div`
  cursor: pointer;
  margin-left: 5%;
  margin-top: 1%;
`

export const InputSearch = styled.input`
  width: 20vw;
  height: 3.5vh;
  border-radius: 10px;
  border: 1px solid #CBD0DD;
  `;

export const DivIcon = styled.input`
  width: 20vw;
  height: 3.5vh;
  border-radius: 8px;
`
export const DivIconSearch = styled.div`
  width: 20vw;
  height: 3.5vh;
  display: flexbox;
  position: relative;
 
`;
export const DivIconS = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
  margin-right: 5px;
  border: 1px solid #CBD0DD;
`

export const DivClose = styled.div`
  position: absolute;
  top:0px;
  left:0px;
  width:100vw;
  height:100vh;
  background-color: black;
  opacity: 55%;
  z-index: 0;
`