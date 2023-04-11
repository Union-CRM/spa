import {useState,useEffect} from 'react'
import axios from 'axios'

export const useFetchTag=(tag)=>{
    const [tagList,setTagList]=useState(null)
    const [loading, setLoading]=useState(false)

    useEffect(()=>{
        async function loadDate(){
            var tags;
            try {

                const response = await axios.get('http://ec2-15-229-154-134.sa-east-1.compute.amazonaws.com:8090/union/v1/tags',{
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
                    tags = response;
            }catch (error) {
                console.error(error);
            }
            
            setTagList(tags.data.tag_list.map((item)=>({id:item.tag_id,value:item.tag_id,label:item.tag_name})));
        }
        loadDate();   
      },[])

      return {
        tagList,
        loading,
      }

}