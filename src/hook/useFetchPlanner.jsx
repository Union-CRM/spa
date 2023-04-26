import axios from 'axios'
import { usePlannerContext } from './usePlannerContext'

export const useFetchPlanner=()=>{
    const {loadPlannerList, setModalSave,setModalCreate,setModalReschedule,setModalEdit, setModalFollowUp, setModalError}=usePlannerContext() 
    
    const createPlanner = async(planner)=>{
        console.log(planner)
        axios.post('http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8086/union/v1/planners', planner,
        {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
        .then(function (response) {
            loadPlannerList();
            setModalSave(true);
            setModalCreate(false);
            setModalReschedule(false)
            setModalFollowUp(false);
        })
        .catch(function (error) {
            console.error(error);
            setModalError(true);
            setModalFollowUp(false);
            setModalCreate(false);
            setModalReschedule(false)
        });
    }

    const updatePlanner = async(planner_id,planner)=>{
        
        axios.put(`http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8086/union/v1/planners/update/${planner_id}`, 
            planner,
            {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}})
        .then(function (response) {
            loadPlannerList();
            setModalEdit(false)
            setModalCreate(false);
        })
        .catch(function (error) {
            setModalError(true);
            setModalFollowUp(false);
            setModalCreate(false);
            setModalReschedule(false)
            console.error(error);
        });
    }

    return{
        createPlanner,
        updatePlanner
    }
}