import React from "react";
//import Select from "react-select";

import {
  SelectOptions,
  Container,
  Label,
  Box,
  Input,
  InputDouble,
  Div,
} from "./styles";
import { MultiSelect } from "./SelectMulti";

const FieldsGroupCard = ({
  nameGroup,
  costumers,
  users,
  setGroup,
  setCostumers,
  ...props
}) => {
  return (
    <>
      <Container>
        <Box>
          <Label for="NameGroup">Name Group</Label>

          <Input
            type="text"
            id="NameGroups"
            placeholder="Fabrica Itáu - Torre 1"
            value={nameGroup}
            onChange={(event) => setGroup(event.target.value)}
          />

          <Div>
            <Label for="Costumers">Costumers</Label>

            <InputDouble
              type="text"
              id="Costumers"
              placeholder="Itaú"
              value={costumers}
              onChange={(event) => setCostumers(event.target.value)}
            />

            <Label for="Users">Users</Label>
            <SelectOptions>
              <MultiSelect />
            </SelectOptions>
          </Div>
        </Box>
      </Container>
    </>
  );
};
export default FieldsGroupCard;
