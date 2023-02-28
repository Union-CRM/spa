import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  grid-column: ${(props) => props.$column};
  grid-row: ${(props) => props.$row};
  width: ${(props) => (props.$mode ? "80px" : "186px")};
  display: grid;
  grid-template-rows: 50px 100px 162px 295px 417px;
  height: 100vh;
  background: #1e2222;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 8px 8px 0px;
`;
export const OpenClose = styled.button`
  transform: ${(props) => (props.$mode ? "rotateY(180deg)" : "")};
  grid-row: 1;
  background-color: #1e2222;
  margin-top: 10px;
  margin-right: 2px;
  border: none;
  color: #f5f7fa;
  border-top-right-radius: 8px;
  :hover {
    color: #e3e6ed;      
  }
`;



export const Logout = styled.button`
  background-color: #1e2222;
  height: fit-content;
  width: fit-content;
  grid-row: 5;
  margin-top: 28vh;
  margin-bottom: 55px;
  border: none;
  margin-left: ${(props) => (props.$mode ? "25px" : "55px")};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$mode ? "center" : "left")};
  :hover {
    opacity: 0.5;
  }
`;

export const Icon = styled.div`
  width: 100%;
  margin-left: ${(props) => (props.$mode ? "" : "15px")};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$mode ? "center" : "left")};
`;
export const User = styled.div`
  width: ${(props) => (props.$mode ? "80px" : "186px")};
  display: block;
  align-items: stretch;
  justify-content: center;
  grid-row: 3;
  padding-top: 10px;
  text-align: center;
`;
export const Img = styled.div`
  margin-left: ${(props) => (props.$mode ? "15px" : "53px")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$mode ? "50px" : "80px")};
  height: ${(props) => (props.$mode ? "50px" : "80px")};
  border-radius: 50%;
  margin-bottom: 5px;
  background-color: gray;
`;
export const Name = styled.h1`
  font-weight: 100;
  color: #ffff;
  text-align: left;
  margin-left: 15px;
  font-size: 12px;
  display: ${(props) => (props.$mode ? "none" : "")};
`;
export const Id = styled.h2`
  font-weight: 100;
  color: #ffff;
  text-align: left;
  margin-left: 15px;
  font-size: 10px;
  display: ${(props) => (props.$mode ? "none" : "")};
`;
export const Email = styled.h2`
  text-decoration: underline;
  font-weight: 100;
  color: #ffff;
  text-align: left;
  margin-left: 15px;
  font-size: 12px;
  display: ${(props) => (props.$mode ? "none" : "")};
`;
export const Ul = styled.ul`
  width: ${(props) => (props.$mode ? "80px" : "100%")};
  grid-row: 4/5;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: auto;
`;
export const Li = styled.li`
  width: 100%;
  justify-content: center;
  height: 59px;
  display: flex;
  text-align: center;
  vertical-align: middle;
  background-color: #1e2222;

  :hover {
    background-color: #007bff;
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
