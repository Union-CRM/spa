import React, { memo } from "react";
import { Editar, Trash } from "../Remark/styles";
import trash from "../../imagens/trash.svg";
import peopleTeams from "../../assets/svg/peopleTeams.svg";
import contact from "../../assets/svg/contact.svg";
import paperEdit from "../../assets/svg/paperEdit.svg";
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
            <Trash height={14} src={trash} />
          </IconButton>
          <IconButton>
            <Editar height={14} src={paperEdit} />
          </IconButton>
        </div>
      </TopContainer>

      
        <Content>
        <PeopleImage src={peopleTeams} />

        <Description>Fabrica Itau - Torre 1</Description>
        <TeamsContainer>
          <span>Team members</span>

          <AvatarContainer>
      {showingUsers.map((user, index) => (
        <Avatar key={index} position={index} src={contact} />
      ))}
      {hiddenUsersText}
    </AvatarContainer>
        </TeamsContainer>
      </Content>
    </Container>
  );
});

export default CardGroup;
