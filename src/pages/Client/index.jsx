import React from "react";
import ContainerCards from "../../components/Client/ContainerCardClient";
import PageBody from "../../components/Geral/PageBody";
import { ClientContextProvider } from "../../context/ClientContext";

const Client = () => {
  return (
    <>
      <PageBody>
        
          <ContainerCards />
   
      </PageBody>
    </>
  );
};

export default Client;
