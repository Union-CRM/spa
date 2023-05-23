import React from "react";
import {
  ContainerGlobal,
  ContainerHeaderAndCards,
  HeaderContainerCards,
  CardsContainer,
  LineDivisor,
  BoardStyle,
  DivTitlePage,
  Top,
  H1,
  DivModal,
  DivButton,
  DivSpans,
  ButtonInactive,
  ButtonActive,
  HowManyClientList,
  Active,
  HowManyActive,
  Inactive,
  HowManyInactive,
  DivInfo,
} from "./styles";

import { useState, useEffect } from "react";
import ClientCard from "./CardListView/index";
import CreateEditRelease from "../CreateEditRelease";
import ModalStatusRelease from "../ModalStatusRelease";
import ModalSave from "../../../Planner/ModalSuccessfuly";
import ButtonAdd from "../../../../assets/Buttons/ButtonAdd";
import { useReleaseContext } from "../../../../hook/useReleaseContent";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { ReactComponent as Info } from "../../../../assets/svg/Info.svg";
import { useSearchContext } from "../../../../hook/useSearchContext";
import { useUserContext } from "../../../../hook/useUserContext";

const abaStatus = {
  ACTIVE: "ATIVO",
  INACTIVE: "INATIVO",
};

const ReleaseTrain = (props) => {

  // Context and props
  const { modalCreateRelease, setModalCreateRelease, modalEditRelease, setModalEditRelease,
    setIdRelease, idRelease, modalSaveRelease, release, modalStatusRelease, releaseTarget } = useReleaseContext();

  // UseState  
  const [id, setId] = useState(null);
  const [modal, setModal] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [releaseList, setReleaseList] = useState();
  const [modalPopUp, setModalPopUp] = useState(false);
  const [active, setActive] = useState(abaStatus.ACTIVE);
  const { search } = useSearchContext();
  const { user, userTarget, setUserTarget } = useUserContext();
  const layout = modalCreateRelease ? true : false;

  // Function that is getting the card id to open the modal with the card info
  const EditRelease = (id) => {
    setIdRelease(releaseList.filter((r) => r.id === id)[0]);
    setModal(true);
    setEdit(true);
  };

  // Set Release in releaseList
  useEffect(() => {
    setReleaseList(releaseList);
  }, [releaseList]);


  // Managing click according to active or inactive table
  const handleClick = (selectedTab) => {
    setActive(selectedTab);
  };

  // Function to define underline color to know which table is selected
  const getTabColor = (status) => {
    return { borderBottom: active === status ? "2px solid #E41165" : "" };
  };

  // Managing status of modals
  const handleModal = () => {
    setModalCreateRelease(true);
    setModalEditRelease(false);
  }

  useEffect(() => {
    setReleaseList(release);
  }, [release]);

  useEffect(() => {
    
    if (release){
   
      if (search) {
        setReleaseList(
          release?
          release.filter((c) =>
            c.name.toLowerCase().includes(search.toLowerCase())
          ): release
        );
      } else {
        setReleaseList(release);
      }
    }
  }, [search,release]);

  return (
    <ContainerGlobal $mode={layout}>
      <ContainerHeaderAndCards>
        <HeaderContainerCards>
          <Top>
            <DivTitlePage>
              <H1>Release Train</H1>
              <HowManyClientList>
                ({releaseList ? releaseList.length : 0})
              </HowManyClientList>{" "}
              <Tippy content="It is a subdivision of the company, when liked to a category.">
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
                width="200px"
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
                  />
                ))}
          </BoardStyle>
        </CardsContainer>
      </ContainerHeaderAndCards>
      <DivModal $mode={modalCreateRelease || modalEditRelease || modalSaveRelease || modalStatusRelease} />
      {modalCreateRelease && (
        <CreateEditRelease title={"Create Release"} />
      )}
      {modalEditRelease && (
        <CreateEditRelease title={"Edit Release"} />
      )}
      {modalSaveRelease && (
        <ModalSave subject={"translate(60%, -400%)"} />
      )}
      {modalStatusRelease && (
        <ModalStatusRelease />
      )}
    </ContainerGlobal>
  )
};
export default ReleaseTrain;
