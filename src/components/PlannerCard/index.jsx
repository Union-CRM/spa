import React from "react";
import { DivP, H1, DivMain } from "./styles";
import Card from "./Card";


const PlannerCard = (props) =>  {
    
    return (

      
      <DivMain>
        <DivP>
            <H1>18 - January</H1>
      
          
            {props.array.map((item) => (
      
            <Card

              name1={item.name1}
              email1={item.email1}
              name2={item.name2}
              email2={item.email2}
              sector = {item.sector}
            />

              ))}

        </DivP>
      </DivMain>
      

      

    );

}

export default PlannerCard;
