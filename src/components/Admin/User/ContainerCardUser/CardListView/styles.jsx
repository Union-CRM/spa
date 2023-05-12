import styled from "styled-components";

//ok
//Container Father //
export const Container = styled.div`
  padding: 0px;
  height: 100%;
  padding-left: 0px;
  width: 96%;
  z-index: 0 !important;
`;
//ok
//Cards Clients //
export const Card = styled.div`
  border-left: ${(props) =>
    props.isActive ? "7px solid #E41165" : "7px solid #7a7a7a"};
  /*border-left: 7px solid ${(props) =>
    props.checked ? "ACTIVE" : "INACTIVE"};*/
  border-left: 7px solid ${(props) => (props.isActive ? "#E41165" : "gray")};
  grid-template-rows: 40% 60%;
  display: grid;
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  width: auto;
  cursor: pointer;
  height: 100%;
  z-index: 0 !important;
  padding-left: 10px;
  background-color: #f5f7fa;
`;
//ok
export const ToggleContainer = styled.label`
  background-color: ${(props) => (props.isActive ? "#00953b" : "#7a7a7a")};
  display: inline-block;
  height: 17.5px;
  width: 37px;
  top: 5px;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease-in;
`;
//ok
export const ToggleButton = styled.span`
  display: inline-block;
  position: absolute;
  top: 1px;
  left: 0px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: ${(props) => (props.checked ? "translateX(22px)" : "")};
  transition: transform 0.2s ease-in;
`;
//ok
export const InputToggle = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: 0;
  cursor: pointer;
`;

// Div Grid Header the Card //
//ok
export const Header = styled.div`
  grid-row: 1;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 20% auto;
  grid-template-columns: 60px auto;
  position: relative;
  margin-top: 2%;
`;

// Photo Client //
//ok
export const DivPhoto = styled.div`
  display: grid;
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
//ok
export const DivPhotoI = styled.div`
  background-color: #d9d9d9;
  border: 5px solid ${(props) => (props.isActive ? "#E41165" : "#7a7a7a")};
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  top: 25%;
`;

//ok
// Div Name Client, Email and Status/Tags //
export const DivDadosCard = styled.div`
  text-align: left;
  width: 96%;
  height: fit-content;
  display: grid;
  grid-row: 2;
  align-items: center;
  grid-column: 2;
  padding-left: 3%;
  margin-top: 5%;
`;

//ok
// Div Icons //
export const DivIcons = styled.div`
  display: flex;
  grid-row: 1;
  justify-content: end;
  padding-right: 5%;
  grid-gap: 5px;
  height: 100%;
  grid-column: 2;
  align-items: center;
  top: 10px;
  span {
    font-weight: 500;
    line-height: 15px;
    font-size: 0.9rem;

    color: ${(props) => (props.isActive ? "#00953b" : "#7a7a7a")};
  }
`;

// Div Info client //

//ok
export const DivInfo = styled.div`
  grid-row: 2;
  margin-top: 3%;
  position: relative;
  display: grid;
  width: 98%;
  height: auto;
  z-index: 0;
  grid-template-rows: auto;
`;

//ok
export const DivLevel = styled.span`
  display: flex;
  height: fit-content;
  width: 100%;
  position: relative;
  margin-top: 5px;
  flex-direction: row;
  justify-content: flex-start;
  span {
    color: rgba(0, 0, 0, 0.7);
  }
`;

//ok
export const Dot = styled.div`
  height: 10px;
  padding-right: 10px;
  border-radius: 50%;
  margin-top: 1%;
  //display: flex;
  align-self: center;
  margin-right: 3px;
  //overflow-x: visible;

  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

//ok
export const ContainerFather = styled.div`
  z-index: 10;
`;
