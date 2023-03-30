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
import subjectsList from "../../../context/ClientContext";
import { useSubjectContext } from "../../../hook/useSubjectContent";

const EditSubject = ({ title }) => {
  const { setModalDetails, setModalEdit } = useSubjectContext();

  const CloseModal = () => {
    setModalDetails(true);
    setModalEdit(false);
  };

  //const saveModal = () => {
  // setModal(false);
  //console.log(name);
  //console.log(email);
  //console.log(customer);
  //console.log(business);
  //console.log(role);
  // };

  const role = [
    { id: 1, value: "Teach Lead", label: "Tech Lead" },
    { id: 2, value: "Scrum Master", label: "Scrum Master" },
    { id: 3, value: "Product Owner", label: "Product Owner" },
    { id: 4, value: "Project Manager", label: "Project Manager" },
    { id: 5, value: "Analyst DevOps", label: "Analyst DeveOps" },
  ];

  const statusClient = [
    { id: 1, value: "Progress", label: "Progress" },
    { id: 2, value: "Finished", label: "Finished" },
    { id: 3, value: "Canceld", label: "Canceld" },
  ];

  const [selectedClient, setSelectedClient] = useState(null);

  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [customer, setCustomer] = useState("");
  const [business, setBusiness] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [client, setClient] = useState("");
  const [status, setStatus] = useState("");
  const [flag, setFlag] = useState(false);
  const [release, setRelease] = useState();

  useEffect(() => {
    if (selectedClient) {
      const selectedSubject = subjectsList.find(
        (subject) => subject.client === selectedClient
      );
      setEmail(selectedSubject.email);
      setBusiness(selectedSubject.textBusiness);
      setRelease(selectedSubject.textRelease);
    }
  }, [selectedClient]);

  const activeClients = subjectsList.filter(
    (subject) => subject.status === "Active"
  );

  const optionsClient = activeClients.map((subject) => {
    return {
      value: subject.client,
      label: subject.client,
      email: subject.email,
      business: subject.textBusiness,
      release: subject.textRelease,
    };
  });

  const handleClientChange = (selectedClient) => {
    setSelectedClient(selectedClient.value);
  };

  return (
    <>
      <ContainerCentral>
        <Container>
          <PositionTitle>
            <H1>Edit Subject</H1>
          </PositionTitle>

          <Form>
            <DivName>
              <Label>
                Client Name
                <SingleSelect
                  set={(client) => setSelectedClient(client)}
                  onChange={handleClientChange}
                  placeholder={flag && !client ? "" : ""}
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
                  widthInput={"90% !important"}
                  value={business}
                  name={business}
                  disabled={selectedClient}
                />
              </Label>

              <Label>
                ReleaseTrain
                <Input
                  widthInput={"100% !important"}
                  value={release}
                  onChange={(e) => setRelease(e.target.value)}
                  disabled={selectedClient}
                />
              </Label>
            </DivBusiness>

            <DivEmail>
              <Label>
                Email
                <Input
                  widthInput={"100% !important"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={selectedClient}
                />
              </Label>
            </DivEmail>

            <DivSubject>
              <Label>
                Subject
                <Input
                  widthInput={"100% !important"}
                  name={subject}
                  set={(subject) => setSubject(subject)}
                  onChange={(event) => setSubject(event.target.value)}
                  required
                />
              </Label>
            </DivSubject>

            <DivStatus>
              <SingleSelect
                set={(status) => setStatus(status)}
                label={"Status"}
                onChange={(event) => setStatus(event.target.value)}
                placeholder={flag && !status ? "" : ""}
                sizeSingle={"100%"}
                sizeMenu={"100%"}
                options={statusClient}
              />
            </DivStatus>

            <DivDescription>
              <Label>
                Description
                <TextArea
                  widthInput={"100% !important"}
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
            <ClickButton>
              <ButtonDefault
                type={"userSave"}
                weightFont={"500"}
                sizeFont={"1rem"}
                name={"Save"}
              />
            </ClickButton>

            <PositionButtonCancel onClick={CloseModal}>
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

export default EditSubject;
