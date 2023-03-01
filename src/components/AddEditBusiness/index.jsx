import React from "react";
import { useState } from "react";
import {
  Div,
  SubTitle,
  DivBNameStatus,
  DivBName,
  DivStatus,
} from "./styles";
import { DivTag, DivCodeSeguiment, DivButton, DivCode } from "./styles";
import ButtonDefault from "../../assets/Buttons/ButtonDefault";
import InputWithName from "../Input/InputWithName";
import makeAnimated from "react-select/animated";
import { TagComponent } from "../TagComponent";
import SingleSelect from "../Input/SingleSelect";
import DoubleInput from "../Input/DoubleInput";
import Headline from "../FontSystem/Headline";

const AddEditBusiness = ({ title }) => {
  const animatedComponents = makeAnimated();
  const [value, setValue] = useState(null);

  const option = [
    { id: 1, value: "True", label: "True" },
    { id: 2, value: "False", label: "False" },
  ];

  const dados = [
    {
      status: "success",
    },
    {
      status: "Braasil",
    },
    {
      status: "Noruefa",
    },
    {
      status: "Noruefa",
    },
    {
      status: "Noruefa",
    },
    {
      status: "Noruefa",
    },
    {
      status: "Noruefa",
    },
  ];

  return (
    <Div>
      <Headline type={"Headline3"} name={"Bussines"} />
      <DivCode>
        <InputWithName label={"Code"} width={"95%"} />
      </DivCode>

      <DivBNameStatus>
        <DivBName>
          <DoubleInput label={"Bussines Name"} width={"100%"} />
        </DivBName>
        <DivStatus>
          <SingleSelect label={"Status"} sizeSingle={"88%"} options={option} />
        </DivStatus>
      </DivBNameStatus>

      <DivCodeSeguiment>
        <InputWithName label={"Seguiment"} width={"95%"} />
      </DivCodeSeguiment>

      <SubTitle>Tag</SubTitle>
      <DivTag>
        <TagComponent />
      </DivTag>

      <DivButton>
        <ButtonDefault type={"true"}></ButtonDefault>
        <ButtonDefault type={"false"}></ButtonDefault>
      </DivButton>
    </Div>
  );
};

export default AddEditBusiness;
