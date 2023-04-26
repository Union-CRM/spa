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
import { useEffect, useRef } from "react";
import IconSystem from "../../../../assets/IconSystem";
import { useUserContext } from "../../../../hook/useUserContext";

const ModalPassword = (props) => {
  const { setModalSave } = useUserContext();

  return (
    <ContainerFather onClick={() => setModalSave(false)}>
      <Container user={props.user}>
        <Content>
          <Circle>
            <span>
              <IconSystem icon={"CheckWhite"} />{" "}
            </span>
          </Circle>
          <Span> {`Successfuly Created`}</Span>
          <Span> {`Password: `}</Span>
        </Content>
      </Container>
    </ContainerFather>
  );
};

export default ModalPassword;
