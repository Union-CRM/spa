import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const PlannerContext = createContext();

export const PlannerContextProvider = ({ children }) => {

  const [planner, setPlanner] = useState([{}]);
  const [plannerEdit, setPlannerEdit]=useState();
  const [modalPlanner, setModalPlanner] = useState(false);
  const [modalDetails, setModalDetails] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDiscard, setModalDiscard] = useState(false);
  const [modalSave, setModalSave] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalRemark, setModalRemark] = useState(false);
  const [modalFollowUp, setModalFollowUp] = useState(false);
  const [modalPopUpCanceled, setModalPopUpCanceled] = useState(false);
  const [modalReschedule, setModalReschedule] = useState(false)
  const [modalPopUpFinished, setModalPopUpFinished] = useState(false)
  const [modalSubject, setModalSubject] = useState(false)


  useEffect(()=>{
      loadPlannerList()
  },[])

  const loadPlannerList=async()=>{
    let planners;
    try {
      const response = await axios.get('http://ec2-15-229-154-134.sa-east-1.compute.amazonaws.com:8086/union/v1/planners/submissives',{
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
          planners = response;
          
    }catch (error) {
      console.error(error)
      //console.log("buscou")
    }
    setPlanner(planners.data.list)
    
  }


  return (
    <PlannerContext.Provider
      value={{

        planner,setPlanner, 
        modalPlanner,setModalPlanner,
        modalDetails, setModalDetails,
        modalEdit, setModalEdit, 
        modalDiscard, setModalDiscard,
        modalSave, setModalSave, 
        modalCreate, setModalCreate,
        modalRemark, setModalRemark,
        modalFollowUp, setModalFollowUp,
        modalPopUpCanceled, setModalPopUpCanceled,
        modalReschedule, setModalReschedule,
        modalPopUpFinished, setModalPopUpFinished,
        modalSubject, setModalSubject,
        plannerEdit, setPlannerEdit,
        loadPlannerList

      }}
    >

      {children}
    </PlannerContext.Provider>
  );
};

/*
business:"Prevencao A Fraudes"
business_id:45
client:"Pamela"
client_id:8
date:"2023-04-02 00:00:00.000"
id:6
duration: "10:10"
name:"Diagrama de uso"
release:"Protecao E Comunicacao Com O Cliente"
release_id:9
remark_subject:"Prioridades"
remark_text:"Aceitação"
status:"DONE"
subject:"Simulação"
subject_id:8
user:"Pedro"
user_id:7
*/
