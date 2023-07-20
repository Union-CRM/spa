import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  grid-column: ${(props) => props.$column};
  grid-row: ${(props) => props.$row};
  width: ${(props) => (props.$mode ? "80px" : "186px")};
  display: grid;
  grid-template-rows: 5% 22% 20% 20% 5%;
  height: 100vh;
  min-height: 300px;
  background: #1e2222;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 8px 8px 0px;
  @media screen and (max-height: 500px) {
    grid-template-rows: auto auto auto auto auto;
  }
`;

export const OpenClose = styled.button`
  transform: ${(props) => (props.$mode ? "rotateY(180deg)" : "")};
  grid-row: 1;
  align-items: end;
  padding-bottom: 5%;
  display: flex;
  position: relative;
  background: transparent;
  border: none;
  margin-left: ${(props) => (props.$mode ? "7%" : "70%")};
  color: #f5f7fa;
  border-top-right-radius: 8px;
  justify-content: ${(props) => (props.$mode ? "center" : "left")};
  :hover {
    color: #e3e6ed;
    cursor: pointer;
  }
`;

export const LogoutButton = styled.button`
  background-color: #1e2222;
  height: fit-content;
  width: fit-content;
  //grid-row: 5;
  //margin-top: 28vh;
  margin-top: ${(props) => (props.$mode ? "60%" : "10%")};
  border: none;
  margin-left: ${(props) => (props.$mode ? "40%" : "34px")};
  display: flex;
  justify-content: ${(props) => (props.$mode ? "" : "left")};
`;

export const Icon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  bottom: ${(props) => (props.$mode ? "50%" : "0px")};
  margin-top: ${(props) => (props.$mode ? "0%" : "0")};
  margin-left: ${(props) => (props.$mode ? "" : "15px")};
  justify-content: ${(props) => (props.$mode ? "center" : "left")};
`;

export const User = styled.div`
  width: ${(props) => (props.$mode ? "80px" : "186px")};
  height: ${(props) => (props.$mode ? "70%" : "100%")};
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
  grid-row: 2;
  padding-top: 0%;
  padding-bottom: 3%;
  position: relative;
  text-align: center;
  background: transparent;
`;
export const Img = styled.div`
  margin: ${(props) => (props.$mode ? "15px" : "0 auto")};
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  width: ${(props) => (props.$mode ? "40px" : "60px")};
  height: ${(props) => (props.$mode ? "40px" : "60px")};
  border-radius: 50%;
  border: ${({ level }) => {
    if (level > 1) {
      return "3px solid #E41165 ";
    } else {
      return "3px solid #007bff";
    }
  }};
  margin-top: ${(props) => (props.$mode ? "0" : "0%")};
  margin-bottom: ${(props) => (props.$mode ? "10%" : "3%")};
  margin-left: ${(props) => (props.$mode ? "20%" : "33%")};
  background-color: white;
`;

export const Name = styled.h1`
  font-weight: 100;
  color: #ffff;
  align-self: center;
  font-size: 12px;
  width: 90%;
  padding-top: 1%;
  display: ${(props) => (props.$mode ? "none" : "")};
`;
export const Id = styled.h2`
  font-weight: 100;
  color: #ffff;
  align-self: center;
  font-size: 10px;
  display: ${(props) => (props.$mode ? "none" : "")};
`;
export const Email = styled.h2`
  text-decoration: underline;
  font-weight: 100;
  color: #ffff;
  align-self: center;
  font-size: 12px;
  display: ${(props) => (props.$mode ? "none" : "")};
`;
export const Ul = styled.ul`
  width: ${(props) => (props.$mode ? "80px" : "100%")};
  grid-row: 4/5;
  list-style-type: none;
  margin-top: 40%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-template-rows: auto;
  @media (max-width: 1367px) {
    margin-top: 55%;
  }
`;

export const Li = styled.li`
  width: 100%;
  justify-content: center;
  height: 59px;
  display: flex;
  text-align: center;
  vertical-align: middle;
  background-color: ${({ selected, level }) => {
    if (selected && level > 1) {
      return "#e4116575";
    } else if (selected && level === 1) {
      return "#007bff83";
    } else {
      return "#1e2222";
    }
  }};
  @media (max-width: 1367px) {
    height: 35px;
  }
  :hover {
    background-color: ${({ level }) => {
      if (level > 1) {
        return "#e41165";
      } else {
        return "#007bff";
      }
    }};
  }
  @media (min-width: 1500px) and (max-width: 2000px) {
    height: 50px;
  }
`;

export const Slink = styled(Link)`
  padding: 0;
  margin: 0;
  text-decoration: none;
`;

export const Span = styled.span`
  color: #ffff;
  margin-left: 10px;
  display: ${(props) => (props.$mode ? "none" : " flex")};
`;

export const DivPhotoI = styled.div``;

export const DivDots = styled.div`
  display: flex;
  margin: 0 auto;
  width: 75px;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.$mode ? "none" : "flex")};
`;

export const Dot1 = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 30px;
  background-color: ${({ level }) => {
    if (level >= 1) {
      return "#E41165";
    } else {
      return "#FFFFFF";
    }
  }};
`;

export const Dot2 = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 30px;
  background-color: ${({ level }) => {
    if (level >= 2) {
      return "#E41165";
    } else {
      return "#FFFFFF";
    }
  }};
`;
export const Dot3 = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 30px;
  background-color: ${({ level }) => {
    if (level >= 3) {
      return "#E41165";
    } else {
      return "#FFFFFF";
    }
  }};
`;

export const Dot4 = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 30px;
  background-color: ${({ level }) => {
    if (level >= 4) {
      return "#E41165";
    } else {
      return "#FFFFFF";
    }
  }};
`;

export const Dot5 = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 30px;
  background-color: ${({ level }) => {
    if (level >= 5) {
      return "#E41165";
    } else {
      return "#FFFFFF";
    }
  }};
`;
