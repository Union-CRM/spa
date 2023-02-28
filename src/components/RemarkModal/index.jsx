import React from 'react'
import { Container, PositionTitle, SpanTitle, PositionInputRelease, PositionSingleSelect,
     PositionInputName, PositionInputEmail, PositionInputSubject, Span, TextBox,
      PositionButtonSave, PositionButtonCancel, Input,Date,Note,Div,Buttons} from './styles'
import InputPlaceHolder from '../Input/InputPlaceholder'
import SingleSelect from '../Input/SingleSelect'
import ButtonDefault from '../../assets/Buttons/ButtonDefault'

const values = [
    { value: 1, label: "FINANÇAS CREDITO DE RISCO DE CAPITAL" },
  ];
  
const Remark = ({title, setModal, content}) => {

    const closeModal = () => {
        setModal(false);
    }
    const saveModal = () => {
        setModal(false);
    }

    return (
        <Container>
            <PositionTitle>
                <SpanTitle>
                    {title}
                </SpanTitle> 
            </PositionTitle>
            <PositionInputName>
                <InputPlaceHolder label="Client Name" />
            </PositionInputName>
            <PositionInputEmail>
                <InputPlaceHolder label="Email" />
            </PositionInputEmail>
            <PositionInputSubject>
                <InputPlaceHolder label="Subject" />
            </PositionInputSubject>
            <PositionSingleSelect>
                <SingleSelect options={values} label="Business"/>
            </PositionSingleSelect>
            <PositionInputRelease>
                <InputPlaceHolder /*value={content.RelaseTrain}*/ label="Relase Train"/>
            </PositionInputRelease>
            
            
        <Div>
            <Date>
                    <span>Date</span>
                    <Input type="date" />
                    <br></br>
                    <span>Date Return</span>
                    <Input type="date" />
                </Date>
            
        
                <Note>
                        <Span>Note Text</Span>
                        <TextBox placeholder="aaaaa"/>
                    </Note>
            </Div>

            <br></br>
        
            <Buttons>
                <PositionButtonSave onClick={saveModal}>
                    <ButtonDefault type="userSave"  name={"Save"}/>
                </PositionButtonSave>
                <PositionButtonCancel onClick={closeModal}>
                    <ButtonDefault type="userCancel" name={"Cancel"}/>
                </PositionButtonCancel>
            </Buttons>
            <br></br>
       
        </Container>
    )
}

export default Remark;