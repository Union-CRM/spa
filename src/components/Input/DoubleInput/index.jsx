import React from "react";
import { useState } from "react";
import { Input, Container, Label, Box } from "./styles";

const DoubleInput = () => {
  const [name, setName, names, setNames] = useState();

  return (
    <>
      <Container>
        <Box>
          <Label for="Name">Name </Label>

          <Input
            type="text"
            id="Name"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <Label for="Name">Name</Label>
          <Input
            type="text"
            id="Names"
            placeholder="Names"
            value={names}
            onChange={(event) => setNames(event.target.value)}
          />
        </Box>
      </Container>
    </>
  );
};

export default DoubleInput;
