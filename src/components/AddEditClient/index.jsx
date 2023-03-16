import React, { useState, useEffect, useRef } from "react";

import {
  ContainerCentral,
  Container,
  PositionTitle,
  H1,
  Input,
  Form,
  Label,
  DivName,
  DivEmail,
  DivBusiness,
  DivCustomer,
  DivRelease,
  DivTag,
  DivStatus,
  DivButton,
  ClickButton,
  PositionButtonCancel,
} from "./styles";
import SingleSelect from "../Input/SingleSelect";
import ButtonDefault from "../../assets/Buttons/ButtonDefault";
import { TagComponent } from "../TagComponent";

import { useClientContext } from "../../hook/useClientContent";

const AddEditClient = (props) => {
  const { setModal, id } = props;

  const closeModal = () => {
    setModal(false);
  };

  const handleSubmit = () => {
    if (props.title === "Edit Client") {
      editClient();
    } else {
      createClient();
    }
  };

  function getId() {
    let lastId = 1;

    clientList.map((c) => {
      lastId = c.id > lastId ? c.id : lastId;
    });

    return lastId + 1;
  }

  const { client: clientList, setClient: setClientList } = useClientContext();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [customer, setCustomer] = useState();
  const [business, setBusiness] = useState();
  const [role, setRole] = useState();
  const [status, setStatus] = useState();
  const [release, setRelease] = useState();
  const [tags, setTags] = useState([]);

  const [flag, setFlag] = useState(false);

  //console.log(tags);
  useEffect(() => {
    if (props.title === "Edit Client") {
      const client = clientList.filter((item) => item.id === props.id)[0];
      setName(client.client);
      setStatus(client.status);
      setEmail(client.email);
      setBusiness(client.textBusiness);
      setCustomer(client.textCustomer);
      setRole(client.textRole);
      setRelease(client.textRelease);
      setTags(client.tags);
    }
  }, [id]);

  const createClient = () => {
    const newClient = {
      id: getId(),
      status: status,
      email: email,
      client: name,
      textRole: role,
      textCustomer: customer,
      textBusiness: business,
      textRelease: release,
      tags: tags,
    };

    if (name && email && role && customer && business && release) {
      setClientList([...clientList, newClient]);
      setModal(false);
    } else {
      setFlag(true);
    }
  };

  const editClient = () => {
    const newClient = {
      id: id,
      status: status,
      email: email,
      client: name,
      textRole: role,
      textCustomer: customer,
      textBusiness: business,
      textRelease: release,
      tags: tags,
    };
    if (name && email && role && customer && business && release) {
      const noId = clientList.filter((item) => item.id !== id);
      setClientList([...noId, newClient]);
      setModal(false);
    } else {
      setFlag(true);
    }
  };

  const [userChoice, setUserChoice] = useState("");

  //console.log(userChoice);

  return (
    <>
      <ContainerCentral>
        <Container>
          <PositionTitle>
            <H1>{props.title} </H1>

            {/*<DivClose>
              <ClickButton onClick={closeModal}>
              <Close>Close</Close>
              </ClickButton>
            </DivClose>*/}
          </PositionTitle>
          <Form>
            <DivName>
              <Label>
                Client Name
                <Input
                  widthInput={"100% !important"}
                  placeholder={flag && !name ? "Required field" : ""}
                  value={name}
                  required
                  onChange={(event) => setName(event.target.value)}
                />
              </Label>
            </DivName>

            <DivEmail>
              <Label>
                Email
                <Input
                  widthInput={"90% !important"}
                  name={email}
                  value={email}
                  placeholder={flag && !email ? "Required field" : ""}
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Label>

              <SingleSelect
                set={(role) => setRole(role)}
                placeholder={flag && !role ? "Required field" : ""}
                name={role}
                value={role}
                required
                label={"Role"}
                sizeSingle={"100%"}
                sizeMenu={"100%"}
                options={role_mok}
                onChange={(choice) => setUserChoice(choice)}
              />
            </DivEmail>

            <DivCustomer>
              <Label>
                Customer
                <Input
                  widthInput={"100% !important"}
                  name={customer}
                  value={customer}
                  placeholder={flag && !customer ? "Required field" : ""}
                  required
                  onChange={(event) => setCustomer(event.target.value)}
                />
              </Label>
            </DivCustomer>

            <DivBusiness>
              <Label>
                Business
                <Input
                  widthInput={"100% !important"}
                  value={business}
                  placeholder={flag && !business ? "Required field" : ""}
                  required
                  name={business}
                  onChange={(event) => setBusiness(event.target.value)}
                />
              </Label>
            </DivBusiness>

            <DivRelease>
              <SingleSelect
                set={(release) => setRelease(release)}
                label={"Release Train"}
                value={release}
                placeholder={flag && !release ? "Required field" : ""}
                sizeSingle={"100%"}
                required
                sizeMenu={"100%"}
                options={release_mok}
                onChange={(choice) => setUserChoice(choice)}
              />
            </DivRelease>

            <DivTag>
              <TagComponent
                set={(tags) => setTags(tags)}
                label={"Tags"}
                placeholder={flag && !tags ? "Required field" : ""}
                sizeSingle={"40%"}
                required
                sizeMenu={"40%"}
                options={options}
              />
            </DivTag>

            <DivStatus>
              <SingleSelect
                set={(status) => setStatus(status)}
                label={"Status"}
                value={status}
                placeholder={flag && !status ? "Required field" : ""}
                sizeSingle={"40%"}
                required
                sizeMenu={"40%"}
                options={status_mok}
                onChange={(choice) => setUserChoice(choice)}
              />
            </DivStatus>
          </Form>{" "}
          <DivButton>
            <ClickButton onClick={handleSubmit}>
              <ButtonDefault
                type="userSave"
                weightFont={"500"}
                sizeFont={"18px"}
                name={"Save"}
              />
            </ClickButton>
            <PositionButtonCancel onClick={closeModal}>
              <ButtonDefault type="userCancel" name={"Cancel"} />
            </PositionButtonCancel>
          </DivButton>
        </Container>
      </ContainerCentral>
    </>
  );
};

