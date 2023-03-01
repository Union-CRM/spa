import React from "react";
import {
  Container,
  SpanTitle,
  PositionButtonSave,
  PositionButtonCancel,
} from "./styles";
import ButtonDefault from "../../assets/Buttons/ButtonDefault";
import IconSystem from "../../assets/IconSystem";

import { Image } from "./styles.jsx";

const Discard = ({ setModal }) => {
  const closeModal = () => {
    setModal(false);
  };
  const saveModal = () => {
    setModal(false);
  };

  const Title = "Discard changes ?";

  return (
    <Container>
      <Image>
        <IconSystem icon={"DiscardChanges"} width={"80px"} height={"75px"} />
      </Image>
      <SpanTitle>{Title}</SpanTitle>
      <PositionButtonSave onClick={saveModal}>
        <ButtonDefault type="userSave" name={"Yes,discard"} />
      </PositionButtonSave>
      <PositionButtonCancel onClick={closeModal}>
        <ButtonDefault type="userCancel" name={"Cancel"} />
      </PositionButtonCancel>
    </Container>
  );
};

export default Discard;
