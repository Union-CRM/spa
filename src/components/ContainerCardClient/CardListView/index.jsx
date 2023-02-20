import React from 'react'
import { Card, Status, StatusSpan, Topic, Header, IconEdit, Container,DivPhoto,DivToggle, InputToggle,
    LabelToggle,Span,DivIcons,DivDadosCard,NameClient,EmailClient,DivPhotoI,LineText,TitleText,
    DivText,Lline } from './styles'
import IconSystem from '../../../assets/IconSystem'

const SubjectCard = ({email,client,status,textRole,textCostumer,textBusiness,textRelease,}) => {

  return (
    <Container>
    <Card $mode={status}>
            <Header>
                
                <DivPhoto>
                    <DivPhotoI></DivPhotoI>
                </DivPhoto>
                
                <DivDadosCard>
                    <NameClient>{client}</NameClient>
                    <EmailClient>{email}</EmailClient>
                </DivDadosCard>

                <Status $mode={status}>
                    <StatusSpan> {status}</StatusSpan>
                </Status>

                <Status $mode={status}>
                    <StatusSpan> Tags <IconSystem icon={"TaskRegular"} width={"10px"} height={"10px"}/></StatusSpan>
                </Status>
                
                <DivIcons>
                    <DivToggle $mode={status} >
                        <InputToggle  type="checkbox" name="option" id="option" />
                        <LabelToggle $mode={status} for="option"><Span></Span></LabelToggle>
                    </DivToggle>
                    <IconEdit>
                        <IconSystem icon={"Edit"} height={'15px'} width={'15px'}/>
                    </IconEdit>
                </DivIcons>
                
            </Header>
       
        <Topic>
            <DivText>
                <TitleText>Role</TitleText>
                <Lline>|</Lline>
                <LineText>{textRole}</LineText>
            </DivText>
            <DivText>
                <TitleText>Costumer</TitleText>
                <Lline>|</Lline>
                <LineText>{textCostumer}</LineText>
            </DivText>
            <DivText>
                <TitleText>Business</TitleText>
                <Lline>|</Lline>
                <LineText>{textBusiness}</LineText>
            </DivText>
            <DivText>
                <TitleText>Release Train</TitleText>
                <Lline>|</Lline>
                <LineText>{textRelease}</LineText>
            </DivText>

           
        </Topic>
        
    </Card>
    </Container>
  )
}

export default SubjectCard