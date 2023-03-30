import styled from "styled-components";

export const DivHeader = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 50%);
   grid-template-rows: 1fr; 
   width: 85vw;
   margin-top: 2%;
   margin-bottom: 2.5%;
`;
export const DivRouteTitle = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(2, auto);
`;
export const DivTitle = styled.div`
   display: flex;
   grid-area: 2 / 1 / 3 / 2; 
   margin-top: 1%;
`;
export const DivIconTitle = styled.div`
   display: flex;
   margin-left: 1%;
   width: fit-content;
   height: auto;
   margin-top: 3%;
   
`;

export const DivLogo = styled.div`
  display: flex;
  justify-content: flex-end;
  
`;

export const Path = styled.p`
  font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
  
`;
export const Title = styled.p`
  font-family: 'Houschka Rounded Alt';
font-style: normal;
font-weight: 600;
font-size: 2rem;
border-bottom: solid #007BFF;
  
`;

