import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { clientGetClientsMyGroups } from "../api/routesAPI";
export const ClientContext = createContext();

export const ClientContextProvider = ({ children }) => {
  const [client, setClient] = useState([{}]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      loadData();
    }
  }, []);

  const loadData = async () => {
    var clients;

    try {
      const response = await axios.get(clientGetClientsMyGroups, {
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
  const [selectedClient, setSelectedClient] = useState(null);
  const [toggleState, setToggleState] = useState(0);
  const [activeTab, setActiveTab] = useState(null);
  const [modal, setModal] = useState();
  const [id, setId] = useState(null);
  const [modalEditClient, setModalEditClient] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);

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
      }}
    >
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
