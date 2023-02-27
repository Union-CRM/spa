import React from "react";
import {
  LineGray,
  ButtonInactive,
  ButtonActive,
  BoardStyle,
  H1,
  Container,
  Header,
  Top,
  HowManySubjectList,
  Button,
  Line,
  Spans,
  Active,
  HowManyActive,
  Inactive,
  HowManyInactive,
  SpanPosition,
  IconPosition,
  ContainerFather,
  ContainerSon,
} from "./styles";
import SubjectCard from "./CardListView/index";
import AddEditClient from "../AddEditClient";
import IconSystem from "../../assets/IconSystem";
import { useState } from "react";
import { subjectsMock as subjectsList } from "./subjectListMock";
import { cardStatusMock as cardStatus } from "./cardStatusMock";

const SubjectsId = subjectsList.map((item) => item.id);
const SubjectsActive = subjectsList.filter((item) => item.status === "Active");
const SubjectsInactive = subjectsList.filter(
  (item) => item.status === "Inactive"
);

const ContainerCards = () => {
  const [cards, setCards] = useState(SubjectsActive);
  const [active, setActive] = useState(cardStatus.ACTIVE);
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
        email={item.email}
        client={item.client}
        textRole={item.textRole}
        textCostumer={item.textCostumer}
        textBusiness={item.textBusiness}
        textRelease={item.textRelease}
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
              Client List{" "}
              <HowManySubjectList>({SubjectsId.length})</HowManySubjectList>
            </H1>
            <Button onClick={() => createSubject()}>
              <IconPosition>
                <IconSystem icon={"add2"} height={"12px"} width={"12px"} />
              </IconPosition>
              <SpanPosition>
                <span>Create Client</span>
              </SpanPosition>
            </Button>
          </Top>
          <Line />
          <Spans>
            <ButtonActive
              key={cardStatus.ACTIVE}
              onClick={() => handleClick(SubjectsActive, cardStatus.ACTIVE)}
              style={getTabColor(cardStatus.ACTIVE)}
            >
              <Active>
                Active (<HowManyActive>{SubjectsActive.length}</HowManyActive>)
              </Active>
            </ButtonActive>

            <ButtonInactive
              key={cardStatus.INACTIVE}
              onClick={() => handleClick(SubjectsInactive, cardStatus.INACTIVE)}
              style={getTabColor(cardStatus.INACTIVE)}
            >
              <Inactive>
                Inactive (
                <HowManyInactive>{SubjectsInactive.length}</HowManyInactive>)
              </Inactive>
            </ButtonInactive>
          </Spans>
          <LineGray />
        </Header>
        <BoardStyle>{getSubjectCards()}</BoardStyle>
      </Container>
      <ContainerSon>
        {modal && (
          <AddEditClient
            setModal={setModal}
            title={
              isEdit ? "Edit Client" : "Create Client"
            } /*content={CARD QUE VC CLICOU}*/
          />
        )}
      </ContainerSon>
    </ContainerFather>
  );
};

export default ContainerCards;
