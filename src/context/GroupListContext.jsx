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

 useEffect(() => {
  loadData();

  }, []);

  const loadData = async () => {
    let groups;

    try {
      const response = await axios.get(
        "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8085/union/v1/groups/user/1",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      groups = response;
    } catch (error) {
      console.error(error);
    }

    console.log(groups.data.group_list)
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
        usersCount:item.users.map((user) => user.user_id).length,
        usuarios: item.users
      }))
    );

  };
  return (
    <GroupListContext.Provider value={{ group, setGroup, loadData, team, setTeamList, infoGroup, setInfoGroup, users }}>
      {children}
    </GroupListContext.Provider>
  );
};

