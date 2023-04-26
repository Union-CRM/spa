import {useState, useEffect} from 'react'
import axios from 'axios'
import { useSubjectContext } from './useSubjectContent'


export const useFetchSubjectStatus=()=>{

    const {loadData}=useSubjectContext() 
    const subjectFinished = async(subject_id,subject)=>{
        console.log(subject)
        axios.put(`http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8089/union/v1/subjects/update/finished/${subject_id}` , {
          
        },
        {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
        .then(function (response) {
            loadData();
            //console.log(response);
        })
        .catch(function (error) {
            console.log(error);

        });
    }

    const subjectCanceld = async(subject_id,subject)=>{
        axios.put(`http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8089/union/v1/subjects/update/canceled/${subject_id}`, {
          
        },
        {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}})
        .then(function (response) {
            loadData();
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    return{
        subjectFinished,
        subjectCanceld
    }


}