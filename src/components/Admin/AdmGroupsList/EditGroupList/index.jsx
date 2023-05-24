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
import { attachUser, detachUser } from "../../../../api/routesAPI";


const EditGroupList = (props) => {
  const [flag, setFlag] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [users, setUserGroup] = useState([]);
  const [customer, setCustomer] = useState({});
  const [customer_id, setCustomerId] = useState();
  const { loadCustomerOptions } = useFetchCustomer();
  const [customerList,setCustomerList] = useState([])
  const {insertGroup, updateGroup, attachUser, detachUser,} = useFetchAdmGroupList();
  const { group: groupList} = useGroupListContext();
  const {  setInfoGroup, idEdit, setModalEditGroup, setModalInfo, teamMembers } = useGroupListContext();
  const { toggleState, setToggleState, loadData} = useGroupListContext();
  const [userOptions, setUserOptions] = useState([]);
  const{userNotin: usersNotin, userListSub: userSub} = useFetchUsersNotin();

  const {  id, setModal } = props;
  const {user,usersGlobal: usersList} = useUserContext();
  //const [userGroup, setUserGroup] = useState([]);
  
  const{loadUserSub,loadUserNotin} = useFetchUsersNotin()
  useEffect(()=>{
    //loadUserNotin()
    loadUserSub()
  }, [])
 
  //const usersList = userSub//.concat(usersNotin)
  
  useEffect(() => {
    if (usersList) {
      setUserOptions(
        usersList
          .map((c) => ({ id: c.id, value: c.id, label: c.name }))
      );
    }
  }, [usersNotin, userSub]);


    useEffect(() =>{
      setCustomerList(loadCustomerOptions())
    }, [])

    const handleSelectCustomer = (cs) => {
      setCustomer(customerList.filter((c) => c.id === cs)[0]);
    };

    // Edit GROUP //
 
   const editGroup = () => {
        const newGroup = {
          group_name: groupName,
          customer: customer.id,
          user:users.map((g) => ({ id: g.value })), 
        };
        if (groupName && customer && users) {
          updateGroup(newGroup, idEdit) 
          setToggleState(0);
          setModalInfo(true);
          setModalEditGroup(false);
        }else {
          setFlag(true);
        }
    };

      useEffect(() => {
      if (props.title === "Edit Group") {
         //const group = groupList.filter((item) => item.id === props.id)[0];
        const group = groupList.filter((item) => item.id === idEdit)[0]
        setGroupName(group.group_name)
        setCustomer({ id: group.customer_id, label: group.textCustomer })
        setUserGroup(
          teamMembers.map((item) => ({
            value: item.user_id,
            label: item.user_name,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
          })) 
        )     
      }
    }, [id]);
  
    const handleSubmit = () => {
        if (props.title === "Edit Group") {
            editGroup();
       } 
      };
    
        const closeModal = () => {
            setModalEditGroup(false);
            setModalInfo(true);
            setToggleState(0);
          };
    
          
  return (
    <>
      <ContainerCentral>
        <Container>
          <PositionTitle>
            <H1>{props.title}</H1>
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
                set={(users) => setUserGroup(users)} /////
                options={userOptions}
                tags={users}
                label={"Users"}
                indicator={"guest"}
                value={users.label}
              />

              {/*<UsersComponents
                set={(users) => setUsers(users)}
                options={userOptions}
                label={"Users"}
                tags={users}
                indicator={"guest"}
                value={users.label}
  />*/}

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

export default EditGroupList;

const status_mok = [
  { id: 1, value: "Active", label: "Active" },
  { id: 2, value: "Inactive", label: "Inactive" },
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