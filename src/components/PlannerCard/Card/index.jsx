import React  from "react";


import {Li, P,H2, P1, Img, P2, P3, DivStatus, Horas} from "./styles";
const Card = (props) => {
    return(

      
            <>
            
            
            <Li>
                
                <DivStatus />
                <Horas>11:00 - 12:00</Horas>
                <H2>{props.sector}</H2>
                <P>{props.name1}</P>
                <P2>{props.name2}</P2>
                <P1>{props.email1}</P1>
                <P3>{props.email2}</P3>
                
              
              
          </Li>
          
          </>


    )
  }
export default Card;
