import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([{}]);
  const [userList, setUserList] = useState([{}]);
  const [viewProfile, setViewProfile] = useState(false);
  const [userTarget, setUserTarget] = useState({});


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



  

  const loadUserList = async () => {
    var users;
    try {
      const response = await axios.get(
        "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8081/union/v1/users",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      users = response;
    } catch (error) {
      console.error(error);
    }
    setUserList(users.data.list);
    
  };



  return (
    <UserContext.Provider value={{
        user,
        loadUserMe,
        userList,
        loadUserList,
        viewProfile,
        setViewProfile,
        userTarget,
        setUserTarget,
 }}>
      {children}
    </UserContext.Provider>
  );
  
};
