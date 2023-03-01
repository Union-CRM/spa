import React, { memo } from "react";
import {
  Container,
  IconButton,
  Tag,
  TeamsContainer,
  Avatar,
  AvatarContainer,
  TopContainer,
  Content,
} from "./styles";
import FontSubtitle from "../FontSystem/Subtitle";
import Body from "../FontSystem/Body";
import IconSystem from "../../assets/IconSystem";

const CardGroup = memo(() => {
  const users = [1, 2, 3, 4, 5, 6];
  const amountUsersToShow = 4;
  const showingUsers = users.slice(0, amountUsersToShow);
  const totalHiddenUsers = users.length - amountUsersToShow;
  const hiddenUsersText = totalHiddenUsers > 0 ? ` +${totalHiddenUsers}` : "";

  return (
    <Container>
      <TopContainer>
        <Tag>
          <FontSubtitle type={"TextDescription2"} name={"Itau"} />
        </Tag>

        <div>
          <IconButton>
            <IconSystem icon={"Trash"} height={"140px"} />
          </IconButton>
          <IconButton>
            <IconSystem icon={"PaperEdit"} height={"14px"} />
          </IconButton>
        </div>
      </TopContainer>

      <Content>
        <IconSystem icon={"PeopleTeams"} />

        <Body type={"Body1"} name={"Fabrica Itau - Torre 1"} />
        <TeamsContainer>
          <FontSubtitle type={"TextDescription"} name={"Team members"} />

          <AvatarContainer>
            {showingUsers.map((user, index) => (
              <Avatar key={index} position={index} />
            ))}
            {hiddenUsersText}
          </AvatarContainer>
        </TeamsContainer>
      </Content>
    </Container>
  );
});

export default CardGroup;
