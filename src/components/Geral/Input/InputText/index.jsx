import React from "react";
import { useState } from "react";
import { TextArea, Container, Label } from "./styles";

const InputTextArea = (props) => {
  const [name, setName] = useState();

  return (
    <>
      <Container>
        <Label>
          {props.label}
          <TextArea
            rows={props.rows}
            type="text"
            placeholder={props.placeholder}
            widthInput={props.widthText}
            value={name}
            required={props.required}
            onChange={props.onChange}
          />
        </Label>
      </Container>
    </>
  );
};

export default InputTextArea;
