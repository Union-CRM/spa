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
import { useReleaseContext } from "../../../../hook/useReleaseContent";
import { useFetchRelease } from "../../../../hook/useFetchRelease";
import { useEffect } from "react";

const ModalStatusRelease = (props) => {
  const { modalClose } = props;
  const { releases: release } = useReleaseContext();
  const { updateStatusRelease } = useFetchRelease();
  const releases = release.filter((item) => item.id === props.id)[0];
  const p = release.status === "ATIVO" ? "Inativo" : "Ativo";

  useEffect(() => {
    console.log(releases.status);
  }, []);

  const span =
    releases.status === "ATIVO"
      ? "Do you want do deactivate this card?"
      : "Do you want to activate this card?";
 
  const handleAlterStatus = () => {
    updateStatusRelease(releases.id);
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

export default ModalStatusRelease;