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
} from "./styles";
import CreateEditBusiness from "../CreateEditBusiness";
import ClientCard from "./CardListView/index";
import ButtonAdd from "../../../../assets/Buttons/ButtonAdd";
import { useState, useEffect } from "react";
//import { useClientContext } from "../../../hook/useClientContent";
//import { useUserContext } from "../../../hook/useUserContext";
//import ModalPopUp from "../ModalPopUP";
import { useBusinessContext } from "../../../../hook/useBusinessContent";
import ModalSave from "../../../Planner/ModalSuccessfuly";
import ModalStatusBusiness from "../../ModalStatusBusiness";

const abaStatus = {
  ACTIVE: "ATIVO",
  INACTIVE: "INATIVO",
};

const ContainerCardsBusiness = (props) => {
  // States modal//
  const { modalCreateBusiness, setModalCreateBusiness, modalEditBusiness, setModalEditBusiness,setIdBusiness,idBusiness,modalSaveBusiness, modalStatus, setModalStatus} = useBusinessContext();
  //const { client } = useClientContext();
  const [active, setActive] = useState(abaStatus.ACTIVE);
  //const { user, userTarget } = useUserContext();
  const { business} = useBusinessContext();
  const [businessList, setBusinessList] = useState();

  const [modal, setModal] = useState(false);
  const [modalPopUp, setModalPopUp] = useState(false);
  const [id, setId] = useState(null);
  const [isEdit, setEdit] = useState(false);

  const [createBusiness, setCreateBusiness] = useState(false)

  const EditBusiness = (id) => {
    setIdBusiness(businessList.filter((b) => b.id === id)[0]);
    setModal(true);
    setEdit(true);
  };
  /*
  const handleEdit = (id) => {
    setPlannerEdit(plannerList.filter((p) => p.id === id)[0]);
    setModalEdit(id);
  };*/


  useEffect(() => {
      setBusinessList(business);   
  }, [business]);
  

  const handleClick = (selectedTab) => {
    setActive(selectedTab);
  };

  const getTabColor = (status) => {
    return { borderBottom: active === status ? "2px solid #E41165" : "" };
  };

  const handleModal = () => {
    setModalCreateBusiness(true);
    setModalEditBusiness(false);
  }

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
              businessList.filter((item) => item.status === active)
                .map((item) => (
                  <ClientCard
                    setId={(i) => setId(i)}
                    openModalPopUp={() => setModalPopUp(true)}
                    key={item.id}
                    id={item.id}
                    openModal={() => EditBusiness(item.id)}
                    //modalPopUp={() => PopUp()}
                  />
                ))}
          </BoardStyle>
        </CardsContainer>
      </ContainerHeaderAndCards>
      {modalCreateBusiness && (
        <CreateEditBusiness title={"Create Business"}/>
      )}
      {modalEditBusiness && (
        <CreateEditBusiness title={"Edit Business"}/>
      )}
      {modalSaveBusiness && (
        <ModalSave />
      )}
      {modalStatus && (
        <ModalStatusBusiness id={id} modalClose={() => setModalStatus(false)} />
        )}
    </ContainerGlobal>
  )
};
export default ContainerCardsBusiness;
