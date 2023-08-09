import React from "react";
import { Container, DivInfo, DivCenter } from "./styles";

const PlannerCards = (props) => {
  const isEven = props.index % 2 === 0;
  const cardColor = isEven ? "#fffff" : "pink";
  return (
    <Container color={cardColor}>
      <DivInfo>
        <DivCenter>{props.planner.user.split(/(\s).+\s/).join("")}</DivCenter>
      </DivInfo>
      <DivInfo>
        <DivCenter>{props.planner.client.split(/(\s).+\s/).join("")}</DivCenter>
      </DivInfo>
      <DivInfo>
        <DivCenter>{props.planner.client_role_name}</DivCenter>
      </DivInfo>
      <DivInfo>
        <DivCenter>{props.planner.subject}</DivCenter>
      </DivInfo>
      <DivInfo>
        <DivCenter>{props.planner.date.split(" ")[0]}</DivCenter>
      </DivInfo>
      <DivInfo>
        <DivCenter>
          {props.planner.createdBy_name.split(/(\s).+\s/).join("")}
        </DivCenter>
      </DivInfo>
      <DivInfo>
        <DivCenter>{props.planner.status}</DivCenter>
      </DivInfo>
    </Container>
  );
};

export default PlannerCards;
