import React from "react";
import {
  ContainerGlobal,
  ContainerHeaderAndCards,
  HeaderContainerCards,
  CardsContainer,
  DivModal,
  LineDivisor,
  BoardStyle,
  DivTitlePage,
  DivInfo,
  Top,
  H1,
  DivButton,
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
import ButtonAdd from "../../../assets/Buttons/ButtonAdd";
import { useState, useEffect } from "react";
import { useClientContext } from "../../../hook/useClientContent";
import { useUserContext } from "../../../hook/useUserContext";
import ModalPopUp from "../ModalPopUP";
import { ReactComponent as Info } from "../../../assets/svg/Info.svg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useSearchContext } from "../../../hook/useSearchContext";
// Modal Client //
import ModalClientDetails from "../ModalClientDetails";
import ModalClientEdit from "../EditClient";

const abaStatus = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
};

const ContainerCards = (props) => {
  // States modal//
  const [modal, setModal] = useState(false);
  const [modalPopUp, setModalPopUp] = useState(false);
  //const [id, setId] = useState(null);
  const [isEdit, setEdit] = useState(false);
  const [clientList, setClientList] = useState();
  const [active, setActive] = useState(abaStatus.ACTIVE);
  const { user, userTarget } = useUserContext();

  const { client } = useClientContext();
  const { id, setId } = useClientContext();
  //const {modalInfo, setModalInfo} = useClientContext();
  const [modalInfo, setModalInfo] = useState(false);
  const { modalEditClient, setModalEditClient } = useClientContext();
  const { search } = useSearchContext();

  useEffect(() => {
    if (props.adminList) {
      setClientList(client.filter((c) => c.user_id === userTarget.id));
    } else {
      setClientList(client.filter((c) => c.user_id === user.id));
    }
  }, [client]);

  useEffect(() => {
    if (search) {
      setClientList(
        client.filter((c) =>
          c.client.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      if (props.adminList) {
        setClientList(client.filter((c) => c.user_id === userTarget.id));
      } else {
        setClientList(client.filter((c) => c.user_id === user.id));
      }
    }
  }, [search]);

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

  const detailsModal = () => {
    setModalInfo(true);
  };

  return (
    <ContainerGlobal>
      <ContainerHeaderAndCards>
        <HeaderContainerCards>
          <Top>
            <DivTitlePage>
              <H1>Client List </H1>
              <HowManyClientList>
                ({clientList ? clientList.length : 0})
              </HowManyClientList>{" "}
              <Tippy content="List of all clients.">
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
                  {clientList
                    ? clientList.filter((item) => item.status === "Active")
                        .length
                    : 0}
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
                  {clientList
                    ? clientList.filter((item) => item.status === "Inactive")
                        .length
                    : 0}
                </HowManyInactive>
                )
              </Inactive>
            </ButtonInactive>
          </DivSpans>
        </HeaderContainerCards>

        <CardsContainer>
          <LineDivisor />

          <BoardStyle>
            {clientList &&
              clientList
                .filter((item) => item.status === active)
                .map((item) => (
                  <ClientCard
                    setId={(i) => setId(i)}
                    openModalPopUp={() => setModalPopUp(true)}
                    openModal={() => detailsModal()}
                    key={item.id}
                    id={item.id}
                    //modalPopUp={() => PopUp()}
                  />
                ))}
          </BoardStyle>
        </CardsContainer>
      </ContainerHeaderAndCards>

      <DivModal $mode={modalEditClient} />
      {modalEditClient && (
        <AddEditClient
          id={id}
          setModalEditClient={setModalEditClient}
          title={"Edit Client"}
        />
      )}

      <DivModal $mode={modalInfo} />

      {modalInfo && (
        <ModalClientEdit
          id={id}
          openModal={() => detailsModal()}
          setModal={setModalInfo}
          title={"Edit Client"}
        />
      )}

      <DivModal $mode={modal} />

      {/* {modal && (
        <ModalClientEdit
          id={id}
          setModal={setModal}
          title={"Create Client"}
        />
    )} */}

      {modalPopUp && (
        <ModalPopUp id={id} modalClose={() => setModalPopUp(false)} />
      )}
    </ContainerGlobal>
  );
};
export default ContainerCards;
