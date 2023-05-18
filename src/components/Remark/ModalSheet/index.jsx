import React, { useState, useEffect, useRef, useContext } from "react";
import {
  ContainerCentral,
  Container,
  ContainerGray,
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
  Box,
  DivSubject,
  DivCheck,
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
import { ReactComponent as Download } from "../../../assets/svg/Downloadsheet.svg"
import SingleSelect from "../../Geral/Input/SingleSelect";
import { TagComponent } from "../../Geral/TagComponent";
import { useRemarkContext } from "../../../hook/useRemarkContent";
import { useFetchRemark } from "../../../hook/useFetchRemark";

const ModalSheet = (props) => {
  const { subject, id } = useSubjectContext();
  //const [subjectTarget] = useState(subject.filter((s) => s.id === id)[0]);
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
  const [tags, setTags] = useState();
 
 
  const closeModal = () => {
    setModalDetails(true);
    setModalPlanner(false);
    setToggleState(2);
  };

  const { setToggleState } = useSubjectContext();

  const { setModalDetails } = useSubjectContext();

  const { setModalPlanner } = usePlannerContext();
  


  /*const HandleCreatePlanner = (e) => {

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
  };*/


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
          <ContainerGray>
            <DivHeader>
              <Download/><Title>Export Remark Details Spreedsheet</Title>
            </DivHeader>
            <ContainerChildren>
              <Form>
                  <DivDate>
                    <Label>
                      Start Date
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
                    <Label>
                      End Date
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

                  <DivCheck>
                      <Box type="checkbox" name="ola" value="olá"/>
                      <span>Just This Day</span>
                  </DivCheck> 
                  
                  <DivSubject>
                    <TagComponent
                      options={tags ? tags : []}
                      tags={tags}
                      placeholder={"Subjects"}
                      label={"Subjects"}
                      top={"130%"}
                      width={"100%"}
                      widths={"100%"}
                      sizeHeight={"6.5vh"}
                      heights={"15vh"}
                      display={"flex"}
                      sizeMenuList={"10vw"}
                      sizeMenu={"40%"}
                      set={(t) => setTags(t)}
                      />
                  </DivSubject>

                  
              </Form>{" "}


              <DivButton>
                <ClickButton>
                  <ButtonDefault
                    type="userSave"
                    weightFont={"500"}
                    sizeFont={"18px"}
                    name={"Export"}
                  />
                </ClickButton>
                

                {invalidHour &&
                  <AlertaDate><span>The start time must be equal to or greater than the current time.</span></AlertaDate>}
                {flag &&
                <AlertaDate><span>
                Please make sure all fields are filled in to continue.</span></AlertaDate>}

                {invalidDateStart &&
                <AlertaDate><span>The end date must be equal to or greater than the current date.</span></AlertaDate>}

              </DivButton>
            </ContainerChildren>

          </ContainerGray>        
        </Container>
      </ContainerCentral>
    </>
  );
};

export default ModalSheet;
