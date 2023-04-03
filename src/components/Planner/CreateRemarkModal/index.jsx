import React from 'react'
import SingleSelect from '../../Geral/Input/SingleSelect'
import ButtonDefault from '../../../assets/Buttons/ButtonDefault'
import { Container, 
    Title,
    PositionLabel,
    Input,
    Form,
    PositionSingle,
    DivContent,
    PositionButtons,
    InputDate,
    PositionLabelDates,
    DivInfoTime,
    InputText,
    DivText,
    LabelNote,
    DivButtonSave,
 } from './styles'

 const options = [
    {id: 1, option: "Jornada Digital", value: "Jornada Digital"}
 ] 

const CreateRemarkModal = () => {


  return (
    <Container>
        <Title>Create Remark</Title>
        <Form>
            <PositionLabel>Subject</PositionLabel>
            <Input type="text"></Input>
            <PositionLabel>Client Name</PositionLabel>
            <Input type="text"></Input>
            <PositionLabel>Email</PositionLabel>
            <Input type="text"></Input>
            <PositionLabel>Business</PositionLabel>
            <Input type="text"></Input>
            <PositionSingle>
                <SingleSelect label={"Release Train"} options={options} sizeHeight={"3.5vh"} sizeSingle={"27.5vw"}/>
            </PositionSingle>
            <DivContent>
                <DivInfoTime>
                    <PositionLabelDates>Date</PositionLabelDates>
                    <InputDate type="date"/>
                    <PositionLabelDates>Start</PositionLabelDates>
                    <InputDate type="text"/>
                    <PositionLabelDates>Finish</PositionLabelDates>
                    <InputDate type="text"/>
                    <PositionLabelDates>Status</PositionLabelDates>
                    <InputDate type="text"/>
                </DivInfoTime>
                <DivText>
                    <LabelNote>Note Text</LabelNote>
                    <InputText />
                </DivText>
            </DivContent>
            <PositionButtons>
                <DivButtonSave>
                    <ButtonDefault type={"userSave"} name={"Save"}/>
                </DivButtonSave>
                <ButtonDefault type={"userCancel"} name={"Cancel"}/>
            </PositionButtons>
        </Form>
    </Container>
  )
}

export default CreateRemarkModal