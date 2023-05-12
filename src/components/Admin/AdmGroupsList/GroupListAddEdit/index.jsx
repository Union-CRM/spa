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
  DivCustomer,
  DivUser,
  DivButton,
  ClickButton,
  PositionButtonCancel,
} from "./styles";

import ButtonDefault from "../../../../assets/Buttons/ButtonDefault";
import { UsersComponents } from "../UsersComponents";
import SingleSelect from "../../../Geral/Input/SingleSelect";
import { useFetchCustomer } from "../../../../hook/useFetchCustomer";
import {useCustomerContext} from "../../../../hook/useCustomerContext";
import { useFetchAdmGroupList } from "../../../../hook/useFetchAdmGroupList";
import {useGroupListContext} from "../../../../hook/useGroupListContext";
import { useFetchUsersNotin } from "../../../../hook/useFetchUsersNotin";
import { useUserContext } from "../../../../hook/useUserContext";


const AddEditGroup = (props) => {
  const [flag, setFlag] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [users, setUsers] = useState([]);
  const [customer, setCustomer] = useState({});
  const [customer_id, setCustomerId] = useState();
  const { loadCustomerOptions } = useFetchCustomer();
  const [customerList,setCustomerList] = useState([])
  const {insertGroup, updateGroup} = useFetchAdmGroupList();
  const { group: groupList} = useGroupListContext();
  const {  infoGroup, setInfoGroup, idEdit } = useGroupListContext();
  const [userOptions, setUserOptions] = useState([]);
  const{userNotin: usersNotin, userListSub: userSub} = useFetchUsersNotin();
  const { setModal, id } = props;
  const {user} = useUserContext();
  
  
  const{loadUserSub,loadUserNotin} = useFetchUsersNotin()
  useEffect(()=>{
   
    loadUserNotin()
    loadUserSub()
  }, [])
 
  const usersList = userSub.concat(usersNotin)

  useEffect(() => {
    if (usersList) {
      setUserOptions(
        usersList
          .map((c) => ({ id: c.id, value: c.id, label: c.name }))
      );
    }
  }, [usersNotin, userSub]);


  const handleSubmit = () => {
    if (props.title === "Create Group") {
      createGroup();
    } else {
      editGroup();
    }
  };

    const closeModal = () => {
        setModal(false);
        setInfoGroup(true);
      };
    
    useEffect(() =>{
      setCustomerList(loadCustomerOptions())
    }, [])

  
    const handleSelectCustomer = (cs) => {
      setCustomer(customerList.filter((c) => cs.id === customer_id)[0]);
    };
    console.log(customerList)

  
    const createGroup = () => {
      console.log(users);
      const newGroup = {
        group_name: groupName,
        customer_id: customer.id,
        users:{users_id:[...(users.map((g) => ({ id: g.value }))), {id:user.id}]},
       
      };
      console.log(newGroup)
      if (groupName && customer.id && users) {
        insertGroup(newGroup);
        setModal(false);
      } else {
        setFlag(true);
      }
    };

    const editGroup = () => {
        const newGroup = {
          group_name: groupName,
          customer_id: customer.id,
          users:{users_id:[...(users.map((g) => ({ id: g.value }))), {id:user.id}]},
          
        };
        if (groupName) {
          /*updateGroup(newGroup)*/
          setModal(false);
        } else {
          setFlag(true);
          }
        };
     
  

    useEffect(() => {
      
      console.log(idEdit)
      if (props.title === "Edit Group") {
        const group = groupList.filter((item) => item.id === idEdit)[0];
        setGroupName(group.group_name)
        setCustomer({ id: group.customer_id, label: group.textCustomer })
        setUsers({id: group.user_id, label: group.user_name})
        
        
      }
    }, [id]);
  

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
                Name Group
                <Input
                  widthInput={"98% !important"}
                  placeholder={flag && !groupName ? "Required field" : ""}
                  value={groupName}
                  required
                  onChange={(event) => setGroupName(event.target.value)}
                />
              </Label>
            </DivName>

      
              <DivCustomer>

                <SingleSelect
                 key="2"
                 set={(cs) => handleSelectCustomer(cs)}
                 label={"Customer"}
                 value={customer.label}
                 placeholder={flag && !customer.label ? "Required field" : ""}
                 sizeSingle={"100%"}
                 required
                 sizeMenu={"100%"}
                 options={customerList}
                />
  
              </DivCustomer>


            <DivUser>
            <UsersComponents 
            set={(users) => setUsers(users)}
            options={userOptions}
            label={"Users"}
            tags={users}
            indicator={"guest"}
            value={users.label}
             />
              </DivUser>
          </Form>{" "}
          <DivButton>
          <ClickButton onClick={handleSubmit}>
              <ButtonDefault
                type="adminSave"
                weightFont={"500"}
                sizeFont={"18px"}
                name={"Save"}
                
              /> </ClickButton>
         
            <PositionButtonCancel onClick={closeModal}>
              <ButtonDefault type="cancelModalAdmin" name={"Cancel"} />
            </PositionButtonCancel>
          </DivButton>
        </Container>
      </ContainerCentral>
    </>
  );
};

export default AddEditGroup;

const status_mok = [
  { id: 1, value: "Active", label: "Active" },
  { id: 2, value: "Inactive", label: "Inactive" },
];
 