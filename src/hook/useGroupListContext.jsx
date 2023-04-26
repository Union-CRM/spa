import { useContext } from "react";
import { GroupListContext } from "../context/GroupListContext";

export const useGroupListContext = () => {
  const context = useContext(GroupListContext);
  if (!context) {
    console.log("Contexto não encontrado");
  }
  return context;
};
