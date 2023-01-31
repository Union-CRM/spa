import React from 'react'
import { IconDefault } from './styles';

const IconSystem = ({icon,height,width}) => {

    const IconImage = require(`../svg/${icon.toLowerCase()}.svg`);
  
  return (
      <IconDefault src={IconImage} alt={icon}  height ={height} width= {width}/>
  )
}

export default IconSystem