nimport { createContext, useState } from "react";
export const ClientContext = createContext();

export const PlannerContextProvider = ({ children }) => {
  const [Panner, setPanner] = useState(subjectsList);

  return (
    <ClientContext.Provider value={{ client, setClient }}>
      {children}
    </ClientContext.Provider>
  );
};