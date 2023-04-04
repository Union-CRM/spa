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
} from "./styles" ;

import SingleSelect from "../../Geral/Input/SingleSelect";
import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import { TagComponent } from "../../Geral/TagComponent";
import { useClientContext } from "../../../hook/useClientContent";
import {useFetchRelease} from "../../../hook/useFetchRelease";
import {useFetchCustomer} from "../../../hook/useFetchCustomer"
import {useFetchClient} from "../../../hook/useFetchClient"
import { useFetchRole } from "../../../hook/useFetchRole";
import { useFetchTag } from "../../../hook/useFetchTag";

const AddEditClient = (props) => {
  const { client: clientList, setClient: setClientList } = useClientContext();

  const [clientId,setClientId]=useState()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [customer, setCustomer] = useState({});
  const [business, setBusiness] = useState("");
  const [role, setRole] = useState({});
  const [status, setStatus] = useState();
  const {releaseList} =useFetchRelease("release");
  const {customerList} = useFetchCustomer("Customer");
  const {roleList} = useFetchRole("Role");
  const {tagList} = useFetchTag("Tag")
  const [releaseObj, setReleaseObj]=  useState({release_name:"",business_name:""});
  const [tags, setTags] = useState([]);
  const {insertClient,updateClient}= useFetchClient();
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
      const colors=["#836FFF","#00BFFF","#7FFFD4","#00FA9A","#00FF00",
      "#ADFF2F","#BDB76B","#FFDEAD","#DEB887","#9370DB","#EE82EE",
      "#FFB6C1","#F08080","#FA8072","#FFA07A","#FFFF00","#7B68EE","#BC8F8F"]
      const client = clientList.filter((item) => item.id === props.id)[0];
      setClientId(client.id)
      setName(client.client);
      setStatus(client.status);
      setEmail(client.email)
      setReleaseObj({
        id: client.release_id,
        label: client.textRelease,
        business_id:  client.business_id,
        business_name:  client.textBusiness
      })
      setBusiness(client.textBusiness);
      setCustomer({id:client.customer_id,label:client.textCustomer});
      setRole({id:client.role_id,label:client.textRole});
      setTags(client.tags.map((item)=>({value:item.value,label:item.label,color:colors[Math.floor(Math.random() * (colors.length-1))]})));
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
      business_id:releaseObj.business_id,
      textBusiness: releaseObj.business_name,
      release_id: releaseObj.id,
      textRelease: releaseObj.release_label,
      tags: tags,
    };

    if (name && email && role.id && customer.id && releaseObj.id) {
      setClientList([ ...clientList,newClient]);
      insertClient(newClient);
      setModal(false);
    } else {
      setFlag(true);
    }
  };


  const editClient = () => {
    const newClient = {
      id:clientId,
      email: email,
      client: name,
      role_id: role.id,
      customer_id: customer.id,
      business_id:releaseObj.business_id,
      release_id: releaseObj.release_id,
      tags: tags,
    };
    
    if (name && email && role.id && customer.id && releaseObj.id) {
      const noId = clientList.filter((item) => item.id !== id);
      setClientList([...noId, newClient]);
      updateClient(clientId,newClient);
      setModal(false);
    } else {
      setFlag(true);
    }
  };


  const handleSelectRelease=(release_id)=>{ 
    setReleaseObj(releaseList.filter((item)=>item.id===release_id)[0])  
  }

  const handleSelectCustomer=(customer_id)=>{
      setCustomer(customerList.filter((c)=>c.id===customer_id)[0])     
  }

  const handleSelectRole=(role_id)=>{
    setRole(roleList.filter((c)=>c.id===role_id)[0])     
  }

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
                key="1"
                set={(role) => handleSelectRole(role)}
                placeholder={flag && !role.id ? "Required field" : ""}
                name={role}
                value={role.label}
                required
                label={"Role"}
                sizeSingle={"100%"}
                sizeMenu={"100%"}
                options={roleList ? roleList:[]}
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
                options={customerList ? customerList:[]}
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
                options={releaseList ? releaseList:[]}
              />
            </DivRelease>
            
            <DivBusiness>
              <Label>
                Business
                <Input
                  disabled
                  widthInput={"100% !important"}
                  value={releaseObj.business_name}
                  placeholder={flag && !releaseObj.business ? "Required field" : ""}
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
                options={tagList ? tagList:release_mok}
              />
            </DivTag>

            <DivStatus>
              {false && <SingleSelect
                set={(status) => setStatus(status)}
                label={"Status"}
                value={status}
                placeholder={flag && !status ? "Required field" : ""}
                sizeSingle={"40%"}
                required
                sizeMenu={"40%"}
                options={status_mok}
              />}
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


const release_option=[
  {
    release_id: 1,
    release_name: "Pagamento Cartão", 
    business_id: 1,
    business_name: "Infraestrutura e Operações TI" 
  },{
    
    release_id: 2,
    release_name: "Experiencia Digital", 
    business_id: 1,
    business_name: "Infraestrutura e Operações TI"
  },{
        
    release_id: 3,
    release_name: "Inteligencia Comercial", 
    business_id: 1,
    business_name: "Infraestrutura e Operações TI"
  },
]

const release_mok_2=[
  {
    id:1, release_name:"Pagamento Cartão",
  }
]

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