export default AddEditClient;

const options = [
  { value: 1, label: "Online Banking", color: "#008B8B" },
  { value: 2, label: "Cyber Security", color: "#ACD4FF" },
  { value: 3, label: "Issue of Credit Cards", color: "#FFE60082" },
  { value: 4, label: "Security & Identification", color: "#FFB2D1" },
  { value: 5, label: "Internet of Things (IoT)", color: "#ACE1AF" },
  { value: 6, label: "Azure", color: "#3ddc97" },
  { value: 7, label: "Salesforce", color: "#DE3163" },
  { value: 8, label: "AWS", color: "#ACD4FF" },
  { value: 9, label: "Google Cloud", color: "#fd5c63" },
  { value: 10, label: "Credit & Debit Cards", color: "#A3C1AD" },
  { value: 11, label: "Product design", color: "#7FFFD4" },
  { value: 12, label: "Demand Drafts", color: "#6CB4EE" },
];

const release_mok = [
  { id: 1, value: "Pagamento Cartão", label: "Pagamento Cartão" },
  { id: 2, value: "Experiencia Digital", label: "Experiência Digital" },
  { id: 3, value: "Inteligencia Comercial", label: "Inteligencia Comercial" },
  { id: 4, value: "Jornada do Cliente", label: "Jornada do Cliente" },
  { id: 5, value: "Dados Onboarding", label: "Dados Onboarding" },
];
const customers_mok = [
  { id: 1, value: "Itáu", label: "Itaú" },
  { id: 2, value: "Bradesco", label: "Bradesco" },
  { id: 3, value: "Santander", label: "Santander" },
  { id: 4, value: "Nubank", label: "Nubank" },
  { id: 5, value: "Banco do Brasil", label: "Banco do Brasil" },
];

const role_mok = [
  { id: 1, value: "Tech Lead", label: "Tech Lead" },
  { id: 2, value: "Scrum Master", label: "Scrum Master" },
  { id: 3, value: "Product Owner", label: "Product Owner" },
  { id: 4, value: "Project Manager", label: "Project Manager" },
  { id: 5, value: "Analyst DevOps", label: "Analyst DevOps" },
  { id: 6, value: "Software Engineer", label: "Software Engineer" },
  { id: 7, value: "Dev Front-End", label: "Dev Front-End" },
];

const status_mok = [
  { id: 1, value: "Active", label: "Active" },
  { id: 2, value: "Inactive", label: "Inactive" },
];
