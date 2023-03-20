import styled from "styled-components";

export const DivModal = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 577px;
  z-index: 1;
  height: 855px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
  border-left: 16.56px solid #007bff;
  
`;
export const DivTitle = styled.div`
  margin-top: 30px;
  margin-bottom: 5px;
`;
export const DivDateStartFinish = styled.div`
display: flex;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
justify-content: space-between;
  
`;
export const DivClocks = styled.div`
 display: block;
`;
export const DivDate = styled.div`
 margin-bottom: 10px;
 width: 160px;
 box-sizing:border-box;
`;
export const Input = styled.input`
   width: 150px;
   height: 32px;  
   border-radius: 5px;
  border: 2px solid #d9d9d9;
`;
export const DivButton = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: 56%;
  grid-row-gap: 10px;
  width: 100%;
  margin-top: 10%;
  `;
export const DivTagStatus = styled.div`
  box-sizing: border-box;
  width: auto;
  height: auto;
`;