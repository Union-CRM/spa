import { Container, Content, Circle, Span, ContainerFather } from "./styles";
import IconSystem from "../../../../assets/IconSystem";
import { useCustomerContext } from "../../../../hook/useCustomerContext";

const ModalSave = (props) => {
  const { setPopUpSuccess } = useCustomerContext();

  return (
    <ContainerFather onClick={() => setPopUpSuccess(false)}>
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
