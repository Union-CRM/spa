import React from "react";
import {
  Card,
  Status,
  StatusSpan,
  Title,
  Name,
  Topic,
  Client,
  ClientName,
  Type,
  Line,
  Header,
  PositionEdit,
  Container,
} from "./styles";
import IconSystem from "../../../assets/IconSystem";

const SubjectCard = ({
  title,
  manager,
  topic,
  area,
  client,
  status,
  openModal,
}) => {
  return (
    <Container>
      <Card $mode={status}>
        <Header>
          <Status $mode={status}>
            <StatusSpan>{status}</StatusSpan>
          </Status>
          <PositionEdit onClick={openModal}>
            <IconSystem icon={"PaperEdit"} height={"15px"} width={"15px"} />
          </PositionEdit>
        </Header>
        <Title>
          <strong>
            <p>{title}</p>
          </strong>
          <Name>{manager}</Name>
        </Title>
        <Topic>
          <p>{topic}</p>
          <p>{area}</p>
        </Topic>
        <Client>
          <Type>
            <p>Client</p>
          </Type>
          <Line />
          <ClientName>
            <p>{client}</p>
          </ClientName>
        </Client>
      </Card>
    </Container>
  );
};

export default SubjectCard;
