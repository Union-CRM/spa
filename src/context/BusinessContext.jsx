import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const BusinessContextProvider = ({ children }) => {
  const [business, setBusiness] = useState([{}]);
  const [modalDiscard, setModalDiscard] = useState(false);
  const [modalCreateBusiness, setModalCreateBusiness] = useState(false)
  const [modalSaveBusiness, setModalSaveBusiness] = useState(false);
  const [modalEditBusiness, setModalEditBusiness] = useState(false)
  const [sucessBusiness, setSucessBusiness] = useState(false)
  const [idBusiness,setIdBusiness] = useState();
  const [modalStatus, setModalStatus] = useState();
  const [businessTarget, setBusinessTarget] = useState({});

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
            ? item.tags.map((tag) => ({ value: tag.tag_id, label: tag.tag_name, color: colors[Math.floor(Math.random() * (colors.length - 1))], }))
            : [],
            status: item.Status.status_description,
            segment_description: item.BusinessSegment.businessSegment_description,
            segment_id: item.BusinessSegment.businessSegment_id
        })) 
    );    
  };
  return (
    <BusinessContext.Provider value={{
      business, setBusiness, loadData, modalCreateBusiness,
      setModalCreateBusiness,modalEditBusiness, setModalEditBusiness,
      modalDiscard,setModalDiscard,idBusiness,setIdBusiness,
      modalCreateBusiness,setModalCreateBusiness,modalSaveBusiness,
      setModalSaveBusiness, modalStatus, setModalStatus, businessTarget, setBusinessTarget,
      sucessBusiness, setSucessBusiness
    }}>
      {children}
    </BusinessContext.Provider>
  );
};

export const BusinessContext = createContext();

const colors = [
  "#836FFF",
  "#00BFFF",
  "#7FFFD4",
  "#00FA9A",
  "#00FF00",
  "#ADFF2F",
  "#BDB76B",
  "#FFDEAD",
  "#DEB887",
  "#9370DB",
  "#EE82EE",
  "#FFB6C1",
  "#F08080",
  "#FA8072",
  "#FFA07A",
  "#FFFF00",
  "#7B68EE",
  "#BC8F8F",
];


