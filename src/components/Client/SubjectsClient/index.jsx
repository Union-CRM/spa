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
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useClientContext } from "../../../hook/useClientContent";


const SubjectsClient = (props) => {
  const { setModal, id } = props;

  const {
    client: clientList,
    setClient: setClientList,
    loadData,
  } = useClientContext();


  const [status, setStatus] = useState();
  const { subject: subjectsList } = useSubjectContext();
   const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    if (subjectsList) {
      setSubjects(subjectsList.filter((s) => s.client_id === props.id));
    }
  }, [subjectsList]);

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
  }, [id]);

  useEffect(() => {
    
    if (props.title === "Subject Clients") {

    }
  }, [id]);*/

  useEffect(() => {
    if (props.title === "Subject Clients") {
      const subject = subjectsList.filter((s) => s.client_id === props.id);
      setStatus(subject.status);
    }
  }, [id]);


  return (
    <ContainerDetails>
 {subjects.map((s) => (
  <CardSubject >
    <DivGlobalCard>

      <DivStatusSubject>
       <StatusSubject $mode={s.status}>
        <span>{s.status}</span>
        </StatusSubject>
        <TitleSubject>
          <span>
            {s.subject_title}
            </span>
          </TitleSubject>
        </DivStatusSubject>
        </DivGlobalCard>

        </CardSubject >
        
        ))}
    </ContainerDetails>
  );
};

export default SubjectsClient;
