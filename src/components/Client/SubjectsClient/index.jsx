import React, { useState, useEffect } from "react";
import {
  ContainerDetails,
 CardSubject,
 StatusSubject,
 DivTitleSubject,
 TitleSubject,
 DivStatusSubject,
 DivGlobalCard,
} from "./styles";


const SubjectsClient = (props) => {
  const { setModal, id } = props;

  /*const { setModal } = props;

  const closeModal = () => {
    setModal(false);
  };

  // UseEffect Details
  const { subject: subjectsList, loadData } = useSubjectContext();
  const subject = subjectsList.filter((item) => item.id === props.id)[0];

  const { id, setId } = useSubjectContext();

  const [client, setClient] = useState();
  const [email, setEmail] = useState();
  const [release, setRelease] = useState();
  const [business, setBusiness] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    
    if (props.title === "Details") {
      const subject = subjectsList.filter((item) => item.id === props.id)[0];
      setClient(subject.client);
      setEmail(subject.client_email);
      setRelease(subject.release);
      setBusiness(subject.business);
      setDescription(subject.subject_text);
    }
  }, [id]);*/

  useEffect(() => {
    
    if (props.title === "Subject Clients") {

    }
  }, [id]);

  return (
    <ContainerDetails>

  <CardSubject >
    <DivGlobalCard>

      <DivStatusSubject>
       <StatusSubject>
        <span>IN PROGRESS</span>
        </StatusSubject>
        <TitleSubject>
          <span>
            Reformulação de squad
            </span>
          </TitleSubject>
        </DivStatusSubject>

        <DivTitleSubject>
       
        </DivTitleSubject>


        </DivGlobalCard>
        </CardSubject >
    </ContainerDetails>
  );
};

export default SubjectsClient;
