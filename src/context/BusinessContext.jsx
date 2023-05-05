import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const BusinessContextProvider = ({ children }) => {
  const [business, setBusiness] = useState([{}]);
  const [modalDiscard, setModalDiscard] = useState(false);
  const [modalCreateBusiness, setModalCreateBusiness] = useState(false)
  const [modalSaveBusiness, setModalSaveBusiness] = useState(false);
  const [modalEditBusiness, setModalEditBusiness] = useState(false)
  const [idBusiness,setIdBusiness] = useState();
  const [modalStatus, setModalStatus] = useState();

  useEffect(() => {
    if(localStorage.getItem("token")){
    loadData();
    }
  }, []);

  const loadData = async () => {
    var busines;
    
    try {
      const response = await axios.get(
        "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8082/union/v1/business",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      busines = response;
    } catch (error) {
      console.error(error.response);
    }

    setBusiness(
        busines.data.business_list.map((item) => ({
            id: item.business_id,
            code: item.business_code,
            name: item.business_name,
            tags: item.tags
            ? item.tags.map((tag) => ({ value: tag.tag_id, label: tag.tag_name }))
            : [],
            status: item.Status.status_description,

        })) 
    );
   
    
  };
  return (
    <BusinessContext.Provider value={{
      business, setBusiness, loadData, modalCreateBusiness,
      setModalCreateBusiness,modalEditBusiness, setModalEditBusiness,
      modalDiscard,setModalDiscard,idBusiness,setIdBusiness,
      modalCreateBusiness,setModalCreateBusiness,modalSaveBusiness,
      setModalSaveBusiness, modalStatus, setModalStatus,
    }}>
      {children}
    </BusinessContext.Provider>
  );
};

export const BusinessContext = createContext();

