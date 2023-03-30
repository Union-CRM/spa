import React from "react";
import PageBody from "../../components/Geral/PageBody";
import Donut from "../../components/Admin/AdmGraphicGroup/Donut";
import ContainerCards from "../../components/Client/ContainerCardClient";
import { ClientContextProvider } from "../../context/ClientContext";

import {Container,DivSection,DivClient,DivPlanner,Graph} from "./styles";
import Grafico from "../../components/Grafico";
import PageBodyHome from "../../components/Geral/PageBody/PageBodyHome";

import { useState } from "react";

/*const funcClientInfo =()=>{
  const [clientInfo,setClientInfo] = useState("Client Information"); 
  return {clientInfo,setClientInfo};
}*/
class Home extends React.Component {
 
  render() {
    
    return (
      <>
      <Container>
      <PageBodyHome>
     

     
        <DivClient>
       
          <ClientContextProvider>
         
          
         <ContainerCards />
        
          </ClientContextProvider>
       
          <DivPlanner>
           <h1>Planner</h1>
           <h2></h2>
          </DivPlanner>
        </DivClient>
        

      {/* <ClientCard/>*/} 
      
          <Graph>
           <Grafico/>
            <Grafico/>
        
          </Graph>    
    
      </PageBodyHome>
      
      </Container>
      
      </>
    );
  }
}

export default Home;
   {/* <Donut></Donut>
      <Donut></Donut>
    <Donut></Donut>*/}