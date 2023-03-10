import styled, { css } from "styled-components";

export const Card = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "Active":
        return css`
          border-left: 7px solid #00953b;
        `;

      case "Inactive":
        return css`
          border-left: 7px solid #7a7a7a;
        `;
      default:
        return css`
          border-left: 7px solid #6e6b6b;
        `;
    }
  }}
  width: 260px;
  height: 146px;
  border-radius: 8px;
  margin-top: 30px;
  margin-left: 40px;
  display: block;
  background-color: #f5f7fa;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;
export const Status = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "Active":
        return css`
          background-color: #00953b;
          text-transform: lowercase;
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
  width: 17%;
  height: 15px;
  border-radius: 8px;
  margin-top: 22%;
  margin-left: 2%;
  font-size: 10px;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const StatusSpan = styled.div`
  color: #ffffff;
  font-size: 12;
  margin-top: 0;
  font-family: Imported !important;
  text-align: center;
`;
export const TagsSpan = styled.div`
  color: #ffffff;
  background-color: #007bff !important;
  font-size: 12;
  margin-top: 5;
  font-family: Imported !important;
  border-radius: 8px;
  text-align: left;
  padding-left: 5px;
  height: 100%;
`;
export const Topic = styled.div`
  margin-left: 2%;
  margin-top: 1%;
  font-size: 12px;
  margin-bottom: 18px;
  font-family: "Houschka Rounded Alt";
  position: absolute;
`;
export const IconEdit = styled.span`
  width: 12px;
  height: 12px;
  right: 0;
  margin-top: 8px;
  cursor: pointer;
  position: relative;
`;
export const IconTag = styled.span`
  margin-top: 2px;
  padding-left: 8px;
  position: absolute;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  &::-webkit-scrollbar {
    width: 18px;
    height: 10px;
    margin-right: 10px;
    float: right;
  }

  &::-webkit-scrollbar-track {
    box-shadow: 5px black;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    height: 80%;
    background-color: #afb2bb;
    margin-left: 20px;
    width: 15px;
    border-right: 6px solid white;
    border-top: 12px solid white;
  }
`;

export const DivPhoto = styled.div`
  align-items: left;
  display: flex;
  margin-left: 4%;
  margin-top: 4%;
`;
export const DivPhotoI = styled.div`
  height: 46.81px;
  width: 46.81px;
  border-radius: 100%;
  background-color: #d9d9d9;
  border: solid #007bff;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const DivToggle = styled.div`
  width: 27px;
  height: 13px;
  position: relative;
  margin-top: 8px;

  ${(props) => {
    switch (props.$mode) {
      case "Active":
        return css`
          transform: rotateY(180deg);
        `;
      default:
        return css``;
    }
  }}
`;
export const DivIcons = styled.div`
  display: flex;
  grid-column-gap: 10px;
  margin-left: 14%;
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

  :checked ~ label {
    background: #abaaaa;
  }
  :checked ~ label span {
    right: -2px;
  }
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
        `;

      case "Inactive":
        return css`
          background: #7a7a7a;
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
export const DivDadosCard = styled.div``;
export const NameClient = styled.h2`
  margin-left: 1%;
  margin-top: 2.5%;
  font-style: Houschka Rounded Alt;
  font-size: 18px;
  max-width: 190px;
  position: absolute;
  text-align: left;
`;
export const EmailClient = styled.p`
  margin-left: 1%;
  margin-top: 5.2%;
  font-style: Houschka Rounded Alt;
  font-size: 12px;
  max-width: 190px;
  position: absolute;
  text-align: left;
`;
export const DivText = styled.div`
  display: flex;
`;
export const LineText = styled.p`
  text-align: left;
  height: 14px;
  display: inline-block;
  font-size: 12px;
`;
export const TitleText = styled.p`
  text-align: left;
  height: 14px;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
`;
export const Lline = styled.p`
  text-align: left;
  height: 14px;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  color: #007bff;
  margin-left: 5px;
  margin-right: 5px;
`;
