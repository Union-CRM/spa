import {React} from 'react'
import { Card, Status, StatusSpan, Title, Name, Topic, Client, ClientName, Type, Line, Header, PositionEdit, PositionRemove, Container} from './styles'
import IconSystem from '../../../assets/IconSystem'

const RemarkCard = ({title, manager, topic, area, client, status, openModal,setModalDiscard,opennedModal }) => {

    const discardRemark=() =>{
        setModalDiscard(true);
        opennedModal(false);
    }
  return (

    <div>        
        <Card $mode={status}>
            <Header>
                <Status $mode={status}>
                    <StatusSpan>{status}</StatusSpan>
                </Status>
                <PositionEdit onClick={openModal}>
                    <IconSystem icon={"paperEdit"} height={'15px'} width={'15px'}/>
                    
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
    </div>
             
  )
}

export default RemarkCard