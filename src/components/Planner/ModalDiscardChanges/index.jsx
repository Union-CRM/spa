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



const ModalDiscardChanges = () => {


  const {planner: modalDiscard, 
    setModalDiscard, setModal, 
    setModalEdit, setModalCreate, 
    setModalReschedule,
    setModalSave,
    setModalFollowUp,
    setModalRemark,
    setModalPopUpCanceled,
    setModalPopUpFinished,
  } = usePlannerContext();

  

  const handleModal= () => {
    
    setModalEdit(false);
    setModalCreate(false);
    setModalReschedule(false);
    setModalDiscard(false);
    setModalSave(false);
    setModalFollowUp(false);
    setModalRemark(false);
    setModalPopUpCanceled(false);
    setModalPopUpFinished(false);
    
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
            <DivSave onClick={handleModal}>
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
