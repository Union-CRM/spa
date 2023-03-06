import React from "react";
import { DivP, Ddata, Header, DivPlanner } from "./styles";
import Card from "./Card";
import PageBody from "../PageBody";
import Headline from "../../assets/FontSystem/Headline";
const clientes = [
  {
    id: 1,
    subject: "Apresentação Institucional TCS",
    releaseTrain: "Inteligência comercial",
    client: "Gilberto Anderson",
    emailClient: "gilberto.costumer@itau.com.br",
    guests:"Mario Alves ",
    userName:"Eber Delgado",
    emailUser: "EberDelgado@tcs.com",
    status:"scheduled",   
    
    
  },
  {
    id: 2,
    subject: "Iniciação do projeto",
    releaseTrain: "Onboarding e Transacional",
    client: "Fernando Souza",
    emailClient: "fernando.costumer@itau.com.br",
    guests:"Mario Alves, Gedson Souza, Eneiane Lopes ",
    userName:"Gustavo Carvalho",
    emailUser: "gustavoCarvalho@tcs.com",
    status:"finished",   
  },
  {
    id: 3,
    subject: "Aliamento NPS",
    releaseTrain: "Experiencia digital",
    client: "Willian Pedroso",
    emailClient: "Willian.costumer@itau.com.br",
    guests:"Murilo Alves ",
    userName:"Gilberto Anderson",
    emailUser: "gilbertoanderson@tcs.com",
    status:"finished",   
  },
  {
    id: 4,
    subject: "Finaceiro",
    releaseTrain: "Jornada Digital Itauber",
    client: "Márcio Silva",
    emailClient: "Márcio.costumer@itau.com.br",
    guests:"Mariano Peres ",
    userName:"Luana Alves",
    emailUser: "luanaAlves@tcs.com",
    status:"canceled",   
  },
  {
    id: 4,
    subject: "Finaceiro",
    releaseTrain: "Jornada Digital Itauber",
    client: "Márcio Silva",
    emailClient: "Márcio.costumer@itau.com.br",
    guests:"Mariano Peres ",
    userName:"Luana Alves",
    emailUser: "luanaAlves@tcs.com",
    status:"canceled",   
  },
  {
    id: 4,
    subject: "Finaceiro",
    releaseTrain: "Jornada Digital Itauber",
    client: "Márcio Silva",
    emailClient: "Márcio.costumer@itau.com.br",
    guests:"Mariano Peres ",
    userName:"Luana Alves",
    emailUser: "luanaAlves@tcs.com",
    status:"canceled",   
  },
  {
    id: 4,
    subject: "Finaceiro",
    releaseTrain: "Jornada Digital Itauber",
    client: "Márcio Silva",
    emailClient: "Márcio.costumer@itau.com.br",
    guests:"Mariano Peres ",
    userName:"Luana Alves",
    emailUser: "luanaAlves@tcs.com",
    status:"canceled",   
  },
  {
    id: 4,
    subject: "Finaceiro",
    releaseTrain: "Jornada Digital Itauber",
    client: "Márcio Silva",
    emailClient: "Márcio.costumer@itau.com.br",
    guests:"Mariano Peres ",
    userName:"Luana Alves",
    emailUser: "luanaAlves@tcs.com",
    status:"canceled",   
  },
  {
    id: 4,
    subject: "Finaceiro",
    releaseTrain: "Jornada Digital Itauber",
    client: "Márcio Silva",
    emailClient: "Márcio.costumer@itau.com.br",
    guests:"Mariano Peres ",
    userName:"Luana Alves",
    emailUser: "luanaAlves@tcs.com",
    status:"canceled",   
  },
  {
    id: 4,
    subject: "Finaceiro",
    releaseTrain: "Jornada Digital Itauber",
    client: "Márcio Silva",
    emailClient: "Márcio.costumer@itau.com.br",
    guests:"Mariano Peres ",
    userName:"Luana Alves",
    emailUser: "luanaAlves@tcs.com",
    status:"canceled",   
  },
  {
    id: 4,
    subject: "Finaceiro",
    releaseTrain: "Jornada Digital Itauber",
    client: "Márcio Silva",
    emailClient: "Márcio.costumer@itau.com.br",
    guests:"Mariano Peres ",
    userName:"Luana Alves",
    emailUser: "luanaAlves@tcs.com",
    status:"canceled",   
  },
  
];



const PlannerCard = () => {
  return (
    <PageBody>
        <DivP>
          <Header>
            <DivPlanner>
              <Headline type={"Headline3"} name={"Planner Of Day"}/>
            </DivPlanner>
            <Ddata>
              <Headline type={"Headline5"} name={"Mach 03th"}></Headline>
            </Ddata>
          </Header>
          {clientes.map((item) => (
            <Card
              key={item.id}
              subject={item.subject}
              releaseTrain={item.releaseTrain}
              emailClient={item.emailClient}
              emailUser={item.emailUser}
              client={item.client}
              guests={item.guests}
              userName={item.userName}
              status={item.status}
            />
          ))}
        </DivP>
    </PageBody>
  );
};

export default PlannerCard;
