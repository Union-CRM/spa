import React, { useState, useEffect } from "react";
import {
  ContainerCentral,
  Container,
  ContainerChildren,
  Title,
  Input,
  Form,
  Label,
  AlertaDate,
  DivHeader,
  DivDate,
  DivStart,
  DivFinish,
  DivButton,
  ClickButton,
  PositionButtonCancel,
  InputTime,
  DivColumnOne,
  DivColumnTwo,
} from "./styles";
import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { GuestComponent } from "../../Geral/Input/GuestsComponent";
import { usePlannerContext } from "../../../hook/usePlannerContent";
import { useUserContext } from "../../../hook/useUserContext";
import { useFetchPlanner } from "../../../hook/useFetchPlanner";
import { useClientContext } from "../../../hook/useClientContent";

const ModalCreatePlanner = (props) => {
  const { subject, id } = useSubjectContext();
  const [subjectTarget] = useState(subject.filter((s) => s.id === id)[0]);
  const [guest, setGuest] = useState([]);
  const [clientOption, setClientOption] = useState([]);
  const { client: clientList } = useClientContext();
  const { userTarget } = useUserContext();
  const [timeStart, setTimeStart] = useState();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [timeFinish, setTimeFinish] = useState();
  //const [dateFinish, setDateFinish] = useState();
  const { createPlanner } = useFetchPlanner();
  const [flag, setFlag] = useState(false);
  const [invalidHour, setInvalidHour] = useState(false);
  const [invalidDateStart, setInvalidDateStart] = useState(false);
  const [invalidDateFinish, setInvalidDateFinish] = useState(false);

  const closeModal = () => {
    setModalDetails(true);
    setModalPlanner(false);
    setToggleState(2);
  };

  const { setToggleState } = useSubjectContext();

  const { setModalDetails } = useSubjectContext();

  const { setModalPlanner } = usePlannerContext();

  const HandleCreatePlanner = (e) => {
    // verificando
    if (date && timeFinish && timeStart && guest) {
      setFlag(false);
      // data posterior
      setInvalidDateStart(false);
      if (timeFinish > timeStart) {
        setInvalidHour(false);
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
        createPlanner(newPlanner);
        setModalDetails(true);
        setModalPlanner(false);
      } else {
        setInvalidDateFinish(true);
      }
      //} // data anterior
      //data hoje
      setInvalidDateStart(false);
    } else {
      setFlag(true);
    }
  };

  useEffect(() => {
    if (clientList) {
      setClientOption(
        clientList
          .sort((a, b) => (a.client || "").localeCompare(b.client || ""))
          .filter((c) => c.status === "Active")
          .map((c) => ({ id: c.id, value: c.id, label: c.client }))
      );
    }
  }, []);

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
                      name="date"
                      defaultValue={date}
                      onChange={(e) => setDate(e.target.value)}
                      required={flag && !date ? true : false}
                      //placeholder={flag && !name ? "Required field" : ""}
                      //value={name}
                      //onChange={(event) => setName(event.target.value)}*/
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
                <GuestComponent
                  set={(guest) => setGuest(guest)}
                  options={clientOption}
                  label={"Guests"}
                  tags={guest}
                  indicator={"guest"}
                  value={guest.label}
                />
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

              {invalidHour && (
                <AlertaDate>
                  <span>
                    The start time must be equal to or greater than the current
                    time.
                  </span>
                </AlertaDate>
              )}
              {flag && (
                <AlertaDate>
                  <span>
                    Please make sure all fields are filled in to continue.
                  </span>
                </AlertaDate>
              )}

              {invalidDateStart && (
                <AlertaDate>
                  <span>
                    The end date must be equal to or greater than the current
                    date.
                  </span>
                </AlertaDate>
              )}

              {invalidDateFinish && (
                <AlertaDate>
                  <span>The end time must be greater than the start time.</span>
                </AlertaDate>
              )}
            </DivButton>
          </ContainerChildren>
        </Container>
      </ContainerCentral>
    </>
  );
};

export default ModalCreatePlanner;
