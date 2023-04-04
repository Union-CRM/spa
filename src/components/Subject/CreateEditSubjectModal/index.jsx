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
import clientList from "../../../context/ClientContext";
import subjectList from "../../../context/SubjectContext";
import { useClientContext } from "../../../hook/useClientContent";
import { useSubjectContext } from "../../../hook/useSubjectContent";

const Subject = (props) => {
  const { setModal, title, id } = props;

  // CLOSE E SAVE ////////////
  const closeModal = () => {
    setModal(false);
  };

  const handleSubmit = () => {
    if (props.title === "Create Subject") {
      createSubject();
    }
  };

  ////////////////////////////////////

  /////////// SUBJECT ////////////////

  const { subject: subjectsList, setSubject: setSubjectList } =
    useSubjectContext();

  const [subject, setSubject] = useState();
  const [manager, setManager] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState("Progress");
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
  /*id: 1,
    status: "Progress",
    subject_title: "Apresentação Institucional TCS Institucional",
    manager_id: 1,
    manager: "Helio Endo",
    release_id: 1,
    release: "Experiência Digital",
    business_id: 1,
    business: "Infraestrutura e Operações TI",
    client_id: 1,
    client: "Igor Sena Soares Silva",
    client_email: "igorsena@tcs.com",
    description:"", */

  const createSubject = () => {
    const newSubject = {
      id: getId(),
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
      setSubjectList([...subjectsList, newSubject]);
      setModal(false);
    } else {
      setFlag(true);
    }
  };

  // PUXANDO OS CLIENTS DO CLIENT LIST

  const [selectedClient, setSelectedClient] = useState(null);

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
                  onChange={(choice) => setUserChoice(choice)}
                  placeholder={flag && !selectedClient ? "" : ""}
                  sizeSingle={"100%"}
                  sizeMenu={"100%"}
                  options={optionsClient}
                  value={selectedClient}
                />
              </Label>
            </DivName>

            <DivBusiness>
              <Label>
                Business
                <Input
                  onChange={(event) => setBusiness(event.target.value)}
                  widthInput={"90% !important"}
                  value={business}
                  name={business}
                  disabled={selectedClient}
                />
              </Label>

              <Label>
                ReleaseTrain
                <Input
                  onChange={(event) => setRelease(event.target.value)}
                  widthInput={"98% !important"}
                  value={release}
                  disabled={selectedClient}
                />
              </Label>
            </DivBusiness>

            <DivEmail>
              <Label>
                Email
                <Input
                  widthInput={"98% !important"}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={selectedClient}
                />
              </Label>
            </DivEmail>

            <DivSubject>
              <Label>
                Subject
                <Input
                  widthInput={"98% !important"}
                  placeholder={flag && !subject ? "Required field" : ""}
                  name={subject}
                  set={(subject) => setSubject(subject)}
                  onChange={(event) => setSubject(event.target.value)}
                  required
                />
              </Label>
            </DivSubject>

            <DivStatus>
              <Label>
                Status
                <Input
                  label={"Status"}
                  placeholder={flag && !status ? "" : ""}
                  widthInput={"90% !important"}
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                  set={(status) => setStatus(status)}
                  disabled
                />
              </Label>

              <SingleSelect
                label={"Manager"}
                value={manager}
                placeholder={flag && !manager ? "Required field" : ""}
                sizeSingle={"100%"}
                required
                sizeMenu={"100%"}
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
                  placeholder={flag && !description ? "Required field" : ""}
                  name={description}
                  value={description}
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
  { id: 3, value: "Camila Gomes", label: "Camila Gomes" },
];
