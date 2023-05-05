import axios from "axios";
import { useUserContext } from "./useUserContext";
import { userCreate, userUpdateStatus } from "../api/routesAPI";

export const useFetchUser = () => {
  const { loadUserList } = useUserContext();
  const createUser = async (user) => {
    //console.log(user);
    try {
      const response = await axios.post(userCreate, user, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data.password;
    } catch (error) {
      //to do erroModal
      console.error(error);
    }
  };

  const updateStatusUser = async (user_id) => {
    axios
      .put(
        `${userUpdateStatus}${user_id}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        //console.log(response);
        loadUserList();
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  //localhost:8081/union/v1/users/update/status/27
  return {
    createUser,
    updateStatusUser,
  };
};
