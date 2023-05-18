import axios from "axios";
import { useGroupListContext } from "./useGroupListContext";

import { useUserContext } from "./useUserContext";
import { groupCreate, groupUpdate, attachUser,  } from "../api/routesAPI";
export const useFetchAdmGroupList = () => {
  const { loadData } = useGroupListContext();
  
  const insertGroup = async (group) => {
    console.log(group)
    
    axios
      .post(
        groupCreate,
        group,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          
        }

      )
      .then(function (response) {
        loadData();
        console.log("over here ")
        //console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const updateGroup = async (group, group_id) => {
    console.log(group +"segundou" + group_id)
    axios
      .put(
        `${groupUpdate}${group_id}`,
          group,
        
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

  const attachUser = async (group_id) => {
    axios
      .put(
        `${attachUser}${group_id}`,
        {},
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

  const detachUser = async (group_id) => {
    axios
      .put(
        `${detachUser}${group_id}`,
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
    detachUser,
    attachUser

  };
};
