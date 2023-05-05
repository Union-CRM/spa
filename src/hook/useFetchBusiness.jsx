import axios from "axios";
import { useBusinessContext} from "./useBusinessContent";

export const useFetchBusiness = () => {
  const {loadData,setModalSaveBusiness,setModalCreateBusiness,setModalEditBusiness} = useBusinessContext();

  const createBusiness = async (business) => {
    axios
      .post(
        "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8082/union/v1/business",
        business,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function(response) {
        loadData();
        setModalSaveBusiness(true);
        setModalCreateBusiness(false);
     })
      .catch(function (error) {
        
        console.error(error);
        //setModalError(true);

     });
  };

  const updateBusiness = async (business,id) => {
    axios
      .put(
        `http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8082/union/v1/business/update/${id.id}`,
        business,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        loadData();
        setModalSaveBusiness(true);
        setModalEditBusiness(false);
        /*
        loadPlannerList();
        setModalEdit(false);
        setModalCreate(false);*/
      })
      .catch(function (error) {
        /*
        setModalError(true);
        setModalFollowUp(false);
        setModalCreate(false);
        setModalReschedule(false);
        console.error(error);*/
      });
  };

  const updateStatusBusiness = async (id) => {
    axios.put(`http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8082/union/v1/business/update/status/${id}`,{},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
         loadData();
      })
      .catch(function (error) {
        /*
        setModalError(true);
        setModalFollowUp(false);
        setModalCreate(false);
        setModalReschedule(false);*/
       // console.error(error.response);
        
      });
    
  };



  return {
    createBusiness,
    updateBusiness,
    updateStatusBusiness
  };
};
