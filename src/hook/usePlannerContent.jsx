import { useContext } from "react";
import { PlannerContext } from "../context/PlannerContext";

export const usePlannerContext = () => {
  const context = useContext(PlannerContext);
  if (!context) {
    console.log("Contexto não encontrado");
  }

  return context;
};
