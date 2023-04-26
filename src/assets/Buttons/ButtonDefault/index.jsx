import React from "react";
import { Button } from "./styles";

const ButtonDefault=(props)=>{
    return (
        <Button
          onClick={props.onClick}
          $mode={props.type}
          type={props.type}
          weightFont={props.weightFont}
          sizeFont={props.sizeFont}
          sizeWidth={props.sizeWidth}
          sizeHeight={props.sizeHeight}
        >
          {props.name}
        </Button>
    );
  
}
export default ButtonDefault;
