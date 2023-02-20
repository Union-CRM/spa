import React, { memo } from "react";
import { Editar, Trash } from "../Remark/styles";
import PeopleTeams from "../../assets/svg/PeopleTeams.svg";
import Contact from "../../assets/svg/Contact.svg";
import PaperEdit from "../../assets/svg/PaperEdit.svg";
import {
  Container,
  Description,
  IconButton,
  PeopleImage,
  Tag,
  TeamsContainer,
  Avatar, 
  AvatarContainer,
  TopContainer,
  Content
} from "./styles";

const CardGroup = memo(() => {
  const users = [1, 2, 3, 4, 5,6];
  const amountUsersToShow = 4;
  const showingUsers = users.slice(0, amountUsersToShow);
  const totalHiddenUsers = users.length - amountUsersToShow;
  const hiddenUsersText = totalHiddenUsers > 0 ? ` +${totalHiddenUsers}` : "";
 
  return (
    <Container>
      
        <TopContainer>
        <Tag>Itau</Tag>

        <div>
          <IconButton>
            <Trash height={14} src={Trash} />
          </IconButton>
          <IconButton>
            <Editar height={14} src={PaperEdit} />
          </IconButton>
        </div>
      </TopContainer>

      
        <Content>
        <PeopleImage src={PeopleTeams} />

        <Description>Fabrica Itau - Torre 1</Description>
        <TeamsContainer>
          <span>Team members</span>

          <AvatarContainer>
      {showingUsers.map((user, index) => (
        <Avatar key={index} position={index} src={Contact} />
      ))}
      {hiddenUsersText}
    </AvatarContainer>
        </TeamsContainer>
      </Content>
    </Container>
  );
});

export default CardGroup;
