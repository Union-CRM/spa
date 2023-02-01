import styled from "styled-components";

export const Container = styled.div`
  grid-column: ${(props) => props.$column};
  grid-row: ${(props) => props.$row};
  width: auto;
  margin-left: 2%;
  margin-right: 8%;
  margin-top: 1%;
  height: 60px;
  border-radius: 8px;

  background: #1e2222;
  border-bottom: 1px solid #1e2222;
`;
export const Search = styled.input`
  width: 466px;
  height: 33px;
  margin-top: 12px;
  margin-left: 35%;
  background: #ffffff;
  border: 1px solid #cbd0dd;
  border-radius: 8px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
