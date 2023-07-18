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
  const { client: clientList, setModalInfo,setModalCreateSubject,setToggleState } = useClientContext();
  const { updateSubject } = useFetchSubject();
  const { subjectFinished, subjectCanceld } = useFetchSubjectStatus();
  // CLOSE E SAVE ////////////
  
  const closeModal = () => {
    setModalInfo(true);
    setModalCreateSubject(false);
    setToggleState(1);
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

  const [selectedClient, setSelectedClient] = useState(null);
    /*
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
    */

  // PUXANDO OS CLIENTS DO CLIENT LIST //

  
  const handleSubmit = () => {
    if (props.title === "Create Subject") {
      createSubject();
      setModalSubject(false);
    }
  };


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
      setModalSubject(false);
    } else {
      setFlag(true);
    }
  };


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
                 
                  widthInput={"98% !important"}
                  options={optionsClient}
                  value={selectedClient}
                  placeholder={flag && !selectedClient ? "" : ""}
                />
              </Label>
            </DivName>

            <DivBusiness>
              <Label>
                Business
                <Input
                  
                  widthInput={"90% !important"}
                  backgroundInput={"#bd2a2a"}
                  value={business}
                  name={business}
                />
              </Label>

              <Label>
                ReleaseTrain
                <Input
                
                  widthInput={"98% !important"}
                  
                  value={release}
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
                name={"Save"}s
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