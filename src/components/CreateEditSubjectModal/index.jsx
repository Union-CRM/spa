import React from "react";
import {
  Container,
  PositionButtonSave,
  PositionButtonCancel,
  DivFather,
  PositionTitle,
} from "./styles";
import InputWithName from "../Input/InputWithName";
import SingleSelect from "../Input/SingleSelect";
import ButtonDefault from "../../assets/Buttons/ButtonDefault";
import Headline from "../../assets/FontSystem/Headline";
import InputText from "../Input/InputText";

const values = [
  { value: 1, label: "Finanças Crédito e Risco Capital" },
  { value: 2, label: "Cartões, Négócios e Financeiro" },
  { value: 3, label: "Cash Management" },
  { value: 4, label: "Crédito Consignado" },
  { value: 5, label: "Consórcio" },
];

const valuesRealese = [
  { value: 1, label: "Inteligência Comercial" },
  { value: 2, label: "Solucões Vic e Cartões" },
  { value: 3, label: "Receber e Arrecadar PJ" },
  { value: 4, label: "Proteção e Comunicação com o Cliente" },
  { value: 5, label: "Experiência Digital" },
];

const Subject = ({ title, setModal }) => {
  const closeModal = () => {
    setModal(false);
  };
  const saveModal = () => {
    setModal(false);
  };

  return (
    <Container>
      <DivFather>
        <PositionTitle>
          <Headline type={"Headline3"} name={title} />
        </PositionTitle>

        <SingleSelect
          label={"Release Train"}
          options={valuesRealese}
          sizeSingle={"82%"}
          sizeMenu={"82%"}
        />

        <SingleSelect
          label={"Business"}
          options={values}
          sizeMenu={"82%"}
          sizeSingle={"82%"}
        />

        <InputWithName label={"Client Name"} widthInput={"80%"} />

        <InputWithName label={"Email"} widthInput={"80%"} />

        <InputWithName label={"Subject"} widthInput={"80%"} />

        <InputText label={"Description"} rows={6} widthText={"80%"} />

        <PositionButtonSave onClick={saveModal}>
          <ButtonDefault type={"userSave"} name={"Save"} />
        </PositionButtonSave>
        <PositionButtonCancel onClick={closeModal}>
          <ButtonDefault type={"userCancel"} name={"Cancel"} />
        </PositionButtonCancel>
      </DivFather>
    </Container>
  );
};

export default Subject;
