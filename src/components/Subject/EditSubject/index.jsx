import React, { useState, useEffect } from "react";
import {
  Input,
  ContainerCentral,
  Container,
  PositionTitle,
  H1,
  Form,
  Label,
  DivName,
  DivEmail,
  DivBusiness,
  DivSubject,
  DivStatus,
  DivButton,
  ClickButton,
  PositionButtonCancel,
  DivDescription,
  TextArea,
} from "./styles";
import SingleSelect from "../../Geral/Input/SingleSelect";
import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import subjectList from "../../../context/SubjectContext";
import { useClientContext } from "../../../hook/useClientContent";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useUserContext } from "../../../hook/useUserContext";
import { useFetchSubject } from "../../../hook/useFetchSubject";
import { useFetchSubjectStatus } from "../../../hook/useFetchSubjectStatus";

const Subject = (props) => {
  const { setModal, title, id } = props;
  const { client: clientList } = useClientContext();
  const { updateSubject } = useFetchSubject();
  const { subjectFinished, subjectCanceld } = useFetchSubjectStatus();
  // CLOSE E SAVE ////////////
  const { setModalDetails, setModalEdit } = useSubjectContext();
  const { toggleState, setToggleState, loadData } = useSubjectContext();

  const closeModal = () => {
    setModalDetails(true);
    setModalEdit(false);
    setToggleState(0);
  };

  const handleSubmit = () => {
    if (props.title === "Edit Subject") {
      editSubject();
    }
  };

  ////////////////////////////////////

  /////////// CREATE SUBJECT ////////////////

  const { subject: subjectsList, setSubject: setSubjectList } =
    useSubjectContext();
  const { userTarget } = useUserContext();
  const [subject, setSubject] = useState();
  const [manager, setManager] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const [flag, setFlag] = useState(false);
  const [email, setEmail] = useState();
  const [business, setBusiness] = useState();
  const [client, setClient] = useState();
  const [release, setRelease] = useState();

  function getId() {
    let lastId = 1;

    subjectsList.map((s) => {
      lastId = s.id > lastId ? s.id : lastId;
    });

    return lastId + 1;
  }

  ////////// EDIT SUBJECT ////////////

  useEffect(() => {
    if (props.title === "Edit Subject") {
      const subject = subjectsList.filter((item) => item.id === props.id)[0];

      setStatus(subject.status);
      setSubject(subject.subject_title);
      setSelectedClient(subject.client);
      setDescription(subject.subject_text);
    }
  }, [id]);

  const [selectedClient, setSelectedClient] = useState(null);

  const editSubject = () => {
    const newSubject = {
      id: id,
      title: subject,
      text: description,
      status_id: status,
    };

    console.log(newSubject);
    if (subject && description && status) {
      if (status === "FINISHED") {
        subjectFinished(id, newSubject);
      } else if (status === "CANCELED") {
        subjectCanceld(id, newSubject);
      }
      updateSubject(id, newSubject);
      setModalEdit(false);
      setModalDetails(true);
      setToggleState(0);
    } else {
      setFlag(true);
    }
  };

  // PUXANDO OS CLIENTS DO CLIENT LIST //

  useEffect(() => {
    if (selectedClient) {
      const selectedSubject = clientList.find(
        (client) => client.client === selectedClient
      );
      setEmail(selectedSubject.email);
      setBusiness(selectedSubject.textBusiness);
      setRelease(selectedSubject.textRelease);
    }
  }, [selectedClient]);

  const activeClients = clientList.filter(
    (client) => client.status === "Active" && client.user_id === userTarget.id
  );

  const optionsClient = activeClients.map((client) => {
    return {
      value: client.client,
      label: client.client,
      email: client.email,
      business: client.textBusiness,
      release: client.textRelease,
    };
  });

  const handleClientChange = (selectedClient) => {
    setSelectedClient(selectedClient.value);
  };
  ////////////////////////////////////

  const [userChoice, setUserChoice] = useState("");

  return (
    <>
      <ContainerCentral>
        <Container>
          <PositionTitle>
            <H1>{title} </H1>
          </PositionTitle>

          <Form onSubmit={handleSubmit}>
            <DivName>
              <Label>
                Client Name
                <Input
                  onChange={(event) => setSelectedClient(event.target.value)}
                  widthInput={"98% !important"}
                  backgroundInput={"#D9D9D9"}
                  options={optionsClient}
                  value={selectedClient}
                  placeholder={flag && !selectedClient ? "" : ""}
                  disabled
                />
              </Label>
            </DivName>

            <DivBusiness>
              <Label>
                Business
                <Input
                  onChange={(event) => setBusiness(event.target.value)}
                  widthInput={"90% !important"}
                  backgroundInput={"#D9D9D9"}
                  value={business}
                  name={business}
                  disabled
                />
              </Label>

              <Label>
                ReleaseTrain
                <Input
                  onChange={(event) => setRelease(event.target.value)}
                  widthInput={"98% !important"}
                  backgroundInput={"#D9D9D9"}
                  value={release}
                  disabled
                />
              </Label>
            </DivBusiness>

            <DivEmail>
              <Label>
                Email
                <Input
                  widthInput={"98% !important"}
                  backgroundInput={"#D9D9D9"}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled
                />
              </Label>
            </DivEmail>

            <DivSubject>
              <Label>
                Subject
                <Input
                  widthInput={"98% !important"}
                  name={subject}
                  value={subject}
                  set={(subject) => setSubject(subject)}
                  onChange={(event) => setSubject(event.target.value)}
                  placeholder={flag && !subject ? "" : ""}
                  required
                />
              </Label>
            </DivSubject>

            <DivStatus>
              <Label>
                Status
                <SingleSelect
                  sizeMenu={"100%"}
                  sizeSingle={"100%"}
                  options={status_mok}
                  onChange={(event) => setStatus(event.target.value)}
                  set={(status) => setStatus(status)}
                  value={status}
                  placeholder={flag && !status ? "" : ""}
                />
              </Label>
            </DivStatus>

            <DivDescription>
              <Label>
                Description
                <TextArea
                  widthInput={"98% !important"}
                  name={description}
                  value={description}
                  placeholder={flag && !description ? "Required field" : ""}
                  set={(description) => setDescription(description)}
                  onChange={(event) => setDescription(event.target.value)}
                  required
                  rows="4"
                />
              </Label>
            </DivDescription>
          </Form>

          <DivButton>
            <ClickButton onClick={() => handleSubmit()}>
              <ButtonDefault
                type={"userSave"}
                weightFont={"500"}
                sizeFont={"1rem"}
                name={"Save"}
              />
            </ClickButton>

            <PositionButtonCancel onClick={closeModal}>
              <ButtonDefault
                type="userCancel"
                name={"Cancel"}
                weightFont={"500"}
                sizeFont={"1rem"}
              />
            </PositionButtonCancel>
          </DivButton>
        </Container>
      </ContainerCentral>
    </>
  );
};

export default Subject;

const status_mok = [
  { id: 1, value: "IN PROGRESS", label: "IN PROGRESS" },
  { id: 2, value: "FINISHED", label: "FINISHED" },
  { id: 3, value: "CANCELED", label: "CANCELED" },
];
