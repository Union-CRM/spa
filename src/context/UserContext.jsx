import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([{}]);
  
  useEffect(()=>{
    loadUserMe();
  },[])
  
  const loadUserMe=async()=>{
    var user;
    try {
        const response = await axios.get('http://ec2-18-230-74-206.sa-east-1.compute.amazonaws.com:8081/union/v1/users/me',{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
            user = response;
    }catch (error) {
        console.error(error);
    }
    setUser(user.data)
  }
  return (
    <UserContext.Provider value={{ user, loadUserMe }}>
      {children}
    </UserContext.Provider>
  );
};
