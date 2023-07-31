import { Container, Content, Circle, Span, ContainerFather } from "./styles";
import IconSystem from "../../../assets/IconSystem";
import { usePlannerContext } from "../../../hook/usePlannerContext";
import { useBusinessContext } from "../../../hook/useBusinessContent";
import { useReleaseContext } from "../../../hook/useReleaseContent";
import { useRemarkContext } from "../../../hook/useRemarkContent";

const ModalSave = (props) => {
  const { setModalSucess } = useRemarkContext();
  const { setModalSave } = usePlannerContext();
  const { setModalSaveBusiness, sucessBusiness, setSucessBusiness } =
    useBusinessContext();
  const { setModalSaveRelease, sucessRelease, setSucessRelease } =
    useReleaseContext();
  const { sucessRemark } = useRemarkContext();

  const editSave =
    sucessBusiness || sucessRelease || sucessRemark ? "Edit" : "Created";

  const handleSave = () => {
    setSucessBusiness(false);
    setSucessRelease(false);
    setModalSave(false);
    setModalSaveBusiness(false);
    setModalSaveRelease(false);
    setModalSucess(false);
  };
  return (
    <ContainerFather onClick={() => handleSave()}>
      <Container subject={props.subject}>
        <Content>
          <Circle>
            <span>
              <IconSystem icon={"CheckWhite"} />{" "}
            </span>
          </Circle>
          <Span> {`Successfuly ` + editSave}</Span>
        </Content>
      </Container>
    </ContainerFather>
  );
};

export default ModalSave;
