import React from "react";
import { useState } from "react";
import { Input, Container } from "./styles";

const InputDefault = (props) => {
  const [name, setName] = useState();
  return (
    <>
      <Container>
        <Input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Container>
    </>
  );
};

export default InputDefault;
