import React, { useState, useEffect } from "react";
import { TagComponent } from "../../Geral/TagComponent";
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

const ModalPlanner = (props) => {
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
  const { userTarget, usersGlobal } = useUserContext();

  const [flagSubject, setFlagSubject] = useState(false);
  const [flagDate, setFlagDate] = useState(false);
  const [flagStart, setFlagStart] = useState(false);
  const [flagFinish, setFlagFinish] = useState(false);

  const userOption = usersGlobal
    .filter((u) => u.status === "ACTIVE")
    .map((u) => ({ id: u.id, value: u.id, label: u.name }));
  //console.log(userOption);
  const clientOption = clientList
    .filter((c) => c.status === "Active" && c.user_id === userTarget.id)
    .map((c) => ({ id: c.id, value: c.id, label: c.client }));

  const guestOptions = clientOption.concat(userOption);

  useEffect(() => {
    setSubjectOption(
      subjectList
        .filter(
          (s) =>
            s.status !== "FINISHED" &&
            s.status !== "CANCELED" &&
            s.user_id === userTarget.id
        )
        .map((s) => ({ id: s.id, value: s.id, label: s.subject_title }))
        .sort((a, b) => (a.label || "").localeCompare(b.label || ""))
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
    var aux = "";
    var todayDate = new Date();
    const partesData = date.split("/");
    //Data enviada do formulário
    var data = new Date(
      partesData[1] + "/" + partesData[2] + "/" + partesData[0]
    );
    //Data de hoje
    var tDate = new Date(
      todayDate.getMonth() +
        1 +
        "/" +
        todayDate.getDate() +
        "/" +
        todayDate.getFullYear()
    );

    if (todayDate.getMinutes() < 10) {
      aux = todayDate.getHours() + ":0" + todayDate.getMinutes();
    } else {
      aux = todayDate.getHours() + ":" + todayDate.getMinutes();
    }

    if (todayDate.getHours() < 10) {
      aux = "0" + aux;
    }

    if (!subjectObj.id) {
      setFlagSubject(true);
    }
    if (!date) {
      setFlagDate(true);
    }
    if (!timeStart) {
      setFlagStart(true);
    }
    if (!timeFinish) {
      setFlagFinish(true);
    }

    if (timeStart && timeFinish && date) {
      setFlagDate(false);
      setFlagStart(false);
      if (timeFinish > timeStart) {
        setFlagFinish(false);

        const newPlanner = {
          name: subjectObj.subject_title,
          date: date + " " + timeStart,
          duration: timeFinish,
          subject: subjectObj.id,
          client: subjectObj.client_id,
          release: subjectObj.release_id,
          user: userTarget.id,
          guest: guest.map((g) => ({ client_id: g.value })),
        };
        if (subjectObj.id && date && timeFinish && timeStart) {
          createPlanner(newPlanner);
        }
      } else {
        setFlagFinish(true);
      }
    } else if (data < tDate) {
      setFlagDate(true);
    } else {
      setFlagDate(false);

      if (timeStart >= aux) {
        setFlagStart(false);

        if (timeFinish > timeStart) {
          setFlagFinish(false);

          const newPlanner = {
            name: subjectObj.subject_title,
            date: date + " " + timeStart,
            duration: timeFinish,
            subject: subjectObj.id,
            client: subjectObj.client_id,
            release: subjectObj.release_id,
            user: userTarget.id,
            guest: guest.map((g) => ({ client_id: g.value })),
          };
          if (subjectObj.id && date && timeFinish && timeStart) {
            createPlanner(newPlanner);
          }
        } else {
          setFlagFinish(true);
        }
      } else {
        setFlagStart(true);
      }
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
      user: userTarget.id,
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
      <PositionTitle>{props.title}</PositionTitle>
      <Form>
        <PositionInputs>
          {!modalEdit && !modalReschedule && (
            <SingleSelect
              placeholder={
                flagSubject && !subjectObj.id ? "Required field" : ""
              }
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
                value={subjectObj ? subjectObj.subject_title : ""}
                disabled
              />
              <PositionLabel>Client Name</PositionLabel>
              <InputPlanner
                type="text"
                placeholder="Client Name"
                value={subjectObj ? subjectObj.client : ""}
                disabled
              />
            </>
          )}

          <PositionLabel>Email</PositionLabel>
          <InputPlanner
            type="text"
            placeholder="Email"
            value={subjectObj ? subjectObj.client_email : ""}
            disabled
          />
          <PositionLabel>Business</PositionLabel>
          <InputPlanner
            type="text"
            placeholder="Business"
            value={subjectObj ? subjectObj.business : ""}
            disabled
          />
          <PositionLabel>Release Train</PositionLabel>
          <InputPlanner
            type="text"
            placeholder="Business"
            value={subjectObj ? subjectObj.release : ""}
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
              //required={flagDate && !date ? true : false}
              required={flagDate || (flagDate && !date) ? true : false}
            ></InputDate>
          </DivDate>
          <DivStart>
            <LabelDate>Start</LabelDate>
            <InputDate
              defaultValue={timeStart}
              type="time"
              name="time"
              onChange={(e) => setTimeStart(e.target.value)}
              //required={flagStart && !timeStart ? true : false}
              required={flagStart || (flagStart && !timeStart) ? true : false} //testar melhor
            ></InputDate>
          </DivStart>
          <DivFinish>
            <LabelDate>Finish</LabelDate>
            <InputDate
              defaultValue={timeFinish}
              type="time"
              name="time-finish"
              onChange={(e) => setTimeFinish(e.target.value)}
              required={
                flagFinish || (flagFinish && !timeFinish) ? true : false
              } //testar melhor
            ></InputDate>
          </DivFinish>
        </DivClocks>
        <PositionTags>
          <TagComponent
            options={guestOptions}
            placeholder={""}
            label={"Guests"}
            tags={guest}
            width={"90%"}
            widths={"100%"}
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
              sizeSingle={"97%"}
              sizeMenuList={"100%"}
              sizeMenu={"100%"}
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
