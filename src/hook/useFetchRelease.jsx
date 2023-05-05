import axios from "axios";
import { useReleaseContext} from "./useReleaseContent";
import { realiseGetRealiseTrains } from "../api/routesAPI";


export const useFetchRelease = () => {
  const {loadData,setModalSaveRelease,setModalCreateRelease,setModalEditRelease} = useReleaseContext();


  const createRelease = async (release) => {
    axios
      .post(
        "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8087/union/v1/releasetrains",
        release,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function(response) {
        loadData();
        setModalSaveRelease(true);
        setModalCreateRelease(false);
     })
      .catch(function (error) {
        console.error(error);
     });
  };

  const updateRelease = async (release,id) => {
    axios
      .put(
        `http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8087/union/v1/releasetrains/update/${id}`,
        release,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        loadData();
        setModalSaveRelease(true);
        setModalEditRelease(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const updateStatusRelease = async (id) => {
    axios.put(`http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8087/union/v1/releasetrains/update/status/${id}`,{},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
         loadData();
      })
      .catch(function (error) {
       console.error(error.response); 
      });
    
  };
  return {
    createRelease,
    updateRelease,
    updateStatusRelease
  };
};

