import {useState, useEffect} from 'react'
import axios from 'axios'

export const useCreateSubject=()=>{

    const insertSubject = async(subject)=>{
        
        axios.post('http://ec2-15-229-154-134.sa-east-1.compute.amazonaws.com:8089/union/v1/subjects/create/user/1', {
            subject_title: subject.subject_title,
            subject_text: subject.subject_text,
            subject_type: 20,
            client_id: parseInt(subject.client_id),
            release_id: parseInt(subject.release_id)
        },
        {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
        .then(function (response) {
            //console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const updateSubject = async(client_id,client)=>{
        
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

        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    return{
        insertClient,
        updateClient
    }


}