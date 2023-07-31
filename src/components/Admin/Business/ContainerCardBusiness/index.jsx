import { useState, useEffect, React } from "react";
import {
  ContainerGlobal,
  ContainerHeaderAndCards,
  HeaderContainerCards,
  DivInfo,
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
  ContainerLimit,
} from "./styles";

import ClientCard from "./CardListView/index";
import CreateEditBusiness from "../CreateEditBusiness";
import ModalStatusBusiness from "../ModalStatusBusiness";
import ModalSave from "../../../Planner/ModalSuccessfuly";
import ButtonAdd from "../../../../assets/Buttons/ButtonAdd";
import { useBusinessContext } from "../../../../hook/useBusinessContent";
import { useSearchContext } from "../../../../hook/useSearchContext";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { ReactComponent as Info } from "../../../../assets/svg/Info.svg";

const abaStatus = {
  ACTIVE: "ATIVO",
  INACTIVE: "INATIVO",
};

const ContainerCardsBusiness = (props) => {
  // Context
  const { business } = useBusinessContext();
  const {
    modalCreateBusiness,
    setModalCreateBusiness,
    modalEditBusiness,
    setModalEditBusiness,
    setIdBusiness,
    modalSaveBusiness,
    modalStatus,
    setModalStatus,
  } = useBusinessContext();
  const { search } = useSearchContext();
  // UseState
  const [id, setId] = useState(null);
  const [modal, setModal] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [businessList, setBusinessList] = useState([]);
  const [modalPopUp, setModalPopUp] = useState(false);
  const [active, setActive] = useState(abaStatus.ACTIVE);
  const [limit, setLimit] = useState(50);

  useEffect(() => {
    if (business) {
      if (search) {
        setBusinessList(
          business
            ? business.filter(
                (c) =>
                  c.name.toLowerCase().includes(search.toLowerCase()) ||
                  c.code.toLowerCase().includes(search.toLowerCase())
              )
            : business
        );
      } else {
        setBusinessList(business);
      }
    }
  }, [search, business]);

  // ModalEditBusiness
  const EditBusiness = (id) => {
    setIdBusiness(businessList.filter((b) => b.id === id)[0]);
    setModal(true);
    setEdit(true);
  };
  // Select Tab
  const handleClick = (selectedTab) => {
    setActive(selectedTab);
  };

  const getTabColor = (status) => {
    return { borderBottom: active === status ? "2px solid #E41165" : "" };
  };

  // Managing status of Modals create and edit Business
  const handleModal = () => {
    setModalCreateBusiness(true);
    setModalEditBusiness(false);
  };

  return (
    <ContainerGlobal>
      <ContainerHeaderAndCards>
        <HeaderContainerCards>
          <Top>
            <DivTitlePage>
              <H1>Business</H1>
              <HowManyClientList>
                ({businessList ? businessList.length : 0})
              </HowManyClientList>{" "}
              <Tippy content="A business opportunity or potential sale.">
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

            <DivButton onClick={() => handleModal()}>
              <ButtonAdd
                mode="#E41165"
                width="169px"
                height="38px"
                name="Create Business"
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
                  {businessList
                    ? businessList.filter((item) => item.status === "ATIVO")
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
                  {businessList
                    ? businessList.filter((item) => item.status === "INATIVO")
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
            {businessList &&
              businessList
                .filter((item) => item.status === active)
                .map((item, index) => {
                  if (index < limit) {
                    return (
                      <ClientCard
                        setId={(i) => setId(i)}
                        openModalPopUp={() => setModalPopUp(true)}
                        key={item.id}
                        id={item.id}
                        openModal={() => EditBusiness(item.id)}
                      />
                    );
                  }
                })}
          </BoardStyle>
          {limit < businessList.length && (
            <ContainerLimit>
              <p onClick={() => setLimit(limit + 50)}>Show more</p>
            </ContainerLimit>
          )}
        </CardsContainer>
      </ContainerHeaderAndCards>

      <DivModal
        $mode={
          modalCreateBusiness ||
          modalEditBusiness ||
          modalSaveBusiness ||
          modalStatus
        }
      />

      {modalCreateBusiness && <CreateEditBusiness title={"Create Business"} />}
      {modalEditBusiness && <CreateEditBusiness title={"Edit Business"} />}
      {modalSaveBusiness && <ModalSave subject={"translate(60%, -400%)"} />}
      {modalStatus && (
        <ModalStatusBusiness id={id} modalClose={() => setModalStatus(false)} />
      )}
    </ContainerGlobal>
  );
};
export default ContainerCardsBusiness;
