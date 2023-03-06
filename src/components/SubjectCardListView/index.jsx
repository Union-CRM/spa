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
import ButtonAdd from "../../assets/Buttons/ButtonAdd";

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
  const [cards, setCards] = useState(SubjectsProgress);
  const [active, setActive] = useState(cardStatus.INPROGRESS);
  const [modal, setModal] = useState(false);
  const [isEdit, setEdit] = useState(false);

  const handleClick = (tabCards, selectedTab) => {
    setCards(tabCards);
    setActive(selectedTab);
  };

  const getTabColor = (status) => {
    return { borderBottom: active === status ? "2px solid #007BFF" : "" };
  };

  const createSubject = () => {
    setModal(true);
    setEdit(false);
  };

  const EditSubject = () => {
    setModal(true);
    setEdit(true);
  };

  const getSubjectCards = () => {
    return cards.map((item) => (
      <SubjectCard
        key={item.id}
        status={item.status}
        title={item.title}
        manager={item.manager}
        topic={item.topic}
        area={item.area}
        client={item.client}
        openModal={() => EditSubject()}
      />
    ));
  };
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
          </Spans>
          <LineGray />
        </Header>
        <BoardStyle>{getSubjectCards()}</BoardStyle>
      </Container>

      <DivModal>
        {modal && (
          <Subject
            setModal={setModal}
            title={isEdit ? "Edit Subject" : "Create Subject"}
          />
        )}
      </DivModal>
    </ContainerFather>
  );
};
export default SubjectList;
