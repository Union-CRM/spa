import styled from 'styled-components'

// * Div Father * //

export const ContainerFather = styled.div`
  z-index: 999999;
  justify-content: center;
  align-items: center;
  grid-column: 1;
  position: relative;
`;

// Container ModalPopup //
export const Container = styled.div`
  grid-column: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -150%);
  position: relative;
  grid-column: 1;
  height:auto;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  z-index: 100;
  max-width: 350px;
  max-height: 250px;
  border-left: 16.56px solid #007bff;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #F5F7FA;
  border-left: 7px solid #007bff;
  @media (min-width: 100px) and (max-width: 500px) {
    justify-content: center;
  }
  @media (max-width: 1200px) {
    width: 300px;
    height: 210px;
  }
`;

// Content container //

export const Content = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 0.5%;
  margin-bottom: 2%;
  box-sizing: border-box;
  row-gap: 5%;
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

export const Button = styled.button`
    height: 4vh;
    width: 250px;
    border-radius: 8px;
    background-color: #FFFFFF;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    margin-top: 5%;
    cursor: pointer;
    align-self: center;
    margin-bottom: 3%;
    font-weight: 500;
    font-size: 18px;
    @media(max-width: 1200px) {
      font-size: 14px;
      width: 230px
    }
`
export const Title = styled.div`
  align-self: center;
  font-size: 32px;
  font-weight: 600;
  margin-top: 3%;
  @media(max-width: 1200px) {
    font-size: 24px;
  }
`

