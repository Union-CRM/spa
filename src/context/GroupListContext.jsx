import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../hook/useUserContext";

import { groupGetUser } from "../api/routesAPI";

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
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const [idEdit,setIdEdit] = useState();
  const [modalEditGroup, setModalEditGroup] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);


  useEffect(() => {
    if (user.level > 1) {
      loadData();
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
          usersId: item.users.map((user) => user.user_id),
          usersNames: item.users.map((user) => user.user_name),
          usersCount: item.users.map((user) => user.user_id).length,
          usuarios: item.users,
          responsible_id: item.responsible_id,
          responsible_name: item.responsible_name,
        }))
      );
    } catch (error) {
      console.error(error);
    }

  };
  return (
    <GroupListContext.Provider value={{ group, setGroup, loadData, team, setTeamList, infoGroup, setInfoGroup, users, idGroups,
      setIdGroups, modalEditGroup, setModalEditGroup, modalInfo, setModalInfo, id, setId, modal, setModal, activeTab, setActiveTab,
<<<<<<< Updated upstream
      toggleState, setToggleState,idEdit,setIdEdit
=======
      toggleState, setToggleState,idEdit,setIdEdit, groupPage, setGroupPage, 
>>>>>>> Stashed changes
     }}>
    {children}
    </GroupListContext.Provider>
  );
};
