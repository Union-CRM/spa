import React from "react";
import {
  Container,
  PositionTitle,
  SpanTitle,
  PositionInputRelease,
  PositionSingleSelect,
  PositionInputName,
  PositionInputEmail,
  PositionInputSubject,
  SpanDiv,
  Span,
  TextBox,
  PositionButtonSave,
  PositionButtonCancel,
} from "./styles";
import InputPlaceHolder from "../Input/InputPlaceholder";
import SingleSelect from "../Input/SingleSelect";
import ButtonDefault from "../../assets/Buttons/ButtonDefault";
import Headline from "../FontSystem/Headline";
import Body from "../FontSystem/Body";

const values = [{ value: 1, label: "FINANÇAS CREDITO DE RISCO DE CAPITAL" }];

const Subject = ({ title, setModal, content }) => {
  const closeModal = () => {
    setModal(false);
  };
  const saveModal = () => {
    setModal(false);
  };

  return (
    <Container>
      <PositionTitle>
        <Headline type={"Headline3"} name={title} />
      </PositionTitle>
      <PositionInputRelease>
        <Body type={"Body2"} name={"Release Train"} />
        <InputPlaceHolder /*value={content.RelaseTrain}*/ />
      </PositionInputRelease>
      <PositionSingleSelect>
        <Body type={"Body2"} name={"Business"} />
        <SingleSelect options={values} />
      </PositionSingleSelect>
      <PositionInputName>
        <Body type={"Body2"} name={"Client Name"} />
        <InputPlaceHolder />
      </PositionInputName>
      <PositionInputEmail>
        <Body type={"Body2"} name={"Email"} />
        <InputPlaceHolder />
      </PositionInputEmail>
      <PositionInputSubject>
        <Body type={"Body2"} name={"Subject"} />
        <InputPlaceHolder />
      </PositionInputSubject>
      <SpanDiv>
        <Span>Text</Span>
      </SpanDiv>
      <TextBox placeholder="olá" />
      <PositionButtonSave onClick={saveModal}>
        <ButtonDefault type={"true"} name={"Save"} />
      </PositionButtonSave>
      <PositionButtonCancel onClick={closeModal}>
        <ButtonDefault type={"False"} name={"Cancel"} />
      </PositionButtonCancel>
    </Container>
  );
};

export default Subject;
