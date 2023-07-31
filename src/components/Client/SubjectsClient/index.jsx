import React, { useState, useEffect } from "react";
import {
  ContainerDetails,
  CardSubject,
  StatusSubject,
  TitleSubject,
  DivStatusSubject,
  DivGlobalCard,
  CreatedAt,
  ButtonCreateSubject,
  ButtonAdd,
} from "./styles";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useClientContext } from "../../../hook/useClientContent";
import { useUserContext } from "../../../hook/useUserContext";
import { Link } from "react-router-dom";

const SubjectsClient = (props) => {
  const { id } = props;
  const { userTarget } = useUserContext();
  const { setModalInfo, setModalCreateSubject, clientTarget } =
    useClientContext();
  const [status, setStatus] = useState();
  const {
    subject: subjectsList,
    setIdSubject,
    setId,
    setModalDetails,
    setToggleState,
    setActiveTab,
    setViewSubject,
  } = useSubjectContext();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    try {
      if (subjectsList) {
        setSubjects(subjectsList.filter((s) => s.client_id === props.id));
      }
    } catch (error) {
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
      console.error(error);
    }
  }, [id]);

  const handleEdit = (id) => {
    setIdSubject(id);
    setModalInfo(false);
    setModalDetails(true);
    setToggleState(0);
    setActiveTab(0);
    setId(id);
  };

  const SubjectModal = () => {
    setModalCreateSubject(true);
    setModalInfo(false);
  };
  const handleClickViewSubject = () => {
    setViewSubject(true);
  };
  return (
    <ContainerDetails>
      <ButtonCreateSubject>
        {status !== "INACTIVE" && userTarget.id === clientTarget.user_id && (
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
          <Link
            to="/subject"
            onClick={() => handleClickViewSubject()}
            style={{ textDecoration: "none", color: "black" }}
          >
            <DivGlobalCard>
              <DivStatusSubject>
                <StatusSubject $mode={s.status}>
                  <span>{s.status}</span>
                </StatusSubject>
                <TitleSubject>
                  <span>{s.subject_title}</span>
                </TitleSubject>
              </DivStatusSubject>

              <CreatedAt>
                <span>Created </span>
                {s.created_at.split(" ")[0]}
              </CreatedAt>
            </DivGlobalCard>
          </Link>
        </CardSubject>
      ))}
    </ContainerDetails>
  );
};

export default SubjectsClient;
