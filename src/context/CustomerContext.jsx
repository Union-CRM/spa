import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { customersGet } from "../api/routesAPI";
export const CustomerContext = createContext();

export const CustomerContextProvider = ({ children }) => {
  const [customer, setCustomer] = useState([]);
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
