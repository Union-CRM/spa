import styled, {css} from "styled-components";

export const DivP = styled.div`
  background-color: #f5f7fa;
  width: 35vw;
  border-radius: 8px;
  margin-top: -10px;
  position: fixed;
  top: 10%;
  left: 35%;
  z-index: 1;
  height: 70%;
  @media (max-height: 300px) {
    height: 75vh;
    overflow-y: scroll;
  }

  /* Adjust conditional styles based on your requirements */
  ${(props) => {
    if (props.$mode === 4) { // For $mode equal to 4
      return css`
        height: 80vh;
      `;
    } else {
      return css`
        height: fit-content;
      `;
    }
  }}

  `;

  export const Ddata = styled.div`
  display: flex;
  justify-content: right;
  align-items: flex-end;
  `;
  
  export const Header = styled.div`

  display: grid;
  grid-template-columns: 60% 35%;
  grid-template-rows: 1fr;

  margin-left: 8%;
  margin-right: 5.5%;
  margin-top: 5%;
  margin-bottom: 8%;
  `;
  
  export const DivRemark = styled.div`
  display: flex;
  position: relative;
  justify-content: left;
  align-items: flex-start;
`

export const TextMonDay = styled.p`

font-family: 'Houschka Rounded Alt';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
`;

export const DivCard = styled.div`
  align-self: center;
  margin: 0 auto;
  height: 70vh;
  overflow-y:  scroll;
  overflow-x: hidden;
  padding-bottom: 20px;
  margin: 0 5px 5px 0 ;
  &::-webkit-scrollbar {
    width: 11px;
    height: 10px;
    float: right;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: 5px black;
    border-radius: 10px;
    margin-right: 5px;
  }

  &::-webkit-scrollbar-track-piece {
    padding-top: 0px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    height: 80%;
    margin-left: 20px;
   
    border-radius: 10px;
    background-color: #d9d9d9;
    box-shadow: 5px black;
  }
`;

export const DivInfo = styled.div`
position:relative;
top:15%;
left:1%;
`;