import { useContext } from "react";
import { SubjectContext } from "../context/SubjectContext";

export const useSubjectContext = () => {
  const context = useContext(SubjectContext);
  if (!context) {
    console.error("Contexto não encontrado");
  }
  return context;
};
