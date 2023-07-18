import { createContext, useState, useEffect } from "react";
export const SearchContext = createContext();


export const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState(false);
  const [notification, setNotification] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  /*useEffect(() => {
    setFilteredUsers(
      state.users.filter(
        user => 
          user.name.split(" ")[0] === search || user.name.split(" ")[-1] === search
      )
    );
  }, [search]);*/

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        notification,
        setNotification,
        //filteredUsers,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
