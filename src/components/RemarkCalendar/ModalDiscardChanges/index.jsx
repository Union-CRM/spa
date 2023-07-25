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
import { useRemarkContext } from "../../../hook/useRemarkContent";

const ModalDiscardChanges = () => {
  const {
    setModalDiscard,
    setModalEdit,
    setModalCreate,
    setModalSave,
    setModalRemark,
  } = useRemarkContext();
  
  const handleModal = () => {
    setModalEdit(false);
    setModalCreate(false);
    setModalDiscard(false);
    setModalSave(false);
    setModalRemark(false);
  };

  return (
    <ContainerFather>
      <Overlay>
        <Container>
          <Content>
            <Circle>
              <span>?!</span>
            </Circle>
            <Span>{`Discard Changes?`}</Span>
            <DivSave onClick={() => handleModal()}>
              <ButtonDefault type={"userSave"} sizeFont={"1rem"} name={`Yes`} />
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
