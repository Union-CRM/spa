import React from "react";
import {
  ContainerFather,
  Container,
  DivModal,
  Header,
  BoardStyle,
  Top,
  DivTitlePage,
  DivButton,
  H1,
  DivSpans,
  ButtonInactive,
  ButtonActive,
  HowManyClientList,
  Active,
  HowManyActive,
  Inactive,
  HowManyInactive,
} from "./styles";
import ClientCard from "./CardListView/index";
import AddEditClient from "../AddEditClient";
import ButtonAdd from "../../assets/Buttons/ButtonAdd";
import { useState } from "react";
import { useClientContext } from "../../hook/useClientContent";
import ModalPopUp from "../ModalPopUP";

const abaStatus = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
};

const ContainerCards = () => {
  // States modal//
  const [modal, setModal] = useState(false);

  const [modalPopUp, setModalPopUp] = useState(false);

  const [id, setId] = useState(null);

  const [isEdit, setEdit] = useState(false);

  const { client } = useClientContext();

  const [active, setActive] = useState(abaStatus.ACTIVE);

  const handleClick = (selectedTab) => {
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

  const modalClose = () => {
    setModalPopUp(true);
  };

  return (
    <ContainerFather>
      <DivModal $mode={modal} />
      <Header>
        <Top>
          <DivTitlePage>
            <H1>Client List </H1>
            <HowManyClientList>({client.length})</HowManyClientList>{" "}
          </DivTitlePage>

          <DivButton onClick={() => createClient()}>
            <ButtonAdd
              mode="#007BFF"
              width="169px"
              height="38px"
              name="Create Client"
              color="white"
            />
          </DivButton>
        </Top>

        <DivSpans>
          <ButtonActive
            key={abaStatus.ACTIVE}
            onClick={() => handleClick(abaStatus.ACTIVE)}
            style={getTabColor(abaStatus.ACTIVE)}
          >
            <Active>
              Active (
              <HowManyActive>
                {client.filter((item) => item.status === "Active").length}
              </HowManyActive>
              )
            </Active>
          </ButtonActive>
          <ButtonInactive
            key={abaStatus.INACTIVE}
            onClick={() => handleClick(abaStatus.INACTIVE)}
            style={getTabColor(abaStatus.INACTIVE)}
          >
            <Inactive>
              Inactive (
              <HowManyInactive>
                {client.filter((item) => item.status === "Inactive").length}
              </HowManyInactive>
              )
            </Inactive>
          </ButtonInactive>
        </DivSpans>
      </Header>
      <Container>
        <BoardStyle>
          {client &&
            client
              .filter((item) => item.status === active)
              .map((item) => (
                <ClientCard
                  setId={(i) => setId(i)}
                  openModalPopUp={() => setModalPopUp(true)}
                  key={item.id}
                  id={item.id}
                  openModal={() => EditClient()}
                  //modalPopUp={() => PopUp()}
                />
              ))}

          {/*
          {cards.map((item) => (
      <ClientCard
        key={item.id}
        id={item.id}
        status={item.status}
        email={item.email}
        client={item.client}
        textRole={item.textRole}
        textCostumer={item.textCostumer}
        textBusiness={item.textBusiness}
        textRelease={item.textRelease}
        openModal={() => EditClient()}
      />))}; 
      */}
        </BoardStyle>
      </Container>
      {modal && (
        <AddEditClient
          id={id}
          setModal={setModal}
          title={isEdit ? "Edit Client" : "Create Client"}
        />
      )}
      {modalPopUp && (
        <ModalPopUp id={id} modalClose={() => setModalPopUp(false)} />
      )}
      {/*id && <ModalPopUp id={id} setModalPopUp={() => setId(null)} />*/}
    </ContainerFather>
  );
};
export default ContainerCards;
