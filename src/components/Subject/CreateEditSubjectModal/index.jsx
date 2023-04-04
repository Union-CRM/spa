import React from "react";
import {
  Container,
  PositionButtonSave,
  PositionButtonCancel,
  DivFather,
  PositionTitle,
} from "./styles";
import InputWithName from "../../Geral/Input/InputWithName";
import SingleSelect from "../../Geral/Input/SingleSelect";
import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import clientList from "../../../context/ClientContext";
import subjectList from "../../../context/SubjectContext";
import { useClientContext } from "../../../hook/useClientContent";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import Headline from "../../../assets/FontSystem/Headline";
import InputText from "../../Geral/Input/InputText";

const values = [
  { value: 1, label: "Finanças Crédito e Risco Capital" },
  { value: 2, label: "Cartões, Négócios e Financeiro" },
  { value: 3, label: "Cash Management" },
  { value: 4, label: "Crédito Consignado" },
  { value: 5, label: "Consórcio" },
];

const valuesRealese = [
  { value: 1, label: "Inteligência Comercial" },
  { value: 2, label: "Solucões Vic e Cartões" },
  { value: 3, label: "Receber e Arrecadar PJ" },
  { value: 4, label: "Proteção e Comunicação com o Cliente" },
  { value: 5, label: "Experiência Digital" },
];


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


  const [userChoice, setUserChoice] = useState("");

  return (
    <Container>
      <DivFather>
        <PositionTitle>
          <Headline type={"Headline3"} name={title} />
        </PositionTitle>

        <SingleSelect
          label={"Release Train"}
          options={valuesRealese}
          sizeSingle={"82%"}
          sizeMenu={"82%"}
        />

        <SingleSelect
          label={"Business"}
          options={values}
          sizeMenu={"82%"}
          sizeSingle={"82%"}
        />

        <InputWithName label={"Client Name"} widthInput={"80%"} />

        <InputWithName label={"Email"} widthInput={"80%"} />

        <InputWithName label={"Subject"} widthInput={"80%"} />

        <InputText label={"Description"} rows={6} widthText={"80%"} />

        <PositionButtonSave onClick={saveModal}>
          <ButtonDefault type={"userSave"} name={"Save"} />
        </PositionButtonSave>
        <PositionButtonCancel onClick={closeModal}>
          <ButtonDefault type={"userCancel"} name={"Cancel"} />
        </PositionButtonCancel>
      </DivFather>
    </Container>

  );
};

export default Subject;

const manager_mok = [
  { id: 1, value: "Helio Endo", label: "Helio Endo" },
  { id: 2, value: "Felipe Flaibam", label: "Felipe Flaibam" },
  { id: 3, value: "Camila Gomes", label: "Camila Gomes" },
];
