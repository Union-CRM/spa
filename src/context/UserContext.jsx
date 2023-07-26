import { createContext, useState, useEffect } from "react";
import axios from "axios";
import {
  userGetSubmissiveUsers,
  userCreate,
  userGetAll,
} from "../api/routesAPI";
import { userGetUsersMe } from "../api/routesAPI";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [userList, setUserList] = useState([]);
  const [usersGlobal, setUsersGlobal] = useState([]);
  const [viewProfile, setViewProfile] = useState(false);
  const [userTarget, setUserTarget] = useState({});
  const [home, setHome] = useState(false);
  const [modalPlanner, setModalPlanner] = useState(false);
  const [modalSubject, setModalSubject] = useState(false);
  const [modalRemark, setModalRemark] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [token, setToken] = useState();
  const [first, setFirst] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      loadUserMe();
      loadUsers();
    }
  }, []);

  const loadUserMe = async () => {
    try {
      const response = await axios.get(userGetUsersMe, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadUserList = async () => {
    try {
      const response = await axios.get(userGetSubmissiveUsers, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUserList(response.data.list);
    } catch (error) {
      console.error(error);
      setUserList([]);
      // to do modal error
    }
  };

  const loadUsers = async () => {
    try {
      const response = await axios.get(userGetAll, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUsersGlobal(response.data.list);
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
        loadUsers,
        usersGlobal,
        setUsersGlobal,
        blocked,
        setBlocked,
        token,
        setToken,
        first,
        setFirst,
        modalRemark,
        setModalRemark,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
