import React, { useState } from "react";
import ContainerCards from "../../../components/Client/ContainerCardClient";
import {
  Content,
  DivClient,
  DivPlanner,
  Graph1,
  DivInfo,
  DivClose,
} from "./styles";
import Grafico from "../../../components/Grafico";
import PageBodyHome from "../../../components/Geral/PageBody/PageBodyHome";
import PlannerCard from "../../../components/Planner/PlannerCard";
import { usePlannerContext } from "../../../hook/usePlannerContext";
import { CustomerContextProvider } from "../../../context/CustomerContext";
import { useUserContext } from "../../../hook/useUserContext";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import ModalPlanner from "../../../components/Planner/AddEditPlanner";
import ModalDiscardChanges from "../../../components/Planner/ModalDiscardChanges";
import ModalSave from "../../../components/Planner/ModalSuccessfuly";
import RemarkModal from "../../../components/Planner/RemarkModal";
import PopUpCanceled from "../../../components/Planner/PopUpCanceled";
import FollowUpModal from "../../../components/Planner/FollowUpModal";
import PopUpFinished from "../../../components/Planner/PopUpFinished";
import ModalError from "../../../components/Planner/ModalError";

// hook/usePlannerContext

import "react-tippy/dist/tippy.css";

/*const funcClientInfo =()=>{
  const [clientInfo,setClientInfo] = useState("Client Information"); 
  return {clientInfo,setClientInfo};
}*/

const dateOfTheDay = new Date();

const Home = () => {
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
  const { subject } = useSubjectContext();

  // numberOfPlanner [0]-canceled | [1]- Scheduled | [2] Done
  const numberOfPlanner = [
    planner ? planner.filter((p) => p.status === "CANCELED").length : 0,
    planner ? planner.filter((p) => p.status === "SCHEDULED").length : 0,
    planner ? planner.filter((p) => p.status === "DONE").length : 0,
  ];
  // numberOfSubject [0]-canceled |[2] In progress | [1]- Finished |
  const numberOfSubject = [
    subject ? subject.filter((s) => s.status === "CANCELED").length : 0,
    subject ? subject.filter((s) => s.status === "IN PROGRESS").length : 0,
    subject ? subject.filter((s) => s.status === "FINISHED").length : 0,
  ];

  const handleCloseModal = () => {
    setModalEdit(false);
  };

  return (
    <>
      <PageBodyHome>
        <CustomerContextProvider>
          <Content>
            <DivClient>
              <ContainerCards />
            </DivClient>

            <DivPlanner>
              <PlannerCard date={dateOfTheDay} />
            </DivPlanner>
          </Content>

          <Graph1>
            <Grafico
              title={"Subject"}
              legend={["Canceled", "In progress", "Finished"]}
              value={numberOfSubject}
            />
            <Grafico
              title={"Planner"}
              legend={["Canceled", "Scheduled", "Done"]}
              value={numberOfPlanner}
            />
          </Graph1>
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
        </CustomerContextProvider>
      </PageBodyHome>
    </>
  );
};

export default Home;
