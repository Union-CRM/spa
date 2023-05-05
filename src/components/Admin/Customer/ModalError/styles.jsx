import styled from "styled-components";

// * Div Father * //

export const ContainerFather = styled.div`
  position: fixed;
  z-index: 5;
  justify-content: center;
  top: 50vh;
  left: 50vw;
  align-items: center;
`;

// Container ModalPopup //
export const Container = styled.div`
  transform: translate(-50%, -50%);
  width: 25%;
  grid-column: 1;
  position: relative;
  grid-column: 1;
  height: auto;
  justify-content: center;
  box-sizing: border-box;
  z-index: 999999;
  min-width: 300px;
  max-width: 400px;
  max-height: 40%;
  min-height: 20%;
  border-left: 16.56px solid #e41165;

  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #f5f7fa;
  border-left: 7px solid #e41165;
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
  background: #e41165;
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
