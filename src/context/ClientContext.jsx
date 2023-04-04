import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const ClientContext = createContext();


export const ClientContextProvider = ({ children }) => {
  const [client, setClient] = useState([{}]);


  useEffect(()=>{
   

    
    async function loadDate(){
        var clients;
        try {
            const response = await axios.get('http://localhost:8083/union/v1/clients/mygroups',{
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
                clients = response;
        }catch (error) {
            console.error(error);
        }
        setClient(clients.data.list.map((item)=>({
          id:item.client_id, 
          status:item.status_description,
          email:item.client_email,
          client:item.client_name,
          role_id: item.role_id,
          textRole: item.role_name,
          customer_id: item.customer_id,
          textCustomer: item.customer_name,
          business_id:item.business_id,
          textBusiness: item.business_name,
          release_id: item.release.release_id,
          textRelease: item.release.release_name,
          tags: item.tags ? item.tags.map((tag)=>({value:tag.tag_id,label:tag.tag_name})):[]
          })
        ))
    }
    loadDate();
    
  },[])

  return (
    <ClientContext.Provider value={{ client, setClient }}>
      {children}
    </ClientContext.Provider>
  );
};

/*
const subjectsList = [
  {
    id: 1,
    status: "Active",
    email: "igorsena@tcs.com",
    client: "Igor Sena Soares Silva",
    textRole: "Analyst DevOps",
    textCustomer: "Itaú",
    textBusiness: "Infraestrutura e Operações TI",
    textRelease: "Experiência Digital",
    tags: [
      { value: 6, label: "Azure", color: "#3ddc97" },
      { value: 12, label: "Demand Drafts", color: "#6CB4EE" },
      { value: 1, label: "Online Banking", color: "#FFB2D1" },
    ],
  },
*/

/*
  { value: 1, label: "Online Banking", color: "#3ddc97" },
  { value: 2, label: "Cyber Security", color: "#ACD4FF" },
  { value: 3, label: "Issue of Credit Cards", color: "#FFE60082" },
  { value: 4, label: "Security & Identification", color: "#FFB2D1" },
  { value: 5, label: "Internet of Things (IoT)", color: "#FFE60082" },
  { value: 6, label: "Azure", color: "#3ddc97" },
  { value: 7, label: "Salesforce", color: "#ACD4FF" },
  { value: 8, label: "AWS", color: "#ACD4FF" },
  { value: 9, label: "Google Cloud", color: "#ACD4FF" },
  { value: 10, label: "Credit & Debit Cards", color: "#ACD4FF" },
  { value: 11, label: "Product design", color: "#ACD4FF" },
  { value: 12, label: "Demand Drafts", color:"#ACD4FF"},
*/
