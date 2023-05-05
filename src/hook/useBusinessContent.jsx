import { useContext } from "react";
import { BusinessContext } from "../context/BusinessContext";

export const useBusinessContext = () => {
  const context = useContext(BusinessContext);
  if (!context) {
    console.log("Contexto não encontrado");
  }
  return context;
};
