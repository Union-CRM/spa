import React from 'react'
import { Container, PositionTitle, SpanTitle, PositionInputRelease, PositionSingleSelect, PositionInputName, PositionInputEmail, PositionInputSubject, SpanDiv, Span, TextBox, PositionButtonSave, PositionButtonCancel } from './styles'
import InputPlaceHolder from '../Input/InputPlaceholder'
import SingleSelect from '../Input/SingleSelect'
import ButtonDefault from '../../assets/Buttons/ButtonDefault'

const values = [
    { value: 1, label: "FINANÇAS CREDITO DE RISCO DE CAPITAL" },
  ];
  
const Subject = ({title, setModal, content}) => {

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
            <PositionInputRelease>
                <InputPlaceHolder /*value={content.RelaseTrain}*/ label="Release Train"/>
            </PositionInputRelease>
            <PositionSingleSelect>
                <SingleSelect options={values} label="Business"/>
            </PositionSingleSelect>
            <PositionInputName>
                <InputPlaceHolder label="Client Name" />
            </PositionInputName>
            <PositionInputEmail>
                <InputPlaceHolder label="Email" />
            </PositionInputEmail>
            <PositionInputSubject>
                <InputPlaceHolder label="Subject" />
            </PositionInputSubject>
            <SpanDiv>
                <Span>
                    Text
                </Span>
            </SpanDiv>
            <TextBox placeholder="olá"/>
            <PositionButtonSave onClick={saveModal}>
                <ButtonDefault  type={"true"} name={"Save"}/>
            </PositionButtonSave>
            <PositionButtonCancel onClick={closeModal}>
                <ButtonDefault type={"False"} name={"Cancel"}/>
            </PositionButtonCancel>
        </Container>
    )
}

export default Subject