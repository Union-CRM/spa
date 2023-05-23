import styled from "styled-components";

//Container Father //
export const Container = styled.div`
  padding: 0px;
  height: 100%;
  padding-left: 0px;
  width: 96%;
  z-index: 0 !important;
`;

//Cards Clients //
export const Card = styled.div`
  border-left: ${(props) =>
    props.isActive ? "7px solid #E5F2FF" : "7px solid #7a7a7a"};
  border-left: 7px solid ${(props) => (props.checked ? "Active" : "Inactive")};
  grid-template-rows: 40% 60%;
  display: grid;
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;

  width: auto;
  height: 150px;
  z-index: 0 !important;
`;

export const ToggleContainer = styled.label`
  background-color: ${(props) => (props.isActive ? "#00953b" : "#7a7a7a")};
  display: inline-block;
  height: 17.5px;
  width: 37px;
  top: 15%;
  margin-right: 3px;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease-in;
`;

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

export const Header = styled.div`
  grid-row: 1;
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const DivDadosCard = styled.div`
  text-align: center;
  width: fit-content;
  height: fit-content;
  display: block;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  align-items: center;
`;

// Div Icons //
export const DivIcons = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 5%;
  height: 100%;
  width: 100%;
`;

// Styles Status and tags //
export const DivTagsStatus = styled.div`
  margin-top: 7px;
  display: grid;
  margin-left: 10px;
  justify-content: left;
  cursor: pointer;
`;

export const TagsSpan = styled.div`
  display: flex;
  color: #ffffff;
  background-color: ${(props) => (props.isActive ? "#007bff" : "#7a7a7a")};
  width: fit-content;
  height: 12px;
  width: 50px;
  border-radius: 4px;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 2%;
  cursor: pointer;
  text-transform: lowercase;
`;

export const ContainerFather = styled.div`
  z-index: 10;
`;

export const DivTag = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  //align-items: center;
  position: relative;
  flex-wrap: wrap;
  cursor: pointer;
  p {
    text-align: center;
    font-size: 14px;
    margin-left: 10px;
    align-items: center;
  }
`;
export const DivContentTags = styled.div`
  text-align: center;
  width: fit-content;
  height: fit-content;
  display: flex;
  padding: 2px;
  position: relative;
  top: -20px;
  align-items: center;
  background-color: ${(props) => (props.colorTag ? props.colorTag : "pink")};
  color: ${(props) => (props.isActive ? "#000" : "#fff")};
  border-radius: 8px;
  margin-right: 10px;
  margin-bottom: 2px;
  font-size: 12px;
  margin-left: 10px;
  justify-content: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const DivImg = styled.div`
  position: relative;
  align-items: center;
  margin-top: -10%;
  border-bottom: ${(props) =>
    props.isActive ? "2px solid  #e41165" : "2px solid #7a7a7a"};

  filter: ${(props) => (props.isActive ? "" : "grayscale(100%)")};
`;

export const Img = styled.img`
  height: 60px;
  width: 65px;
  border-radius: 4px;
`;
export const DivImgTag = styled.div`
  position: relative;
  align-items: center;
  filter: ${(props) => (props.isActive ? "" : "grayscale(100%)")};
`;

export const ImgTag = styled.img`
  height: 22px;
  width: 27px;
`;
