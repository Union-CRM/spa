import { createContext, useState } from "react";
export const PlannerContext = createContext();

export const PlannerContextProvider = ({ children }) => {
  const [planner, setPlanner] = useState(plannerList);

  const [modalPlanner, setModalPlanner] = useState(false);

  const [modalDetails, setModalDetails] = useState(false);

  return (
    <PlannerContext.Provider
      value={{
        planner,
        setPlanner,
        modalPlanner,
        setModalPlanner,
        modalDetails,
        setModalDetails,
      }}
    >
      {children}
    </PlannerContext.Provider>
  );
};

const plannerList = [
  {
    id: 1,
    subject: "ICT Expo 2023",
    date: new Date(2023, 2, 3, 8, 30),
    duration: "09:30",
    subject_id: 1,
    subject_name: "ICT Expo 2023",
    remark_id: 1,
    remark_name: "AWS FACTURE",
    client_id: 1,
    client_name: "Igor Sena Soares Silva",
    cleint_email: "igorsena@tcs.com",
    release_id: 1,
    release_name: "Experiência Digital",
    status: "Done",
    user_id: 21345678,
    user_name: "joão da silva",
  },
  {
    id: 2,
    subject: "Contest",
    date: new Date(2023, 2, 3, 10, 0),
    duration: "11:30",
    subject_id: 1,
    remark_id: 1,
    subject_name: "Contest",
    remark_name: "AWS FACTURE",
    client_name: "Ariel Soares",
    client_email: "soares.ariel@tcs.com",
    client_id: 2,
    release_id: 1,
    release_name: "Cliente PJ Itaú",
    status: "Done",
    user_id: 21344469,
    user_name: "Evandro",
  },
];
