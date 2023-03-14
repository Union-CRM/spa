import { useContext } from "react";
import { ClientContext } from "../context/ClientContext";

export const useClientContext = () => {
  const context = useContext(ClientContext);
  if (!context) {
    console.log("Contexto não encontrado");
  }
  return context;
};
