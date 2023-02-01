import React from "react";
import { useState } from "react";
import { Input, Container, Label } from "./styles";

const InputWithName = (props) => {
  const [name, setName] = useState();
  const [info, setInfo] = useState();
  return (
    <>
      <Container>
        <Label>Name </Label>
        <Input
          type="text"
          id="nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br></br>

        <Label>Name </Label>
        <Input
          type="text"
          id="nome"
          value={info}
          onChange={(event) => setInfo(event.target.value)}
        />
      </Container>
    </>
  );
};

export default InputWithName;
