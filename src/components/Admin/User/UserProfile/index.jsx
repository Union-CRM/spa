import React from "react";
import ContainerCards from "../../../Client/ContainerCardClient";
import {
  Content,
  DivClient,
  DivPlanner,
  Graph1,
  Header,
  DivPhoto,
  DivPhotoI,
  DivDadosCard,
  DivLevel,
  Dot,
  DivButtonUser,
  Button,
  Circle,
  DivIcon,
  Label,
  DivCalendar,
  DivClose,
  DivSubject,
} from "./styles";
import Grafico from "../../../Grafico";
import Subtitle from "../../../../assets/FontSystem/Subtitle";
import PlannerCard from "../../../Planner/PlannerCard";
import { BigCalender } from "../../../Planner/Calendar/index";
import { useUserContext } from "../../../../hook/useUserContext";
import Body from "../../../../assets/FontSystem/Body";
import IconSystem from "../../../../assets/IconSystem";
import SubjectList from "../../../Subject/SubjectCardListView";
// hook/usePlannerContext

import "react-tippy/dist/tippy.css";

/*const funcClientInfo =()=>{
  const [clientInfo,setClientInfo] = useState("Client Information"); 
  return {clientInfo,setClientInfo};
}*/
const dateOfTheDay = new Date();

const UserProfile = () => {
  const {
    userTarget,
    modalPlanner,
    setModalPlanner,
    modalSubject,
    setModalSubject,
  } = useUserContext();

  const handleClickPlanner = () => {
    setModalPlanner(true);
  };

  const handleCloseModal = () => {
    setModalPlanner(false);
    setModalSubject(false);
  };

  const handleClickSubject = () => {
    setModalSubject(true);
  };
  return (
    <>
      {modalPlanner && (
        <>
          <DivClose onClick={handleCloseModal} />
          <DivCalendar>
            <BigCalender adminList={true} />
          </DivCalendar>
        </>
      )}
      {modalSubject && (
        <>
          <DivClose onClick={handleCloseModal} />
          <DivSubject>
            <SubjectList adminList={true} />
          </DivSubject>
        </>
      )}{" "}
      <Header>
        <DivPhoto>
          <DivPhotoI>
            <Body type={"Body1"} name={Split(userTarget.name)} />
          </DivPhotoI>
        </DivPhoto>
        <DivDadosCard>
          <Body type={"Body1"} name={userTarget.name} />
          <Subtitle type={"TextDescription"} name={userTarget.email} />
          <Subtitle
            type={"TextDescription"}
            name={"ID: " + userTarget.tcs_id}
          />
        </DivDadosCard>
        <DivLevel>
          <Dot bgColor={"#007bff"}></Dot>
          <Dot bgColor={userTarget.level > 1 ? "#007bff" : "#F5F7FA"}></Dot>
          <Dot bgColor={userTarget.level > 2 ? "#007bff" : "#F5F7FA"}></Dot>
          <Dot bgColor={userTarget.level > 3 ? "#007bff" : "#F5F7FA"}></Dot>
          <Dot bgColor={userTarget.level > 4 ? "#007bff" : "#F5F7FA"}></Dot>
        </DivLevel>
        <DivButtonUser>
          <Button onClick={handleClickSubject}>
            <Label>SUBJECT</Label>
            <Circle>
              <DivIcon>
                <IconSystem icon={"Copy"} height={"25px"} width={"25px"} />
              </DivIcon>
            </Circle>
          </Button>

          <Button onClick={handleClickPlanner}>
            <Label>PLANNER</Label>
            <Circle>
              <DivIcon>
                <IconSystem icon={"Copy"} height={"25px"} width={"25px"} />
              </DivIcon>
            </Circle>
          </Button>
        </DivButtonUser>
      </Header>
      <Content>
        <DivClient>
          <ContainerCards adminList={true} />
        </DivClient>

        <DivPlanner>
          <PlannerCard adminList={true} date={dateOfTheDay} />
        </DivPlanner>
      </Content>
      <Graph1>
        <Grafico value={0} />
        <Grafico value={1} />
      </Graph1>
    </>
  );
};

export default UserProfile;
function Split(n) {
  const name = n ? n : "";
  var nameSplit = name.split(" ");
  var name2 =
    nameSplit[0].split("")[0] +
    " " +
    nameSplit[nameSplit.length - 1].split("")[0] +
    "";

  return name2.toUpperCase();
}
//<BigCalender adimList={true} />
