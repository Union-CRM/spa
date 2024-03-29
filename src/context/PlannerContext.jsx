import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { plannerGetSubmissivesPlanners } from "../api/routesAPI";

export const PlannerContext = createContext();

export const PlannerContextProvider = ({ children }) => {
  const [planner, setPlanner] = useState([{}]);
  const [plannerEdit, setPlannerEdit] = useState();
  const [modalPlanner, setModalPlanner] = useState(false);
  const [modalDetails, setModalDetails] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDiscard, setModalDiscard] = useState(false);
  const [modalSave, setModalSave] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalRemark, setModalRemark] = useState(false);
  const [modalFollowUp, setModalFollowUp] = useState(false);
  const [modalPopUpCanceled, setModalPopUpCanceled] = useState(false);
  const [modalReschedule, setModalReschedule] = useState(false);
  const [modalPopUpFinished, setModalPopUpFinished] = useState(false);
  const [modalSubject, setModalSubject] = useState(false);
  const [modalError, setModalError] = useState(false);

  useEffect(() => {

    if (localStorage.getItem("token")) {
      loadPlannerList();

    }
  }, []);

  const loadPlannerList = async () => {
    try {

      const response = await axios.get(plannerGetSubmissivesPlanners, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setPlanner(response.data.list);
    } catch (error) {
      console.error(error);
      //console.log("buscou")
    }
  };

  return (
    <PlannerContext.Provider
      value={{
        planner,
        setPlanner,
        modalPlanner,
        setModalPlanner,
        modalDetails,
        setModalDetails,
        modalEdit,
        setModalEdit,
        modalDiscard,
        setModalDiscard,
        modalSave,
        setModalSave,
        modalCreate,
        setModalCreate,
        modalRemark,
        setModalRemark,
        modalFollowUp,
        setModalFollowUp,
        modalPopUpCanceled,
        setModalPopUpCanceled,
        modalReschedule,
        setModalReschedule,
        modalPopUpFinished,
        setModalPopUpFinished,
        modalSubject,
        setModalSubject,
        plannerEdit,
        setPlannerEdit,
        loadPlannerList,
        modalError,
        setModalError,
      }}
    >
      {children}
    </PlannerContext.Provider>
  );
};


