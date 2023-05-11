import React, { useState, useEffect } from "react";
import {
  ContainerDetails,
  DivBetween,
  DivName,
  DivEmail,
  DivBusiness,
  DivRelease,
  DivDescription,
} from "./styles";
import { useSubjectContext } from "../../../hook/useSubjectContent";

const SubjectsDetails = (props) => {
  const { setModal } = props;

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
      setDescription(subject.subjectText);
    }

  }, [id]);

  return (
    <ContainerDetails>
      <DivBetween>
        <DivName>
          Client Name
          <span onChange={(event) => setClient(event.target.value)}>
            {client}
          </span>
        </DivName>

        <DivEmail>
          Email
          <span onChange={(event) => setEmail(event.target.value)}>
            {email}
          </span>
        </DivEmail>
      </DivBetween>

      <DivBetween>
        <DivRelease>
          Release Train
          <span onChange={(event) => setRelease(event.target.value)}>
            {release}
          </span>
        </DivRelease>

        <DivBusiness>
          Business
          <span onChange={(event) => setBusiness(event.target.value)}>
            {business}
          </span>
        </DivBusiness>
      </DivBetween>

      <DivDescription>
        Description
        <span onChange={(event) => setDescription(event.target.value)}>
        {description}
        </span>
      </DivDescription>
    </ContainerDetails>
  );
};

export default SubjectsDetails;