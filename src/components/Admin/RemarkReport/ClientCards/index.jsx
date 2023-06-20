import React from 'react'
import { Container, DivInfo, DivCenter } from "./styles";
const ClientsCards = (props) => {
    const isEven = props.index % 2 === 0;
    const cardColor = isEven ? "#fffff" : "pink";
    return (
      <Container color={cardColor}>
        <DivInfo>
          <DivCenter>{props.client.client}</DivCenter>
        </DivInfo>
        <DivInfo>
          <DivCenter>{props.client.textBusiness.split(/(\s).+\s/).join("")}</DivCenter>
        </DivInfo>
        <DivInfo>
          <DivCenter>{props.client.textRelease}</DivCenter>
        </DivInfo>
        <DivInfo>
          <DivCenter>{props.client.user_name.split(/(\s).+\s/).join("")}</DivCenter>

        </DivInfo>
        <DivInfo>
        <DivCenter>{props.client.projectManager.split(/(\s).+\s/).join("")}</DivCenter>
        </DivInfo>
        <DivInfo>
          <DivCenter>{props.client.director.split(/(\s).+\s/).join("")}</DivCenter>
        </DivInfo>
        <DivInfo>
          <DivCenter>{props.client.superintendent.split(/(\s).+\s/).join("")}</DivCenter>
        </DivInfo>
        
       
      </Container>
    );
  };

export default ClientsCards