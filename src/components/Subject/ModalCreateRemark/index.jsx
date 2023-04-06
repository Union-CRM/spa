import React, { useState } from "react";
import {
  Container,
  ContainerCentral,

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
import InputTextArea from "../../Geral/Input/InputText";
import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import { useRemarkContext } from "../../../hook/useRemarkContent";
import { useSubjectContext } from "../../../hook/useSubjectContent";

const CreateRemark = (props) => {
  const { setModal } = props;

  // Remark //

  const { setModalRemark } = useRemarkContext();

  const closeModal = () => {
    setModalDetails(true);
    setModalRemark(false);
    setActiveTab(1);
    setToggleState(1);
  };

  // Subject //

  const { activeTab, setActiveTab } = useSubjectContext();

  const { toggleState, setToggleState } = useSubjectContext();

  const { setModalDetails } = useSubjectContext();

  const [date, setDate] = useState();
  const [dateReturn, setDateReturn] = useState();
  const [text, setText] = useState();

  return (
    <ContainerCentral>
      <Container>
        <DivHeader>
          <Title>
            Create Remark
            <p>Apresentação Institucional TCS</p>
          </Title>
        </DivHeader>
        <Form>
          <DivDate>
            <Label>Date</Label>
            <Input
              type={"date"}
              name={date}
              widthInput={"80%"}
              value={new Date().toISOString().slice(0, 10)}
              required
              onChange={(event) => setDate(event.target.value)}
            />
          </DivDate>

          <DivDateReturn>
            <Label>Date Return</Label>
            <Input
              type={"date"}
              widthInput={"80%"}
              name={dateReturn}
              value={new Date().toISOString().slice(0, 10)}
              required
              onChange={(event) => setDateReturn(event.target.value)}
            />
          </DivDateReturn>

          <DivText>
            <Label>Note Text</Label>
            <InputTextArea
              name={text}
              rows={"10"}
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
      </Container>
    </ContainerCentral>

  );
};
export default CreateRemark;
