import { useState, useEffect, React} from "react";
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

import ClientCard from "./CardListView/index";
import CreateEditBusiness from "../CreateEditBusiness";
import ModalStatusBusiness from "../ModalStatusBusiness";
import ModalSave from "../../../Planner/ModalSuccessfuly";
import ButtonAdd from "../../../../assets/Buttons/ButtonAdd";
import { useBusinessContext } from "../../../../hook/useBusinessContent";

const abaStatus = {
  ACTIVE: "ATIVO",
  INACTIVE: "INATIVO",
};

const ContainerCardsBusiness = (props) => {
  
  // Context
  const { business} = useBusinessContext();
  const { modalCreateBusiness, setModalCreateBusiness, modalEditBusiness, setModalEditBusiness,setIdBusiness,idBusiness,modalSaveBusiness, modalStatus, setModalStatus} = useBusinessContext();

  // UseState
  const [id, setId] = useState(null);
  const [modal, setModal] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [businessList, setBusinessList] = useState();
  const [modalPopUp, setModalPopUp] = useState(false);
  const [active, setActive] = useState(abaStatus.ACTIVE);

  // ModalEditBusiness
  const EditBusiness = (id) => {
    setIdBusiness(businessList.filter((b) => b.id === id)[0]);
    setModal(true);
    setEdit(true);
  };

  // Set business in businessList
  useEffect(() => {
      setBusinessList(business);   
  }, [business]);

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
                  />
                ))}
          </BoardStyle>
        </CardsContainer>
      </ContainerHeaderAndCards>

      <DivModal $mode={modalCreateBusiness || modalEditBusiness || modalSaveBusiness || modalStatus} />            
      
      {modalCreateBusiness && (
        <CreateEditBusiness title={"Create Business"}/>
      )}
      {modalEditBusiness && (
        <CreateEditBusiness title={"Edit Business"}/>
      )}
      {modalSaveBusiness && (
        <ModalSave subject={"translate(60%, -400%)"}/>
      )}
      {modalStatus && (
        <ModalStatusBusiness id={id} modalClose={() => setModalStatus(false)} />
        )}
    </ContainerGlobal>
  )
};
export default ContainerCardsBusiness;
