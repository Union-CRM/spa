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
  AlertaDate,
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
import LoginInvalid from '../../Geral/LoginModals/LoginInvalid';

const ModalSheets) => {
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
  const [dateFinish, setDateFinish] = useState();
  const { createPlanner } = useFetchPlanner();
  const [flag, setFlag] = useState(false);
  const [invalidHour, setInvalidHour] = useState(false);
  const [invalidDateStart, setInvalidDateStart] = useState(false);

  const closeModal = () => {
    setModalDetails(true);
    setModalPlanner(false);
    setToggleState(2);
  };

  const { setToggleState } = useSubjectContext();

  const { setModalDetails } = useSubjectContext();

  const { setModalPlanner } = usePlannerContext();

  const HandleCreatePlanner = (e) => {

    const horas = new Date();
    var currentDate = new Date((horas.getMonth() + 1) + "/" + horas.getDate() + "/" + horas.getFullYear())
    var partesData = date.split("-");
    var data = new Date(partesData[1] + "/" + partesData[2] + "/" + partesData[0]);

    var aux = "";

    if (horas.getMinutes() < 10) {
      aux = horas.getHours() + ":0" + horas.getMinutes();
    }
    else {
      aux = horas.getHours() + ":" + horas.getMinutes()
    }

    if (horas.getHours() < 10) {
            aux = "0"+aux;
          }


    if (date && timeFinish && timeStart && guest) {
        setFlag(false)

    
      if (data >= currentDate) {
        setInvalidDateStart(false);
        if (timeFinish > timeStart && timeStart >= aux) {
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
          setTimeout(true);
          console.log(setTimeout)
          //setInvalidHour(true);
        }
      }
     else {
      setInvalidDateStart(true);
    }} else {
      setFlag(true);
    }
    console.log("FOIII!!!")
  };


  useEffect(() => {
    if (clientList) {
      setClientOption(
        clientList
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

              {invalidHour &&
                <AlertaDate><span>The start time must be equal to or greater than the current time.</span></AlertaDate>}
              {flag &&
              <AlertaDate><span>
              Please make sure all fields are filled in to continue.</span></AlertaDate>}

              {invalidDateStart &&
              <AlertaDate><span>The end date must be equal to or greater than the current date.</span></AlertaDate>}

            </DivButton>
          </ContainerChildren>


        </Container>
      </ContainerCentral>
    </>
  );
};

export default ModalSheet;
