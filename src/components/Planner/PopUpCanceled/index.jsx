import React from 'react'
import {
    Container,
    Content,
    ContainerFather,
    Button,
    Title,
  } from "./styles";

import { usePlannerContext } from "../../../hook/usePlannerContext";


const PopUpCanceled= () => {

  const { setModalFollowUp, 
    setModalPopUpCanceled, 
    setModalReschedule, 
    setModalSubject} =  usePlannerContext();

  const handleFollowUp = () => (
    setModalFollowUp(true),
    setModalPopUpCanceled(false)
  );

  const handleReschedule = () => (
    setModalPopUpCanceled(false),
    setModalReschedule(true)
  );

  const handleSubject = () => (
    setModalPopUpCanceled(false),
    setModalSubject(true)
  );

  return (
    <ContainerFather>
        <Container>
          <Content>
            <Title>
              <p>Planner Canceled</p>
            </Title>
            <Button onClick={() => handleReschedule()}>Resschedule Planner</Button>
            <Button onClick={() => handleSubject()}>Create New Subject</Button>
            <Button onClick={() => handleFollowUp()}>Schedule Follow Up</Button>
          </Content>
        </Container>
    </ContainerFather>
  )
}

export default PopUpCanceled