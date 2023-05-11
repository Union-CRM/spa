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
import { useFetchClient } from "../../../hook/useFetchClient";

const ModalPopUp = (props) => {
  const { modalClose } = props;
  const { client: clientList} = useClientContext();
  const { updateStatusClient } = useFetchClient();
  const client = clientList.filter((item) => item.id === props.id)[0];
  const p = client.status === "Active" ? "Inactivate" : "Activate";

  const span =
    client.status === "Active"
      ? "Do you want do deactivate this card?"
      : "Do you want to activate this card?";

  const handleAlterStatus = () => {
    updateStatusClient(client.id);
    modalClose();
  };

  const handleCancel = () => {
    modalClose();
    //window.location.reload();
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

export default ModalPopUp;
