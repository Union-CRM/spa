import ButtonDefault from "../../../../assets/Buttons/ButtonDefault";
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
import { useGroupListContext } from "../../../../hook/useGroupListContext";
import { useFetchAdmGroupList } from "../../../../hook/useFetchAdmGroupList";

const ModalPopUpGroup = (props) => {
  const { modalClose } = props;
  const { group: groupList } = useGroupListContext();
  const { updateStatus } = useFetchAdmGroupList();
  const group = groupList.filter((item) => item.id === props.id)[0];
  const p = group.status === "ATIVO" ? "Inactivate" : "Activate";

  const span =
    group.status === "ATIVO"
      ? "Do you want do desactivate this card?"
      : "Do you want to activate this card?";

  const handleAlterStatus = () => {
    updateStatus(group.id);
    modalClose();
  };

  const handleCancel = () => {
    modalClose();
    window.location.reload();
  };

  return (
    <ContainerFather>
      <Overlay>
        <Container>
          <Content>
            <Circle>
              <span>?</span>
            </Circle>
            <Span>{`${span}`}</Span>
            <DivSave onClick={handleAlterStatus}>
              <ButtonDefault
                type={"userSave"}
                sizeFont={"1rem"}
                name={`Yes, ${p}`}
              />
            </DivSave>
            <DivCancel onClick={handleCancel}>
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

export default ModalPopUpGroup;
