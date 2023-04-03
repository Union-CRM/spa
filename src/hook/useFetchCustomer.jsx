import {useState,useEffect} from 'react'
import axios from 'axios'

export const useFetchCustomer=(customer)=>{
    const [customerList,setCustomerList]=useState(null)
    const [loading, setLoading]=useState(false)

    useEffect(()=>{
        async function loadDate(){
            var customers;
            try {
                const response = await axios.get('http://localhost:8084/union/v1/customers',{
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
                    customers = response;
            }catch (error) {
                console.error(error);
            }
            setCustomerList(customers.data.list.map((item)=>({id:item.id,value:item.id,label:item.name})));
        }
        loadDate();   
      },[])

      return {
        customerList,
        loading,
      }

}