import React, { useState } from "react";
import {
  ContainerDetails,
  DivBetween,
  DivName,
  DivEmail,
  DivBusiness,
  DivRelease,
  DivDescription,
} from "./styles";

const SubjectsDetails = ({ title, setModal }) => {
  return (
    <ContainerDetails>
      <DivBetween>
        <DivName>
          Client Name
          <span>Flavio Alcantara Martins dos Santos</span>
        </DivName>

        <DivEmail>
          Email
          <span>flavio.martins@tcs.com</span>
        </DivEmail>
      </DivBetween>

      <DivBetween>
        <DivRelease>
          Release Train
          <span>Jornada Digital itaubers</span>
        </DivRelease>

        <DivBusiness>
          Business
          <span>FINANÇAS RISCO DE CRÉDITO E CAPITAL</span>
        </DivBusiness>
      </DivBetween>

      <DivDescription>
        Description
        <span>
          Objetivos da apresentação: Identificar as necessidades do cliente e
          compreender seus objetivos; Apresentar a expertise da consultoria de
          TI em serviços financeiros; Discutir as soluções personalizadas que
          podem ser oferecidas para as necessidades específicas da instituição
          financeira;
        </span>
      </DivDescription>
    </ContainerDetails>
  );
};

export default SubjectsDetails;
