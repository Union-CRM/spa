import React, { memo, useState, useEffect } from "react";
import {
  ContainerFather,
  Container,
  CardGroup,
  IconButton,
  Tag,
  NameGroup,
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

// Group List //
import { useGroupListContext } from "../../../../hook/useGroupListContext";
import { useFetchAdmGroupList } from "../../../../hook/useFetchAdmGroupList";

const AdmGroupCardListView = (props) => {

  //const {countGroups} = useFetchAdmGroupList();
  const { usersGroup,countGroups } = useGroupListContext();

 

  const handleEdit = () => {
    openModal();
  };

  const handleClick = () => {
    updateStatus(group.id);
    props.setId(group.id);
  };

  const handleInfo = () => {

    setModalInfo(true);
    setInfoGroup(false);
    setToggleState(0);
    setActiveTab(0);
    props.setId(group.id);
  };


  const { openModal, openModalPopUp } = props;
  const { updateStatus } = useFetchAdmGroupList();
  const [userOption, setUserOption] = useState([{}]);
  const { group: groupList, updateGroup } = useGroupListContext();
  const group = groupList.filter((item) => item.id === props.id)[0];
  

  const { toggleState, setToggleState } = useGroupListContext();
  const { activeTab, setActiveTab } = useGroupListContext();
  const { setModalInfo, setInfoGroup } = useGroupListContext();

  const [isActive, setIsActive] = useState(group.status === "ATIVO");

  const handleToggle = () => {
    const newStatus = isActive ? "INATIVO" : "ATIVO";
    setIsActive(!isActive);
    updateGroup(group.id, { ...group, status: newStatus });
  };
  
  const [count,setCount] = useState();

  useEffect( () =>{
    if(countGroups){
      setCount(countGroups.filter((item) => item.group_id === group.id)[0])
    }
  },[countGroups])

  // verificar posteriormente
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


            </DivToggleIcon>
          </TopContainer>
          <Content onClick={() => handleInfo()}>
            <DivIconItau>
              <PeopleTeams
                style={{
                  fill: "#E7E7E7"
                }} />
            </DivIconItau>
           <NameGroup>{group.group_name}</NameGroup>
            <TeamsContainer>
              <FontSubtitle type={"TextDescription"} name={"Team members"} />

              {count ? count.qnt : 0} members

            </TeamsContainer>
          </Content>

        </CardGroup>
      </Container>
    </ContainerFather>
  );
};

export default AdmGroupCardListView;
