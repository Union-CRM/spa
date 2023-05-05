import React from "react";
import PageBody from "../../../components/Geral/PageBody";
import ContainerCards from "../../../components/Admin/Customer/ContainerCardCustomer";
import { CustomerContextProvider } from "../../../context/CustomerContext";

const Customer = () => {
  return (
    <PageBody>
      <CustomerContextProvider>
        <ContainerCards />
      </CustomerContextProvider>
    </PageBody>
  );
};

export default Customer;
