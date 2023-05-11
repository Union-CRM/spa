import React, { useState, useEffect, useRef } from "react";
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
  DivStart,
  DivFinish,
  DivGuest,
  DivButton,
  ClickButton,
  PositionButtonCancel,
  InputTime,
  ToBetween,
  DivColumnOne,
  DivColumnTwo,
} from "./styles";
import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import Clock from "../../Geral/Input/clock";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { GuestComponent } from "../../Geral/Input/GuestsComponent";
import { usePlannerContext } from "../../../hook/usePlannerContent";
import { useUserContext } from "../../../hook/useUserContext";
import { useFetchPlanner } from "../../../hook/useFetchPlanner";
import { useClientContext } from "../../../hook/useClientContent";

const ModalCreatePlanner = (props) => {
  const { subject, id } = useSubjectContext();
  const [subjectTarget] = useState(subject.filter((s) => s.id === id)[0]);
  const { setModalSave } = usePlannerContext();
  const { setModal } = props;
  const [guest, setGuest] = useState([]);
  const [clientOption, setClientOption] = useState([]);
  const { client: clientList } = useClientContext();
  const { user, userTarget } = useUserContext();
  const [timeStart, setTimeStart] = useState();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [timeFinish, setTimeFinish] = useState();
  const { createPlanner } = useFetchPlanner();
  const [flag, setFlag] = useState(false);

  const closeModal = () => {
    setModalDetails(true);
    setModalPlanner(false);
    setToggleState(2);
  };

  const { setToggleState } = useSubjectContext();

  const { setModalDetails } = useSubjectContext();

  const { setModalPlanner } = usePlannerContext();

  const HandleCreatePlanner = (e) => {
    e.preventDefault();
    const newPlanner = {
      name: subjectTarget.subject_title,
      date: date + " " + timeStart,
      duration: timeFinish,
      subject: subjectTarget.id,
      client: subjectTarget.client_id,
      release: subjectTarget.release_id,
      user: userTarget.id,
      guest: guest.map((g) => ({ client_id: g.value })),
    };
    if (date && timeFinish && timeStart) {
      createPlanner(newPlanner);
      setModalDetails(true);
      setModalPlanner(false);
    } else {
      setFlag(true);
    }
  };

  /*useEffect(() => {
    if (clientList) {
      setClientOption(
        clientList
          .filter((c) => c.status === "Active")
          .map((c) => ({ id: c.id, value: c.id, label: c.client }))
      );
    }
  }, []);*/

  return (
    <>
      <ContainerCentral>
        <Container>
          <DivHeader>
            <Title>Create Planner</Title>
          </DivHeader>
          <ContainerChildren>
            <Form>
              <DivColumnOne>
                <DivDate>
                  <Label>
                    Date
                    <Input
                      widthInput={"93%"}
                      type="date"
                      defaultValue={date}
                      name="date"
                      onChange={(e) => setDate(e.target.value)}
                      required={flag && !date ? true : false}
                      /*placeholder={flag && !name ? "Required field" : ""}
                    value={name}
                    required
                    onChange={(event) => setName(event.target.value)}*/
                    />
                  </Label>
                </DivDate>

                <DivStart>
                  <Label>
                    Start
                    <InputTime
                      type="time"
                      name="time"
                      defaultValue={timeStart}
                      onChange={(e) => setTimeStart(e.target.value)}
                      required={flag && !timeStart ? true : false}
                    />
                  </Label>
                </DivStart>

                <DivFinish>
                  <Label>
                    Finish
                    <InputTime
                      defaultValue={timeFinish}
                      type="time"
                      name="time-finish"
                      onChange={(e) => setTimeFinish(e.target.value)}
                      required={flag && !timeFinish ? true : false}
                    />
                  </Label>
                </DivFinish>
              </DivColumnOne>

              <DivColumnTwo>
                <GuestComponent set={(guest) => setGuest(guest)} />
              </DivColumnTwo>
            </Form>{" "}
            <DivButton>
              <ClickButton onClick={(e) => HandleCreatePlanner(e)}>
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
    </>
  );
};

export default ModalCreatePlanner;

const options = [
  { value: 1, label: "Maycon Cabo", color: "#d9d9d9" },
  { value: 2, label: "Luana Nogueira", color: "#d9d9d9" },
  { value: 3, label: "Graziele Miranda", color: "#d9d9d9" },
  { value: 4, label: "João Pedro", color: "#d9d9d9" },
  { value: 5, label: "Felipe Flaibam", color: "#d9d9d9" },
  { value: 6, label: "Ariel Souza", color: "#d9d9d9" },
];
