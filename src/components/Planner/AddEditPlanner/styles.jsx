import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow-y: auto;
   
`

export const Container = styled.div`
    width: 30.7vw;
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
    @media(max-width: 1200px) {
        transform: translate(-60%,-50%);
        width: 35vw;
         
    }
    
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
    border-radius: 6px;
`
export const InputStatus = styled.input`
    width: 10.4vw;
    height: 3.5vh;
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
    margin-top: 2%;
    
`

export const DivClocks = styled.div`
    margin-top: 2%;
    margin-left: 5%;
    margin-right: 7%;
    justify-content: space-between;
    display: grid;
    width: 27vw;
    grid-column-gap: 5%;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 1fr;

    @media (max-width: 766px){
        display: block;
    }
    
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
  color: #a0a0a0;
  border-radius: 8px ;
  border: 2px solid ${(props)=> props.required ? "#b03535" : "#888C95"};
  
  @media (max-width: 1200px) {
    width: 85%;

  }
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

