import axios from "axios";
import { useUserContext } from "./useUserContext";
import {
  userCreate,
  userUpdateStatus,
  userUpdateNoPSW,
  forgotPass
} from "../api/routesAPI";

export const useFetchUser = () => {
  const { loadUserList, token } = useUserContext();
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

  const updateUserNoPSW = async (user_id, user) => {
    axios
      .put(`${userUpdateNoPSW}${user_id}`, user, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        //setPopUpSuccess(true);
        loadUserList();
      })
      .catch(function (error) {
        //setPopUpError(true);
        console.error(error.response);
      });
  };

  const forgotPassword = async (email) => {
    
    axios
      .put(`${forgotPass}`,email, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        console.log("Email enviado com sucesso!");
      })
      .catch(function (error) {
        console.error(error.response);
      });
  };

  return {
    createUser,
    updateStatusUser,
    updateUserNoPSW,
    forgotPassword
  };
};

//localhost:8081/union/v1/users/update/status/27
