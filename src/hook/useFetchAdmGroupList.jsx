import axios from "axios";
import { useGroupListContext } from "./useGroupListContext";

import {
  groupCreate,
  groupUpdate,
  getUsersGroup,
  groupUpdateStatus,
} from "../api/routesAPI";

export const useFetchAdmGroupList = () => {
  const { loadData, setCountGroups, loadContGroup } = useGroupListContext();

  const insertGroup = async (group) => {
    axios
      .post(groupCreate, group, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(function (response) {
        loadData();
        loadContGroup();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const updateGroup = async (group, group_id) => {
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
        loadContGroup();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const updateStatus = async (group_id) => {
    axios
      .put(
        `${groupUpdateStatus}${group_id}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        loadData();
      })
      .catch(function (error) {
        console.error(error);
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
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const detachUser = async (group_id) => {
    axios
      .put(
        `${detachUser}${group_id}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        loadData();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const groups = async (group_id) => {
    let groups;
    try {
      const response = await axios.get(`${getUsersGroup}${group_id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }),
        groups = response;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    insertGroup,
    updateGroup,
    updateStatus,
    detachUser,
    attachUser,
    getUsersGroup,
    setCountGroups,
    groups,
  };
};
