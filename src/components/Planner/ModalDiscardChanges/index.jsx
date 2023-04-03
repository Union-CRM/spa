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
import {usePlannerContext} from "../../../hook/usePlannerContext";



const ModalDiscardChanges = ({setCloseDiscard}) => {


  const {planner: modalDiscard, setModalDiscard, setModal, setModalEdit, setModalCreate, setModalReschedule } = usePlannerContext();

  
  const CloseDiscard = () => (
    setCloseDiscard(false)
  )

  const handleModal= () => {
    setModalDiscard(false)
    setModalEdit(false)
    setModalCreate(false)
    setModalReschedule(false)

  }

  return (
    <ContainerFather>
      <Overlay>
        <Container>
          <Content>
            <Circle>
              <span>?!</span>
            </Circle>
            <Span>{`Discard Changes?`}</Span>
            <DivSave onClick={() => handleModal(true)}>
              <ButtonDefault
                type={"userSave"}
                sizeFont={"1rem"}
                name={`Yes,`}
              />
            </DivSave>
            <DivCancel onClick={() => setModalDiscard(false)}>
              <ButtonDefault
                type={"cancelModalUser"}
                sizeFont={"1rem"}
                name={"Cancel"}
              />
            </DivCancel>
          </Content>
        </Container>
      </Overlay>
    </ContainerFather>
  );
};

export default ModalDiscardChanges;
