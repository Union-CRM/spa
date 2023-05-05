import { useContext } from "react";
import { ReleaseContext } from "../context/ReleaseContext";

export const useReleaseContext = () => {
  const context = useContext(ReleaseContext);
  if (!context) {
    console.log("Contexto não encontrado");
  }
  return context;
};
