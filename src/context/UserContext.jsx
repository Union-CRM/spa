import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { userGetSubmissiveUsers } from "../api/routesAPI";
import { userGetUsersMe } from "../api/routesAPI";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([{}]);
  const [userList, setUserList] = useState([{}]);
  const [viewProfile, setViewProfile] = useState(false);
  const [userTarget, setUserTarget] = useState({});
  const [home, setHome] = useState(false);
  const [modalPlanner, setModalPlanner] = useState(false);
  const [modalSubject, setModalSubject] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      loadUserMe();
    }
  }, []);

  const loadUserMe = async () => {
    var user;
    try {
      const response = await axios.get(userGetUsersMe, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      user = response;
    } catch (error) {
      console.error(error);
    }
    setUser(user.data);
  };

  const loadUserList = async () => {
    try {
      const response = await axios.get(userGetSubmissiveUsers, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUserList(response.data.list);
    } catch (error) {
      console.error(error);
      // to do modal error
    }
  };

  return (
    <UserContext.Provider
      value={{
        home,
        setHome,
        user,
        loadUserMe,
        userList,
        loadUserList,
        viewProfile,
        setViewProfile,
        userTarget,
        setUserTarget,
        modalPlanner,
        setModalPlanner,
        modalSubject,
        setModalSubject,
        modalPassword,
        setModalPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
