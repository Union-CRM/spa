import styled, { css } from "styled-components";

export const DivModal = styled.div``;

//Container Father //
export const Container = styled.div`
  padding: 0px;
  height: 150px;
  padding-left: 0px;
  width: 96%;
  z-index: 0 !important;
`;

//Cards Clients //
export const Card = styled.div`
  border-left: ${(props) =>
    props.isActive ? "7px solid #00953b" : "7px solid #7a7a7a"};
  border-left: 7px solid ${(props) =>
  (props.checked ? "Active" : "Inactive")};
  border-left: 7px solid ${(props) => (props.isActive ? "green" : "gray")};
  grid-template-rows: 25% 75%;
  display: grid;
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  cursor: pointer;
  width: auto;
  height: 100%;
  z-index: 0 !important;
  padding-left: 10px;
`;

export const ToggleContainer = styled.label`
  background-color: ${(props) => (props.isActive ? "#00953b" : "#7a7a7a")};
  display: inline-block;
  height: 17.5px;
  width: 37px;
  top: 20%;
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
  width: 100%;
  height: 100%;
  display: flex;
`;

// Photo Client //

export const DivPhoto = styled.div`
  display: grid;
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const DivPhotoI = styled.div`
  background-color: #d9d9d9;
  border: 5px solid #007bff;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  top: 30%;
`;

// Div Name Client, Email and Status/Tags //
export const DivDadosCard = styled.div`
  text-align: left;
  margin-top: 5%;
  width: 100%;
  height: 87px;
  cursor: pointer;
`;

// Div Icons //
export const DivIcons = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 5px;
  width: 15%;
`;

// Div Info client //

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

// Styles Status and tags //
export const DivTagsStatus = styled.div`
  margin:2% 0px 2% 0px;
  display: flex;
  justify-content: center;
`;

export const Status = styled.div`
  display: flex;
  color: #ffffff;
  width: fit-content;
  height: 15px;
  border-radius: 8px;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2%;
  background-color: ${(props) => (props.isActive ? "#00953b" : "#7a7a7a")};
`;

export const TagsSpan = styled.div`
  display: flex;
  color: #ffffff;
  background-color: #007bff !important;
  width: fit-content;
  height:15px;
  border-radius: 8px;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2%;
  margin-left: 2%;
`;

export const IconTag = styled.span`
  display: flex;
  margin-top: 2px;
  margin-left: 2px;
`;

// Styles Icons Edit and Toggle //

export const IconEdit = styled.span`
  width: 12px;
  height: 12px;
  margin-top: 8px;
  cursor: pointer;
`;

export const DivToggle = styled.div`
  width: 30px;
  height: 13px;
  margin-top: 8px;
  ${(props) => {
    switch (props.$mode) {
      case "Active":
        return css`
          transform: rotateY(180deg);
        `;
      case "Inactive":
        return css`
          transform: rotateY(180deg);
        `;
      default:
        return css``;
    }
  }}
`;

export const LabelToggle = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  ${(props) => {
    switch (props.$mode) {
      case "Active":
        return css`
          background: #00953b;
          left: 2px;
        `;

      case "Inactive":
        return css`
          background: #7a7a7a;
          :checked ~ label span {
            right: 2px;
            background: #7a7a7a;
          }
        `;
      default:
        return css`
          background-color: #6e6b6b;
        `;
    }
  }}

  :after {
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    border-radius: inherit;
  }
`;

// Infos Clients //
export const Line = styled.p`
  color: #007bff;
  padding-right: 5px;
  padding-left: 3px;
  font-weight: 600;
`;

export const DivRole = styled.span`
  display: flex;
  height: fit-content;
  width: 100%;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  span {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const DivCustomer = styled.span`
  display: flex;
  height: fit-content;
  width: 100%;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  span {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const DivBusiness = styled.span`
  display: flex;
  height: fit-content;
  width: 100%;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  span {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const DivRelease = styled.span`
  display: flex;
  height: fit-content;
  width: 90%;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  color: rgba(0, 0, 0, 0.7);
`;

// * Title and Value Infos* //
export const TitleInfo = styled.span`
  display: flex;
  font-weight: 900;
  font-style: bold;
  font-size: 1rem;
  span {
    color: #888c95;
    font-weight: 700;
    margin-right: 2px;
    margin-left: 5px;
  }
`;

export const ValueInfo = styled.span`
  font-weight: 500;
  font-size: 1rem;
`;

// VERIFICAR //
export const Span = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  background: #ffffff;
  position: absolute;
  z-index: 2;
  right: 50%;
  top: 0;
  border: 1px solid grey;
  border-radius: 50%;

  :after {
    content: "";

    position: absolute;
    left: 15%;
    top: 25%;

    width: 70%;
    height: 50%;

    background: white;
    border-radius: inherit;
  }

  :before {
    content: "";

    position: absolute;
    top: 50%;
    margin-top: -12px;
    right: -50%;

    text-transform: uppercase;
    font-weight: bold;
    font-family: Arial, sans-serif;
    font-size: 24px;

    color: #fff;
  }
`;

export const ContainerFather = styled.div`
  z-index: 10;
`;

export const DivTeste = styled.span`
  display: flex;
  height: fit-content;
  flex-direction: row;
  align-self: center;
  color: rgba(0, 0, 0, 0.7);
`;

export const NameBusiness = styled.div`
  font-style: bold;
  font-weight: 600;
  align-self: center;
`

export const HeaderTags = styled.div`
  grid-row: 1;
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TagsStatus = styled.div`
  margin-top:3.5%;
  display: grid;
  margin-left: 10px;
  justify-content: left;
  cursor: pointer;
  z-index: 2;
`;

export const DivTagsSpan = styled.div`
  display: flex;
  color: #ffffff;
  background-color: ${(props) => (props.isActive ? "#007bff" : "#007bff")};
  width: fit-content;
  height:20px;
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

export const DivImgTag = styled.div`
  position: relative;
  align-items: center;
  filter: ${(props) => (props.isActive ? "" : "grayscale(100%)")};
`;

export const ImgTag = styled.img`
  height: 22px;
  width: 27px;
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
  border-radius: 8px;
  margin-right: 10px;
  margin-bottom: 2px;
  font-size: 12px;
  margin-left: 10px;
  justify-content: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const DivCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`