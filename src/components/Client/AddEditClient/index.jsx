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
import {useCustomerContext} from "../../../hook/useCustomerContext";
import { useReleaseContext } from "../../../hook/useReleaseContent";

const AddEditClient = (props) => {
  const { client: clientList, setClient: setClientList, updateStatusClient } = useClientContext();

  const [clientId,setClientId]=useState()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [customer, setCustomer] = useState({});
  const {user} = useUserContext();
  const [business, setBusiness] = useState("");
  const [role, setRole] = useState({});
  const [status, setStatus] = useState("");
  const { release: releaseList } = useReleaseContext("release");
  const { loadCustomerList} = useCustomerContext();
<<<<<<< Updated upstream
  const { customerList } = useFetchCustomer("Customer");
=======
  const { loadCustomerOptions } = useFetchCustomer();
  const [customerList,setCustomerList] = useState([])
>>>>>>> Stashed changes
  const { roleList } = useFetchRole("Role");
  const { tagList } = useFetchTag("Tag");
  const [releaseObj, setReleaseObj] = useState({
    release_name: "",
    business_name: "",
  });
  const [releaseOptions, setReleaseOptions] = useState([])

  
  const [tags, setTags] = useState([]);
  const {insertClient,updateClient}= useFetchClient();
  const [flag, setFlag] = useState(false);
  const { setModal, id } = props;

  useEffect(() =>{
    loadCustomerList()
  }, [])

  useEffect(() =>{

    if(releaseList){
    setReleaseOptions(
      releaseList.map((item) => ({
        id: item.id,
        value: item.id,
        label: item.name,
        //status: item.status,
      })))
      }
     
  },[releaseList])


  const closeModal = () => {
    setModal(false);
  };

  const handleSubmit = () => {
    if (props.title === "Create Client") {
      createClient();
    } else {
      
    }
  };

  function getId() {
    let lastId = 1;

    clientList.map((c) => {
      lastId = c.id > lastId ? c.id : lastId;
    });

    return lastId + 1;
  }


  const createClient = () => {
    const newClient = {
      client_email: email,
      client_name: name,
      client_role: role.id,
      status_description: status,
      customer_id: customer.id,
      business_id: parseInt(releaseObj.business_id),
      release_id: releaseObj.id,
      user_id: user.id,
      tags:tags.map((tag) => ({ tag_id: tag.value})),
    };
    console.log(newClient)
    if (name && email && role.id && customer.id && releaseObj.id ) {
      insertClient(newClient);
      setModal(false);

      /*if(createClient.status != client.status){
        updateStatusClient(client.id);
      }*/

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