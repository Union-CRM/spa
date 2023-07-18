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
 ButtonCreateSubject,
 ButtonAdd,
} from "./styles";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useClientContext } from "../../../hook/useClientContent";

const SubjectsClient = (props) => {
  const { setModal, id } = props;

  const {
    loadData, setModalInfo,
    setModalCreateSubject
  } = useClientContext();
  const [status, setStatus] = useState();
  const { subject: subjectsList,setIdSubject } = useSubjectContext();
  const [subjects, setSubjects] = useState([]);
  const { setModalSubject } = useSubjectContext();

  useEffect(() => {
    try{
      if (subjectsList) {
        setSubjects(subjectsList.filter((s) => s.client_id === props.id));
      }
    }catch (error){     
      console.error(error.message);
    }
   
  }, [subjectsList]);
  
  
  useEffect(() => {
    try {
      if (props.title === "Subject Clients") {
        const subject = subjectsList.filter((s) => s.client_id === props.id);
        setStatus(subject.status);
      }
    } catch (error) {
    console.error(error)
    }
    
  }, [id]);

  const handleEdit = (id) => {
    setIdSubject(id);
    setModalInfo(false);
  }

  const SubjectModal = () => {
    setModalCreateSubject(true);
    setModalInfo(false);    
  };
  console.log(props.clientStatus);

  return (

    <ContainerDetails>

<ButtonCreateSubject>

        {status !== "INACTIVE" && (
          <ButtonAdd
            onClick={() => SubjectModal()}
            $mode={props.clientStatus}
            width="130px"
            padding="0"
            sizeFont="0.9rem"
            boxShadow="none"
            margin="none"
            title="Create Subject"
          >
            {" "}
            <span>Create Subject</span>
          </ButtonAdd>
        )}
      </ButtonCreateSubject>

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

