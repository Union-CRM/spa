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
  DivInfo,
} from "./styles";
import CustomerCard from "./CardListView/index";
import AddEditCustomer from "../AddEditCustomer";
import ButtonAdd from "../../../../assets/Buttons/ButtonAdd";
import { useState, useEffect } from "react";
import { useSearchContext } from "../../../../hook/useSearchContext";
import { useCustomerContext } from "../../../../hook/useCustomerContext";
import ModalError from "../ModalError";
import ModalSuccessfuly from "../ModalSuccessfuly";
import { ReactComponent as Info } from "../../../../assets/svg/Info.svg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ContainerCards = (props) => {
  // States modal//
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const { customer, popUpSuccess, popUpError } = useCustomerContext();
  const [isEdit, setEdit] = useState(false);
  const { search } = useSearchContext();
  const [customerList, setCustomerList] = useState([]);
  const [active, setActive] = useState(abaStatus.ACTIVE);

  useEffect(() => {
    if (customer) {
      if (search) {
        setCustomerList(
          customer
            ? customer.filter((c) =>
                c.name.toLowerCase().includes(search.toLowerCase())
              )
            : customer
        );
      } else {
        setCustomerList(customer);
      }
    }
  }, [search, customer]);

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
                ({customerList ? customerList.length : 0})
              </HowManyClientList>{" "}
              <Tippy content="Current, past or potencial customer.">
                <DivInfo>
                  <Info
                    width="25px"
                    style={{
                      fill: "#E41165",
                    }}
                  />
                </DivInfo>
              </Tippy>
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
                  {customerList
                    ? customerList.filter((item) => item.status === "ATIVO")
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
                  {customerList
                    ? customerList.filter((item) => item.status === "INATIVO")
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
            {customerList &&
              customerList
                .filter((item) => item.status === active)
                .map((item) => (
                  <CustomerCard
                    setId={(i) => setId(i)}
                    key={item.id}
                    id={item.id}
                    openModal={() => EditClient()}
                  />
                ))}
          </BoardStyle>
        </CardsContainer>
      </ContainerHeaderAndCards>

      <DivModal $mode={modal} />

      {modal && (
        <AddEditCustomer
          id={id}
          setModal={setModal}
          title={isEdit ? "Edit Customer" : "Create Customer"}
        />
      )}
    </ContainerGlobal>
  );
};
export default ContainerCards;

const abaStatus = {
  ACTIVE: "ATIVO",
  INACTIVE: "INATIVO",
};
