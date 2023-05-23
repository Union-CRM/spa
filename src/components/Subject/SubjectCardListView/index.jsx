import React from "react";
import {
  ContainerGlobal,
  ContainerHeaderAndCards,
  HeaderContainerCards,
  DivInfo,
  ContainerCards,
  DivModal,
  LineDivisor,
  BoardStyle,
  DivTitlePage,
  Top,
  H1,
  DivButton,
  DivSpans,
  ButtonCancel,
  ButtonFinished,
  ButtonProgress,
  HowManySubjectList,
  Progress,
  HowManyProgress,
  Finished,
  HowManyFinished,
  Canceled,
  HowManyCancel,
} from "./styles";
import SubjectCard from "../CardListView/index";
import { useState, useEffect } from "react";
import ButtonAdd from "../../../assets/Buttons/ButtonAdd";

//Components
import Subject from "../CreateEditSubjectModal";
import ModalDiscardChanges from "../ModalDiscardChanges";
import ModalSubject from "../../Subject/ModalSubject";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useRemarkContext } from "../../../hook/useRemarkContent";
import EditSubject from "../../Subject/EditSubject";
import CreateRemark from "../../Subject/ModalCreateRemark";
import ModalCreatePlanner from "../../Subject/ModalCreatePlanner";
import ModalSave from "../../Planner/ModalSuccessfuly";
import { usePlannerContext } from "../../../hook/usePlannerContent";
import { ReactComponent as Info } from "../../../assets/svg/Info.svg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useUserContext } from "../../../hook/useUserContext";
import { useSearchContext } from "../../../hook/useSearchContext";

const cardStatus = {
  INPROGRESS: "IN PROGRESS",
  FINISHED: "FINISHED",
  CANCELED: "CANCELED",
};

