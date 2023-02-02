import React from "react";
import { useState } from "react";
import { Input, Container } from "./styles";

const InputDefault = (props) => {
  const [name, setName, info, setInfo] = useState();
  return (
    <>
      <Container>
        <label>
          <Input
            type="text"
            id="nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          <Input
            type="text"
            id="info"
            value={info}
            onChange={(event) => setInfo(event.target.value)}
          />
        </label>
      </Container>
    </>
  );
};

export default InputDefault;
