import React from "react";
import ContainerCards from "../../../components/Client/ContainerCardClient";
import PageBody from "../../../components/Geral/PageBody";
import { CustomerContextProvider } from "../../../context/CustomerContext";
const Client = () => {
  return (
    <>
      <PageBody>
        <CustomerContextProvider>
          <ContainerCards />
        </CustomerContextProvider>
      </PageBody>
    </>
  );
};

export default Client;
