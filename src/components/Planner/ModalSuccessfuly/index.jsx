import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import {
  Container,
  Overlay,
  Content,
  DivSave,
  DivCancel,
  Circle,
  Span,
  ContainerFather,
} from "./styles";
import { useClientContext } from "../../../hook/useClientContent";
import { useEffect, useRef } from "react";
import IconSystem from "../../../assets/IconSystem";
import { usePlannerContext } from "../../../hook/usePlannerContext";

const ModalSave = (props) => {
  const { setModalSave } = usePlannerContext();

  return (
    <ContainerFather onClick={() => setModalSave(false)}>
      <Container subject={props.subject}>
        <Content>
          <Circle>
            <span>
              <IconSystem icon={"CheckWhite"} />{" "}
            </span>
          </Circle>
          <Span> {`Successfuly Created`}</Span>
        </Content>
      </Container>
    </ContainerFather>
  );
};

export default ModalSave;
