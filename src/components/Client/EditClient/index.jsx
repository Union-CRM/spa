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

import SingleSelect from "../../Geral/Input/SingleSelect";
import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import { TagComponent } from "../../Geral/TagComponent";
import { useClientContext } from "../../../hook/useClientContent";
import { useUserContext } from "../../../hook/useUserContext";
import { useFetchRelease } from "../../../hook/useFetchRelease";
import { useFetchCustomer } from "../../../hook/useFetchCustomer";
import { useFetchClient } from "../../../hook/useFetchClient";
import { useFetchRole } from "../../../hook/useFetchRole";
import { useFetchTag } from "../../../hook/useFetchTag";
import { useFetchUser } from "../../../hook/useFetchUser";
import { useFetchUsersNotin } from "../../../hook/useFetchUsersNotin";
import { useReleaseContext } from "../../../hook/useReleaseContent";

const ModalClientEdit = (props) => {
  const {
    client: clientList,
    setClient: setClientList,
    loadData,
  } = useClientContext();

  const { user } = useUserContext();
  const [clientId, setClientId] = useState();


  const { setModalInfo, setId, modalEditClient, setModalEditClient,
  toggleState, setToggleState, idClient} = useClientContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [customer, setCustomer] = useState({});
  const [business, setBusiness] = useState("");
  const [role, setRole] = useState({});
  const [status, setStatus] = useState({ value: "Active" });
  const [users, setUsers] = useState([]);

  //const {userList} = useFetchUser("Users");

  const { release: releaseList } = useReleaseContext("release");

  const [customerList, setCustomerList] = useState([]);
  const { roleList } = useFetchRole("Role");
  const { tagList } = useFetchTag("Tag");
  const { usersGlobal } = useUserContext();
  const [releaseObj, setReleaseObj] = useState({
    release_name: "",
    business_name: "",
  });
  const [tags, setTags] = useState([]);
  const { insertClient, updateClient, updateStatusClient } = useFetchClient();
  const [flag, setFlag] = useState(false);
  const { setModal, id, title } = props;
  const { loadUsers } = useUserContext();
  const [releaseOptions, setReleaseOptions] = useState([]);
  const { loadCustomerOptions } = useFetchCustomer();
  useEffect(() => {
    setCustomerList(loadCustomerOptions());
  }, []);

  useEffect(() => {
    if (releaseList) {
      setReleaseOptions(
        releaseList.map((item) => ({
          id: item.id,
          value: item.id,
          label: item.name,
        }))
      );
    }
  }, [releaseList]);

  const closeModal = () => {
    setModalEditClient(false);
    setModalInfo(true);
    setToggleState(0);
  };

  const handleSubmit = () => {
    if (props.title === "Edit Client") {
      editClient();
    }
  };

  function getId() {
    let lastId = 1;

    clientList.map((c) => {
      lastId = c.id > lastId ? c.id : lastId;
    });

    return lastId + 1;
  }

  useEffect(() => {
    if (props.title === "Edit Client") {
      const client = clientList.filter((item) => item.id === props.id)[0];
      setClientId(client.id);
      setName(client.client);
      setStatus(client.status);
      setEmail(client.email);
      setReleaseObj({
        id: client.release_id,
        name: client.textRelease,
        business_id: client.business_id,
        business_name: client.textBusiness,
      });
      setBusiness(client.textBusiness);
      setCustomer({ id: client.customer_id, label: client.textCustomer });
      setRole({ id: client.role_id, label: client.textRole });
      setUsers({ id: client.user_id, label: client.user_name });
      setTags(
        client.tags.map((item) => ({
          value: item.value,
          label: item.label,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        }))
      );
    }
  }, [id]);

  const editClient = () => {
    const newClient = {
      id: clientId,
      email: email,
      status: status,
      client: name,
      role_id: role.id,
      customer_id: customer.id,
      business_id: releaseObj.business_id,
      release_id: releaseObj.id,
      textRelease: releaseObj.name,
      tags: tags,
      user_id: users.id,
    };

    
    if (name && email && status && role.id && customer.id && users && releaseObj.id) {

      if (status === "ATIVO") {
        updateStatusClient(clientId, newClient);
      } else if (status === "INATIVO") {
        updateStatusClient(clientId, newClient);
      }
      updateClient(clientId, newClient);
      setModalEditClient(false);
      setToggleState(0);
      setModalInfo(true);
    } else {
      setFlag(true);
    }
  };

  const handleSelectRelease = (release_id) => {
    setReleaseObj(releaseList.filter((item) => item.id === release_id)[0]);
  };

  const handleSelectCustomer = (customer_id) => {
    setCustomer(customerList.filter((c) => c.id === customer_id)[0]);
  };

  const handleSelectRole = (role_id) => {
    setRole(roleList.filter((c) => c.id === role_id)[0]);
  };

  const handleSelectUsers = (user_id) => {
    setUsers(optionsUser.filter((item) => item.id === user_id)[0]);
  };

  const optionsUser = usersGlobal.map((u) => {
    return {
      id: u.id,
      value: u.id,
      label: u.name,
    };
  });

  return (
    <>
      <ContainerCentral>
        <Container>
          <PositionTitle>
            <H1>{props.title} </H1>
          </PositionTitle>
          <Form>
            <DivName>
              <Label>
                Client Name
                <Input
                  widthInput={"98% !important"}
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
                  widthInput={"93% !important"}
                  name={email}
                  value={email}
                  placeholder={flag && !email ? "Required field" : ""}
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Label>

              <SingleSelect
                key="1"
                set={(role) => handleSelectRole(role)}
                placeholder={flag && !role.id ? "Required field" : ""}
                name={role}
                value={role.label}
                required
                label={"Role"}
                sizeSingle={"100%"}
                sizeMenu={"100%"}
                options={roleList ? roleList : []}
              />
            </DivEmail>

            <DivCustomer>
              <SingleSelect
                key="2"
                set={(customer_id) => handleSelectCustomer(customer_id)}
                label={"Customer"}
                value={customer.label}
                placeholder={flag && !customer.id ? "Required field" : ""}
                sizeSingle={"93%"}
                required
                sizeMenu={"93%"}
                options={customerList ? customerList : []}
              />

              <SingleSelect
                key="4"
                set={(us) => handleSelectUsers(us)}
                label={"Manager"}
                placeholder={flag && !user.id ? "Required field" : ""}
                value={users.label}
                sizeSingle={"100%"}
                sizeMenu={"100%"}
                options={optionsUser}
              />
            </DivCustomer>

            <DivRelease>
              <SingleSelect
                key="3"
                set={(release_id) => handleSelectRelease(release_id)}
                label={"Release Train"}
                value={releaseObj.name}
                placeholder={flag && !releaseObj.id ? "Required field" : ""}
                sizeSingle={"100%"}
                required
                sizeMenu={"100%"}
                options={releaseOptions}
              />
            </DivRelease>

            <DivBusiness>
              <Label>
                Business
                <Input
                  disabled
                  widthInput={"98% !important"}
                  value={releaseObj.business_name}
                  placeholder={
                    flag && !releaseObj.business ? "Required field" : ""
                  }
                  required
                  name={business}
                />
              </Label>
            </DivBusiness>

            <DivTag>
              <TagComponent
                set={(tags) => setTags(tags)}
                tags={tags}
                label={"Tags"}
                placeholder={flag && !tags ? "Required field" : ""}
                required
                sizeMenu={"37%"}
                width={"90%"}
                widths={"100%"}
                options={tagList ? tagList : []}
              />
            </DivTag>

            <DivStatus>
              {true && props.title === "Edit Client" && (
                <SingleSelect

                options={status_mok}
                onChange={(event) => setStatus(event.target.value)}
                set={(status) => setStatus(status)}
                value={status}
                  label={"Status"}
                  placeholder={flag && !status ? "Required field" : ""}
                  sizeSingle={"100%"}
                  sizeMenu={"100%"}
                  required
                />
              )}
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

export default ModalClientEdit;

const status_mok = [
  { id: 1, value: "ATIVO", label: "ATIVO" },
  { id: 2, value: "INATIVO", label: "INATIVO" },

];

const colors = [
  "#836FFF",
  "#00BFFF",
  "#7FFFD4",
  "#00FA9A",
  "#00FF00",
  "#ADFF2F",
  "#BDB76B",
  "#FFDEAD",
  "#DEB887",
  "#9370DB",
  "#EE82EE",
  "#FFB6C1",
  "#F08080",
  "#FA8072",
  "#FFA07A",
  "#FFFF00",
  "#7B68EE",
  "#BC8F8F",

];
