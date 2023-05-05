import styled, { css } from "styled-components";

export const ContainerCards = styled.div`
  margin-left: 1%;
  background-color: #ffffff;
  height: 20vh;
  width: 98%;
  border: 1px groove;
  border-radius: 12px;
  display: flex;
  margin-bottom: 10%;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  filter: drop-shadow;
`;

export const H1 = styled.h1`
  font-family: Houschka Rounded Alt;
  line-height: 36px;
  font-size: 30px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  margin-left: 10.5%;
`;

export const TitleDiv = styled.div`
  position: relative;
  width: 100%;
`;
export const DivInfo = styled.div`
  position: relative;
  margin-left: 10%;
  width: 100%;
  word-spacing: 10px;
  display: flex;
`;

export const DivPhoto = styled.div`
  border-radius: 50%;
  border: 3px solid #e41165;
  width: 35px;
  height: 35px;
  background-color: #d9d9d9;
  margin: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const NameGroup = styled.div`
  position: relative;
  margin-left: 10%;

  width: 100%;
`;

export const DivTextCard = styled.div`
  align-items: left;

  margin-left: 10%;
  margin-right: 0;
  display: flex;
  box-sizing: border-box;
`;

export const TextSubject = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  word-spacing: 10px;
  margin-right: 10px;
`;

export const ClientContent = styled.div`
  display: grid;
`;

export const UserContent = styled.div`
  display: grid;
  position: relative;
  height: fit-content;
  width: auto;
  max-width: 100%;
  align-items: right;
  margin-left: 15%;
  top: 24%;
`;

export const DivResponsible = styled.div`
  display: inline-flex;
  position: relative;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

export const DivUserInformation = styled.div`
  display: grid;
  grid-template-columns: auto 78%;
  grid-column-gap: 6%;
  grid-area: 2 / 1 / 3 / 2;
  height: fit-content;
  margin-top: 3%;
  max-width: 100%;
  width: fit-content;
`;

export const DivNameEmail = styled.div`
  width: fit-content;
  grid-template-rows: 30% 70%;
`;
export const Email = styled.div`
  overflow-x: auto;
  width: auto;

  &::-webkit-scrollbar {
    width: auto;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: #949494;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    height: 50%;
    background-color: #4b4b4b;
    width: 15px;
    border-radius: 10px;
  }

  p {
    text-align: justify;
    position: relative;
    font-size: 0.8rem;
  }
`;

export const NameUser = styled.div`
  font-size: 12px;
`;
export const DivDonut = styled.div`
  position: relative;
  margin: 0;
  background-color: rgba(255, 255, 255, 1);
  margin-left: 10px;
  width: fit-content;
`;
