import React  from "react";
import img from './img.svg';
import {Li, P,H2, P1, Img, P2, P3, DivStatus, Horas } from "./styles";
const Card = (props) => {
    return(
        <Li>
            <DivStatus />
            <Horas>11:00 - 12:00</Horas>
            <Img src={img} alt="Minha Imagem SVG"/> 
            <H2>{props.area}</H2>
            <P>{props.nome}</P>
            <P1>{props.email}</P1>
            <P2>{props.nome}</P2>
            <P3>{props.email}</P3>
      </Li>
    )
  }
export default Card;
