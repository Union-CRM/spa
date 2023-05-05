import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { customersGet } from "../api/routesAPI";
export const CustomerContext = createContext();

export const CustomerContextProvider = ({ children }) => {
  const [customer, setCustomer] = useState([{}]);
  const [customerTarget, setCustomerTarget] = useState({});
  const [popUpSuccess, setPopUpSuccess] = useState(false);
  const [popUpError, setPopUpError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      loadCustomerList();
    }
  }, []);

  const loadCustomerList = async () => {
    try {
      const response = await axios.get(customersGet, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setCustomer(response.data.list);
    } catch (error) {
      console.error(error.response);
    }

    /* console.log(clients.data.list)*/
  };
  return (
    <CustomerContext.Provider
      value={{
        customer,
        setCustomer,
        loadCustomerList,
        customerTarget,
        setCustomerTarget,
        popUpSuccess,
        setPopUpSuccess,
        popUpError,
        setPopUpError,
      }}
    >
      {children}
    </CustomerContext.Provider>
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
