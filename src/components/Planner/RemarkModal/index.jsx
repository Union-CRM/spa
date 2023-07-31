import React, { useState } from "react";
import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import { usePlannerContext } from "../../../hook/usePlannerContext";
import { useFetchRemark } from "../../../hook/useFetchRemark";
import { useFetchPlanner } from "../../../hook/useFetchPlanner";
import {
  Container,
  PositionButtonSave,
  PositionButtonCancel,
  PositionTitle,
  InputPlanner,
  PositionInputs,
  PositionLabel,
  DivClocks,
  Form,
  DivDate,
  InputDate,
  DivStart,
  DivFinish,
  LabelDate,
  InputText,
  DivPositions,
  Label,
  PositionButtons,
  Text,
} from "./styles";

const RemarkModal = ({ title, setOpenModal }) => {
  //const [date,setDate]= useState();
  const {
    plannerEdit,
    setModalRemark,
    setModalPopUpFinished,
    setModalPopUpCanceled,
  } = usePlannerContext();
  const { updatePlanner } = useFetchPlanner();
  const { createRemark } = useFetchRemark();
  const [text, setText] = useState("");
  const date = new Date(plannerEdit.date);
  const y = date.getFullYear();
  const m =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const d = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const dateFull = y + "-" + m + "-" + d;
  const timeStart = date.toLocaleTimeString();
  const timeFinish = plannerEdit.duration;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRemark = {
      remark_name: plannerEdit.subject_title,
      text: text,
      date: plannerEdit.date,
      date_return: `${dateFull} ${plannerEdit.duration}`,
      subject_id: plannerEdit.subject,
      client_id: plannerEdit.client,
      release_id: plannerEdit.release,
      user_id: plannerEdit.user,
    };
    createRemark(newRemark)
      .then(function (variavel) {
        plannerEdit.remark = variavel;
        updatePlanner(plannerEdit.id, plannerEdit);
      })
      .catch(function (error) {
        console.error("Erro ao receber variável!", error);
        return false;
      });

    if (plannerEdit.status === 16) {
      //to do: save plannerEdit
      setModalPopUpFinished(true);
      setModalRemark(false);
    } else {
      //to do: save plannerEdit
      //to do: open Modal
      setModalPopUpCanceled(true);
      setModalRemark(false);
    }
  };

  return (
    <Container>
      <PositionTitle>{title}</PositionTitle>
      <Form onSubmit={handleSubmit}>
        <PositionInputs>
          <PositionLabel>Subject</PositionLabel>
          <InputPlanner
            type="text"
            placeholder="Client Name"
            value={plannerEdit.subject_title}
            disabled
          />
          <PositionLabel>Client Name</PositionLabel>
          <InputPlanner
            type="text"
            placeholder="Client Name"
            value={plannerEdit.client_name}
            disabled
          />
          <PositionLabel>Email</PositionLabel>
          <InputPlanner
            type="text"
            placeholder="Email"
            value={plannerEdit.client_email}
            disabled
          />
          <PositionLabel>Business</PositionLabel>
          <InputPlanner
            type="text"
            placeholder="Business"
            value={plannerEdit.business}
            disabled
          />
          <PositionLabel>Release Train</PositionLabel>
          <InputPlanner
            type="text"
            placeholder="Business"
            value={plannerEdit.release_title}
            disabled
          />
        </PositionInputs>
        <DivPositions>
          <DivClocks>
            <DivDate>
              <LabelDate>Date</LabelDate>
              <InputDate
                value={dateFull}
                type="Date"
                name="date"
                disabled
              ></InputDate>
            </DivDate>
            <DivStart>
              <LabelDate>Start</LabelDate>
              <InputDate
                value={timeStart}
                type="time"
                name="time"
                disabled
              ></InputDate>
            </DivStart>
            <DivFinish>
              <LabelDate>Finish</LabelDate>
              <InputDate
                value={timeFinish}
                type="time"
                name="time-finish"
                disabled
              ></InputDate>
            </DivFinish>
          </DivClocks>
          <Text>
            <Label>Note Text</Label>
            <InputText
              onChange={(e) => setText(e.target.value)}
              required
            ></InputText>
          </Text>
        </DivPositions>
        <PositionButtons>
          <PositionButtonCancel onClick={() => setModalRemark(false)}>
            <ButtonDefault
              sizeWidth={"10.5vw"}
              type={"userCancel"}
              name={"Cancel"}
            />
          </PositionButtonCancel>
          <PositionButtonSave>
            <ButtonDefault
              sizeWidth={"10.5vw"}
              type={"userSave"}
              name={"Save"}
            />
          </PositionButtonSave>
        </PositionButtons>
      </Form>
    </Container>
  );
};

export default RemarkModal;
