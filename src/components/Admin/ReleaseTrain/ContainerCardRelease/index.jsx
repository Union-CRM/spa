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
import ButtonAdd from "../../../../assets/Buttons/ButtonAdd";
import { useState, useEffect } from "react";
//import { useClientContext } from "../../../hook/useClientContent";
//import { useUserContext } from "../../../hook/useUserContext";
//import ModalPopUp from "../ModalPopUP";
import { useReleaseContext } from "../../../../hook/useReleaseContent";
import ModalSave from "../../../Planner/ModalSuccessfuly";
import ClientCard from "./CardListView/index";
import CreateEditRelease from "../CreateEditRelease";
import ModalStatusRelease from "../ModalStatusRelease";
const abaStatus = {
  ACTIVE: "ATIVO",
  INACTIVE: "INATIVO",
};

const ReleaseTrain = (props) => {
  // States modal//
  const { modalCreateRelease, setModalCreateRelease, 
    modalEditRelease, setModalEditRelease, 
    setIdRelease, idRelease, modalSaveRelease, 
    release, modalStatusRelease} = useReleaseContext();
  //const { client } = useClientContext();
  const [active, setActive] = useState(abaStatus.ACTIVE);
  //const { user, userTarget } = useUserContext();
  const [releaseList, setReleaseList] = useState();

  const [modal, setModal] = useState(false);
  const [modalPopUp, setModalPopUp] = useState(false);
  const [id, setId] = useState(null);
  const [isEdit, setEdit] = useState(false);

  const [createRelease, setCreateRelease] = useState(false)

  const EditRelease = (id) => {
    setIdRelease(releaseList.filter((r) => r.id === id)[0]);
    setModal(true);
    setEdit(true);
  };

  useEffect(() => {
      setReleaseList(release);   
  }, [release]);
  

  const handleClick = (selectedTab) => {
    setActive(selectedTab);
  };

  const getTabColor = (status) => {
    return { borderBottom: active === status ? "2px solid #E41165" : "" };
  };

  const handleModal = () => {
    setModalCreateRelease(true);
    setModalEditRelease(false);
  }

  return (
    
    <ContainerGlobal>
      <ContainerHeaderAndCards>
        <HeaderContainerCards>
          <Top>
            <DivTitlePage>
              <H1>Release Train</H1>
              <HowManyClientList>
                ({releaseList ? releaseList.length : 0})
              </HowManyClientList>{" "}
            </DivTitlePage>

            <DivButton onClick={() => handleModal()}>
              <ButtonAdd
                mode="#E41165"
                width="169px"
                height="38px"
                name="Create Release Train"
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
                  {releaseList
                    ? releaseList.filter((item) => item.status === "ATIVO")
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
                  {releaseList
                    ? releaseList.filter((item) => item.status === "INATIVO")
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
            {releaseList &&
              releaseList.filter((item) => item.status === active)
                .map((item) => (
                  <ClientCard
                    setId={(i) => setId(i)}
                    openModalPopUp={() => setModalPopUp(true)}
                    key={item.id}
                    id={item.id}
                    openModal={() => EditRelease(item.id)}
                    //modalPopUp={() => PopUp()}
                  />
                ))}
          </BoardStyle>
        </CardsContainer>
      </ContainerHeaderAndCards>
      {modalCreateRelease && (
        <CreateEditRelease title={"Create Release"}/>
      )}
      {modalEditRelease && (
        <CreateEditRelease title={"Edit Release"}/>
      )}
      {modalSaveRelease && (
        <ModalSave />
      )}
      {modalStatusRelease && (
        <ModalStatusRelease />
      )}
    </ContainerGlobal>
  )
};
export default ReleaseTrain;