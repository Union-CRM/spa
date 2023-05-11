import { useState } from "react";
import axios from "axios";
import {
  customerCreate,
  customerUpdate,
  customerUpdateStatus,
} from "../api/routesAPI";
import { useCustomerContext } from "./useCustomerContext";

export const useFetchCustomer = () => {
  const [loading, setLoading] = useState(false);
  const { customer, loadCustomerList, setPopUpSuccess, setPopUpError } =
    useCustomerContext();
  // const [popUpSuccess, setPopUpSuccess] = useState(false);
  //  const [popUpError, setPopUpError] = useState(false);

  const loadCustomerOptions = () => {
    return customer
      ? customer
          .filter((c) => c.status === "ATIVO")
          .map((item) => ({
            id: item.id,
            value: item.id,
            label: item.name,
          }))
      : [];
  };

  const createCustomer = async (customer) => {
    try {
      const response = await axios.post(customerCreate, customer, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      loadCustomerList();
      setPopUpSuccess(true);
      return response.data.id;
    } catch (error) {
      setPopUpError(true);
      console.error(error.message);
      return false;
    }
  };

  const updateCustomer = async (customer_id, customer) => {
    axios
      .put(`${customerUpdate}${customer_id}`, customer, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(function (response) {
        setPopUpSuccess(true);
        loadCustomerList();
      })
      .catch(function (error) {
        setPopUpError(true);
        console.error(error.message);
      });
  };

  const updateStatusCustumer = async (customer_id) => {
    axios
      .put(
        `${customerUpdateStatus}${customer_id}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        loadCustomerList();
      })
      .catch(function (error) {
        setPopUpError(true);
        console.error(error.message);
      });
  };

  return {
    createCustomer,
    updateCustomer,
    updateStatusCustumer,
    loadCustomerOptions,
    loading,
    setLoading,
  };
};
