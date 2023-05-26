import { createContext, useState } from "react";
export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState(false);
  const [notification, setNotification] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        notification,
        setNotification,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
