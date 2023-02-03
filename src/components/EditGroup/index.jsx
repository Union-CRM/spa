import React from "react";
import { Card, H1, Box, BoxInput, Div, DivBox } from "./styles";
import FieldsGroupCard from "../Input/FieldsGroupCard";
import ButtonDefault from "../../assets/Buttons/ButtonDefault";

const EditGroup = (props, title) => {
  return (
    <Card>
      <H1> {props.title}</H1>
      <FieldsGroupCard
        label={"Name"}
        label2={"Costumers"}
        placeholder1={"placeholder"}
        placeholder2={"placeholder"}
        placeholder3={"Select"}
      />
      <Div>
        <ButtonDefault type={"true"} name={"Confirm"} />
        <ButtonDefault type={"false"} name={"Cancel"} />
      </Div>
    </Card>
  );
};
export default EditGroup;
