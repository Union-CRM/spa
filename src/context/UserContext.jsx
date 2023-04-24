import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([{}]);

  useEffect(() => {
    if(localStorage.getItem("token")){
    loadUserMe();
    }
  }, []);

  const loadUserMe = async () => {
    var user;
    try {
      const response = await axios.get(
        "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8081/union/v1/users/me",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      user = response;
    } catch (error) {
      console.error(error);
    }
    setUser(user.data);
  };
  return (
    <UserContext.Provider value={{ user, loadUserMe }}>
      {children}
    </UserContext.Provider>
  );
};
