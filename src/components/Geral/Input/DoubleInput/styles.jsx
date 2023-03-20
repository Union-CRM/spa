import styled from "styled-components";

// Input

export const Input = styled.input`
  height: 35px;
  width: 240px;
  border-radius: 5px;
  position: relative;
  right: 0px;
  border: 2px solid #d9d9d9;
  background-color: rgba(0, 0, 0, 0);
  margin-top: 0px;
  float: left;
  display: flex;
  justify-content: space-between;
  grid-row: 2;
  padding-left: 10px;
`;

// Label title

export const Label = styled.label`
  font-style: normal;
  margin-top: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.8);
`;

// Containers and divs

export const Container = styled.div`
  box-sizing: border-box;
  width: auto;
  height: auto;
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0);
`;

export const Box = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 50% 50%;
  grid-template-columns: 51% 49%;
  left: 0px;
  align-items: center;
`;
