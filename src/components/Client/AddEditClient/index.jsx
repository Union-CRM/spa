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

const AddEditClient = (props) => {
  const {
    client: clientList,
    setClient: setClientList,
    loadData,
  } = useClientContext();
  const { user } = useUserContext();
  const [clientId, setClientId] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [customer, setCustomer] = useState({});
  const [business, setBusiness] = useState("");
  const [role, setRole] = useState({});
  const [status, setStatus] = useState({ value: "Active" });
  const { releaseList } = useFetchRelease("release");
  const { customerList } = useFetchCustomer("Customer");
  const { roleList } = useFetchRole("Role");
  const { tagList } = useFetchTag("Tag");
  const [releaseObj, setReleaseObj] = useState({
    release_name: "",
    business_name: "",
  });
  const [tags, setTags] = useState([]);
  const { insertClient, updateClient } = useFetchClient();
  const [flag, setFlag] = useState(false);
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

  useEffect(() => {
    if (props.title === "Edit Client") {
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
      const client = clientList.filter((item) => item.id === props.id)[0];
      setClientId(client.id);
      setName(client.client);
      setStatus(client.status);
      setEmail(client.email);
      setReleaseObj({
        id: client.release_id,
        label: client.textRelease,
        business_id: client.business_id,
        business_name: client.textBusiness,
      });
      setBusiness(client.textBusiness);
      setCustomer({ id: client.customer_id, label: client.textCustomer });
      setRole({ id: client.role_id, label: client.textRole });
      setTags(
        client.tags.map((item) => ({
          value: item.value,
          label: item.label,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        }))
      );
    }
  }, []);

  const createClient = () => {
    const newClient = {
      id: getId(),
      status: status,
      email: email,
      client: name,
      role_id: role.id,
      textRole: role.label,
      customer_id: customer.id,
      textCustomer: customer.label,
      business_id: releaseObj.business_id,
      textBusiness: releaseObj.business_name,
      release_id: releaseObj.id,
      textRelease: releaseObj.release_label,
      tags: tags,
      user_id: user.id,
    };

    if (name && email && role.id && customer.id && releaseObj.id) {
      insertClient(newClient);
      setModal(false);
    } else {
      setFlag(true);
    }
  };

  const editClient = () => {
    const newClient = {
      id: clientId,
      email: email,
      status: status,
      client: name,
      role_id: role.id,
      customer_id: customer.id,
      business_id: releaseObj.business_id,
      release_id: releaseObj.release_id,
      tags: tags,
      user_id: user.id,
    };

    if (name && email && role.id && customer.id && releaseObj.id) {
      updateClient(clientId, newClient);
      setModal(false);
    } else {
      setFlag(true);
    }
  };

  const handleSelectRelease = (release_id) => {
    console.log(release_id);
    setReleaseObj(releaseList.filter((item) => item.id === release_id)[0]);
  };

  const handleSelectCustomer = (customer_id) => {
    setCustomer(customerList.filter((c) => c.id === customer_id)[0]);
  };

  const handleSelectRole = (role_id) => {
    setRole(roleList.filter((c) => c.id === role_id)[0]);
  };

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
                sizeSingle={"100%"}
                required
                sizeMenu={"100%"}
                options={customerList ? customerList : []}
              />
            </DivCustomer>

            <DivRelease>
              <SingleSelect
                key="3"
                set={(release_id) => handleSelectRelease(release_id)}
                label={"Release Train"}
                value={releaseObj.label}
                placeholder={flag && !releaseObj.id ? "Required field" : ""}
                sizeSingle={"100%"}
                required
                sizeMenu={"100%"}
                options={releaseList ? releaseList : []}
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
                sizeSingle={"40%"}
                required
                sizeMenu={"40%"}
                options={tagList ? tagList : []}
              />
            </DivTag>

            <DivStatus>
              {true && props.title === "Edit Client" && (
                <SingleSelect
                  set={(status) => setStatus(status)}
                  label={"Status"}
                  value={status}
                  placeholder={flag && !status ? "Required field" : ""}
                  sizeSingle={"40%"}
                  required
                  sizeMenu={"40%"}
                  options={status_mok}
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

export default AddEditClient;

const status_mok = [
  { id: 1, value: "Active", label: "Active" },
  { id: 2, value: "Inactive", label: "Inactive" },
];
