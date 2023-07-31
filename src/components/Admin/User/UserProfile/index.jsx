import React from "react";
import ContainerCards from "../../../Client/ContainerCardClient";
import {
  Button,
  Circle,
  Content,
  CurrentPath,
  DivButtonUser,
  DivCalendar,
  DivClient,
  DivClose,
  DivDadosCard,
  DivIcon,
  DivLevel,
  DivPath,
  DivPhoto,
  DivPhotoI,
  DivPlanner,
  DivSubject,
  Dot,
  Graph1,
  Header,
  Label,
  PreviousPath,
} from "./styles";
import Subject from "../../../Grafico/Subject";
import Subtitle from "../../../../assets/FontSystem/Subtitle";
import PlannerCard from "../../../Planner/PlannerCard";
import { BigCalender } from "../../../Planner/Calendar/index";
import { BigCalender as RemarkCalendar } from "../../../RemarkCalendar/Calendar";
import { useUserContext } from "../../../../hook/useUserContext";
import { useSubjectContext } from "../../../../hook/useSubjectContent";
import { usePlannerContext } from "../../../../hook/usePlannerContext";
import Body from "../../../../assets/FontSystem/Body";
import SubjectList from "../../../Subject/SubjectCardListView";
import { CustomerContextProvider } from "../../../../context/CustomerContext";
import ModalPlanner from "../../../Planner/AddEditPlanner";
import ModalDiscardChanges from "../../../Planner/ModalDiscardChanges";
import ModalSave from "../../../Planner/ModalSuccessfuly";
import PopUpCanceled from "../../../Planner/PopUpCanceled";
import FollowUpModal from "../../../Planner/FollowUpModal";
import PopUpFinished from "../../../Planner/PopUpFinished";
import ModalError from "../../../Planner/ModalError";
import { ReactComponent as Subjects } from "../../../../assets/svg/Subjects.svg";
import { ReactComponent as Planner } from "../../../../assets/svg/Planner.svg";
import { ReactComponent as Remark } from "../../../../assets/svg/Remark.svg";

//import { Subject as SubjectUser } from "../../../Subject/CreateEditSubjectModal";

import "react-tippy/dist/tippy.css";
import { useRemarkContext } from "../../../../hook/useRemarkContent";

const dateOfTheDay = new Date();

