import styled, { css } from "styled-components";

export const Container = styled.div`
  grid-column: ${(props) => props.$column};
  grid-row: ${(props) => props.$row};
  width: auto;
  margin-left: 5%;
  margin-right: 8%;
  margin-top: 1%;
  height: 60px;
  display: grid;
  grid-template-columns: 20% 80%;
  border-radius: 8px;
  background: #313132;
  border-bottom: 1px solid #313132;
`;
export const Logo = styled.div`
  grid-column: 1;
  padding-left: 100px;
`;
export const DivSear = styled.div`
  grid-column: 2;
  display: flex;
  width: 466px;
  height: 33px;
  margin-top: 12px;
  margin-left: 20%;
  background: #ffffff;
  border: 1px solid #cbd0dd;
  border-radius: 8px;
`;
export const Search = styled.div`
  width: 90%;
  height: 100%;
`;
export const GoSearch = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  padding-left: 5px;
  border-radius: 8px;
  ::-webkit-input-placeholder {
    color: #9fa6bc;
  }
`;
export const DivIcon = styled.button`
  ${(props) => {
    switch (props.$mode) {
      case "true":
        return css`
          display: none;
        `;
      default:
        return css``;
    }
  }}
  padding-top: 5px;
  width: 10%;
  height: 100%;
  background: #ffffff;
  border: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;
export const CloseSear = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "true":
        return css`
          display: block;
        `;
      default:
        return css`
          display: none;
        `;
    }
  }}
  z-index: 99;
  width: 80vw;
  height: 90vh;
  background-color: aliceblue;
`;


