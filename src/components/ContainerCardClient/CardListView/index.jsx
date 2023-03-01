import React from "react";
import {
  Card,
  Status,
  StatusSpan,
  Topic,
  Header,
  IconEdit,
  Container,
  DivPhoto,
  DivToggle,
  InputToggle,
  LabelToggle,
  Span,
  DivIcons,
  DivDadosCard,
  NameClient,
  EmailClient,
  DivPhotoI,
  LineText,
  TitleText,
  DivText,
  Lline,
  TagsSpan,
} from "./styles";
import IconSystem from "../../../assets/IconSystem";

//components FontSystem
import Body from "../../FontSystem/Body";
import Subtitle from "../../FontSystem/Subtitle";

const SubjectCard = ({
  email,
  client,
  status,
  textRole,
  textCostumer,
  textBusiness,
  textRelease,
}) => {
  return (
    <Container>
      <Card $mode={status}>
        <Header>
          <DivPhoto>
            <DivPhotoI>
            <Body type={"Body1"} name={"IS"} /></DivPhotoI>
          </DivPhoto>

          <DivDadosCard>
            <NameClient>
              <Body type={"Body1"} name={client} />
            </NameClient>
            <EmailClient>
              <Subtitle type={"TextDescription"} name={email} />
            </EmailClient>
          </DivDadosCard>

          <Status $mode={status}>
            <StatusSpan> {status}</StatusSpan>
          </Status>

          <Status $mode={status}>
            <TagsSpan>
              
              Tags
              <IconSystem icon={"TaskRegular"} width={"10px"} height={"10px"} />
            </TagsSpan>
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
            <LineText>
         
              <Subtitle type={"TextMed"} name={textRole} />
            </LineText>
          </DivText>
          <DivText>
            <TitleText>Costumer</TitleText>
            <Lline>|</Lline>
            <LineText>
            
              <Subtitle type={"TextMed"} name={textCostumer} />
            </LineText>
          </DivText>
          <DivText>
            <TitleText>Business</TitleText>
            <Lline>|</Lline>
            <LineText>
              <Subtitle type={"TextMed"} name={textBusiness} />
            </LineText>
          </DivText>
          <DivText>
            <TitleText>Release Train</TitleText>
            <Lline>|</Lline>
            <LineText>
              <Subtitle type={"TextMed"} name={textRelease} />
            </LineText>
          </DivText>
        </Topic>
      </Card>
    </Container>
  );
};

export default SubjectCard;
