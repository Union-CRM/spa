import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [tokenGlobal, setTokenGlobal] = useState("");


  return (
    <UserContext.Provider value={{ tokenGlobal, setTokenGlobal }}>
      {children}
    </UserContext.Provider>
  );
};
