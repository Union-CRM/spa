import React from "react";
import {
  Container,
  DivUser,
  ContainerUp,
  ContainerLow,
  DivGroup,
  DivRealise,
  DivSubjPlanner,
  DivPlanner,
  ContainerLowLeft,
  DivClose,
  DivModal,
} from "./styles";
import ContainerCards from "./ContainerCardUser/index";
import ContainerCardsGroup from "./ContainerCardGroup";
import ContainerCardInfo from "./ContainerCardInfo/";
import ContainerSubjectPlanner from "./ContainerSubjetPlanner";
import PlannerCard from "../../Planner/PlannerCard";
import ModalPlanner from "../../Planner/AddEditPlanner";
import ModalDiscardChanges from "../../Planner/ModalDiscardChanges";
import ModalSave from "../../Planner/ModalSuccessfuly";
import RemarkModal from "../../Planner/RemarkModal";
import PopUpCanceled from "../../Planner/PopUpCanceled";
import FollowUpModal from "../../Planner/FollowUpModal";
import PopUpFinished from "../../Planner/PopUpFinished";
import ModalError from "../../Planner/ModalError";
//import ModalGroupDetails from "../AdmGroupsList/ModalGroupDetails";
import { usePlannerContext } from "../../../hook/usePlannerContext";
//import { useGroupListContext } from "../../../hook/useGroupListContext";

const dateOfTheDay = new Date();

const Home = () => {
  const handleCloseModal = () => {
    setModalEdit(false);
  };
  //const { modalInfo, id, setModalInfo } = useGroupListContext();
  const {
    planner,
    modalSubject,
    setModalSubject,
    modalEdit,
    setModalEdit,
    modalSave,
    setModalSave,
    modalDiscard,
    modalRemark,
    modalReschedule,
    modalFollowUp,
    modalPopUpFinished,
    modalPopUpCanceled,
    modalError,
    setModalError,
  } = usePlannerContext();

  return (
    <Container>
      <ContainerUp>
        <DivUser>
          <ContainerCards />
        </DivUser>
        <DivGroup>
          <ContainerCardsGroup />
        </DivGroup>
      </ContainerUp>
      <ContainerLow>
        <ContainerLowLeft>
          <DivRealise>
            <ContainerCardInfo />
          </DivRealise>
          <DivSubjPlanner>
            <ContainerSubjectPlanner />
          </DivSubjPlanner>
        </ContainerLowLeft>
        <DivPlanner>
          <PlannerCard date={dateOfTheDay} home={true} />
        </DivPlanner>
      </ContainerLow>

      {modalEdit && (
        <>
          <DivClose onClick={handleCloseModal}></DivClose>
          <ModalPlanner adminList={true} title={"Edit Planner"} />
        </>
      )}
      {modalSave && (
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
      {modalRemark && (
        <>
          <DivClose onClick={handleCloseModal}></DivClose>
          <RemarkModal adminList={true} title={"Create Remark"} />
        </>
      )}
      {modalError && (
        <>
          <DivClose onClick={() => setModalError(false)}></DivClose>
          <ModalError />
        </>
      )}
      {/*
      {modalEditGroup && (
        <AddEditGroup
          id={id}
          setModal={setModal}
          title={"Edit Group"}
        />
      )}      
     

      <DivModal $mode={modalInfo} />
      {modalInfo && (
        <ModalGroupDetails
          id={id}
          //openModal={() => detailsModal()}
          setModalInfo={setModalInfo}
          title={"Group Details"}
        />
      )} */}
    </Container>
  );
};

export default Home;
