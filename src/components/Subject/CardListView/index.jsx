import React, { useState } from "react";
import {
  Container,
  Card,
  Header,
  DivDadosCard,
  DivStatusSubject,
  Status,
  LabelStatus,
  DivInfo,
  DivReleaseAndBusiness,
  DivSubjectAndCreatedBy,
  CreatedByManager,
  ReleaseTrain,
  Business,
  BoxClient,
  ClientName,
  Client,
  PositionEdit,
} from "./styles";
import { useSubjectContext } from "../../../hook/useSubjectContent";

const SubjectCard = (props) => {
  const { openModal, id } = props;

  const { subject: subjectsList } = useSubjectContext();
  const subject = subjectsList.filter((item) => item.id === props.id)[0];

  const { toggleState, setToggleState } = useSubjectContext();

  const handleClick = () => {
    openModal();
    setToggleState(0);
    props.setId(subject.id);
  };

  return (
    <Container>
      <Card $mode={subject.status} onClick={handleClick}>
        <Header>
          <DivStatusSubject>
            <Status $mode={subject.status}>
              <LabelStatus>{subject.status}</LabelStatus>
            </Status>
          </DivStatusSubject>

          <DivDadosCard>
            <DivSubjectAndCreatedBy>
              <p>{subject.subject_title}</p>

              <CreatedByManager>{subject.manager}</CreatedByManager>
            </DivSubjectAndCreatedBy>
          </DivDadosCard>
        </Header>

        <DivInfo>
          <DivReleaseAndBusiness>
            <ReleaseTrain>
              <p>{subject.release}</p>
            </ReleaseTrain>

            <Business>
              <p>{subject.business}</p>
            </Business>
          </DivReleaseAndBusiness>

          <BoxClient>
            <Client>
              Client <p>|</p>
            </Client>

            <ClientName>
              <p>{subject.client}</p>
            </ClientName>
          </BoxClient>
        </DivInfo>
      </Card>
    </Container>
  );
};
export default SubjectCard;
