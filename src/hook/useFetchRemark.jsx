import axios from 'axios'
import {useState} from 'react'
import { usePlannerContext } from './usePlannerContext'

export const useFetchRemark=()=>{
    const [remarkId,setRemarkId]=useState()
    const { setModalError, setModalRemark, setModalPopUpFinished, setModalPopUpCanceled } = usePlannerContext();


    const createRemark = async (remark) => {
        try {
          const response = await axios.post('http://ec2-15-229-154-134.sa-east-1.compute.amazonaws.com:8088/union/v1/remarks', remark, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          });
          return response.data.id;
        } catch (error) {
          console.log(error);
          setModalError(true);
          setModalRemark(false);
          setModalPopUpFinished(false);
          setModalPopUpCanceled(false);
          return false;
        }
      }

    /*
    const createRemark = async(remark)=>{
        axios.post('http://localhost:8088/union/v1/remarks', remark,
        {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
        .then(function (response) {
            return response.data.id;        })
        .catch(function (error) {
            console.log(error);
            //To do modal error 
            return false;
        });
    }

*/
    return{
        createRemark
    }


}