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
  ContainerBorder,
  ClickButton,
  IconTag,
  TabButton,
  Content,
} from "./styles";
import ContentDetailsCard from "../ContentDetailsCard";
import { useSubjectContext } from "../../../hook/useSubjectContent";

// Remark //
import EditRemark from "../../Subject/EditRemark";
import Remark from "../../Subject/Remark";
import ContentRemarks from "../ContentRemark";
import { useRemarkContext } from "../../../hook/useRemarkContent";

// Planner //
import ContentsPlanner from "../ContentPlanner";
import Planner from "../../Subject/Planner";
import { usePlannerContext } from "../../../hook/usePlannerContext";
import { useUserContext } from "../../../hook/useUserContext";

const ModalSubject = (props) => {
  const { remark: remarkList, setRemark: setRemarkList } = useRemarkContext();
  const { layoutAdm } = useUserContext();
  const { idRemark, setIdRemark } = useRemarkContext();
  const { setModal, id } = props;
  const { setStatusId, statusId } = useState();
  const { setId, isEdit, setEdit } = useSubjectContext();
  const { setModalDetails, setModalEdit } = useSubjectContext();

  // UseEffect Details //
  const { subject: subjectsList, loadData } = useSubjectContext();
  const subject = subjectsList.filter((item) => item.id === props.id)[0];
  const [statusCard, setStatus] = useState();
  const [subjectTitle, setSubjectTitle] = useState();
  const [manager, setManager] = useState();

  // planner details //

  const { planner } = usePlannerContext();
  const [plannerSubject] = useState(
    planner.filter((p) => p.subject_id === props.id)
  );

  useEffect(() => {
    if (props.title === "Subject Details") {
      const subject = subjectsList.filter((item) => item.id === props.id)[0];
      setStatus(subject.status);
      setSubjectTitle(subject.subject_title);
      setManager(subject.manager);
    }
  }, [id]);

  // Tabs //
  const { toggleState, setToggleState } = useSubjectContext();
  const { activeTab, setActiveTab } = useSubjectContext();
  const toggleTab = (index) => {
    setToggleState(index);
    setActiveTab(index);
    setActiveContent(index);
  };

  const [activeContent, setActiveContent] = useState(0);

  // Edit //
  const EditModal = () => {
    setModalDetails(false);
    setModalEdit(true);
  };

  // Close page //
  const closeModal = () => {
    setModal(false);
    setToggleState(0);
    setActiveTab(0);
  };

  return (
    <ContainerFather $mode={layoutAdm} name="container">
      <Container $mode={subject.status}>
        <BodyAll>
          <ClickButton>
            <Close onClick={closeModal}>X</Close>
          </ClickButton>

          <DivStatus>
            <Status $mode={subject.status}>
              <span onChange={(event) => setStatus(event.target.value)}>
                {subject.status}
              </span>
            </Status>
          </DivStatus>

          <DivTitle>
            <TitleSubject
              onChange={(event) => setSubjectTitle(event.target.value)}
            >
              {subject.subject_title}
            </TitleSubject>

            <IconTag onClick={EditModal}>
              <IconSystem icon={"Edit"} height={"16px"} width={"16px"} />
            </IconTag>

            <CreatedBy onChange={(event) => setManager(event.target.value)}>
              Created by on {manager}
            </CreatedBy>
          </DivTitle>

          <DivPages>
            <Pages>
              <TabButton
                $mode={subject.status}
                active={activeTab === 0}
                onClick={() => toggleTab(0)}
              >
                Subject Details
              </TabButton>
              <TabButton
                $mode={subject.status}
                active={activeTab === 1}
                onClick={() => toggleTab(1)}
              >
                Remarks
              </TabButton>
              <TabButton
                $mode={subject.status}
                active={activeTab === 2}
                onClick={() => toggleTab(2)}
              >
                Planners
              </TabButton>
            </Pages>
          </DivPages>

          <ContainerBorder>
            <Content active={toggleState === 0}>
              <ContentDetailsCard
                setId={(i) => setId(i)}
                setIdRemark={(i) => setIdRemark(i)}
                id={id}
                title={"Details"}
              />
            </Content>

            <Content active={toggleState === 1}>
              <ContentRemarks
                setId={(i) => setId(i)}
                setIdRemark={(i) => setIdRemark(i)}
                id={id}
                title={"Remark"}
              />
            </Content>

            <Content active={toggleState === 2}>
              <ContentsPlanner
                setId={(i) => setId(i)}
                id={id}
                title={"Planner"}
              />
            </Content>

            <Content active={toggleState === 3}>
              <Remark
                setId={(i) => setId(i)}
                setIdRemark={(i) => setIdRemark(i)}
                id={id}
                title={"More Details Remark"}
              />
            </Content>

            <Content active={toggleState === 4}>
              <Planner
                setId={(i) => setId(i)}
                id={id}
                title={"More Details Planner"}
              />
            </Content>

            <Content active={toggleState === 5}>
              <EditRemark
                setIdRemark={(i) => setIdRemark(i)}
                setId={(i) => setId(i)}
                id={id}
                title={"Edit Remark"}
              />
            </Content>
          </ContainerBorder>
        </BodyAll>
      </Container>
    </ContainerFather>
  );
};

export default ModalSubject;
