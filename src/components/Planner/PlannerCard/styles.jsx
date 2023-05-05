import styled, {css} from "styled-components";

export const DivP = styled.div`
  overflow: auto;
  background-color: #f5f7fa;
  width: 35vw;
  border-radius: 8px;
  margin-top: -10px;
  overflow: auto;
  position: fixed;
  top: 10%;
  left: 35%;
  z-index: 1;
  @media (max-height: 300px) {
    height: 75vh;
  }
  //@media (min-width: 1200px) {
    //width: 100px
//}
  &::-webkit-scrollbar {
    width: 18px;
    height: 10px;
    margin-right: 10px;
    float: right;
  }
  &::-webkit-scrollbar-track {
    box-shadow: 5px black;
  }
  
  &::-webkit-scrollbar-track-piece {
    background-color: #f5f7fa;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    height: 80%;
    background-color: #E3E6ED;
    margin-left: 20px;
    width: 15px;
    border-right: 6px solid #f5f7fa;
    border-top: 12px solid #f5f7fa;
  }
  ${(props) => {
    if(props.$mode > 3){
      return css`
      height: 80vh;
      `;
    }else {
      return css`
        height: fit-content;
      `
    }
    /*switch (props.$mode) {
      case (props.$mode >= 3) :
        return css`
          height: 80vh;
        `;
      case 1:
        return css`
          height: fit-content;
        `;
    }*/}

  }
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
  
  export const DivPlanner = styled.div`
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
`;

export const DivInfo = styled.div`
position:relative;
top:15%;
left:1%;
`;

