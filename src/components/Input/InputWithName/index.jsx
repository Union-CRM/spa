import React from "react";
import { useState } from "react";
import { Input, Container, Label } from "./styles";

const InputWithName = (props) => {
  const [name, setName] = useState();

  return (
    <>
      <Container>
        <Label>
          {props.label}
          <Input
            type="text"
            widthInput={props.widthInput}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Label>
      </Container>
    </>
  );
};

export default InputWithName;
