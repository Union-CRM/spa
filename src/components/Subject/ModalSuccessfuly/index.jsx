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
import {useSubjectContext} from "../../../hook/useSubjectContext";

const ModalSave = () => {

  const { setModalSave } = useSubjectContext();
  

  return (
    <ContainerFather onClick={() => setModalSave(false)}>
        <Container>
          <Content>
            <Circle>
              <span><IconSystem icon={"CheckWhite"}/>  </span>
            </Circle>
            <Span > {`Successfuly Created`}</Span>
          </Content>
        </Container>
    </ContainerFather>
  );
};

export default ModalSave;
