import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 1024px;
  grid-template-columns: 10% 90%;
  grid-template-rows: 110px 914px;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const Content = styled.div`
  margin-left: 2%;
  margin-right: 8%;
  grid-column: 2;
  grid-row: 2;
  background-color: #ffffff;
`;
