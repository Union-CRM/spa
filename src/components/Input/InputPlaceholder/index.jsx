import { React, useState } from "react";
import { Input, Container, Label, Div } from "./styles";

const InputPlaceHolder = (props) => {
  const [name, setName] = useState();
  return (
    <>
      <Container>
        <Div>
          <Label>Name</Label>
          <Input
            type="text"
            id="nome"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Div>
      </Container>
    </>
  );
};

export default InputPlaceHolder;
