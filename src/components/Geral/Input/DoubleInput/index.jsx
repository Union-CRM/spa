import React from "react";
import { useState } from "react";
import { Input, Container, Label, Box } from "./styles";

const DoubleInput = (props, placeholder) => {
  const [name, setName] = useState();

  return (
    <>
      <Container>
        <Box>
          <Label>{props.label}</Label>
          <Input
            type="text"
            placeholder={props.placeholder}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Box>
      </Container>
    </>
  );
};

export default DoubleInput;
