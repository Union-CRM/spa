import axios from "axios";
import { useGroupListContext } from "./useGroupListContext";
import { useUserContext } from "./useUserContext";

export const useFetchAdmGroupList = () => {
  
  const { loadData } = useGroupListContext();
  const insertGroup = async (group) => {
    axios
      .post(
        `http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8085/union/v1/groups`,
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

  return {
    insertGroup,
   
  };
};
