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
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    border-left: 15px solid #007BFF;
    border-radius: 8px;
    
`

export const PositionButtonSave = styled.div`
    align-self: center;
    margin-top: 10%;
    margin-bottom: 5%;
`;

export const PositionButtonCancel = styled.div`
    align-self: center;
    margin-top: 10%;
    margin-bottom: 5%;
`;

export const PositionTitle = styled.div`
    align-self: flex-start;
    margin-left: 5.5%;
    margin-top: 3%;
    font-size: 32px;
    font-style: bold;
    font-weight: 600;
    margin-bottom: 5%;
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
    width: fit-content;
`
export const PositionTags = styled.div`
    margin-left: 5.5%;
    margin-top: 3%;
    margin-bottom: 2%;
`

export const PositionStatus = styled.div`
    grid-area: Status;
    margin-top: 1.5%;
`
export const DivDate = styled.div`
   display: flex;
   flex-direction: column;
   width: 40%;
`
export const InputDate = styled.input`
  width: 9.2vw;
  height:3.5vh;
  border-radius: 8px;
  grid-area: Finish;
`
export const DivStart = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    grid-area: Date;
  
`
export const DivFinish = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    grid-area: Finish;

`
export const LabelDate = styled.p`
    display: inline-block;
`

export const InputText = styled.textarea`
    resize: none;
    grid-area: NoteText;
    width: 15.5vw;
    border: 1px solid black;
    margin-top: -10%;
    margin-left: 3.5%;
`

export const DivPositions = styled.div`
    display: grid;
    grid-template-areas: 
    "Date LabelNote"
    "TimeStart NoteText"
    "Finish NoteText"
    "Status NoteText";
    grid-rows: 4;
    grid-columns: 2;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-columns: 35% 65%;
    height: 100%;
    margin-left: 5.5%;
`

export const Label = styled.label`
    grid-area: LabelNote; 
    margin-left: 3.5%;
`
export const PositionButtons = styled.div`
    display: flex;
    justify-content: space-around;
`