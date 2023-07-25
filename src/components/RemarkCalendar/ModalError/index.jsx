import React from 'react'
import {
  ContainerFather,
  Container,
  Content,
  Circle,
  Span,
} from "./styles";

const ModalError = () => {
  return (
    <ContainerFather>
        <Container>
          <Content>
            <Circle>
              <span>!</span>
            </Circle>
            <Span>Error</Span>
          </Content>
        </Container>
    </ContainerFather>
  )
}

export default ModalError