const UserProfile = () => {
  const {
    modalSubject,
    setModalSubject,
    modalEdit,
    modalSave,
    setModalSave,
    modalDiscard,
    modalReschedule,
    modalFollowUp,
    modalPopUpFinished,
    modalPopUpCanceled,
    modalError,
    setModalError,
  } = usePlannerContext();

  const {
    userTarget,
    modalPlanner,
    setModalPlanner,
    setViewProfile,
    modalRemark,
    setModalRemark,
    setAdmLayout,
  } = useUserContext();
  const { subject } = useSubjectContext();
  const { planner } = usePlannerContext();
  const { remark } = useRemarkContext();
  // numberOfPlanner [0]-canceled | [1]- Scheduled | [2] Done

  const handleClickPlanner = () => {
    setModalPlanner(true);
  };

  const handleCloseModal = () => {
    setModalPlanner(false);
    setModalSubject(false);
    setModalRemark(false);
  };

  const handleClickSubject = () => {
    setModalSubject(true);
    setAdmLayout(true);
  };

  const handleClickRemark = () => {
    setModalRemark(true);
  };

  const numberOfPlanner = [
    planner
      ? planner.filter(
          (p) => p.status === "CANCELED" && p.user_id === userTarget.id
        ).length
      : 0,
    planner
      ? planner.filter(
          (p) => p.status === "SCHEDULED" && p.user_id === userTarget.id
        ).length
      : 0,
    planner
      ? planner.filter(
          (p) => p.status === "DONE" && p.user_id === userTarget.id
        ).length
      : 0,
  ];
  // numberOfSubject [0]-canceled | [1]- Finished | [2] In progress
  const numberOfSubject = [
    subject
      ? subject.filter(
          (s) => s.status === "CANCELED" && s.user_id === userTarget.id
        ).length
      : 0,
    subject
      ? subject.filter(
          (s) => s.status === "FINISHED" && s.user_id === userTarget.id
        ).length
      : 0,
    subject
      ? subject.filter(
          (s) => s.status === "IN PROGRESS" && s.user_id === userTarget.id
        ).length
      : 0,
  ];

  const numberOfRemark = [
    remark
      ? remark.filter(
          (r) =>
            r.status_description === "CANCELED" && r.user_id === userTarget.id
        ).length
      : 0,
    remark
      ? remark.filter(
          (r) =>
            r.status_description === "FINISHED" && r.user_id === userTarget.id
        ).length
      : 0,
    remark
      ? remark.filter(
          (r) =>
            r.status_description === "ACTIVE" && r.user_id === userTarget.id
        ).length
      : 0,
  ];

  return (
    <>
      <DivPath>
        <PreviousPath onClick={() => setViewProfile(false)}>User</PreviousPath>{" "}
        {">"}
        <CurrentPath> View Profile</CurrentPath>{" "}
      </DivPath>
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
            <SubjectList translate={"Admin"} adminList={true} />
          </DivSubject>
        </>
      )}{" "}
      {modalRemark && (
        <>
          <DivClose onClick={handleCloseModal} />
          <DivCalendar>
            <RemarkCalendar adminList={true} userTarget={userTarget.tcs_id} />
          </DivCalendar>
        </>
      )}
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
                <Subjects fill={"#FFFFFF"} height={"25px"} width={"25px"} />
              </DivIcon>
            </Circle>
          </Button>
          <Button onClick={handleClickRemark}>
            <Label>REMARK</Label>
            <Circle>
              <DivIcon>
                <Remark fill={"#FFFFFF"} height={"25px"} width={"25px"} />
              </DivIcon>
            </Circle>
          </Button>

          <Button onClick={handleClickPlanner}>
            <Label>PLANNER</Label>
            <Circle>
              <DivIcon>
                <Planner fill={"#FFFFFF"} height={"25px"} width={"25px"} />
              </DivIcon>
            </Circle>
          </Button>
        </DivButtonUser>
      </Header>
      <CustomerContextProvider>
        <Content>
          <DivClient>
            <ContainerCards adminList={true} />
          </DivClient>

          <DivPlanner>
            <PlannerCard adminList={true} date={dateOfTheDay} />
          </DivPlanner>
        </Content>
      </CustomerContextProvider>
      <Graph1>
        <Subject
          numberOfSubjeccts={numberOfSubject}
          numberOfPlanner={numberOfPlanner}
          numberOfRemark={numberOfRemark}
          value={0}
        />
        {/*<Group />*/}
      </Graph1>
      {modalEdit && (
        <>
          <DivClose onClick={handleCloseModal}></DivClose>
          <ModalPlanner adminList={true} title={"Edit Planner"} />
        </>
      )}
      {!modalPlanner && modalSave && (
        <>
          <DivClose onClick={() => setModalSave(false)}></DivClose>
          <ModalSave subject={"translate(-50%, -200%)"} />
        </>
      )}
      {modalDiscard && (
        <>
          <ModalDiscardChanges />
        </>
      )}
      {modalPopUpCanceled && (
        <>
          <PopUpCanceled />
        </>
      )}
      {modalFollowUp && (
        <>
          <DivClose />
          <FollowUpModal adminList={true} />
        </>
      )}
      {modalReschedule && (
        <>
          <DivClose onClick={handleCloseModal}></DivClose>
          <ModalPlanner adminList={true} title={"Reschedule Planner"} />
        </>
      )}
      {modalPopUpFinished && (
        <>
          <DivClose />
          <PopUpFinished />
        </>
      )}
      {/*modalSubject && (
        <>
          <PositionSubject>
            <SubjectUser
              setModal={() => setModalSubject(false)}
              planner={"planner"}
              title={"Create Subject"}
            />
          </PositionSubject>
        </>
      )*/}
      {/* {modalRemark && (
        <>
          <DivClose onClick={handleCloseModal}></DivClose>
          <RemarkCalendar adminList={true} title={"Remark "} />
        </>
      )} */}
      {modalError && (
        <>
          <DivClose onClick={() => setModalError(false)}></DivClose>
          <ModalError />
        </>
      )}
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
