import { createContext, useState, useEffect } from "react";
import { subjectGetSubmissivesSubjects } from "../api/routesAPI";
import axios from "axios";
export const SubjectContext = createContext();

export const SubjectContextProvider = ({ children }) => {
  const [subject, setSubject] = useState([{}]);
  const [editSubject, setEditSubject] = useState(false);

  useEffect(() => {

    if (localStorage.getItem("token")) {
      loadData();

    }
  }, []);

  const loadData = async () => {
    var subjects;
    try {
      const response = await axios.get(subjectGetSubmissivesSubjects, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      subjects = response;
    } catch (error) {
      console.error(error);
    }
    
    setSubject(
      subjects.data.List.map((item) => ({
        id: item.subject_id,
        status_id: item.status.status_id,
        status: item.status.status_description,
        subject_title: item.subject_title,
        subjectText: item.subject_text,
        release_id: item.release_id,
        release: item.release_name,
        business: item.business_name,
        manager: item.user_name,
        client: item.client_name,
        client_id: item.client_id,
        client_email: item.client_email,
        user_id: item.user_id,
        user_name: item.user_name,
        created_at: item.created_at
      }))
    );

   
  };
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [modalDetails, setModalDetails] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [modalDiscard, setModalDiscard] = useState(false);
  const [modal, setModal] = useState();
  const [modalEdit, setModalEdit] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [idSubject,setIdSubject]= useState();

  const [toggleState, setToggleState] = useState(1);

  const [id, setId] = useState(null);

  const [modalPlanner, setModalPlanner] = useState(false);

  const openModalDetails = (id) => {
    setSelectedSubject(id);
  };

  return (
    <SubjectContext.Provider
      value={{
        id,
        setId,
        openModalDetails,
        selectedSubject,
        toggleState,
        setToggleState,
        subject,
        setSubject,
        modalDetails,
        setModalDetails,
        modal,
        setModal,
        modalEdit,
        setModalEdit,
        modalDiscard,
        setModalDiscard,
        isEdit,
        setEdit,
        modalPlanner,
        setModalPlanner,
        activeTab,
        setActiveTab,
        loadData,
        editSubject,
        setEditSubject,
        idSubject,
        setIdSubject
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
};
