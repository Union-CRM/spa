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
  DivBox,
  DivBox2,
} from "./styles";
import { MultiSelect } from "../SelectMulti";

const FieldsGroupCard = (props) => {
  const [nameGroup, setGroup] = useState();
  const [costumers, setCostumers] = useState();

  const options = [
    { value: 1, label: "Phellype Flaibam", color: "#3ddc97" },
    { value: 2, label: "Carlos Costa", color: "#ACD4FF" },
    { value: 3, label: "Alexandre Sarda", color: "#FFE60082" },
    { value: 4, label: "Patricia Melo", color: "#FFB2D1" },
  ];

  return (
    <>
      <Container>
        <DivBox>
          <Label>{props.label}</Label>
          <Input
            type="text"
            id={props.id1}
            placeholder={props.placeholder1}
            value={nameGroup}
            onChange={(event) => setGroup(event.target.value)}
          />
        </DivBox>

        <Box>
          <DivBox2>
            <Label>{props.label2}</Label>
            <InputDouble
              type="text"
              id={props.id2}
              placeholder={props.placeholder2}
              value={costumers}
              onChange={(event) => setCostumers(event.target.value)}
            />
          </DivBox2>

          <SelectOptions>
            <MultiSelect
              label3={"Users"}
              option={options}
              placeholder={props.placeholder3}
            />
          </SelectOptions>
        </Box>
      </Container>
    </>
  );
};
export default FieldsGroupCard;
