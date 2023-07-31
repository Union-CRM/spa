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
  ContainerLimit,
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
//import Subject from "../../Subject/EditSubject/index";
import Subject from "../ModalCreateSubject";
//import { useSubjectContext } from "../../../hook/useSubjectContent";

import { useSubjectContext } from "../../../hook/useSubjectContent";
//const { setEditSubject } = SubjectContext();

const abaStatus = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
};

const ContainerCards = (props) => {
  // States modal//
  const { search } = useSearchContext();
  const [modalPopUp, setModalPopUp] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [clientList, setClientList] = useState([]);
  const [active, setActive] = useState(abaStatus.ACTIVE);
  const { user, userTarget, setUserTarget } = useUserContext();
  const { modalEdit, idSubject } = useSubjectContext();
  const { client } = useClientContext();
  const { id, setId, modalAddClient, setModalAddClient } = useClientContext();
  const { modalInfo, setModalInfo } = useClientContext();
  const { modalEditClient, setModalEditClient } = useClientContext();
  const { modalCreateSubject } = useClientContext();

  const [limit, setLimit] = useState(50);

  useEffect(() => {
    if (props.adminList) {
      setClientList(client.filter((c) => c.user_id === userTarget.id));
    } else {
      setUserTarget(user);
      setClientList(client);
    }
  }, [client]);

  //console.log(clientList)

  useEffect(() => {
    if (search) {
      setClientList(
        client.filter(
          (c) =>
            c.client.toLowerCase().includes(search.toLowerCase()) ||
            SplitName(c.client).toLowerCase().includes(search.toLowerCase()) ||
            c.textRole.toLowerCase().includes(search.toLowerCase()) ||
            c.textCustomer.toLowerCase().includes(search.toLowerCase()) ||
            c.textBusiness.toLowerCase().includes(search.toLowerCase()) ||
            c.user_name.toLowerCase().includes(search.toLowerCase()) ||
            SplitName(c.user_name.toLowerCase()).includes(search.toLowerCase())
        )
      );
    } else {
      if (props.adminList) {
        setClientList(client.filter((c) => c.user_id === userTarget.id));
      } else {
        setClientList(client);
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
    setModalAddClient(true);
    setEdit(false);
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
                .sort((a, b) => (a.client || "").localeCompare(b.client || ""))
                .map((item, index) => {
                  if (index < limit) {
                    return (
                      <ClientCard
                        setId={(i) => setId(i)}
                        openModalPopUp={() => setModalPopUp(true)}
                        openModal={() => detailsModal()}
                        key={item.id}
                        id={item.id}
                      />
                    );
                  }
                })}
          </BoardStyle>
          {limit < clientList.length && (
            <ContainerLimit>
              <p onClick={() => setLimit(limit + 50)}>Show more</p>
            </ContainerLimit>
          )}
        </CardsContainer>
      </ContainerHeaderAndCards>

      <DivModal $mode={modalAddClient} />
      {modalAddClient && (
        <AddEditClient
          id={id}
          setModal={setModalAddClient}
          title={"Create Client"}
        />
      )}

      <DivModal
        $mode={
          modalInfo ||
          modalEdit ||
          modalEditClient ||
          modalPopUp ||
          modalCreateSubject
        }
      />

      {modalInfo && (
        <ModalClientDetails
          id={id}
          openModal={() => detailsModal()}
          setModalInfo={setModalInfo}
          title={"Client Details"}
        />
      )}

      {modalEditClient && (
        <ModalClientEdit
          id={id}
          setModalEditClient={setModalEditClient}
          title={"Edit Client"}
        />
      )}

      {modalCreateSubject && (
        <Subject id={idSubject} title={"Create Subject"} />
      )}
      {modalPopUp && (
        <ModalPopUp id={id} modalClose={() => setModalPopUp(false)} />
      )}
    </ContainerGlobal>
  );
};
export default ContainerCards;

function SplitName(n) {
  const user = n ? n : "";
  var userSplit = user.split(" ");
  var user1 = userSplit[0] + " " + userSplit[userSplit.length - 1] + "";

  return user1;
}
