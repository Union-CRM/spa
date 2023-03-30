import React from 'react'
import {
    Container,
    Content,
    ContainerFather,
    Button,
  } from "./styles";

const PopUp = () => {
  return (
    <ContainerFather>
        <Container>
          <Content>
            <p>Planner Finished</p>
            <Button>Resschedule Planner</Button>
            <Button>Create New Subject</Button>
            <Button>Finished</Button>
          </Content>
        </Container>
    </ContainerFather>
  )
}

export default PopUp