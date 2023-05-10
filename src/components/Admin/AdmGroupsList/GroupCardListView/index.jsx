import React, { memo, useState, useEffect } from "react";
import {
  ContainerFather,
  Container,
  CardGroup,
  IconButton,
  Tag,
  TeamsContainer,
  Avatar,
  AvatarContainer,
  TopContainer,
  Content,
  DivIconItau,
  ToggleContainer,
  InputToggle,
  ToggleButton,
  DivToggleIcon,
} from "./styles";
import FontSubtitle from "../../../../assets/FontSystem/Subtitle";
import Body from "../../../../assets/FontSystem/Body";
import IconSystem from "../../../../assets/IconSystem";
import { ReactComponent as PeopleTeams } from "../../../../assets/svg/PeopleTeams.svg";
import { useClientContext } from "../../../../hook/useClientContent";
import { useFetchCustomer } from "../../../../hook/useFetchCustomer";
import { useUserContext } from "../../../../hook/useUserContext";
import { useFetchAdmGroupList } from "../../../../hook/useFetchAdmGroupList";



// Group List //
import {useGroupListContext} from "../../../../hook/useGroupListContext";

const AdmGroupCardListView = (props) => {
  const {setIdGroups} = useGroupListContext()

  const handleEdit = () => {
    openModal();
    props.setId(group.id);
  };

  const handleClick = () => {
    openModalPopUp();
    props.setId(group.id);
    
    
  };


  const { openModal, openModalPopUp } = props;

  const [userOption, setUserOption] = useState([{}]);
  const { group: groupList, updateGroup} = useGroupListContext();
  //const { updateStatus } = useFetchAdmGroupList();
  const group = groupList.filter((item) => item.id === props.id)[0];
  
    
  const [isActive, setIsActive] = useState(group.status === "ATIVO");
  const [previousStatus, setPreviousStatus] = useState(group.status);
  const handleToggle = () => {
    const newStatus = isActive ? "INATIVO" : "ATIVO";
    setIsActive(!isActive);
    updateGroup(group.id, { ...group, status: newStatus });
  };

 //  mok imagens //

 //const usersList = parseInt(group.usersCount);
 //const numDigitos = usersList.toString().length;
 //const users = [];
 
 //for(let i = 0; i <= numDigitos; i++) {
  // users.push(i);
 //}

 //const users = [1,2,3,4]
 //const amountUsersToShow = 4;
 //const showingUsers = users.slice(0, amountUsersToShow);
 //const totalHiddenUsers = users.length - amountUsersToShow;
 //const hiddenUsersText = totalHiddenUsers > 0 ? ` +${totalHiddenUsers}` : "";

  //Toggle//



  return (

    <ContainerFather>
    <Container>
    
    <CardGroup
          isActive={isActive}
          active={isActive}
          $mode={group.status}
          checked={isActive}>
      <TopContainer>
        <Tag
        isActive={isActive}
        $mode={group.status}
        checked={isActive}>
          <span>{group.textCustomer}</span>
        </Tag>
  <DivToggleIcon>
        <ToggleContainer
                isActive={isActive}
                $mode={group.status}
                checked={isActive}
              >
                <InputToggle
                  type="checkbox"
                  id={group.id}
                  checked={group.status}
                  onChange={handleToggle}
                  onClick={() => handleClick()}
                />
                <ToggleButton checked={isActive} />
  </ToggleContainer>    


        <IconButton onClick={handleEdit}>
            <IconSystem  icon={"Edit"} height={"13px"} />
        </IconButton>
        </DivToggleIcon> 
      </TopContainer>

   

      <Content>
        <DivIconItau>
        <PeopleTeams 
        style={{
        fill: "#E7E7E7"}}  />
       </DivIconItau>
        <Body type={"Body1"} name={group.group_name} />
        <TeamsContainer>
          <FontSubtitle type={"TextDescription"} name={"Team members"} />

          {/*<AvatarContainer>
            {showingUsers.map((item, index) => (
              <Avatar key={index} position={index} />
            ))}
            {hiddenUsersText}
            </AvatarContainer>*/}


     {group.usersCount} members

        </TeamsContainer>
      </Content>
      
      </CardGroup>
    </Container>
    </ContainerFather>
  );
};

export default AdmGroupCardListView;
