import { React } from "react";
import {
  Container,
  Card,
  Header,
  Status,
  StatusSpan,
  PositionEdit,
  Title,
  Name,
  CardDate,
  Date1,
  Date2,
  Topic,
  Client,
  Type,
  Line,
  ClientName
} from "./styles";
import IconSystem from "../../../assets/IconSystem";


const RemarkCard = ({
  title,
  manager,
  topic,
  area,
  client,
  status,
  openModal
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
        <CardDate>
          <Date1>
            <IconSystem icon={"FlechaVerde"} height={"15px"} width={"15px"} />
            <p>10 Feb 2023</p>
          </Date1>  
       
          
          <Date2>
          <IconSystem icon={"GridiconsCreate"} height={"15px"} width={"15px"} />
          <p>07 Mar 2023</p>  
          </Date2>
        
        </CardDate>
        

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

export default RemarkCard;
