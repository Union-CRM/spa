import { usePlannerContext } from "./usePlannerContent";
import { useState, useEffect } from "react";

export const useFetchSubjectPlanner=(props)=>{
    const {planner} = usePlannerContext();
    const {idSubject} = useState();
    const plannerSubject = planner.filter((item) => item.subject_id === idSubject)[0];
    
}