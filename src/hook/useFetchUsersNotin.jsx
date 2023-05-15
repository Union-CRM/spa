import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const useFetchUsersNotin = () => {
  const [userNotin, setUserNotin] = useState([{}]);
  const [userListSub, setUserListSub] = useState([{}]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  

  useEffect(() => {
    
    loadUserNotin();
    loadUserSub();

    
  }, []);

  const loadUserNotin = async () => {
    var user;
    try {
      const response = await axios.get(
        "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8081/union/v1/users/notin/group",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      user = response;
     
    } catch (error) {
      console.error(error);
    }
    
    setUserNotin(user.data.list);
  };

  const loadUserSub = async () => {
    try {
      const response = await axios.get(
        "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8081/union/v1/users/submissives",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      
      setUserListSub(response.data.list);
      
    } catch (error) {
      console.error(error);
      // to do modal error
    }
    
  };

  return {
    loadUserSub,
    loadUserNotin,
    userNotin, 
    setUserNotin,
    userListSub, 
    setUserListSub,
    selectedOptions, 
    setSelectedOptions
  }
  
};
