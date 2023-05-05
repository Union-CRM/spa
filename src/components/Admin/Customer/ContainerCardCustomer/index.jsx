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
  DivClose,
} from "./styles";
import CustomerCard from "./CardListView/index";
import AddEditClient from "../AddEditClient";
import ButtonAdd from "../../../../assets/Buttons/ButtonAdd";
import { useState, useEffect } from "react";
import { useUserContext } from "../../../../hook/useUserContext";
import ModalPopUp from "../ModalPopUP";
import { useCustomerContext } from "../../../../hook/useCustomerContext";
import ModalError from "../ModalError";
import ModalSuccessfuly from "../ModalSuccessfuly";

const abaStatus = {
  ACTIVE: "ATIVO",
  INACTIVE: "INATIVO",
};

const ContainerCards = (props) => {
  // States modal//
  const [modal, setModal] = useState(false);
  const [modalPopUp, setModalPopUp] = useState(false);
  const [id, setId] = useState(null);
  const { customer, popUpSuccess, popUpError } = useCustomerContext();
  const [isEdit, setEdit] = useState(false);

  const [active, setActive] = useState(abaStatus.ACTIVE);
  const { user } = useUserContext();

  /*useEffect(() => {
    if (props.adminList) {
      setClientList(client.filter((c) => c.user_id === userTarget.id));
    } else {
      setClientList(client.filter((c) => c.user_id === user.id));
    }
  }, [client]);*/

  const handleClick = (selectedTab) => {
    setActive(selectedTab);
  };

  const getTabColor = (status) => {
    return { borderBottom: active === status ? "2px solid #e41165" : "" };
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
    <ContainerGlobal>
      {popUpSuccess && (
        <>
          <DivClose />
          <ModalSuccessfuly />
        </>
      )}
      {popUpError && (
        <>
          <DivClose />
          <ModalError />
        </>
      )}
      <ContainerHeaderAndCards>
        <HeaderContainerCards>
          <Top>
            <DivTitlePage>
              <H1>Customer List </H1>
              <HowManyClientList>
                ({customer ? customer.length : 0})
              </HowManyClientList>{" "}
            </DivTitlePage>

            <DivButton onClick={() => createClient()}>
              <ButtonAdd
                mode="#E41165"
                width="170px"
                height="38px"
                name="Create Customer"
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
                  {customer
                    ? customer.filter((item) => item.status === "ATIVO").length
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
                  {customer
                    ? customer.filter((item) => item.status === "INATIVO")
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
            {customer &&
              customer
                .filter((item) => item.status === active)
                .map((item) => (
                  <CustomerCard
                    setId={(i) => setId(i)}
                    openModalPopUp={() => setModalPopUp(true)}
                    key={item.id}
                    id={item.id}
                    openModal={() => EditClient()}
                    //modalPopUp={() => PopUp()}
                  />
                ))}
          </BoardStyle>
        </CardsContainer>
      </ContainerHeaderAndCards>

      <DivModal $mode={modal} />

      {modal && (
        <AddEditClient
          id={id}
          setModal={setModal}
          title={isEdit ? "Edit Customer" : "Create Customer"}
        />
      )}
      {modalPopUp && (
        <ModalPopUp id={id} modalClose={() => setModalPopUp(false)} />
      )}
    </ContainerGlobal>
  );
};
export default ContainerCards;
