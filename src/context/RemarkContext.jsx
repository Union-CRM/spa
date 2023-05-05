import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { remarkGetSubmissivesRemarks } from "../api/routesAPI";
export const RemarkContext = createContext();

export const RemarkContextProvider = ({ children }) => {
  const [idRemark, setIdRemark] = useState(null);
  const [remark, setRemark] = useState();
  const [remarkEdit, setRemarkEdit] = useState(remarkEntity);
  const [modalRemark, setModalRemark] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

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
      //console.log("buscou")
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
        remarkEdit,
        setRemarkEdit,
        idRemark,
        setIdRemark,
        activeTab,
        setActiveTab,
        loadRemarkList,
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

const remarkList = [
  {
    id: 1,
    date: "12-06-23",
    dateReturn: "10-05-23",
    noteText:
      "Identificar as necessidades do cliente e compreender seus objetivos; Apresentar a expertise da consultoria de TI em serviços financeiros; Discutir as soluções personalizadas que podem ser oferecidas para as necessidades específicas da instituição financeira; Identificar as necessidades do cliente e compreender seus objetivos; Apresentar a expertise da consultoria de TI em serviços financeiros; ",
    subject_id: 2,
  },
  {
    id: 2,
    date: "10-02-23",
    dateReturn: "20-07-23",
    noteText:
      "Apresentar a expertise da consultoria de TI em serviços financeiros; Discutir as soluções personalizadas que podem ser oferecidas para as necessidades específicas da instituição financeira; Identificar as necessidades do cliente e compreender seus objetivos; Apresentar a expertise da consultoria de TI em serviços financeiros; ",
    subject_id: 1,
  },
];
