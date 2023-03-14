import React from "react";
import ContainerCards from "../../components/ContainerCardClient";
import PageBody from "../../components/PageBody";
import { ClientContextProvider } from "../../context/ClientContext";

const Client = () => {
  return (
    <>
      <PageBody>
        <ClientContextProvider>
          <ContainerCards />
        </ClientContextProvider>
      </PageBody>
    </>
  );
};

export default Client;
