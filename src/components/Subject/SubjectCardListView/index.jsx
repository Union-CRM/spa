import React from "react";
import {
  ContainerGlobal,
  ContainerHeaderAndCards,
  HeaderContainerCards,
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
    status: "Progress",
    title: "Apresentação Institucional TCS Institucional",
    manager: "Helio Endo",
    release: "Pagamento Cartão",
    business: "Finanças Risco De Credito Pessoal Credito Pessoal",
    client: "Bruno Lins Oliveira Santos",
  },
  {
    id: 2,
    status: "Finished",
    title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    release: "Inteligencia Comercial",
    business: "Finanças Risco De Credito Pessoal",
    client: "Heder",
  },
  {
    id: 3,
    status: "Canceled",
    title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    release: "Jornada Digital Itaubers",
    business: "Finanças Risco De Credito Capital",
    client: "Kaere",
  },
  {
    id: 4,
    status: "Progress",
    title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    release: "Dados Onboarding",
    business: "Finanças Risco De Credito Pessoal",
    client: "Carlos",
  },
  {
    id: 5,
    status: "Progress",
    title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    release: "Experiencia Digital",
    business: "Finanças Risco De Credito Pessoal",
    client: "Bruno Lins",
  },
  {
    id: 6,
    status: "Progress",
    title: "Apresentação Institucional TCS",
    manager: "Helio Endo",
    release: "Jornada Digital Itaubers",
    business: "Finanças Risco De Credito Pessoal",
    client: "Bruno Lins",
  },
  {
    id: 7,
    status: "Progress",
    title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    release: "Jornada Digital Itaubers",
    business: "Finanças Risco De Credito Pessoal",
    client: "Bruno Lins",
  },
  {
    id: 8,
    status: "Progress",
    title: "Apresentação Institucional TCS",
    manager: "Felipe Massaret",
    release: "Jornada Digital Itaubers",
    business: "Finanças Risco De Credito Pessoal",
    client: "Bruno Lins",
  },
  {
    id: 9,
    status: "Finished",
    title: "Apresentação Institucional TCS",
    manager: "Gilberto Anderson",
    release: "Dados Onboarding",
    business: "Finanças Risco De Credito Pessoal",
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
    <ContainerGlobal>
      <ContainerHeaderAndCards>
        <HeaderContainerCards>
          <Top>
            <DivTitlePage>
              <H1>Subjects List </H1>
              <HowManySubjectList>({SubjectsId.length})</HowManySubjectList>
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
                    subjectsList1.filter((item) => item.status === "Progress")
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
                    subjectsList1.filter((item) => item.status === "Finished")
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
                    subjectsList1.filter((item) => item.status === "Canceled")
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
