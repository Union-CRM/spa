import React, { useState, useEffect } from "react";
import {
  ContainerDetails,
 CardSubject,
 DivSubject,
 StatusSubject,
 DivTitleSubject,
 TitleSubject,
 DivStatusSubject,
 DivGlobalCard,
 CreatedAt,
} from "./styles";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useClientContext } from "../../../hook/useClientContent";

const SubjectsClient = (props) => {
  const { setModal, id } = props;

  const {
    client: clientList,
    setClient: setClientList,
    loadData, setModalInfo,
  } = useClientContext();
  const { setModalEdit } = useSubjectContext();
  //const {setEditSubject} = useSubjectContext();
  const [status, setStatus] = useState();
  const { subject: subjectsList,setIdSubject } = useSubjectContext();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    if (subjectsList) {
      setSubjects(subjectsList.filter((s) => s.client_id === props.id));
    }
  }, [subjectsList]);


  useEffect(() => {
    if (props.title === "Subject Clients") {
      const subject = subjectsList.filter((s) => s.client_id === props.id);
      setStatus(subject.status);
    }
  }, [id]);

  const handleEdit = (id) => {
    setIdSubject(id);
    setModalEdit(true);
    setModalInfo(false);
  }

  return (

    <ContainerDetails>


  {subjects.map((s) => (
  <CardSubject onClick={() => handleEdit(s.id)}>

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

        <CreatedAt>
        <span>Created  </span> 
        {s.created_at.split(" ")[0]}
        </CreatedAt>

        </DivGlobalCard>
        </CardSubject >
        ))}
    </ContainerDetails>

  );
};

export default SubjectsClient;

