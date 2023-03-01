import React from "react";
import { DivP, H1, DivMain } from "./styles";
import Card from "./Card";
import PageBody from "../PageBody";
const clientes = [
  {
    id: 1,
    name1: "Jornada Digital Itaubers",
    name2: "Jornada Digital Itaubers",
    sector: "Finaceiro",
    email1: "juliana1.costumer@costumer.com.br",
    email2: "julian.costumer@costumer.com.br",
  },
  {
    id: 2,
    name1: "Jornada Digital Itaubers",
    name2: "Jornada Digital Itaubers",
    sector: "Finaceiro",
    email1: "juliana.costumer@costumer.com.br",
    email2: "juliana.costumer@costumer.com.br",
  },
  {
    id: 3,
    name1: "Jornada Digital Itaubers",
    name2: "Jornada Digital Itaubers",
    sector: "Finaceiro",
    email1: "juliana.costumer@costumer.com.br",
    email2: "juliana.costumer@costumer.com.br",
  },
  {
    id: 4,
    name1: "Jornada Digital Itaubers",
    name2: "Jornada Digital Itaubers",
    sector: "Finaceiro",
    email1: "juliana.costumer@costumer.com.br",
    email2: "juliana.costumer@costumer.com.br",
  },
];
const PlannerCard = () => {
  return (
    <PageBody>
      <DivMain>
        <DivP>
          <H1>18 - January</H1>

          {clientes.map((item) => (
            <Card
              key={item.id}
              name1={item.name1}
              email1={item.email1}
              name2={item.name2}
              email2={item.email2}
              sector={item.sector}
            />
          ))}
        </DivP>
      </DivMain>
    </PageBody>
  );
};

export default PlannerCard;
