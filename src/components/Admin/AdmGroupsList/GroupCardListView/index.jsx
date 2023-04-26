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
} from "./styles";
import FontSubtitle from "../../../../assets/FontSystem/Subtitle";
import Body from "../../../../assets/FontSystem/Body";
import IconSystem from "../../../../assets/IconSystem";
import { ReactComponent as PeopleTeams } from "../../../../assets/svg/PeopleTeams.svg";
import { useClientContext } from "../../../../hook/useClientContent";
import { useFetchCustomer } from "../../../../hook/useFetchCustomer";
import { useUserContext } from "../../../../hook/useUserContext";


// Group List //
import {useGroupListContext} from "../../../../hook/useGroupListContext";

const AdmGroupCardListView = (props) => {
  
  const{loadTeamMembers,team} = useGroupListContext()

  /*const [users, setUsers]= useState();
  useEffect(() => {
    loadTeamMembers()
    setUsers(group.filter((item) => item.user_id === props.id).length)
}, [])*/

  const { openModal, openModalPopUp } = props;

  /*const {customerList} = useFetchCustomer();
  const [customer, setCustomer] = useState();

  console.log(customerList)*/

  const { group: groupList} = useGroupListContext();
  const group = groupList.filter((item) => item.id === props.id)[0];
  
  const handleEdit = () => {
    openModal();
  };


  
  // mok imagens //
  
  console.log(users)
  const users = [1, 2, 3, 4, 5, 6];
  const amountUsersToShow = 4;
  const showingUsers = users.slice(0, amountUsersToShow);
  const totalHiddenUsers = users.length - amountUsersToShow;
  const hiddenUsersText = totalHiddenUsers > 0 ? ` +${totalHiddenUsers}` : "";

 
 //**********************************************//

 const { client: clientList, updateClient } = useClientContext();
  const client = clientList.filter((item) => item.id === props.id)[0];

  /* Toggle Status
  const [isActive, setIsActive] = useState(client.status === "Active");
  
  const handleToggle = () => {
    const newStatus = isActive ? "Inactive" : "Active";
    setIsActive(!isActive);
    updateClient(client.id, { ...client, status: newStatus });
  };
*/
/*useEffect(() => {
  if (customer) {
    setCustomer(customerList.filter((item) => item.customer_id === group.customer_id));
    console.log("passeia aqui")
  }
}, []);
console.log(customer)

useEffect(() => {
    loadUserList()
}, [])*/

  return (

    <ContainerFather>
    <Container>
    
    <CardGroup>
      <TopContainer>
        <Tag>
          <span>{group.textCustomer}</span>
        </Tag>

        <div>
          
        <IconButton onClick={handleEdit}>
            <IconSystem  icon={"PaperEdit"} height={"14px"} />
        </IconButton>



        {/*<ToggleContainer
                isActive={isActive}
                $mode={client.status}
                checked={isActive}
              >
                <InputToggle
                  type="checkbox"
                  id={client.id}
                  checked={client.status}
                  onChange={handleToggle}
                />
                <ToggleButton checked={isActive} />
  </ToggleContainer>*/}

       
        </div>
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

          <AvatarContainer>
            {showingUsers.map((item, index) => (
              <Avatar key={index} position={index} />
            ))}
            {hiddenUsersText}
          </AvatarContainer>
        </TeamsContainer>
      </Content>
      
    </CardGroup>


    </Container>
    </ContainerFather>
  );
};

export default AdmGroupCardListView;
