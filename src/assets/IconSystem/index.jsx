import React from "react";
import { IconDefault } from "./styles";

const IconSystem = ({ icon, height, width, color }) => {
  const IconImage = require(`../svg/${icon}.svg`);

  return (
    <IconDefault
      src={IconImage}
      alt={icon}
      height={height}
      width={width}
      color={color}
    />
  );
};

export default IconSystem;
