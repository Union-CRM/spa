import React from 'react'
import {
    Container,
    Content,
    ContainerFather,
    Button,
    Title,
  } from "./styles";
  import { usePlannerContext } from "../../../hook/usePlannerContext";
  

const PopUpFinished = () => {

  const {setModalPopUpFinished, 
    setModalReschedule, setModalSubject } =  usePlannerContext()

  const handleReschedule = () => (
    setModalPopUpFinished(false),
    setModalReschedule(true)
  )

  const handleSubject = () => (
    setModalPopUpFinished(false),
    setModalSubject(true)
  )

  return (
    <ContainerFather>
        <Container>
          <Content>
            <Title>
              <p>Planner Finished</p>
            </Title>
            <Button onClick={() => handleReschedule()}>Resschedule Planner</Button>
            <Button onClick={() => handleSubject()}>Create New Subject</Button>
            <Button onClick={() => setModalPopUpFinished(false)}>Finished</Button>
          </Content>
        </Container>
    </ContainerFather>
  )
}

export default PopUpFinished