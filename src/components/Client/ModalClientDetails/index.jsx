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

import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useClientContext } from "../../../hook/useClientContent";

import ClientDetails from "../ClientsDetails";
import SubjectClient from "../SubjectsClient";
import { useUserContext } from "../../../hook/useUserContext";

const ModalClientDetails = (props) => {
  const { setModal, id } = props;
  const { setModalInfo, setId, modalEditClient, setModalEditClient, loadData } =
    useClientContext();
  const { user,userList, loadUserList } = useUserContext();
  // UseEffect Clients //
  const { client: clientList } = useClientContext();
  const client = clientList.filter((item) => item.id === props.id)[0];
  const [statusClient, setStatus] = useState();
  const [clientName, setClientName] = useState();
  const [manager, setManager] = useState();
  const [editable,setEditable] =useState(false);
  const [activeContent, setActiveContent] = useState(0);
  const { toggleState, setToggleState } = useClientContext();
  const { activeTab, setActiveTab } = useClientContext();
  //console.log(userList)
  
  useEffect(() => {
    const client = clientList.filter((item) => item.id === props.id)[0];  
    if (props.title === "Client Details") {
      setStatus(client.status);
      setClientName(client.client_name);
      setManager(client.user_name);
    }
    if(userList){
      const usersID = (userList.map((u)=> u.id))
      setEditable( usersID.includes(client.user_id) || client.user_id===user.id)
    }else{
      loadUserList();
    }    
  }, [id,userList]);

  const toggleTab = (index) => {
    setToggleState(index);
    setActiveTab(index);
    setActiveContent(index);
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
      <Container $mode={client.status}>
        <BodyAll>
          <ClickButton>
            <Close onClick={closeModal}>X</Close>
          </ClickButton>

          <DivStatus>
            <Status $mode={client.status}>
              <span onChange={(event) => setStatus(event.target.value)}>
                {client.status}
              </span>
            </Status>
          </DivStatus>

          <DivTitle>
            <DivPhoto>
              <DivPhotoI>
                <Body
                  type={"Body1"}
                  name={client.client
                    .match(/(^\S\S?|\b\S)?/g)
                    .join("")
                    .match(/(^\S|\S$)?/g)
                    .join("")
                    .toUpperCase()}
                />
              </DivPhotoI>
            </DivPhoto>

            <DivNameManager>
              <ClientName
                onChange={(event) => setClientName(event.target.value)}
              >
                {client.client}
              </ClientName>
              {activeTab === 0 && editable && (
                <IconTag onClick={EditModal}>
                  <IconSystem icon={"Edit"} height={"16px"} width={"16px"} />
                </IconTag>
              )}
              <CreatedBy>Created by on {client.user_name}</CreatedBy>
            </DivNameManager>
          </DivTitle>

          <DivPages>
            <Pages>
              <TabButton
                $mode={client.status}
                active={activeTab === 0}
                onClick={() => toggleTab(0)}
              >
                Client Details
              </TabButton>
              <TabButton
                $mode={client.status}
                active={activeTab === 1}
                onClick={() => toggleTab(1)}
              >
                Subjects
              </TabButton>
            </Pages>
          </DivPages>

          <ContainerBorder>
            <Content active={toggleState === 0}>
              <ClientDetails
                setId={(i) => setId(i)}
                id={id}
                title={"Details Clients"}
              />
            </Content>

            <Content active={toggleState === 1}>
              <SubjectClient
                setId={(i) => setId(i)}
                id={id}
                title={"Subject Clients"}
              />
            </Content>
          </ContainerBorder>
        </BodyAll>
      </Container>
    </ContainerFather>
  );
};

export default ModalClientDetails;
