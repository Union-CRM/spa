import React from 'react'
import SingleSelect from '../../Geral/Input/SingleSelect'
import ButtonDefault from '../../../assets/Buttons/ButtonDefault'
import { GuestComponent } from '../../Geral/Input/GuestsComponent'
import { Container, 
    Title,
    PositionLabel,
    InputSubject,
    Form,
    PositionSingle,
    PositionTag,
    PositionButtons,
 } from './styles'

 const options = [
    {id: 1, option: "Jornada Digital", value: "Jornada Digital"}
 ] 

const FollowUpModal = () => {
  return (
    <Container>
        <Title>Follow Up</Title>
        <Form>
            <PositionLabel>Subject</PositionLabel>
            <InputSubject type="text"></InputSubject>
            <PositionLabel>Client Name</PositionLabel>
            <InputSubject type="text"></InputSubject>
            <PositionLabel>Email</PositionLabel>
            <InputSubject type="text"></InputSubject>
            <PositionLabel>Business</PositionLabel>
            <InputSubject type="text"></InputSubject>
            <PositionSingle>
                <SingleSelect label={"Release Train"} options={options} sizeHeight={"3.5vh"} sizeSingle={"27.5vw"}/>
            </PositionSingle>
            <PositionTag>
                <GuestComponent label={"Guests"} sizeHeight={"3.5vh"} width={"9vw"} widths={"17.5vw"} heights={"18.1vh"} marginLeft={"35%"}/>
            </PositionTag>
            <PositionSingle>
                <SingleSelect label={"Return"} options={options} sizeHeight={"3.5vh"} sizeSingle={"9vw"}/>
            </PositionSingle>
            <PositionSingle>
                <SingleSelect label={"Status"} options={options} sizeHeight={"3.5vh"} sizeSingle={"9vw"}/>
            </PositionSingle>
            <PositionButtons>
                <ButtonDefault type={"userCancel"} name={"Cancel"} sizeWidth={"12vw"}/>
                <ButtonDefault type={"userSave"} name={"Save"} sizeWidth={"12vw"}/>
            </PositionButtons>
        </Form>
    </Container>
  )
}

export default FollowUpModal