import React from "react";
import { ContainerFather, Container, Content, Circle, Span } from "./styles";
import { useCustomerContext } from "../../../../hook/useCustomerContext";

const ModalError = () => {
  const { setPopUpError } = useCustomerContext();
  return (
    <ContainerFather onClick={() => setPopUpError(false)}>
      <Container>
        <Content>
          <Circle>
            <span>!</span>
          </Circle>
          <Span>Error</Span>
        </Content>
      </Container>
    </ContainerFather>
  );
};

export default ModalError;
