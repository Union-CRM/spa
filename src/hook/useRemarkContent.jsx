import { useContext } from "react";
import { RemarkContext } from "../context/RemarkContext";

export const useRemarkContext = () => {
  const context = useContext(RemarkContext);
  if (!context) {
    console.log("Contexto não encontrado");
  }
  return context;
};
