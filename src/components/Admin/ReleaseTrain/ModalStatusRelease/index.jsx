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

import { useEffect } from "react";
import { useFetchRelease } from "../../../../hook/useFetchRelease";
import { useReleaseContext } from "../../../../hook/useReleaseContent";



const ModalStatusRelease = (props) => {

  // Context and props
  const { modalClose } = props;
  const { updateStatusRelease } = useFetchRelease();
  
  const { release, idRelease, setModalStatusRelease } = useReleaseContext();
  const releases = release.filter((item) => item.id === idRelease.id)[0];
  const p = releases.status === "ATIVO" ? "Deactivate" : "Active";

  // Managing confirmation modal (changing status)
  const span =
    releases.status === "ATIVO"
      ? "Do you want do deactivate this card?"
      : "Do you want to activate this card?";

  // Button to change status       
  const handleAlterStatus = () => {
    updateStatusRelease(releases.id);
    setModalStatusRelease(false);
  };

  // Button cancel in modalStatusRelease
  const handleCancel = () => {
    window.location.reload();
  };

  return (
    <ContainerFather>
      {console.log(release)}
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
