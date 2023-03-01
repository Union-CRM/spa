import React from "react";

import {
  ContainerCards,
  DivStatus,
  Horas,
  Setor,
  NameClient,
  NameUser,
  EmailClient,
  EmailUser,
} from "./styles";
const Card = (props) => {
  return (
    <>
      <ContainerCards>
        <DivStatus />
        <Horas>11:00 - 12:00</Horas>
        <Setor>{props.sector}</Setor>
        <NameClient>{props.name1}</NameClient>
        <NameUser>{props.name2}</NameUser>
        <EmailClient>{props.email1}</EmailClient>
        <EmailUser>{props.email2}</EmailUser>
      </ContainerCards>
    </>
  );
};
export default Card;
