import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { groupGetUser } from "../api/routesAPI";
export const GroupListContext = createContext();

export const GroupListContextProvider = ({ children }) => {
  const [group, setGroup] = useState([{}]);
  const [team, setTeamList] = useState([{}]);

  useEffect(() => {
    //loadData();
  }, []);

  const loadData = async () => {
    var groups;

    try {
      const response = await axios.get(
        groupGetUser,

        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      groups = response;
    } catch (error) {
      console.error(error);
    }

    setGroup(
      groups.data.group_list.map((item) => ({
        id: item.group_id,
        status_id: item.status.status_id,
        status: item.status.status_name,
        group_name: item.group_name,
        customer_id: item.customers.customer_id,
        textCustomer: item.customers.customer_name,
      }))
    );
    console.log(groups.data.group_list);
  };

  const loadTeamMembers = async () => {
    var team;

    try {
      const response = await axios.get(
        "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8085/union/v1/groups/usersGroup/2",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(response);
      team = response;
    } catch (error) {
      console.error(error);
    }

    setTeamList(team.data.user_list);
  };
  /*
    console.log(groups)
   setGroup(groups.data.group_list);*/

  /*
    setGroup(groups.data.List.map((item) => ({
        group_id: item.group_id,
        group_name:item.group_name,
        
      }))
    );*/

  return (
    <GroupListContext.Provider
      value={{ group, setGroup, loadData, team, setTeamList, loadTeamMembers }}
    >
      {children}
    </GroupListContext.Provider>
  );
};
