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

const Subject = (props) => {
  const { setModal, title, id } = props;
  const { client: clientList} = useClientContext();

  // CLOSE E SAVE ////////////
  const { setModalDetails, setModalEdit } = useSubjectContext();

  const { toggleState, setToggleState } = useSubjectContext();

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
      setManager(subject.manager);
      setSelectedClient(subject.client);
      setEmail(subject.client_email);
      setRelease(subject.release);
      setBusiness(subject.business);
      setDescription(subject.description);
    }
  }, [id]);

  const [selectedClient, setSelectedClient] = useState(null);

  const editSubject = () => {
    const newSubject = {
      id: id,
      status: status,
      manager: manager,
      client: selectedClient,
      client_email: email,
      release: release,
      business: business,
      subject_title: subject,
      description: description,
    };
    if (
      status &&
      manager &&
      selectedClient &&
      email &&
      release &&
      business &&
      subject &&
      description
    ) {
      const noId = subjectsList.filter((item) => item.id !== id);
      setSubjectList([...noId, newSubject]);
      setModalDetails(true);
      setModalEdit(false);
      setToggleState(0);
    } else {
      setFlag(true);
    }
  };

  // PUXANDO OS CLIENTS DO CLIENT LIST

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
    (client) => client.status === "Active"
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

          <Form>
            <DivName>
              <Label>
                Client Name
                <SingleSelect
                  set={(client) => setSelectedClient(client)}
                  sizeSingle={"100%"}
                  sizeMenu={"100%"}
                  name={client}
                  options={optionsClient}
                  value={selectedClient}
                  onChange={{ value: selectedClient }}
                  placeholder={flag && !selectedClient ? "" : ""}
                  required
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
                  widthInput={"100% !important"}
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
                  widthInput={"100% !important"}
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
                  widthInput={"100% !important"}
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
                  sizeMenu={"90%"}
                  sizeSingle={"90%"}
                  options={status_mok}
                  onChange={(event) => setStatus(event.target.value)}
                  set={(status) => setStatus(status)}
                  value={status}
                  placeholder={flag && !status ? "" : ""}
                />
              </Label>

              <SingleSelect
                label={"Manager"}
                value={manager}
                placeholder={flag && !manager ? "Required field" : ""}
                sizeMenu={"100%"}
                sizeSingle={"100%"}
                required
                options={manager_mok}
                onChange={(choice) => setUserChoice(choice)}
                set={(manager) => setManager(manager)}
              />
            </DivStatus>

            <DivDescription>
              <Label>
                Description
                <TextArea
                  widthInput={"100% !important"}
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
            <ClickButton onClick={handleSubmit}>
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

const manager_mok = [
  { id: 1, value: "Helio Endo", label: "Helio Endo" },
  { id: 2, value: "Felipe Flaibam", label: "Felipe Flaibam" },
  { id: 3, value: "Gilberto Anderson", label: "Gilberto Anderson" },
];

const status_mok = [
  { id: 1, value: "Progress", label: "Progress" },
  { id: 2, value: "Finished", label: "Finishedl" },
  { id: 3, value: "Canceled", label: "Canceled" },
];
