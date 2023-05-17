import styled, { css } from "styled-components";

// * Div Father * //

export const ContainerFather = styled.div`
  z-index: 999999;
  justify-content: center;
  align-items: center;
  grid-column: 1;
  position: relative;
  animation: 0.5s some linear forwards;
  animation-delay: 6s;
`;



// Container ModalPopup //
export const Container = styled.div`
  left: 50%;
  transform: ${(props) => props.subject || "translate(-50%, 200%)"};
  width: 25%;
  grid-column: 1;
  position: relative;
  grid-column: 1;
  justify-content: center;
  box-sizing: border-box;
  z-index: 999999;
  min-width: 300px;
  max-width: 400px;
  max-height: 150px;
  min-height: 100px;
  border-left: 16.56px solid #007bff;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #f5f7fa;
  border-left: 7px solid #007bff;
  @media (min-width: 100px) and (max-width: 500px) {
    justify-content: center;
  }
`;

// Content container //

export const Content = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  padding-top: 0.5%;
  margin-bottom: 2%;
  box-sizing: border-box;
`;

export const Span = styled.span`
  font-weight: 600 !important;
  margin-top: 5%;
  margin-bottom: 6%;
  font-size: 1rem;
  align-self: center;
  display: flex;
  flex-direction: row;
`;

export const Circle = styled.div`
  background: #007bff;
  border-radius: 100%;
  width: 63px;
  height: 63px;
  margin-top: 20px;
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: row;
  span {
    font-size: 2.5rem;
    font-weight: 600;
    flex-direction: column;
    justify-content: center;
    display: flex;
    color: #ffff;
    align-items: center;
  }
`;
