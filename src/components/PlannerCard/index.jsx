import React from "react";
import Card from './card';
import Clientes from './clientes'
import { DivMain, Div, Ul, H1} from "./styles";

function createCard(cliente){
  return (
    <Card
      area={cliente.area}
      nome={cliente.nome}
      email = {cliente.email}
    />
  )
}
class PlannerCard extends React.Component {
  render() {
    return (

      <DivMain>

        <Div>
          
          <H1>18 - January</H1>
          <Ul>
            {Clientes.map(createCard)}
           
          </Ul>

        </Div>

      </DivMain>

    );
  }
}

export default PlannerCard;
