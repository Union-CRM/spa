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
  IconTag,
} from "./styles";
import IconSystem from "../../../assets/IconSystem";
import Body from "../../../assets/FontSystem/Body";
import Subtitle from "../../../assets/FontSystem/Subtitle";

const SubjectCard = (props) => {
  const { openModal } = props;

  return (
    <Container>
      <Card $mode={props.status}>
        <Header>
          <DivPhoto>
            <DivPhotoI>
              <Body type={"Body1"} name={"IS"} />
            </DivPhotoI>
          </DivPhoto>
          <DivDadosCard>
            <NameClient>
              <Body type={"Body1"} name={props.client} />
            </NameClient>
            <EmailClient>
              <Subtitle type={"TextDescription"} name={props.email} />
            </EmailClient>
          </DivDadosCard>
          <Status $mode={props.status}>
            <StatusSpan> {props.status}</StatusSpan>
          </Status>
          <Status $mode={props.status}>
            <TagsSpan>
              Tags
              <IconTag>
                <IconSystem icon={"TagWhite"} width={"10px"} height={"10px"} />
              </IconTag>
            </TagsSpan>
          </Status>
          <DivIcons>
            <DivToggle $mode={props.status}>
              <InputToggle type="checkbox" name="option" id="option" />
              <LabelToggle $mode={props.status} for="option">
                <Span></Span>
              </LabelToggle>
            </DivToggle>

            <IconEdit onClick={openModal}>
              <IconSystem icon={"Edit"} height={"15px"} width={"15px"} />
            </IconEdit>
          </DivIcons>
        </Header>
        <Topic>
          <DivText>
            <TitleText>Role</TitleText>
            <Lline>|</Lline>
            <LineText>
              <Subtitle type={"TextMed"} name={props.textRole} />
            </LineText>
          </DivText>
          <DivText>
            <TitleText>Costumer</TitleText>
            <Lline>|</Lline>
            <LineText>
              <Subtitle type={"TextMed"} name={props.textCostumer} />
            </LineText>
          </DivText>
          <DivText>
            <TitleText>Business</TitleText>
            <Lline>|</Lline>
            <LineText>
              <Subtitle type={"TextMed"} name={props.textBusiness} />
            </LineText>
          </DivText>
          <DivText>
            <TitleText>Release Train</TitleText>
            <Lline>|</Lline>
            <LineText>
              <Subtitle type={"TextMed"} name={props.textRelease} />
            </LineText>
          </DivText>
        </Topic>
      </Card>
    </Container>
  );
};

export default SubjectCard;
