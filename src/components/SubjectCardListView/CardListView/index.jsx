import React from 'react'
import { Card, Status, StatusSpan, Title, Name, Topic, Client, ClientName, Type, Line, Header, PositionEdit, PositionRemove } from './styles'
import IconSystem from '../../../assets/IconSystem'

const SubjectCard = ({title, manager, topic, area, client, status}) => {

  return (
    <Card $mode={status}>
        <Header>
            <Status $mode={status}>
                <StatusSpan>{status}</StatusSpan>
            </Status>
            <PositionEdit>
                <IconSystem icon={"paperEdit"} height={'15px'} width={'15px'}/>
            </PositionEdit>
            <PositionRemove>
                <IconSystem icon={"delete"} height={'15px'} width={'15px'}/>
            </PositionRemove>
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
  )
}

export default SubjectCard