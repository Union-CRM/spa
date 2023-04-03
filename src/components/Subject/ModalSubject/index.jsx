import React, { useState, useEffect } from "react";
import IconSystem from "../../../assets/IconSystem";
import styled, { css } from "styled-components";

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
import ContentRemarks from "../ContentRemark";
import ContentsPlanner from "../ContentPlanner";
import ContentDetailsCard from "../ContentDetailsCard";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useRemarkContext } from "../../../hook/useRemarkContent";

import EditRemark from "../../Subject/EditRemark";
import Remark from "../../Subject/Remark";
import Planner from "../../Subject/Planner";

const ModalSubject = (props) => {
  // Remark
  const { remark: remarkList, setRemark: setRemarkList } = useRemarkContext();

  const { idRemark, setIdRemark } = useRemarkContext();

  const { setModal, id } = props;

  const { setId, isEdit, setEdit } = useSubjectContext();

  const { setModalDetails, setModalEdit } = useSubjectContext();

  // UseEffect Details
  const { subject: subjectsList, setSubject: setSubjectList } =
    useSubjectContext();

  const [status, setStatus] = useState();
  const [subject, setSubject] = useState();
  const [manager, setManager] = useState();

  useEffect(() => {
    if (props.title === "Subject Details") {
      const subject = subjectsList.filter((item) => item.id === props.id)[0];
      setStatus(subject.status);
      setSubject(subject.subject_title);
      setManager(subject.manager);
    }
  }, [id]);

  //Close page
  const closeModal = () => {
    setModal(false);
  };

  // Tabs
  const { toggleState, setToggleState } = useSubjectContext();

  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
    setActiveTab(index);
    setActiveContent(index);
  };

  //Content Tabs

  const [activeContent, setActiveContent] = useState(0);

  //Edit
  const EditModal = () => {
    setModalDetails(false);
    setModalEdit(true);
  };

  return (
    <ContainerFather>
      <Container $mode={status}>
        <BodyAll>
          <ClickButton>
            <Close onClick={closeModal}>X</Close>
          </ClickButton>

          <DivStatus>
            <Status $mode={status}>
              <span onChange={(event) => setStatus(event.target.value)}>
                {status}
              </span>
            </Status>
          </DivStatus>

          <DivTitle>
            <TitleSubject onChange={(event) => setSubject(event.target.value)}>
              {" "}
              {subject}{" "}
            </TitleSubject>

            {activeTab === 0 && (
              <IconTag onClick={EditModal}>
                <IconSystem icon={"Edit"} height={"16px"} width={"16px"} />
              </IconTag>
            )}

            <CreatedBy onChange={(event) => setManager(event.target.value)}>
              Created by on {manager} 20 February
            </CreatedBy>
          </DivTitle>

          <DivPages>
            <Pages>
              <TabButton
                $mode={status}
                active={activeTab === 0}
                onClick={() => toggleTab(0)}
              >
                Subject Details
              </TabButton>
              <TabButton
                $mode={status}
                active={activeTab === 1}
                onClick={() => toggleTab(1)}
              >
                Remarks
              </TabButton>
              <TabButton
                $mode={status}
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
                title={"DetalhesRemark"}
              />
            </Content>

            <Content active={toggleState === 4}>
              <Planner
                setId={(i) => setId(i)}
                id={id}
                title={"DetalhesPlanner"}
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
