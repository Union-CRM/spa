import React, { useState, useEffect } from "react";
import IconSystem from "../../../assets/IconSystem";
import Body from "../../../assets/FontSystem/Body";

import {
  ContainerFather,
  Container,
  BodyAll,
  Close,
  DivStatus,
  Status,
  DivTitle,
  ClientName,
  DivNameManager,
  DivPhoto,
  DivPhotoI,
  CreatedBy,
  DivPages,
  Pages,
  ContainerBorder,
  ClickButton,
  IconTag,
  TabButton,
  Content,
} from "./styles";

import { useClientContext } from "../../../hook/useClientContent";

import ClientDetails from "../ClientsDetails";
import SubjectClient from "../SubjectsClient";
import { useUserContext } from "../../../hook/useUserContext";
import HierarhyClient from "../HierarchyClient";

const ModalClientDetails = (props) => {
  const { id } = props;

  const { user, userList, loadUserList } = useUserContext();
  const {
    client: clientList,
    clientTarget,
    setClientTarget,
  } = useClientContext();
  //const client = clientList.filter((item) => item.id === props.id)[0];
  const [editable, setEditable] = useState(false);
  const [scroll, setScroll] = useState(false);
  const {
    toggleState,
    setToggleState,
    activeTab,
    setActiveTab,
    setModalInfo,
    setId,
    setModalEditClient,
  } = useClientContext();

  useEffect(() => {
    //const client = clientList.filter((item) => item.id === props.id)[0];
    //setClientTarget(client);
    if (userList) {
      const usersID = userList.map((u) => u.id);
      setEditable(
        usersID.includes(clientTarget.user_id) ||
          clientTarget.user_id === user.id
      );
    } else {
      loadUserList();
    }
  }, [id, userList]);

  const toggleTab = (index) => {
    setToggleState(index);
    setActiveTab(index);
    //setActiveContent(index);
  };

  // Edit //
  const EditModal = () => {
    setModalInfo(false);
    setModalEditClient(true);
  };

  // Close page //
  const closeModal = () => {
    setModalInfo(false);
  };

  return (
    <ContainerFather>
      <Container $mode={clientTarget.status}>
        <BodyAll>
          <ClickButton>
            <Close onClick={closeModal}>X</Close>
          </ClickButton>

          <DivStatus>
            <Status $mode={clientTarget.status}>
              <span>{clientTarget.status}</span>
            </Status>
          </DivStatus>

          <DivTitle>
            <DivPhoto>
              <DivPhotoI>
                <Body
                  type={"Body1"}
                  name={clientTarget.client
                    .match(/(^\S\S?|\b\S)?/g)
                    .join("")
                    .match(/(^\S|\S$)?/g)
                    .join("")
                    .toUpperCase()}
                />
              </DivPhotoI>
            </DivPhoto>

            <DivNameManager>
              <ClientName>{clientTarget.client}</ClientName>
              {activeTab === 0 && editable && (
                <IconTag onClick={EditModal}>
                  <IconSystem icon={"Edit"} height={"16px"} width={"16px"} />
                </IconTag>
              )}
              <CreatedBy>Created by on {clientTarget.user_name}</CreatedBy>
            </DivNameManager>
          </DivTitle>

          <DivPages>
            <Pages>
              <TabButton
                $mode={clientTarget.status}
                active={activeTab === 0}
                onClick={() => toggleTab(0)}
              >
                Client Details
              </TabButton>
              <TabButton
                $mode={clientTarget.status}
                active={activeTab === 1}
                onClick={() => toggleTab(1)}
              >
                Subjects
              </TabButton>
              <TabButton
                $mode={clientTarget.status}
                active={activeTab === 2}
                onClick={() => toggleTab(2)}
              >
                Hierarchy
              </TabButton>
            </Pages>
          </DivPages>

          <ContainerBorder $mode={scroll}>
            <Content
              onClick={() => setScroll(false)}
              active={toggleState === 0}
            >
              <ClientDetails
                setId={(i) => setId(i)}
                id={id}
                title={"Details Clients"}
              />
            </Content>

            <Content
              onClick={() => setScroll(false)}
              active={toggleState === 1}
            >
              <SubjectClient
                clientStatus={clientTarget.status}
                setId={(i) => setId(i)}
                id={id}
                title={"Subject Clients"}
              />
            </Content>
            <Content
              onClick={() => setScroll(true)}
              name="divhierarchy"
              active={toggleState === 2}
            >
              <HierarhyClient
                clientStatus={clientTarget.status}
                setId={(i) => setId(i)}
                id={id}
                title={"Hierarchy Clients"}
              />
            </Content>
          </ContainerBorder>
        </BodyAll>
      </Container>
    </ContainerFather>
  );
};

export default ModalClientDetails;
