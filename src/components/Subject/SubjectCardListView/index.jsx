import React from "react";
import {
  LineGray,
  ButtonCancel,
  ButtonFinished,
  ButtonProgress,
  BoardStyle,
  H1,
  Container,
  Header,
  Top,
  HowManySubjectList,
  Line,
  Spans,
  All,
  HowManyAll,
  Finished,
  HowManyFinished,
  Canceled,
  HowManyCancel,
  DivButton,
  DivModal,
  ContainerFather,
} from "./styles";
import SubjectCard from "./CardListView/index";
import { useState } from "react";
import Subject from "../CreateEditSubjectModal";
import ButtonAdd from "../../../assets/Buttons/ButtonAdd";
import ModalSubject from "../../Subject/ModalSubject";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useRemarkContext } from "../../../hook/useRemarkContent";

import EditSubject from "../../Subject/EditSubject";
import CreateRemark from "../../Subject/ModalCreateRemark";
import ModalCreatePlanner from "../../Subject/ModalCreatePlanner";

const cardStatus = {
  INPROGRESS: "Progress",
  FINISHED: "Finished",
  CANCELED: "Canceled",
};
const subjectsList = [
  {
    id: 1,
    status: "Canceled",
    title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    topic: "Jornada Digital Itaubers",
    area: "Finanças Risco De Credito Capital",
    client: "Bruno Lins",
  },
  {
    id: 2,
    status: "Finished",
    title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    topic: "Jornada Digital Itaubers",
    area: "Finanças Risco De Credito Pessoal",
    client: "Heder",
  },
  {
    id: 3,
    status: "Canceled",
    title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    topic: "Jornada Digital Itaubers",
    area: "Finanças Risco De Credito Capital",
    client: "Kaere",
  },
  {
    id: 4,
    status: "Progress",
    title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    topic: "Jornada Digital Itaubers",
    area: "Finanças Risco De Credito Pessoal",
    client: "Carlos",
  },
  {
    id: 5,
    status: "Progress",
    title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    topic: "Jornada Digital Itaubers",
    area: "Finanças Risco De Credito Pessoal",
    client: "Bruno Lins",
  },
  {
    id: 6,
    status: "Finished",
    title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    topic: "Jornada Digital Itaubers",
    area: "Finanças Risco De Credito Pessoal",
    client: "Bruno Lins",
  },
  {
    id: 7,
    status: "Progress",
    title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    topic: "Jornada Digital Itaubers",
    area: "Finanças Risco De Credito Pessoal",
    client: "Bruno Lins",
  },
  {
    id: 8,
    status: "Finished",
    title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    topic: "Jornada Digital Itaubers",
    area: "Finanças Risco De Credito Pessoal",
    client: "Bruno Lins",
  },
  {
    id: 9,
    status: "Finished",
    title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    topic: "Jornada Digital Itaubers",
    area: "Finanças Risco De Credito Pessoal",
    client: "Bruno Lins",
  },
];

const SubjectsId = subjectsList.map((item) => item.id);
const SubjectsCancel = subjectsList.filter(
  (item) => item.status === "Canceled"
);
const SubjectsFinished = subjectsList.filter(
  (item) => item.status === "Finished"
);
const SubjectsProgress = subjectsList.filter(
  (item) => item.status === "Progress"
);

const SubjectList = () => {

  const { subject: subjectsList1 } = useSubjectContext();

  const [modal, setModal] = useState(false);
  const [openModalD, openModalSubjects] = useState(false);
  const [closeModalDetails, setCloseModalDetails] = useState(false);
  const [cards, setCards] = useState(SubjectsProgress);
  const [active, setActive] = useState(cardStatus.INPROGRESS);

  const {
    modalDetails,
    setModalDetails,
    isEdit,
    setEdit,
    modalEdit,
    setModalEdit,
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
    setEdit(false);
  };


  // Open modal of details
  const detailsModal = () => {
    setModalDetails(true);
  };

  // Remark e Subject

  const [id, setId] = useState(null);

  const { subject } = useSubjectContext();

  const { remark: remarkList, setRemark: setRemarkList } = useRemarkContext();

  const { idRemark, setIdRemark } = useRemarkContext();

  // Create Planner //

  const [modalPlanner, setModalPlanner] = useState(false);


  return (
    <ContainerFather>
      <Container>
        <Header>
          <Top>
            <H1>
              Subjects List{" "}
              <HowManySubjectList>({SubjectsId.length})</HowManySubjectList>
            </H1>
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
          <Line />
          <Spans>
            <ButtonProgress
              key={cardStatus.INPROGRESS}
              onClick={() =>
                handleClick(SubjectsProgress, cardStatus.INPROGRESS)
              }
              style={getTabColor(cardStatus.INPROGRESS)}
            >
              <All>
                Progress (<HowManyAll>{SubjectsProgress.length}</HowManyAll>)
              </All>
            </ButtonProgress>
            <ButtonFinished
              key={cardStatus.FINISHED}
              onClick={() => handleClick(SubjectsFinished, cardStatus.FINISHED)}
              style={getTabColor(cardStatus.FINISHED)}
            >
              <Finished>
                Finished (
                <HowManyFinished>{SubjectsFinished.length}</HowManyFinished>)
              </Finished>
            </ButtonFinished>
            <ButtonCancel
              key={cardStatus.CANCELED}
              onClick={() => handleClick(SubjectsCancel, cardStatus.CANCELED)}
              style={getTabColor(cardStatus.CANCELED)}
            >
              <Canceled>
                Canceled (<HowManyCancel>{SubjectsCancel.length}</HowManyCancel>
                )
              </Canceled>
            </ButtonCancel>

          </DivSpans>
        </HeaderContainerCards>

        <ContainerCards>
          <LineDivisor />
          <BoardStyle>
            {subject &&
              subject
                .filter((item) => item.status === active)
                .map((item) => (
                  <SubjectCard
                    key={item.id}
                    id={item.id}
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
        <CreateRemark id={id} setModal={setModal} title={"Create Subject"} />
      )}

      <DivModal $mode={modalDetails} />

      {modalDetails && (
        <ModalSubject
          id={id}
          idRemark={idRemark}
          setModal={setModalDetails}
          title={isEdit ? "Subject" : "Subject Details"}
        />
      )}

      <DivModal $mode={modalPlanner} />

      {modalPlanner && (
        <ModalCreatePlanner
          id={id}
          setModalPlanner={setModalPlanner}
          title={"Planner"}
        />
      )}
    </ContainerGlobal>

  );
};
export default SubjectList;