const SubjectList = (props) => {
  const { subject } = useSubjectContext();
  const { user, userTarget, setUserTarget } = useUserContext();
  const [subjectList, setSubjectList] = useState([]);
  const { search } = useSearchContext();
  /*
  const SubjectsCancel = "";
  const SubjectsProgress ="";
  const SubjectsFinished = "" ;
  */
  useEffect(() => {
    if (props.adminList) {
      setSubjectList(subject.filter((s) => s.user_id === userTarget.id));
    } else {
      setSubjectList(subject.filter((s) => s.user_id === user.id));
      setUserTarget(user);
    }
  }, [subject, userTarget]);

  useEffect(() => {
    if (search) {
      setSubjectList(
        subject.filter(
          (s) =>
            s.subject_title.toLowerCase().includes(search.toLowerCase()) ||
            s.client.toLowerCase().includes(search.toLowerCase()) ||
            (s.release.toLowerCase().includes(search.toLowerCase()) &&
              s.user_id === user.id)
        )
      );
    } else {
      if (props.adminList) {
        setSubjectList(subject.filter((s) => s.user_id === userTarget.id));
      } else {
        setSubjectList(subject.filter((s) => s.user_id === user.id));
      }
    }
  }, [search]);

  const SubjectsCancel = subjectList.filter(
    (item) => item.status_description === "CANCELED"
  );
  const SubjectsFinished = subjectList.filter(
    (item) => item.status_description === "FINISHED"
  );
  const SubjectsProgress = subjectList.filter(
    (item) => item.status_description === "IN PROGRESS"
  );
  const [modal, setModal] = useState(false);
  const [openModalD, openModalSubjects] = useState(false);
  const [cards, setCards] = useState(SubjectsProgress);
  const [active, setActive] = useState(cardStatus.INPROGRESS);

  const {
    modalDetails,
    setModalDetails,
    isEdit,
    setEdit,
    modalEdit,
    setModalEdit,
    modalDiscard,
    setModalDiscard,
  } = useSubjectContext();

  // tabs status

  const handleClick = (tabCards, selectedTab) => {
    setCards(tabCards);
    setActive(selectedTab);
  };

  const getTabColor = (status) => {
    return { borderBottom: active === status ? "2px solid #007BFF" : "" };
  };

  // Create new subject
  const createSubject = () => {
    setModal(true);
  };

  // Open modal of details
  const detailsModal = () => {
    setModalDetails(true);
  };

  // Subject //
  const { id, setId } = useSubjectContext();

  // Remark //
  const { remark: remarkList, setRemark: setRemarkList } = useRemarkContext();
  const { idRemark, setIdRemark } = useRemarkContext();

  const { modalRemark, setModalRemark } = useRemarkContext();

  // Create Planner //
  const { idPlanner, setIdPlanner } = usePlannerContext();
  const { modalPlanner, setModalPlanner, modalSave } = usePlannerContext();

  return (
    <ContainerGlobal>
      <ContainerHeaderAndCards>
        <HeaderContainerCards>
          <Top>
            <DivTitlePage>
              <H1>Subjects List</H1>

              <HowManySubjectList>({subjectList.length})</HowManySubjectList>

              <Tippy content="List of all subjects.">
                <DivInfo>
                  <Info
                    width="25px"
                    style={{
                      fill: "#007BFF",
                    }}
                  />
                </DivInfo>
              </Tippy>
            </DivTitlePage>

            <DivButton onClick={() => createSubject()}>
              <ButtonAdd
                mode="#007BFF"
                width="169px"
                height="38px"
                name="Create Subject"
                color="white"
              />
            </DivButton>
          </Top>

          <DivSpans>
            <ButtonProgress
              key={cardStatus.INPROGRESS}
              onClick={() =>
                handleClick(SubjectsProgress, cardStatus.INPROGRESS)
              }
              style={getTabColor(cardStatus.INPROGRESS)}
            >
              <Progress>
                Progress (
                <HowManyProgress>
                  {
                    subjectList.filter((item) => item.status === "IN PROGRESS")
                      .length
                  }
                </HowManyProgress>
                )
              </Progress>
            </ButtonProgress>

            <ButtonFinished
              key={cardStatus.FINISHED}
              onClick={() => handleClick(SubjectsFinished, cardStatus.FINISHED)}
              style={getTabColor(cardStatus.FINISHED)}
            >
              <Finished>
                Finished (
                <HowManyFinished>
                  {
                    subjectList.filter((item) => item.status === "FINISHED")
                      .length
                  }
                </HowManyFinished>
                )
              </Finished>
            </ButtonFinished>

            <ButtonCancel
              key={cardStatus.CANCELED}
              onClick={() => handleClick(SubjectsCancel, cardStatus.CANCELED)}
              style={getTabColor(cardStatus.CANCELED)}
            >
              <Canceled>
                Canceled (
                <HowManyCancel>
                  {
                    subjectList.filter((item) => item.status === "CANCELED")
                      .length
                  }
                </HowManyCancel>
                )
              </Canceled>
            </ButtonCancel>
          </DivSpans>
        </HeaderContainerCards>

        <ContainerCards>
          <LineDivisor />
          <BoardStyle>
            {subjectList &&
              subjectList
                .filter((item) => item.status === active)
                .map((item) => (
                  <SubjectCard
                    key={item.id}
                    id={item.id}
                    /*setIdPlanner={(i) => setIdPlanner(i)}*/
                    setIdRemark={(i) => setIdRemark(i)}
                    setId={(i) => setId(i)}
                    openModal={() => detailsModal()}
                  />
                ))}
          </BoardStyle>
        </ContainerCards>
      </ContainerHeaderAndCards>

      <DivModal $mode={modalEdit} />
      {modalEdit && (
        <EditSubject
          id={id}
          setModalEdit={setModalEdit}
          title={isEdit ? "Create Subject" : "Edit Subject"}
        />
      )}

      <DivModal $mode={modal} />
      {modal && (
        <Subject
          id={id}
          adminList={props.adminList}
          setModal={setModal}
          title={"Create Subject"}
        />
      )}

      <DivModal $mode={modalDetails} />

      {modalDetails && (
        <ModalSubject
          id={id}
          idPlanner={idPlanner}
          idRemark={idRemark}
          setModal={setModalDetails}
          title={isEdit ? "Subject" : "Subject Details"}
          openModal={() => detailsModal()}
        />
      )}

      <DivModal $mode={modalPlanner} />

      {modalPlanner && (
        <ModalCreatePlanner
          idPlanner={idPlanner}
          id={id}
          setModalPlanner={setModalPlanner}
          title={"Create Planner"}
        />
      )}

      <DivModal $mode={modalRemark} />

      {modalRemark && (
        <CreateRemark
          id={id}
          idRemark={idRemark}
          setModalRemark={setModalRemark}
          title={"Create Remark"}
        />
      )}



      {modalSave && (
          <ModalSave subject={"translate(25%, -350%)"} />
     
      )}


      {modalDiscard && (
        <>
          <ModalDiscardChanges />
        </>
      )}
    </ContainerGlobal>
  );
};
export default SubjectList;
