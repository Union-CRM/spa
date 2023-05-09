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
import { useFetchAdmGroupList } from "../../../../hook/useFetchAdmGroupList";
import {useGroupListContext} from "../../../../hook/useGroupListContext";
import { useFetchUsersNotin } from "../../../../hook/useFetchUsersNotin";


const AddEditGroup = (props) => {

  
    const { setModal, id } = props;

    const closeModal = () => {
        setModal(false);
        setInfoGroup(true);
      };
    
      const [flag, setFlag] = useState(false);

      const [groupName, setGroupName] = useState();
      const [users, setUsers] = useState([]);
      const [groupId, setGroupId] = useState();
      const [customer, setCustomer] = useState({});
      const { customerList } = useFetchCustomer("Customer");
      const [userOptions, setUserOptions] = useState([]);
      
    
      
      const handleSelectCustomer = (customer_id) => {
        setCustomer(customerList.filter((c) => c.id === customer_id)[0]);
      };

      const handleSelectUsers = (users) => {
        setUsers(groupList.filter((c) => c.id === users.id)[0]);
      };
  
    
    const {insertGroup, updateGroup} = useFetchAdmGroupList();
    const { group: groupList} = useGroupListContext();
    const {  infoGroup, setInfoGroup } = useGroupListContext();

    
    const group = groupList.filter((item) => item.id === props.id)[0];
    
     const createGroup = () => {
      console.log(users);
      const newGroup = {
        group_name: groupName,
        customer_id: customer.id,
        users: users.map((g) => ({ id: g.value })),
      };
      console.log(newGroup);
      if (groupName && customer.id && users) {
        insertGroup(newGroup);
        setModal(false);
      } else {
        setFlag(true);
      }
      
    };

    // Edit GROUP //
   

    useEffect(() => {
      console.log(props.id)
      if (props.title === "Edit Group") {
        const group = groupList.filter((item) => item.id === props.id)[0];

        setGroupName(group.group_name);
        setCustomer({ id: group.customer_id, label: group.textCustomer });
        setUsers(group.users)
      }

     
    }, [id]);
    
      const editGroup = () => {
        const newGroup = {
        group_id: groupId,
        group_name: groupName,
        customer_id: customer.id,
        users: users.map((g) => ({ id: g.value })),  
        };
    
        if (groupName && customer.id && users) {
          updateGroup(groupId, newGroup);
          setModal(false);
        } else {
          setFlag(true);
        }
      };
    

    const handleSubmit = () => {
      if (props.title === "Create Group") {
        createGroup();
      } else {
        editGroup();
      }
    };
   

    // Users List //
    const{userNotin: usersNotin, userListSub: userSub} = useFetchUsersNotin();
  
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
                 set={(customer_id) => handleSelectCustomer(customer_id)}
                 label={"Customer"}
                 value={customer.label}
                 placeholder={flag && !customer.label ? "Required field" : ""}
                 sizeSingle={"100%"}
                 required
                 sizeMenu={"100%"}
                 options={customerList ? customerList : []}

                />
  
              </DivCustomer>

            <DivUser>
            <UsersComponents 
            set={(users) => handleSelectCustomer(users)}
            /*set={(users) => setUsers(users)}*/
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
