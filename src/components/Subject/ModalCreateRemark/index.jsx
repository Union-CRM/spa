import React, { useState } from "react";
import {
  Container,
  Title,
  SubTitle,
  Input,
  Form,
  Label,
  DivHeader,
  DivDate,
  DivText,
  DivDateReturn,
  DivButton,
  ClickButton,
  PositionButtonCancel,
} from "./styles";
import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import InputTextArea from "../../Geral/Input/InputText";

const CreateRemark = (props) => {
  const { setModal } = props;

  const closeModal = () => {
    setModal(false);
  };

  const [date, setDate] = useState();
  const [dateReturn, setDateReturn] = useState();
  const [text, setText] = useState();

  return (
    <Container>
      <DivHeader>
        <Title>Create Remark</Title>

        <SubTitle>Apresentação Institucional TCS</SubTitle>
      </DivHeader>
      <Form>
        <DivDate>
          <Label>Date</Label>
          <Input
            type={"date"}
            widthInput={"93% !important"}
            value={date}
            required
            onChange={(event) => setDate(event.target.value)}
          />
        </DivDate>

        <DivDateReturn>
          <Label>Date Return</Label>
          <Input
            type={"date"}
            value={dateReturn}
            required
            onChange={(event) => setDateReturn(event.target.value)}
          />
        </DivDateReturn>

        <DivText>
          <Label>Note Text</Label>
          <InputTextArea
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </DivText>
      </Form>{" "}
      <DivButton>
        <ClickButton>
          <ButtonDefault
            type="userSave"
            weightFont={"500"}
            sizeFont={"18px"}
            name={"Save"}
          />
        </ClickButton>
        <PositionButtonCancel onClick={closeModal}>
          <ButtonDefault type="userCancel" name={"Cancel"} />
        </PositionButtonCancel>
      </DivButton>
    </Container>
  );
};

export default CreateRemark;
