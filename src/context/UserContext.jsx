
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
        const response = await axios.get('http://ec2-15-229-154-134.sa-east-1.compute.amazonaws.com:8081/union/v1/users/me',{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
            user = response;
           
    }catch (error) {
        console.error(error);
    }
    setUser(user.data)
    console.log(user.data);
  }
  return (
    <UserContext.Provider value={{ user, loadUserMe }}>

      {children}
    </UserContext.Provider>
  );
};
