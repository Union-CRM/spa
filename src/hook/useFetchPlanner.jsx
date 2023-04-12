import axios from 'axios'
import { usePlannerContext } from './usePlannerContext'

export const useFetchPlanner=()=>{
    const {loadPlannerList, setModalSave,setModalCreate,setModalReschedule}=usePlannerContext() 
    
    const createPlanner = async(planner)=>{
        console.log(planner)
        axios.post('http://localhost:8086/union/v1/planners', planner,
        {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
        .then(function (response) {
            loadPlannerList();
            setModalSave(true);
            setModalCreate(false);
            setModalReschedule(false)
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
            //To do modal error
            setModalCreate(false);
            setModalReschedule(false)
        });
    }

    const updatePlanner = async(client_id,client)=>{
        
        axios.put(`http://ec2-15-229-154-134.sa-east-1.compute.amazonaws.com:8083/union/v1/clients/update/${client_id}`, {
            client_name: client.client,
            client_email: client.email,
            client_role: parseInt(client.role_id),
            customer_id: parseInt(client.customer_id),
            release_id: parseInt(client.release_id),
            business_id: parseInt(client.business_id),   
            user_id: 1,  
            tags:client.tags.map((t)=>({tag_id:parseInt(t.value),tag_name:t.label}))

        },
        {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}})
        .then(function (response) {
            //console.log(response);
            //loadData();
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    return{
        createPlanner,
        updatePlanner
    }


}