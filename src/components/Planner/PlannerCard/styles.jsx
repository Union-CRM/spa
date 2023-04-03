import styled from "styled-components";

export const DivP = styled.div`
  overflow: auto;
  background-color: #f5f7fa;
  width: 640px;
  height: 787px;
  border-left: 15px solid #007BFF;
  border-radius: 8px;
  margin-top: -10px;
  overflow: auto;
  
  
  &::-webkit-scrollbar {
    width: 18px;
    height: 10px;
    margin-right: 10px;
    float: right;
    
  }

  &::-webkit-scrollbar-track {
    box-shadow: 5px black;
  
  }

  &::-webkit-scrollbar-track-piece {
    background-color: #f5f7fa;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    height: 80%;
    background-color: #afb2bb;
    margin-left: 20px;
    width: 15px;
    border-right: 6px solid #f5f7fa;
    border-top: 12px solid #f5f7fa;
  }
`;
export const Ddata = styled.div`
    display: flex;
    position: relative;
    justify-content: right;
    align-items: flex-end;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 273px);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-left: 45px;
  margin-top: 28px;
  margin-bottom: 32px;
`

export const DivPlanner = styled.div`
    display: flex;
    position: relative;
    justify-content: left;
    align-items: flex-start;
`