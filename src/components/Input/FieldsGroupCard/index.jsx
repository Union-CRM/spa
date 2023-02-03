import React from "react";
import { useState } from "react";
//import Select from "react-select";
import {
  SelectOptions,
  Container,
  Label,
  Box,
  Input,
  InputDouble,
} from "./styles";
import { MultiSelect } from "../SelectMulti";

const FieldsGroupCard = (props) => {
  const [nameGroup, setGroup] = useState();
  const [costumers, setCostumers] = useState();
  return (
    <>
      <Container>
        <Label>{props.label}</Label>

        <Input
          type="text"
          id="NameGroups"
          placeholder={props.placeholder}
          value={nameGroup}
          onChange={(event) => setGroup(event.target.value)}
        />
        <Box>
          <Label>{props.label2}</Label>
          <InputDouble
            type="text"
            id="costumers"
            placeholder={props.placeholder}
            value={costumers}
            onChange={(event) => setCostumers(event.target.value)}
          />

          <SelectOptions>
            <MultiSelect />
          </SelectOptions>
        </Box>
      </Container>
    </>
  );
};
export default FieldsGroupCard;
