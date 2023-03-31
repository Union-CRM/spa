import React, { useState } from "react";
import {
  ContainerCentral,
  Container,
  ContainerChildren,
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

const CreateRemark = (props) => {
  const { setModal } = props;

  const closeModal = () => {
    setModal(false);
  };

  const [date, setDate] = useState();
  const [dateReturn, setDateReturn] = useState();
  const [text, setText] = useState();

  return (
    <ContainerCentral>
      <Container>
        <DivHeader>
          <Title>Create Planner</Title>

          <SubTitle>Apresentação Institucional TCS</SubTitle>
        </DivHeader>
        <ContainerChildren>
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
              <Input
                type={"textarea"}
                value={text}
                required
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
        </ContainerChildren>
      </Container>
    </ContainerCentral>
  );
};

export default CreateRemark;
