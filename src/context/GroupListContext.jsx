import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../hook/useUserContext";

import { groupGetUser , countUserGroup, getUsersGroup} from "../api/routesAPI";

export const GroupListContext = createContext();

export const GroupListContextProvider = ({ children }) => {
  const [group, setGroup] = useState([{}]);
  const [idGroups, setIdGroups] = useState([{}]);
  const [team, setTeamList] = useState([{}]);
  const { user } = useUserContext();
  const [infoGroup, setInfoGroup] = useState(true);
  const [users, setUsers] = useState([]);
  const [toggleState, setToggleState] = useState(0);
  const [activeTab, setActiveTab] = useState(null);
  const [modal, setModal] = useState();
  const [id, setId] = useState(null);
  const [idEdit,setIdEdit] = useState();
  const [modalEditGroup, setModalEditGroup] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const [groupPage, setGroupPage] = useState(false);
  const [usersGroup, setUsersGroup] = useState([{}]);
  const [countGroups, setCountGroups] = useState([{}]);
  const [teamMembers, setTeamMembers] = useState([{}]);

  useEffect(() => {
    if (user.level > 1) {
      loadData();
      loadContGroup();
    }
  }, [user]);

  const loadData = async () => {
    let groups;
    try {
      const response = await axios.get(
        `http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8085/union/v1/groups/user/${user.id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      groups = response;
      setGroup(
        groups.data.group_list.map((item) => ({
          id: item.group_id,
          status_id: item.status.status_id,
          status: item.status.status_name,
          group_name: item.group_name,
          customer_id: item.customers.customer_id,
          textCustomer: item.customers.customer_name,
          responsible_id: item.responsible_id,
          responsible_name: item.responsible_name,
        }))
      );
    } catch (error) {
      console.error(error);
    }

  };

  const loadContGroup = async () => {
    let groups;

    try {
      const response = await axios.get(`${countUserGroup}${user.id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      groups = response;
      
    } catch (error) {
      console.error(error);
    }
    setCountGroups(groups.data.count_users_list)
  };

  const getTeamMembers = async (group_id) => {
    try {
      const response = await axios.get(`${getUsersGroup}${group_id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        },
      )
      setTeamMembers(response.data.user_list);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GroupListContext.Provider value={{ group, setGroup, loadData, team, setTeamList, infoGroup, setInfoGroup, users, idGroups,
      setIdGroups, modalEditGroup, setModalEditGroup, modalInfo, setModalInfo, id, setId, modal, setModal, activeTab, setActiveTab,
      toggleState, setToggleState,idEdit,setIdEdit, groupPage, setGroupPage, usersGroup, setUsersGroup ,countGroups, setCountGroups,loadContGroup,
      teamMembers, setTeamMembers,getTeamMembers,
     }}>
    {children}
    </GroupListContext.Provider>
  );
};
