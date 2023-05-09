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
import { useFetchSubject } from "../../../hook/useFetchSubject";
import { useUserContext } from "../../../hook/useUserContext";

const Subject = (props) => {
  const { setModal, title, id } = props;
  const { client: clientList } = useClientContext();

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

  const {
    subject: subjectsList,
    setSubject: setSubjectList,
    loadData,
  } = useSubjectContext();

  const [subject, setSubject] = useState();
  const [description, setDescription] = useState();
  const [flag, setFlag] = useState(false);
  const [email, setEmail] = useState();
  const [business, setBusiness] = useState();
  const [client, setClient] = useState();
  const [release, setRelease] = useState();
  const [ReleaseId, setReleaseId] = useState();
  const [ClientId, setClientId] = useState();

  // useFetch
  const { insertSubject, updateSubject } = useFetchSubject();
  const { user, userTarget } = useUserContext();

  const createSubject = () => {
    const newSubject = {
      client: ClientId,
      release_id: ReleaseId,
      subject_title: subject,
      subject_text: description,
    };

    if (ClientId && release && subject && description) {
      insertSubject(newSubject, userTarget.id);
      loadData();
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
      setClientId(selectedSubject.id);
      setEmail(selectedSubject.email);
      setBusiness(selectedSubject.textBusiness);
      setReleaseId(selectedSubject.release_id);
      setRelease(selectedSubject.textRelease);
      setDescription(selectedSubject.subject_text);
    }
  }, [selectedClient]);

  const activeClients = clientList.filter(
    (client) =>
      client.status === "Active" /*&& client.user_id === userTarget.id*/
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

            <DivDescription>
              <Label>
                Description
                <TextArea
                  widthInput={"98% !important"}
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
