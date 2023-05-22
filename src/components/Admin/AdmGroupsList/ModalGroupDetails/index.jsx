import React, { useState, useEffect } from "react";
import IconSystem from "../../../../assets/IconSystem";

import {
  ContainerFather,
  Container,
  BodyAll,
  Close,
  DivStatus,
  Status,
  GroupName,
  DivNameManager,
  CreatedBy,
  DivPages,
  Pages,
  ContainerBorder,
  ClickButton,
  IconTag,
  TabButton,
  Content,
} from "./styles";

import { useSubjectContext } from "../../../../hook/useSubjectContent";
import { useClientContext } from "../../../../hook/useClientContent";
import {useGroupListContext} from "../../../../hook/useGroupListContext";
import GroupDetails from "../GroupDetails";
import TeamMembers from "../TeamMembers"


const ModalGroupDetails = (props) => {
<<<<<<< Updated upstream
  const { setModal, id } = props;
  const { setModalInfo, setId,  modalEditGroup, setModalEditGroup, loadData } = useGroupListContext();
=======
  const { id } = props;
  const { setModalInfo, setId, setModalEditGroup, setIdEdit, setInfoGroup } = useGroupListContext();
>>>>>>> Stashed changes
  
  // UseEffect Clients //
  const { group: groupList } = useGroupListContext();
  const group = groupList.filter((item) => item.id === props.id)[0];

  const [statusGroup, setStatusGroup ] = useState();
  const [groupName, setGroupName] = useState();
  const [manager, setManager] = useState();


 useEffect(() => {
    if (props.title === "Group Details") {
      const group = groupList.filter((item) => item.id === props.id)[0];
      setStatusGroup(group.status);
      setGroupName(group.group_name);
      setManager(group.responsible_name);
    }
  }, [id]);
  
  const [activeContent, setActiveContent] = useState(0);
  const { toggleState, setToggleState } = useGroupListContext();
  const { activeTab, setActiveTab } = useGroupListContext();
  const toggleTab = (index) => {
    setToggleState(index);
    setActiveTab(index);
    setActiveContent(index);
  };

  // Close page //
  const closeModal = () => {
    setModalInfo(false);
  };

  const handleEdit = () => {
    setModalEditGroup(true);
    setModalInfo(false);
    props.setIdEdit(group.id);
  };


  return (
    <ContainerFather>
      <Container $mode={group.status}>
        <BodyAll>
          <ClickButton>
          <Close onClick={closeModal}>X</Close>
          </ClickButton>

          <DivStatus>
            <Status $mode={group.status}>
            <span onChange={(event) => setStatusGroup(event.target.value)}>
                {group.status}
              </span>
            </Status>
          </DivStatus>

      
          <DivNameManager>
            <GroupName
            onChange={(event) => setGroupName(event.target.value)}>
            {group.group_name}
            </GroupName>

            {activeTab === 0 &&
          (
           <IconTag onClick={handleEdit} >
          <IconSystem icon={"Edit"} height={"16px"} width={"16px"} />
          </IconTag>
            )}

    
            <CreatedBy>
            Created by on {group.responsible_name}
            </CreatedBy>
            </DivNameManager>

  
    
          <DivPages>
            <Pages>
              <TabButton
                width="100%"
                fontSize="0.9rem"
                $mode={group.status}
                active={activeTab === 0}
                onClick={() => toggleTab(0)}
              >
                Group Details
              </TabButton>
              <TabButton
                width="100%"
                fontSize="0.9rem"
                $mode={group.status}
                active={activeTab === 1}
                onClick={() => toggleTab(1)}
              >
                Team Members
              </TabButton>

    
            </Pages>
          </DivPages>

          <ContainerBorder>
          <Content active={toggleState === 0}>
          <GroupDetails
                setId={(i) => setId(i)}
                id={id}
                title={"Group Content"}
            />
          </Content>

            <Content active={toggleState === 1}>
            <TeamMembers
                setId={(i) => setId(i)}
                id={id}
                title={"Team Members"}
            />

            </Content>

          </ContainerBorder>
        </BodyAll>
      </Container>
    </ContainerFather>
  );
};

export default ModalGroupDetails;
