import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  grid-column: ${(props) => props.$column};
  grid-row: ${(props) => props.$row};
  width: ${(props) => (props.$mode ? "80px" : "186px")};
  display: grid;
  grid-template-rows: 7% 22% 9% 28% 32%;
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
  background-color: #1e2222;
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
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
  grid-row: 2;
  padding-top: 0px;
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
  border: 3px solid #007bff;
  margin-bottom: 5px;
  background-color: white;
`;
export const Name = styled.h1`
  font-weight: 100;
  color: #ffff;
  align-self: center;
  font-size: 12px;
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
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const DivPhotoI = styled.div``;
