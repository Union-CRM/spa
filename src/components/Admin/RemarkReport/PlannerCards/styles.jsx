import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  display: grid;
  cursor: context-menu;
  justify-self: start;
  align-self: start;
  background: ${(props) => props.color};
  grid-template-columns: repeat(auto-fit, minmax(16.6666%, 6fr));
  width: 100%;
  :hover {
    background-color: #EAEAEA;
    cursor: context-menu;
    //border: #
  }
`;

export const DivInfo = styled.div`
  border: 1px solid #888C95;
  padding:2%;
  display: flex;
  flex-direction: column;
  cursor: context-menu;
  align-items:center;
  justify-content: center;
`;

export const DivCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center !important;
  width: 100%;
  justify-content: center;
`;