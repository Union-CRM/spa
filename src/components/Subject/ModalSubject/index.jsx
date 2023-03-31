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
  Span,
} from "./styles";

// contents modal global
import ContentRemarks from "../ContentRemark";
import ContentsPlanner from "../ContentPlanner";
import ContentDetailsCard from "../ContentDetailsCard";

// hook context
import { useSubjectContext } from "../../../hook/useSubjectContent";

const ModalSubject = (props) => {
  const { setModal, id } = props;

  // functions Edit
  const { setModalDetails, setModalEdit } = useSubjectContext();

  // Array map
  const { idSubject, setIdSubject } = useSubjectContext();

  const { subject: subjectsList } = useSubjectContext();

  const subject = subjectsList.filter((item) => item.id === id)[0];

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [manager, setManager] = useState("");

  const [selectedSubjectID, setSelectedSubjectID] = useState(null);

  // Close Modal
  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    if (selectedSubjectID) {
      const selectedSubjectID = subject.find(
        (subject) => subject.id === selectedSubjectID
      );
      setTitle(selectedSubjectID.title);
      setStatus(selectedSubjectID.status);
      setManager(selectedSubjectID.manager);
    }
  }, [selectedSubjectID]);

  const activeSubject = subjectsList.filter(
    (subject) => subject.status === "Progress"
  );

  const optionsClient = activeSubject.map((subject) => {
    return {
      id: subject.id,
      title: subject.tile,
      status: subject.status,
      manager: subject.manager,
    };
  });

  const handleClientChange = (selectedSubjectID) => {
    setSelectedSubjectID(selectedSubjectID.id);
  };

  // Navegation for tabs
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // Modal for edit
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
            <Status onChange={handleClientChange} status={status} />
          </DivStatus>

          <DivTitle>
            <TitleSubject>{title} </TitleSubject>

            <IconTag onClick={EditModal}>
              <IconSystem icon={"Edit"} height={"16px"} width={"16px"} />
            </IconTag>

            <CreatedBy onchange={handleClientChange}>
              Created by {manager} on 29 February{" "}
            </CreatedBy>
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
