import React from "react";
import { useState } from "react";
import { Input, Container, Label } from "./styles";

const InputWithName = (props) => {
  const [name, setName] = useState();

  return (
    <>
      <Container>
        <Label>{props.label}</Label>
        <Input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Container>
    </>
  );
};

export default InputWithName;
