import styled from "styled-components";
import {DivButton} from "../../components/Client/ContainerCardClient/styles";
import {ContainerHeaderAndCards as ContainerClient} from "../../components/Client/ContainerCardClient/styles";
import {BoardStyle as BoardStyleClient} from "../../components/Client/ContainerCardClient/styles";
import { ContainerGlobal } from "../../components/Client/ContainerCardClient/styles";
import {DivIcons} from "../../components/Client/ContainerCardClient/CardListView/styles";
import {DivTitlePage} from "../../components/Client/ContainerCardClient/styles";
import {Top} from "../../components/Client/ContainerCardClient/styles";
import {BoardStyle} from "../../components/Client/ContainerCardClient/styles";
import {DivModal as PlannerDiv} from "../../components/Client/ContainerCardClient/styles";
import { HowManyClientList } from "../../components/Client/ContainerCardClient/styles";
import {DivP} from "../../components/Planner/PlannerCard/styles";
import {ContainerCentral} from "../../components/Client/AddEditClient/styles";
import {DivModal} from "../../components/Client/ContainerCardClient/styles";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100% 100%;
  grid-template-rows: 4em 80% ;
  position: relative;
  min-height: 580px;
  
`;


export const DivClient = styled.div`
  display: flex;
  top: -15px;
  width:  100%;
  height: 63.5%;
  margin:0;

${DivModal}{
  display:none;
}
${ContainerCentral}{
  display:none;
} 
//   grid-column: 1;
  position: relative;
  border-radius: 0px 0px 8px 0px;

${ContainerGlobal}{
    display: grid;
    grid-template-columns: 100% 0% ;
    height: auto;
    position:relative;
    width: 50%;
    min-height: 460px;
}

 ${ContainerClient}{ 
    display: flex;
    max-height: 68.5%;
    min-height: 41% ;
    width: 100% ;
    height: 100%;
    position: relative;
    min-height: 200px;
}
   ${BoardStyleClient}{ 
    max-height: 41%;
    min-height: 41% ;
   
    width: 100%;
    height: 41%;
   }

   ${DivButton}{
        display: none;
    }
    ${DivIcons}{
        display:none;
    }

   
`;

export const DivSection = styled.div`

display:grid;
grid-template-columns: 50% 50%;
grid-template-rows: 80% 20% ;
width: 100%;
margin: 0;

`;
export const DivPlanner = styled.div`
 
  
  display: flex;
  flex-direction:column;
  margin-left:5%;
  
  ${DivP}{
    /* width:100%; */
    margin-top: 0px;
    top: 0%;
    left: 0%;
      position:relative;
      border-color:white;
      border: 1px groove ; 
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
      height: 65%;
      min-height: 200px;
  }
    @media screen and (max-width:1773px) and (max-height:742px){
     
    }
`;

export const Graph = styled.div`
    display:flex;
    position: relative;
    width:auto;
    margin:0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px;
    gap: 1%;
    margin-bottom:0;
    @media screen and (max-width:1773px) and (max-height:742px){
      height: 20%;
      
    }

    @media screen and (max-width:864px){
     flex-direction:column;
    }
`;
export const H1Planners = styled.div`
  width: fit-content;
  display: flex;
  flex-direction:row;
  font-family: "Houschka Rounded Alt";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  grid-row: 2;
  height: fit-content;
  border-bottom: 2px solid #007bff;
`;

export const HowManyPlanners = styled.div`
font-size: 24px;
  color: #525b75;
  font-weight: 600;
  margin-right: 5%;
`;




