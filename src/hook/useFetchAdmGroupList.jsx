import axios from "axios";
import { useGroupListContext } from "./useGroupListContext";

import { useUserContext } from "./useUserContext";
import { groupCreate } from "../api/routesAPI";
export const useFetchAdmGroupList = () => {
  const { loadData } = useGroupListContext();
  const insertGroup = async (group) => {
    axios
      .post(
        groupCreate,
        {

            group_name: group.group_name,
            customer_id: parseInt(group.customer_id),
            users: parseInt(group.users.users_id.id),
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        loadData();
        //console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const updateGroup = async (group, group_id) => {
    axios
      .put(
        `http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8085/union/v1/groups/update/status/${group_id}`,
        {
            group_name: group.group_name,
            customer_id: group.customer_id,
            users: group.users.users_id.id,

        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        loadData();
        //console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateStatus = async (group_id) => {
    axios
      .put(
        `http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8085/union/v1/groups/update/status/${group_id}`,
        {      
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        loadData();
        //console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  
  return {
    insertGroup,
    updateGroup,
    updateStatus,

  };
};
