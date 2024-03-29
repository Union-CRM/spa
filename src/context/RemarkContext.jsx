import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { remarkGetSubmissivesRemarks } from "../api/routesAPI";
export const RemarkContext = createContext();

export const RemarkContextProvider = ({ children }) => {
  const [idRemark, setIdRemark] = useState(null);
  const [remark, setRemark] = useState();
  const [remarkEdit, setRemarkEdit] = useState(remarkEntity);
  const [modalRemark, setModalRemark] = useState(false);
  const [modalCreate, setModalCreate] =useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [remarkTarget, setRemarkTarget] = useState();
  const [modalDiscard,setModalDiscard]=useState(false);
  const [modalSucess, setModalSucess] = useState(false);
  const [modalError,setModalError] = useState(false); 
  const [modalSaveRemark, setModalSaveRemark] = useState(false);
  const [sucessRemark, setSucessRemark] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      loadRemarkList();
    }
  }, []);

  const loadRemarkList = async () => {
    let remarks;
    try {
      const response = await axios.get(remarkGetSubmissivesRemarks, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      remarks = response;
    } catch (error) {
      console.error(error);
    }
    setRemark(remarks.data.list);
  };

  return (
    <RemarkContext.Provider
      value={{
        modalRemark,
        setModalRemark,
        remark,
        setRemark,
        remarkTarget,
        setRemarkTarget,
        remarkEdit,
        setRemarkEdit,
        modalEdit,
        setModalEdit,
        idRemark,
        setIdRemark,
        activeTab,
        setActiveTab,
        loadRemarkList,
        modalSucess,
        setModalSucess,
        modalSaveRemark,
        setModalSaveRemark,
        sucessRemark,
        setSucessRemark,
        notification, setNotification,
        modalCreate, setModalCreate,
        modalDiscard,setModalDiscard,
        modalError,setModalError
      }}
    >
      {children}
    </RemarkContext.Provider>
  );
};

const remarkEntity = {
  id: null,
  remark_name: "",
  text: "",
  date: "",
  date_return: "",
  status_description: "",
  client_id: null,
  client_name: "",
  user_name: "",
  user_id: null,
  release_id: null,
  release_name: "",
  subject_id: null,
  subject_name: "",
  business_id: null,
  business_name: "",
};
