import React from "react";
import {
  ContainerGlobal,
  ContainerHeaderAndCards,
  HeaderContainerCards,
  DivInfo,
  ContainerCards,
  DivModal,
  LineDivisor,
  BoardStyle,
  DivTitlePage,
  Top,
  H1,
  DivButton,
  DivSpans,
  ButtonCancel,
  ButtonFinished,
  ButtonProgress,
  HowManyRemarkList,
  Progress,
  HowManyProgress,
  Finished,
  HowManyFinished,
  Canceled,
  HowManyCancel,
} from "./styles";
import RemarkCard from "./CardListView/index";
import { useState, useEffect } from "react";
import ButtonAdd from "../../../assets/Buttons/ButtonAdd";

//Components
import CreateEditRemark from "../CreateEditRemark";
//import ModalDiscardChanges from "../ModalDiscardChanges";

import { useRemarkContext } from "../../../hook/useRemarkContent";

import ModalSave from "../../Planner/ModalSuccessfuly";
import { ReactComponent as Info } from "../../../assets/svg/Info.svg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useUserContext } from "../../../hook/useUserContext";
import { useSearchContext } from "../../../hook/useSearchContext";
const cardStatus = {
  ACTIVE: "ACTIVE",
  FINISHED: "FINISHED",
  CANCELED: "CANCELED",
};

const RemarkList = (props) => {
  const { user, userTarget, setUserTarget } = useUserContext();
  const { remark, modalSaveRemark } = useRemarkContext();
  const [remarkList, setRemarkList] = useState([]);
  const { search } = useSearchContext();
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [active, setActive] = useState(cardStatus.ACTIVE);
  const handleClick = (selectedTab) => {
    setActive(selectedTab);
  };

  useEffect(() => {
    if (props.adminList) {
      setRemarkList(
        remark ? remark.filter((r) => r.user_id === userTarget.id) : []
      );
    } else {
      setRemarkList(remark ? remark.filter((r) => r.user_id === user.id) : []);
      setUserTarget(user);
    }
  }, [remark, userTarget]);

  useEffect(() => {
    if (remark)
      if (search) {
        setRemarkList(
          remark.filter(
            (r) =>
              (r.remark_name.toLowerCase().includes(search.toLowerCase()) ||
                r.client_name.toLowerCase().includes(search.toLowerCase())) &&
              r.user_id === user.id
          )
        );
      } else {
        if (props.adminList) {
          setRemarkList(remark.filter((r) => r.user_id === userTarget.id));
        } else {
          setRemarkList(remark.filter((r) => r.user_id === user.id));
        }
      }
  }, [search]);

  const getTabColor = (status) => {
    return { borderBottom: active === status ? "2px solid #007BFF" : "" };
  };

  const createRemark = () => {
    setModal(true);
  };

  return (
    <ContainerGlobal>
      <ContainerHeaderAndCards>
        <HeaderContainerCards>
          <Top>
            <DivTitlePage>
              <H1>Remark</H1>

              <HowManyRemarkList>({remarkList.length})</HowManyRemarkList>

              <Tippy content="List of all remarks.">
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

            <DivButton onClick={() => createRemark()}>
              <ButtonAdd
                mode="#007BFF"
                width="169px"
                height="38px"
                name="Create Remark"
                color="white"
              />
            </DivButton>
          </Top>

          <DivSpans>
            <ButtonProgress
              key={cardStatus.ACTIVE}
              onClick={() => handleClick(cardStatus.ACTIVE)}
              style={getTabColor(cardStatus.ACTIVE)}
            >
              <Progress>
                Progress (
                <HowManyProgress>
                  {
                    remarkList.filter(
                      (item) => item.status_description === "ACTIVE"
                    ).length
                  }
                </HowManyProgress>
                )
              </Progress>
            </ButtonProgress>

            <ButtonFinished
              key={cardStatus.FINISHED}
              onClick={() => handleClick(cardStatus.FINISHED)}
              style={getTabColor(cardStatus.FINISHED)}
            >
              <Finished>
                Finished (
                <HowManyFinished>
                  {
                    remarkList.filter(
                      (item) => item.status_description === "FINISHED"
                    ).length
                  }
                </HowManyFinished>
                )
              </Finished>
            </ButtonFinished>

            <ButtonCancel
              key={cardStatus.CANCELED}
              onClick={() => handleClick(cardStatus.CANCELED)}
              style={getTabColor(cardStatus.CANCELED)}
            >
              <Canceled>
                Canceled (
                <HowManyCancel>
                  {
                    remarkList.filter(
                      (item) => item.status_description === "CANCELED"
                    ).length
                  }
                </HowManyCancel>
                )
              </Canceled>
            </ButtonCancel>
          </DivSpans>
        </HeaderContainerCards>

        <ContainerCards>
          <LineDivisor />
          <BoardStyle>
            {remarkList &&
              remarkList
                .filter((item) => item.status_description === active)
                .map((item) => (
                  <RemarkCard
                    openModal={setModalEdit}
                    key={item.id}
                    id={item.id}
                  />
                ))}
          </BoardStyle>
        </ContainerCards>
      </ContainerHeaderAndCards>

      <DivModal $mode={modalEdit} />
      {modalEdit && (
        <CreateEditRemark setModal={setModalEdit} title={"Edit Remark"} />
      )}

      <DivModal $mode={modal} />
      {modal && (
        <CreateEditRemark setModal={setModal} title={"Create Remark"} />
      )}
      <DivModal $mode={modalSaveRemark} />
      {modalSaveRemark && (
        <>
          <ModalSave subject={"translate(50%, -250%)"} />
        </>
      )}
    </ContainerGlobal>
  );
};
export default RemarkList;
