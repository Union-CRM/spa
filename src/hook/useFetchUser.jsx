import axios from "axios";
import { useUserContext } from "./useUserContext";

export const useFetchUser = () => {
  const createUser = async (user) => {
    console.log(user);
    axios
      .post(
        "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8081/union/v1/users",
        user,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {})
      .catch(function (error) {
        console.error(error);
      });
  };

  return {
    createUser,
  };
};
