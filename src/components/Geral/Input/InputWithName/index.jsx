import React from "react";
import { Input } from "./styles";

const InputWithName = (props, placeholder) => {
  return (
    <Input
      name={props.name}
      value={props.value}
      onChante={props.onchange}
      type="text"
      widthInput={props.widthInput}
      heightInput={props.heightInput}
      placeholder={props.placeholder}
      backgroundInput={props.backgroundInput}
    />
  );
};

export default InputWithName;
