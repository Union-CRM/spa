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
  HowManyExcellent,
  Excellent,
  ButtonExcellent,
  ContainerLimit,
  NoAnswers,
  ButtonNoAnswers,
  HowManyNoAnswers,
  NoInterest,
  ButtonNoInterest,
  HowManyNoInterest,
  NotStarted,
  ButtonNotStarted,
  HowManyNotStarted,
  HowManyGood,
  Good,
  ButtonGood,
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
  NOANSWERS: "NO ANSWERS",
  NOINTEREST: "NO INTEREST",
  NOTSTARTED: "NOT STARTED",
  GOOD: "GOOD",
  EXCELLENT: "EXCELLENT",
};
const SubjectList = (props) => {
  const { subject } = useSubjectContext();
  const { user, userTarget, setUserTarget } = useUserContext();
  const [subjectList, setSubjectList] = useState([]);
  const { search } = useSearchContext();
  const [limit, setLimit] = useState(50);
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

  const SubjectsExcellent = subjectList.filter(
    (item) => item.status_description === "EXCELLENT"
  );

  const SubjectsGood = subjectList.filter(
    (item) => item.status_description === "GOOD"
  );

  const SubjectsNotStarted = subjectList.filter(
    (item) => item.status_description === "NOT STARTED"
  );

  const SubjectsNoAnswers = subjectList.filter(
    (item) => item.status_description === "NO ANSWERS"
  );

  const SubjectsNoInterest = subjectList.filter(
    (item) => item.status_description === "NO INTEREST"
  );

  const [modal, setModal] = useState(false);
  const [openModalD, openModalSubjects] = useState(false);
  const [cards, setCards] = useState(SubjectsProgress);
  const [active, setActive] = useState(cardStatus.NOTSTARTED);

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
  /*
  NO ANWSERS   
  NO INTEREST
  NOT STARTED
  IN PROGRESS
  GOOD  
  EXCELENT
  FINISHED
  CANCELED
  */

  const AdmLayout = props.translate === "Admin" ? true : false;

  return (
    <ContainerGlobal>
      <ContainerHeaderAndCards name="Modal" $mode={AdmLayout}>
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

          <DivSpans name="SubjectsStatus">
            <ButtonNotStarted
              key={cardStatus.NOTSTARTED}
              onClick={() =>
                handleClick(SubjectsNotStarted, cardStatus.NOTSTARTED)
              }
              style={getTabColor(cardStatus.NOTSTARTED)}
            >
              <NotStarted>
                Not Started (
                <HowManyNotStarted>
                  {
                    subjectList.filter((item) => item.status === "NOT STARTED")
                      .length
                  }
                </HowManyNotStarted>
                )
              </NotStarted>
            </ButtonNotStarted>

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

            <ButtonExcellent
              key={cardStatus.EXCELLENT}
              onClick={() =>
                handleClick(SubjectsExcellent, cardStatus.EXCELLENT)
              }
              style={getTabColor(cardStatus.EXCELLENT)}
            >
              <Excellent>
                Excellent (
                <HowManyExcellent>
                  {
                    subjectList.filter((item) => item.status === "EXCELLENT")
                      .length
                  }
                </HowManyExcellent>
                )
              </Excellent>
            </ButtonExcellent>
            <ButtonGood
              key={cardStatus.GOOD}
              onClick={() => handleClick(SubjectsGood, cardStatus.GOOD)}
              style={getTabColor(cardStatus.GOOD)}
            >
              <Good>
                Good (
                <HowManyGood>
                  {subjectList.filter((item) => item.status === "GOOD").length}
                </HowManyGood>
                )
              </Good>
            </ButtonGood>
            <ButtonNoAnswers
              key={cardStatus.NOANSWERS}
              onClick={() =>
                handleClick(SubjectsNoAnswers, cardStatus.NOANSWERS)
              }
              style={getTabColor(cardStatus.NOANSWERS)}
            >
              <NoAnswers>
                No Answers (
                <HowManyNoAnswers>
                  {
                    subjectList.filter((item) => item.status === "NO ANSWERS") //answer
                      .length
                  }
                </HowManyNoAnswers>
                )
              </NoAnswers>
            </ButtonNoAnswers>

            <ButtonNoInterest
              key={cardStatus.NOINTEREST}
              onClick={() =>
                handleClick(SubjectsNoInterest, cardStatus.NOINTEREST)
              }
              style={getTabColor(cardStatus.NOINTEREST)}
            >
              <NoInterest>
                No Interest (
                <HowManyNoInterest>
                  {
                    subjectList.filter((item) => item.status === "NO INTEREST")
                      .length
                  }
                </HowManyNoInterest>
                )
              </NoInterest>
            </ButtonNoInterest>

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
                .map((item, index) => {
                  if (index < limit) {
                    return (
                      <SubjectCard
                        key={item.id}
                        id={item.id}
                        /*setIdPlanner={(i) => setIdPlanner(i)}*/
                        setIdRemark={(i) => setIdRemark(i)}
                        setId={(i) => setId(i)}
                        openModal={() => detailsModal()}
                      />
                    );
                  }
                })}
          </BoardStyle>
          {limit < subjectList.length && (
            <ContainerLimit>
              <p onClick={() => setLimit(limit + 50)}>Show more</p>
            </ContainerLimit>
          )}
        </ContainerCards>
      </ContainerHeaderAndCards>

      <DivModal $mode={modalEdit} />
      {modalEdit && (
        <EditSubject
          id={id}
          Adm={AdmLayout}
          setModalEdit={setModalEdit}
          title={isEdit ? "Create Subject" : "Edit Subject"}
        />
      )}

      <DivModal $mode={modal} />
      {modal && (
        <Subject
          id={id}
          Adm={AdmLayout}
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

      {modalSave && <ModalSave subject={"translate(25%, -350%)"} />}

      {modalDiscard && (
        <>
          <ModalDiscardChanges />
        </>
      )}
    </ContainerGlobal>
  );
};
export default SubjectList;
