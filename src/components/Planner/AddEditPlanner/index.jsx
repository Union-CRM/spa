import React, { useState, useEffect } from "react";
import { TagComponent } from "../../Geral/TagComponent";
import { GuestComponent } from "../../Geral/Input/GuestsComponent";
import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import SingleSelect from "../../Geral/Input/SingleSelect";
import { useClientContext } from "../../../hook/useClientContent";
import { usePlannerContext } from "../../../hook/usePlannerContext";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useFetchPlanner } from "../../../hook/useFetchPlanner";
import { useUserContext } from "../../../hook/useUserContext";
import {
  Container,
  PositionButtonSave,
  PositionButtonCancel,
  PositionTitle,
  InputPlanner,
  InputStatus,
  PositionInputs,
  PositionLabel,
  DivClocks,
  Form,
  PositionTags,
  PositionStatus,
  DivDate,
  InputDate,
  DivStart,
  DivFinish,
  LabelDate,
  PositionButtons,
} from "./styles";

const ModalPlanner = ({ title }) => {
  const [subjectObj, setSubjectObj] = useState({
    id: false,
    subject_title: "",
    client: "",
    client_email: "",
    business: "",
    release: "",
  });
  const { subject: subjectList } = useSubjectContext();
  const [subjectOption, setSubjectOption] = useState([]);
  const { client: clientList } = useClientContext();
  const clientOption = clientList
    .filter((c) => c.status === "Active")
    .map((c) => ({ id: c.id, value: c.id, label: c.client }));
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [timeStart, setTimeStart] = useState();
  const [timeFinish, setTimeFinish] = useState();
  const [guest, setGuest] = useState([]);
  const { plannerEdit, setPlannerEdit } = usePlannerContext();
  const [planner, setPlanner] = useState();
  const [status, setStatus] = useState("SCHEDULED");
  const {
    modalEdit,
    setModalEdit,
    modalDiscard,
    setModalDiscard,
    setModalRemark,
    modalReschedule,
  } = usePlannerContext();
  const { createPlanner, updatePlanner } = useFetchPlanner();
  const { user } = useUserContext();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setSubjectOption(
      subjectList
        .filter((s) => s.status === "IN PROGRESS")
        .map((s) => ({ id: s.id, value: s.id, label: s.subject_title }))
    );
  }, [subjectList]);

  useEffect(() => {
    if (modalEdit || modalReschedule) {
      setPlanner(plannerEdit);
      const date = new Date(plannerEdit.date);
      const y = date.getFullYear();
      const m =
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1;
      const d = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      setStatus(plannerEdit.status);
      setDate(y + "-" + m + "-" + d);
      setTimeFinish(plannerEdit.duration);
      setTimeStart(date.toLocaleTimeString());
      handleSelectSubject(
        plannerEdit.subject_id ? plannerEdit.subject_id : plannerEdit.subject
      );
      setGuest(
        plannerEdit.guest
          ? plannerEdit.guest.map((g) => ({
              value: g.client_id,
              label: g.client_name,
            }))
          : []
      );
    }
  }, []);

  const StatusOption = [
    { id: 18, value: "SCHEDULED", label: "SCHEDULED" },
    { id: 16, value: "DONE", label: "DONE" },
    { id: 17, value: "CANCELED", label: "CANCELED" },
  ];

  const handleSelectSubject = (id) => {
    setSubjectObj(subjectList.filter((s) => s.id === id)[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!modalDiscard) {
      if (!modalEdit) {
        HandleCreatePlanner();
      } else {
        editPlanner();
      }
    }
  };

  const HandleCreatePlanner = () => {
    const newPlanner = {
      name: subjectObj.subject_title,
      date: date + " " + timeStart,
      duration: timeFinish,
      subject: subjectObj.id,
      client: subjectObj.client_id,
      release: subjectObj.release_id,
      user: user.id,
      guest: guest.map((g) => ({ client_id: g.value })),
    };
    if (subjectObj.id && date && timeFinish && timeStart) {
      createPlanner(newPlanner);
    } else {
      setFlag(true);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setModalDiscard(true);
  };

  const editPlanner = () => {
    const newPlanner = {
      id: planner.id,
      name: subjectObj.subject_title,
      date: date + " " + timeStart,
      duration: timeFinish,
      subject: subjectObj.id,
      subject_title: subjectObj.subject_title,
      remark: null,
      client: subjectObj.client_id,
      client_name: subjectObj.client,
      client_email: subjectObj.client_email,
      release: subjectObj.release_id,
      release_title: subjectObj.release,
      business: subjectObj.business,
      user: user.id,
      status: StatusOption.filter((s) => s.label === status)[0].id,
      guest: guest.map((g) => ({ client_id: g.value, client_name: g.label })),
    };
    if (status === "SCHEDULED") {
      updatePlanner(planner.id, newPlanner);
    } else {
      setPlannerEdit(newPlanner);
      setModalRemark(true);
      setModalEdit(false);
    }
  };
  return (
    <Container>
      <PositionTitle>{title}</PositionTitle>
      <Form>
        <PositionInputs>
          {!modalEdit && !modalReschedule && (
            <SingleSelect
              placeholder={flag && !subjectObj.id ? "Required field" : ""}
              set={(s) => handleSelectSubject(s)}
              options={subjectOption}
              name={"subject"}
              label={"Subject"}
              sizeHeight={"3.5vh"}
              sizeSingle={"26vw"}
              required
              onChange={(s) => handleSelectSubject(s)}
            />
          )}
          {(modalEdit || modalReschedule) && (
            <>
              <PositionLabel>Subject</PositionLabel>
              <InputPlanner
                type="text"
                placeholder="Client Name"
                value={subjectObj.subject_title}
                disabled
              />
            </>
          )}
          <PositionLabel>Client Name</PositionLabel>
          <InputPlanner
            type="text"
            placeholder="Client Name"
            value={subjectObj.client}
            disabled
          />
          <PositionLabel>Email</PositionLabel>
          <InputPlanner
            type="text"
            placeholder="Email"
            value={subjectObj.client_email}
            disabled
          />
          <PositionLabel>Business</PositionLabel>
          <InputPlanner
            type="text"
            placeholder="Business"
            value={subjectObj.business}
            disabled
          />
          <PositionLabel>Release Train</PositionLabel>
          <InputPlanner
            type="text"
            placeholder="Business"
            value={subjectObj.release}
            disabled
          />
        </PositionInputs>
        <DivClocks>
          <DivDate>
            <LabelDate>Date</LabelDate>
            <InputDate
              defaultValue={date}
              type="Date"
              name="date"
              onChange={(e) => setDate(e.target.value)}
              required={flag && !date ? true : false}
            ></InputDate>
          </DivDate>
          <DivStart>
            <LabelDate>Start</LabelDate>
            <InputDate
              defaultValue={timeStart}
              type="time"
              name="time"
              onChange={(e) => setTimeStart(e.target.value)}
              required={flag && !timeStart ? true : false}
            ></InputDate>
          </DivStart>
          <DivFinish>
            <LabelDate>Finish</LabelDate>
            <InputDate
              defaultValue={timeFinish}
              type="time"
              name="time-finish"
              onChange={(e) => setTimeFinish(e.target.value)}
              required={flag && !timeFinish ? true : false}
            ></InputDate>
          </DivFinish>
        </DivClocks>
        <PositionTags>
        <TagComponent
            options={clientOption}
            placeholder={""}
            label={"Guests"}
            tags={guest}
            width={"90%"}
            widths={"13vw"}
            set={(g) => setGuest(g)}
            sizeHeight={"3.5vh"}
            heights={"12vh"}
            sizeMenuList={"10vw"}
            sizeMenu={"35%"}
            indicator={"guest"}
          />
        </PositionTags>
        <PositionStatus>
          {modalEdit && (
            <SingleSelect
              placeholder={""}
              set={(c) => setStatus(c)}
              options={StatusOption}
              value={status}
              label={"Status"}
              sizeSingle={"37%"}
              sizeMenuList={"100%"}
              sizeMenu={"33%"}
              isDisabled={false}
              sizeHeight={"3.5vh"}
            />
          )}
          {!modalEdit && (
            <>
              <PositionLabel>Status</PositionLabel>
              <InputStatus placeholder="Status" value="SCHEDULED" disabled />
            </>
          )}
        </PositionStatus>
        <PositionButtons>
          <PositionButtonCancel>
            <ButtonDefault
              onClick={(e) => handleCancel(e)}
              type={"userCancel"}
              name={"Cancel"}
              sizeWidth={"11vw"}
            />
          </PositionButtonCancel>
          <PositionButtonSave>
            <ButtonDefault
              onClick={(e) => handleSubmit(e)}
              type={"userSave"}
              name={"Save"}
              sizeWidth={"11vw"}
            />
          </PositionButtonSave>
        </PositionButtons>
      </Form>
    </Container>
  );
};

export default ModalPlanner;
