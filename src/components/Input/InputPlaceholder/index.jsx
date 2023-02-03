import { React, useState } from "react";
import { Input, Container, Label } from "./styles";

const InputPlaceHolder = (props, placeholder) => {
  const [name, setName] = useState();
  return (
    <>
      <Container>
        <Label>{props.label}</Label>
        <Input
          type="text"
          placeholder={props.placeholder}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Container>
    </>
  );
};

export default InputPlaceHolder;
