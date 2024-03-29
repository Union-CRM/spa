import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { clientGetAll } from "../api/routesAPI";
export const ClientContext = createContext();

export const ClientContextProvider = ({ children }) => {
  const [idClient, setIdClient] = useState(null);
  const [client, setClient] = useState([{}]);
  const [clientTarget, setClientTarget] = useState(clientEntity);
  const [isActive, setIsActive] = useState(false);
  const [modalAddClient, setModalAddClient] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [toggleState, setToggleState] = useState(0);
  const [activeTab, setActiveTab] = useState(null);
  const [modal, setModal] = useState();
  const [id, setId] = useState(null);
  const [modalEditClient, setModalEditClient] = useState(false);
  const [modalCreateSubject, setModalCreateSubject] = useState(false);

  const [modalInfo, setModalInfo] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      loadData();
    }
  }, []);

  const loadData = async () => {
    var clients;
    try {
      const response = await axios.get(clientGetAll, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      clients = response;
    } catch (error) {
      console.error(error.response);
    }
    setClient(
      clients.data.list.map((item) => ({
        id: item.client_id,
        status: item.status_description,
        email: item.client_email,
        client: item.client_name,
        role_id: item.role_id,
        textRole: item.role_name,
        customer_id: item.customer_id,
        textCustomer: item.customer_name,
        business_id: item.business_id,
        textBusiness: item.business_name,
        release_id: item.release.release_id,
        textRelease: item.release.release_name,
        user_id: item.user_id,
        user_name: item.user_name,
        tags: item.tags
          ? item.tags.map((tag) => ({ value: tag.tag_id, label: tag.tag_name }))
          : [],
      }))
    );
  };

  const openModalDetails = (id) => {
    setSelectedClient(id);
  };

  return (
    <ClientContext.Provider
      value={{
        openModalDetails,
        client,
        setClient,
        loadData,
        id,
        setId,
        toggleState,
        setToggleState,
        activeTab,
        setActiveTab,
        modal,
        setModal,
        isActive,
        setIsActive,
        modalEditClient,
        setModalEditClient,
        modalInfo,
        setModalInfo,
        idClient,
        setIdClient,
        modalAddClient,
        setModalAddClient,
        selectedClient,
        modalCreateSubject,
        setModalCreateSubject,
        clientTarget,
        setClientTarget,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

const clientEntity = {
  client_name: "",
  client_email: "",
};
