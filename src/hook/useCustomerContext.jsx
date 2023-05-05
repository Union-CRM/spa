import { useContext } from "react";
import { CustomerContext } from "../context/CustomerContext";

export const useCustomerContext = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    console.log("Contexto não encontrado");
  }
  return context;
};
