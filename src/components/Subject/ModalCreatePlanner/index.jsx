import React, { useState, useEffect, useRef } from "react";
import {
  ContainerCentral,
  Container,
  ContainerChildren,
  Title,
  SubTitle,
  Input,
  Form,
  Label,
  DivHeader,
  DivDate,
  DivStart,
  DivFinish,
  DivGuest,
  DivButton,
  ClickButton,
  PositionButtonCancel,
} from "./styles";
import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import Clock from "../../Geral/Input/clock";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { GuestComponent } from "../../Geral/Input/GuestsComponent";
import { usePlannerContext } from "../../../hook/usePlannerContent";

const ModalCreatePlanner = (props) => {
  const { setModal, id } = props;

  const closeModal = () => {
    setModalDetails(true);
    setModalPlanner(false);
    setToggleState(2);
  };

  const { setToggleState } = useSubjectContext();

  const { setModalDetails } = useSubjectContext();

  const { setModalPlanner } = usePlannerContext();

  /*
  const handleSubmit = () => {
    if (props.title === "Planner") {
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
    if (props.title === "Planner") {
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
  };*/

  const [tags, setTags] = useState([]);

  const [flag, setFlag] = useState(false);

  const [userChoice, setUserChoice] = useState("");

  //console.log(userChoice);

  return (
    <>
      <ContainerCentral>
        <Container>
          <DivHeader>
            <Title>Create Planner</Title>

            <SubTitle>Apresentação Institucional TCS</SubTitle>
          </DivHeader>
          <ContainerChildren>
            <Form>
              <DivDate>
                <Label>
                  Date
                  <Input
                    type={"date"}
                    widthInput={"100% !important"}
                    value={new Date().toISOString().slice(0, 10)}
                    /*placeholder={flag && !name ? "Required field" : ""}
                    value={name}
                    required
                    onChange={(event) => setName(event.target.value)}*/
                  />
                </Label>
              </DivDate>

              <DivStart>
                <Label>
                  Start
                  <Clock widthClock={"100%"} />
                </Label>
              </DivStart>

              <DivFinish>
                <Label>
                  Finish
                  <Clock widthClock={"100%"} />
                </Label>
              </DivFinish>

              <DivGuest>
                <Label>Select Guest</Label>
                <GuestComponent
                  set={(tags) => setTags(tags)}
                  placeholder={flag && !tags ? "Required field" : ""}
                  sizeSingle={"60%"}
                  required
                  sizeMenu={"90%"}
                  options={options}
                  top={"240%"}
                  width={"230%"}
                  widths={"93%"}
                  height={"16.5vh"}
                />
              </DivGuest>
            </Form>{" "}
            <DivButton>
              <ClickButton>
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
          </ContainerChildren>
        </Container>
      </ContainerCentral>
    </>
  );
};

export default ModalCreatePlanner;

const options = [
  { value: 1, label: "Maycon Cabo", color: "#d9d9d9" },
  { value: 2, label: "Luana Nogueira", color: "#d9d9d9" },
  { value: 3, label: "Graziele Miranda", color: "#d9d9d9" },
  { value: 4, label: "João Pedro", color: "#d9d9d9" },
  { value: 5, label: "Felipe Flaibam", color: "#d9d9d9" },
  { value: 6, label: "Ariel Souza", color: "#d9d9d9" },
];
