import React, { useState, useEffect } from "react";
import IconSystem from "../../../assets/IconSystem";

import {
  ContainerFather,
  Container,
  BodyAll,
  Close,
  DivStatus,
  Status,
  DivTitle,
  TitleSubject,
  CreatedBy,
  DivPages,
  Pages,
  PageIndex,
  PageRemarks,
  PagePlanners,
  ContainerBorder,
  ClickButton,
  IconTag,
  DivModal,
  PageEdit,
  ContainerDois,
} from "./styles";
import Subject from "../CreateEditSubjectModal";
import ContentRemarks from "../ContentRemark";
import ContentsPlanner from "../ContentPlanner";
import ContentDetailsCard from "../ContentDetailsCard";
import SubjectList from "../SubjectCardListView";
import { useSubjectContext } from "../../../hook/useSubjectContent";

const ModalSubject = ({ title, setModal }) => {
  const { setModalDetails, isEdit, setEdit, modalEdit, setModalEdit } =
    useSubjectContext();

  const closeModal = () => {
    setModal(false);
  };

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const EditModal = () => {
    setModalDetails(false);
    setModalEdit(true);
  };

  return (
    <ContainerFather>
      <Container>
        <BodyAll>
          <ClickButton>
            <Close onClick={closeModal}>X</Close>
          </ClickButton>

          <DivStatus>
            <Status>
              <span>In Progress</span>
            </Status>
          </DivStatus>

          <DivTitle>
            <TitleSubject>Apresentação Institucional TCS</TitleSubject>

            <IconTag onClick={EditModal}>
              <IconSystem icon={"Edit"} height={"16px"} width={"16px"} />
            </IconTag>

            <CreatedBy>Created by Gilberto Anderson on 29 February </CreatedBy>
          </DivTitle>

          <DivPages>
            <Pages>
              <PageIndex
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Subject Details
              </PageIndex>
              <PageRemarks
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Remarks
              </PageRemarks>
              <PagePlanners
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                Planners
              </PagePlanners>
            </Pages>
          </DivPages>

          <ContainerBorder>
            <div
              className={
                toggleState === 1 ? "content active-content" : "content"
              }
            >
              <ContentDetailsCard />
            </div>

            <div
              className={
                toggleState === 2 ? "content active-content" : "content"
              }
            >
              <ContentRemarks />
            </div>

            <div
              className={
                toggleState === 3 ? "content active-content" : "content"
              }
            >
              <ContentsPlanner />
            </div>
          </ContainerBorder>
        </BodyAll>
      </Container>
    </ContainerFather>
  );
};

export default ModalSubject;
