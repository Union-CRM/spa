import styled, { css } from "styled-components";

export const Card = styled.div`
  border-left: 19px solid;
  border-left: double 19px transparent;
  border-radius: 20px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #dc0916, #f41fd6);
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 8px;
  width: 575px;
  height: 694px;
  background-color: #f5f7fa;
  color: #2b2b2b;
  top: 20px;
  position: relative;
  align-items: center;
  display: grid;
  margin-left: 20px;
  grid-template-rows: 10% 50% 0% 50%;
`;

export const H1 = styled.h1`
  font-size: 32px;
  grid-row: 1;
  margin-top: 10px;
  margin: 10px 0px 0px 20px;
  margin-left: 29px;
`;

export const Box = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 51% 49%;
  left: 0px;
  align-items: center;
  grid-row: 3;
`;

export const BoxInput = styled.div`
  grid-row: 2;
`;
export const Div = styled.div`
  justify-content: center;
  display: grid;
  grid-row-gap: 20px;
  width: 100%;
  margin-top: 40%;
  position: relative;
  right: 20px;
`;
