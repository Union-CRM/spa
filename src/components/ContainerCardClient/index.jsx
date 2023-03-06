import React from "react";
import {
  ButtonInactive,
  ButtonActive,
  BoardStyle,
  H1,
  Container,
  Header,
  Top,
  HowManySubjectList,
  DivSpans,
  Active,
  HowManyActive,
  Inactive,
  HowManyInactive,
  ContainerFather,
  DivButton,
  DivModal,
} from "./styles";
import SubjectCard from "./CardListView/index";
import AddEditClient from "../AddEditClient";
import ButtonAdd from "../../assets/Buttons/ButtonAdd";
import { useState } from "react";

const abaStatus = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
};
const subjectsList = [
  {
    id: 1,
    status: "Active",
    email: "igorsena@tcs.com",
    client: "Igor Sena",
    textRole: "Dev Front-End",
    textCostumer: "Itaú",
    textBusiness: "React e Angular",
    textRelease: "Itaú",
  },
  {
    id: 2,
    status: "Active",
    email: "igorsena@tcs.com",
    client: "Igor Sena",
    textRole: "Dev Front-End",
    textCostumer: "Itaú",
    textBusiness: "React e Angular",
    textRelease: "Itaú",
  },
  {
    id: 3,
    status: "Inactive",
    email: "igorsena@tcs.com",
    client: "Igor Sena",
    textRole: "Dev Front-End",
    textCostumer: "Itaú",
    textBusiness: "React e Angular",
    textRelease: "Itaú",
  },
  {
    id: 4,
    status: "Active",
    email: "igorsena@tcs.com",
    client: "Igor Sena",
    textRole: "Dev Front-End",
    textCostumer: "Itaú",
    textBusiness: "React e Angular",
    textRelease: "Itaú",
  },
  {
    id: 5,
    status: "Active",
    email: "igorsena@tcs.com",
    client: "Guilherme Rezende",
    textRole: "Dev Front-End",
    textCostumer: "Itaú",
    textBusiness: "React e Angular",
    textRelease: "Itaú",
  },
  {
    id: 6,
    status: "Active",
    email: "igorsena@tcs.com",
    client: "Igor Sena",
    textRole: "Dev Front-End",
    textCostumer: "Itaú",
    textBusiness: "React e Angular",
    textRelease: "Itaú",
  },
  {
    id: 7,
    status: "Inactive",
    email: "igorsena@tcs.com",
    client: "Guilherme Rezende",
    textRole: "Dev Front-End",
    textCostumer: "Itaú",
    textBusiness: "React e Angular",
    textRelease: "Itaú",
  },
  {
    id: 8,
    status: "Inactive",
    email: "igorsena@tcs.com",
    client: "Igor Sena",
    textRole: "Dev Front-End",
    textCostumer: "Itaú",
    textBusiness: "React e Angular",
    textRelease: "Itaú",
  },
  {
    id: 9,
    status: "Active",
    email: "igorsena@tcs.com",
    client: "Igor Sena",
    textRole: "Dev Front-End",
    textCostumer: "Itaú",
    textBusiness: "React e Angular",
    textRelease: "Itaú",
  },
];

const SubjectsId = subjectsList.map((item) => item.id);
const SubjectsActive = subjectsList.filter((item) => item.status === "Active");
const SubjectsInactive = subjectsList.filter(
  (item) => item.status === "Inactive"
);

const ContainerCards = () => {
  const [cards, setCards] = useState(SubjectsActive);
  const [active, setActive] = useState(abaStatus.ACTIVE);
  const [modal, setModal] = useState(false);
  const [isEdit, setEdit] = useState(false);

  const handleClick = (tabCards, selectedTab) => {
    setCards(tabCards);
    setActive(selectedTab);
  };

  const getTabColor = (status) => {
    return { borderBottom: active === status ? "2px solid #007BFF" : "" };
  };

  const createClient = () => {
    setModal(true);
    setEdit(false);
  };

  const EditClient = () => {
    setModal(true);
    setEdit(true);
  };

  const [setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const getClientCard = () => {
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
        openModal={() => EditClient()}
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
          </Top>

          <DivButton onClick={() => createClient()}>
            <ButtonAdd
              mode="#007BFF"
              width="169px"
              height="38px"
              name="Create Client"
              color="white"
            />
          </DivButton>

          <DivSpans>
            <ButtonActive
              key={abaStatus.ACTIVE}
              onClick={() => handleClick(SubjectsActive, abaStatus.ACTIVE)}
              style={getTabColor(abaStatus.ACTIVE)}
            >
              <Active>
                Active (<HowManyActive>{SubjectsActive.length}</HowManyActive>)
              </Active>
            </ButtonActive>
            <ButtonInactive
              key={abaStatus.INACTIVE}
              onClick={() => handleClick(SubjectsInactive, abaStatus.INACTIVE)}
              style={getTabColor(abaStatus.INACTIVE)}
            >
              <Inactive>
                Inactive (
                <HowManyInactive>{SubjectsInactive.length}</HowManyInactive>)
              </Inactive>
            </ButtonInactive>
          </DivSpans>
        </Header>

        <BoardStyle>{getClientCard()}</BoardStyle>
      </Container>

      <DivModal $mode={modal}>
        {modal && (
          <AddEditClient
            setModal={setModal}
            title={isEdit ? "Edit Client" : "Create Client"}
          />
        )}
      </DivModal>
    </ContainerFather>
  );
};
export default ContainerCards;
