import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow-y: auto;
   
`

export const Container = styled.div`
    width: 30vw;
    height: fit-content;
    z-index: 20;
    background-color: #FFFFFF;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-45%, -50%);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    border-left: 15px solid #007BFF;
    border-radius: 8px;
    
`

export const PositionButtonSave = styled.div`
    align-self: center;
    margin-top: 5%;
    margin-bottom: 4%;
`;

export const PositionButtonCancel = styled.div`
    align-self: center;
    margin-top: 5%;
    margin-bottom: 4%;
`;

export const PositionTitle = styled.div`
    align-self: flex-start;
    margin-left: 5.5%;
    margin-top: 3%;
    font-size: 32px;
    font-style: bold;
    font-weight: 600;
    margin-bottom: 3%;
`

export const InputPlanner = styled.input`
    width: 26vw;
    height: 3.5vh;
    margin-bottom: 2.5%;
    border-radius: 6px;
`
export const PositionInputs = styled.div`
    display: grid;
    margin-left: 5.5%;
`

export const PositionLabel = styled.label`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    
`

export const DivClocks = styled.div`
    margin-top: 1%;
    margin-left: 5%;
    margin-right: 7%;
    justify-content: center;
    display: grid;
    grid-column-gap: 2%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
`
export const PositionTags = styled.div`
    margin-left: 5.5%;
    margin-top: 3%;
    margin-bottom: 2%;
`

export const PositionStatus = styled.div`
    margin-left: 5%;
`
export const DivDate = styled.div`
   display: flex;
   flex-direction: column;
   grid-template-rows: 45% 55%;
   width: 100%;
`
export const InputDate = styled.input`
  width: auto;
  max-width: 90%;
  height:3.5vh;
  color: #a0a0a0;;
  border-radius: 8px;
`
export const DivStart = styled.div`
display: flex;
flex-direction: column;
grid-template-rows: 45% 55%;
width: 100%;
  
`
export const DivFinish = styled.div`
display: flex;
flex-direction: column;
grid-template-rows: 45% 55%;
width: 100%;

`
export const LabelDate = styled.p`
    display: inline-block;

`
export const PositionButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 5%;
    
`