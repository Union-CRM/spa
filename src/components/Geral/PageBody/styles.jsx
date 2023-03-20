import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-columns: fit-content(10%) auto;
  grid-template-rows: 110px 914px;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const Content = styled.div`
  margin-left: auto;
  min-width: 87%;
  max-width: 87%;
  height: 100vh;
  margin-right: 8%;
  margin-bottom: 50px;
  grid-column: 2;
  grid-row: 2;
`;
