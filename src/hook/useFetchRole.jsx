import { useState, useEffect } from "react";
import axios from "axios";
import { roleCreate } from "../api/routesAPI";

export const useFetchRole = (role) => {
  const [roleList, setRoleList] = useState(null);

  useEffect(() => {
    async function loadDate() {
      var roles;
      try {
        const response = await axios.get(roleCreate, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        roles = response;
      } catch (error) {
        console.error(error);
      }
      setRoleList(
        roles.data.role_list.map((item) => ({
          id: item.role_id,
          value: item.role_id,
          label: item.role_name,
        }))
      );
    }
    loadDate();
  }, []);

  return {
    roleList,
  };
};
