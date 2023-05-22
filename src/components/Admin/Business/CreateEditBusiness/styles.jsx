import styled from 'styled-components'

export const Container = styled.div`
  grid-column: 2;
  width: 80%;
  min-width: 300px;
  height: 100%;
  background: #fff;
  display: grid;
  border-left: 16.56px solid #e41165;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  grid-template-rows: 10% 75% 15%;
  @media (min-width: 100px) and (max-width: 502px) {
    height: 81vh;
    width: 100%;
    flex-direction: flex-start;
    position: relative;
  }
`;

export const ContainerCentral = styled.div`
  justify-content: end;
  display: flex;
  grid-row: 1;
  @media (min-width: 100px) and (max-width: 500px) {
    grid-column: 1;
    display: grid;
    position: relative;
    top: 0px;
    left: 0;
    justify-content: start;
  }
`;

export const PositionTitle = styled.div`
  margin-left: 0px;
  height: 100%;
  margin-left: 7%;
  grid-row: 1;
  display: grid;
  grid-template-columns: 80% 20%;
  @media (min-width: 50px) and (max-width: 500px) {
    display: grid;
    grid-template-columns: 70% 10%;
  }
`;

export const Form = styled.div`
  position: relative;
  display: grid;
  height: 50%;
  width: 93%;
  padding-left: 7%;
  @media (min-width: 1600px) {
  }
`;

export const H1 = styled.h1`
  width: fit-content;
  font-family: "Houschka Rounded Alt";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  grid-row: 2;
  height: fit-content;
  @media (min-width: 100px) and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const DivButton = styled.div`
  justify-content: center;
  display: grid;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-row: 3;
`;

export const PositionButtonCancel = styled.div``;

export const ClickButton = styled.div`
  display: block;
`;

export const DivBusinessName = styled.div`
`;

export const Label = styled.label`
` ;

export const Input = styled.input`
    width: 90%;
    border-radius: 5px;
    height: 28px;
    margin-top: 1%;
    border: 2px solid ${(props)=> props.flag ? "#b03535" : "#888C95"};
    @media(max-width: 1367px){
      width: 90%;
    }
`;

export const DivCodeStatus = styled.div`
    display: flex;
    column-gap: 15%;
`;

export const DivCode = styled.div`
  width: 40%;
  @media(max-width: 1367px){
    width: 40%;
  }
`;

export const DivStatus = styled.div`
  width: 40%;

`;

export const DivSegment = styled.div`
  width: 104%;
`;

export const DivAtivo = styled.div`
    margin-right: 2.2%;
  `
