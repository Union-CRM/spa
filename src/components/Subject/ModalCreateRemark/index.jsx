import React, { useState, useEffect } from "react";
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
  DivTitle,
  TextArea,
} from "./styles";
import InputTextArea from "../../Geral/Input/InputText";
import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import { useRemarkContext } from "../../../hook/useRemarkContent";
import { usePlannerContext } from "../../../hook/usePlannerContext";
import { useFetchRemark } from "../../../hook/useFetchRemark";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useUserContext } from "../../../hook/useUserContext";
import InputDefault from "../../Geral/Input/InputDefault";

const CreateRemark = (props) => {
  const { id } = props;
  const { setModalSave } = usePlannerContext();
  const { setModalRemark, loadRemarkList } = useRemarkContext();
  const closeModal = () => {
    setModalDetails(true);
    setModalRemark(false);
    setActiveTab(1);
    setToggleState(1);
  };
  const { createRemark } = useFetchRemark();
  const { user } = useUserContext();
  const { setActiveTab } = useSubjectContext();
  const { subject: subjectList } = useSubjectContext();
  const [subjectTarget, setSubjectTarget] = useState({});
  const { setToggleState } = useSubjectContext();
  const [flag, setFlag] = useState(false);
  const { setModalDetails } = useSubjectContext();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [dateReturn, setDateReturn] = useState();
  const [text, setText] = useState();
  const [remarkName, setRemarkName] = useState();

  useEffect(() => {
    setSubjectTarget(subjectList.filter((s) => s.id === id)[0]);
  }, [id]);

  const handleCreateRemark = (e) => {
    e.preventDefault();
    const newRemark = {
      remark_name: remarkName,
      text: text,
      date: date + "T10:00:00.000",
      date_return: dateReturn + "T10:00:00.000",
      subject_id: subjectTarget.id,
      client_id: subjectTarget.client_id,
      release_id: subjectTarget.release_id,
      user_id: user.id,
    };
    if (
      newRemark.remark_name &&
      newRemark.text &&
      newRemark.date &&
      newRemark.date_return
    ) {
      createRemark(newRemark).then(loadRemarkList());
      loadRemarkList();
      closeModal();
    } else {
      setFlag(true);
    }
  };

  return (
    <ContainerCentral>
      <Container>
        <DivHeader>
          <Title>Create Remark</Title>
        </DivHeader>
        <Form>
          <DivDate>
            <Label>Initial Date</Label>
            <Input
              type={"date"}
              name={date}
              widthInput={"90%"}
              value={date}
              required={flag && !date ? true : false}
              onChange={(event) => setDate(event.target.value)}
            />
          </DivDate>

          <DivDateReturn>
            <Label>Final Date</Label>
            <Input
              type={"date"}
              widthInput={"90%"}
              name={dateReturn}
              value={dateReturn}
              required={flag && !dateReturn ? true : false}
              onChange={(event) => setDateReturn(event.target.value)}
            />
          </DivDateReturn>

          <DivTitle>
            <Label>
              Title
              <Input
                widthInput={"98% !important"}
                value={remarkName}
                onChange={(event) => setRemarkName(event.target.value)}
                required={flag && !remarkName ? true : false}
              />
            </Label>
          </DivTitle>

          <DivText>
            <Label>Note Text</Label>
            <TextArea
              name={text}
              value={text}
              required={flag && !dateReturn ? true : false}
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
              onClick={(e) => handleCreateRemark(e)}
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
