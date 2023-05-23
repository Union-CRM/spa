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
  DivInfo,
  Routes,
} from "./styles";
import ButtonAdd from "../../../../assets/Buttons/ButtonAdd";
import { useState, useEffect } from "react";
import { useClientContext } from "../../../../hook/useClientContent";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import IconSystem from "../../../../assets/IconSystem";
import { ReactComponent as Info } from "../../../../assets/svg/Info.svg";

// Group
import { useGroupListContext } from "../../../../hook/useGroupListContext";
import AddEditGroup from "../../AdmGroupsList/GroupListAddEdit";
import AdmGroupCardListView from "../GroupCardListView/index";
import InfoGroup from "../../AdmGroupsList/ModalInfoGroup";
import ModalGroupDetails from "../ModalGroupDetails";
import EditGroupList from "../EditGroupList"


const abaStatus = {
  ATIVO: "ATIVO",
  INATIVO: "INATIVO",
};

const GroupListView = () => {
  // States modal//

  const [groupList, setGroupList] = useState();
  const [modalPopUp, setModalPopUp] = useState(false);
  //const [modal, setModal] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const { group, infoGroup, setInfoGroup, setIdEdit, modal, setModal } = useGroupListContext();

  //const [infoGroup, setInfoGroup] = useState(true);

  const { id, setId } = useGroupListContext();
  const { modalInfo, setModalInfo } = useGroupListContext();
  const { modalEditGroup, setModalEditGroup } = useGroupListContext();

  const [active, setActive] = useState(abaStatus.ATIVO);

  const handleClick = (selectedTab) => {
    setActive(selectedTab);
  };

  const getTabColor = (status) => {
    return { borderBottom: active === status ? "2px solid #E41165" : "" };
  };

  const createGroup = () => {
    setModal(true);
    setEdit(false);
    setInfoGroup(false);
  };


  const EditGroup = (item) => {
    setIdEdit(item.id);
    setModal(true);
    setEdit(true);
    setInfoGroup(false);
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
              <H1>Group List </H1>
              <HowManyClientList>({group.length})</HowManyClientList>{" "}
              <Tippy content="List of all groups.">
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

            <DivButton onClick={() => createGroup()}>
              <ButtonAdd
                mode="#E41165"
                width="169px"
                height="38px"
                name="Create Group"
                color="white"
              />
            </DivButton>
          </Top>

          <DivSpans>
            <ButtonActive
              key={abaStatus.ATIVO}
              onClick={() => handleClick(abaStatus.ATIVO)}
              style={getTabColor(abaStatus.ATIVO)}
            >
              <Active>
                Active (
                <HowManyActive>
                  {group
                    ? group.filter((item) => item.status === "ATIVO").length
                    : 0}
                </HowManyActive>
                )
              </Active>
            </ButtonActive>
            <ButtonInactive
              key={abaStatus.INATIVO}
              onClick={() => handleClick(abaStatus.INATIVO)}
              style={getTabColor(abaStatus.INATIVO)}
            >
              <Inactive>
                Inactive (
                <HowManyInactive>
                  {group
                    ? group.filter((item) => item.status === "INATIVO").length
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
            {group &&
              group
                .filter((item) => item.status === active)
                .map((item) => (
                  <AdmGroupCardListView
                    setId={(i) => setId(i)}
                    //openModal={() => detailsModal()}
                    key={item.id}
                    id={item.id}
                   // openModal={() => EditGroup(item)}
                  />
                ))}
          </BoardStyle>
        </CardsContainer>
      </ContainerHeaderAndCards>

      <DivModal $mode={modalEditGroup}/>

     {modalEditGroup && (
     <EditGroupList
     id={id}
     setModalEditGroup={setModalEditGroup}
     title={"Edit Group"}
     />
    )}

<DivModal $mode={modal}/>
      {modal && (
        <AddEditGroup
          id={id}
          setId={(i) => setId(i)}
          setModal={setModal}
          title={"Create Group"}
        />
      )}


      <DivModal $mode={modalInfo} />
      {modalInfo && (
        <ModalGroupDetails
          id={id}
          setId={(i) => setId(i)}
          openModal={() => detailsModal()}
          setModalInfo={setModalInfo}
          title={"Group Details"}
          //openModal={() => EditGroup(item)}
        />
      )}

      {infoGroup && (
        <InfoGroup id={id} setInfoGroup={setInfoGroup} title={"Info Group"} />
      )}
    </ContainerGlobal>
  );
};
export default GroupListView;
