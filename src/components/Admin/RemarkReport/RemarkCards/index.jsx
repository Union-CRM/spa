import React from "react";
import { Container, DivInfo, DivCenter } from "./styles";

const RemarkCards = (props) => {
  const isEven = props.index % 2 === 0;
  const cardColor = isEven ? "#fffff" : "pink";
  return (
    <Container color={cardColor}>
      <DivInfo>
        <DivCenter>
          {props.remark.user_name.split(/(\s).+\s/).join("")}
        </DivCenter>
      </DivInfo>
      <DivInfo>
        <DivCenter>{props.remark.client_name}</DivCenter>
      </DivInfo>
      <DivInfo>
        <DivCenter>{props.remark.client_role_name}</DivCenter>
      </DivInfo>
      <DivInfo>
        <DivCenter>{props.remark.subject_name}</DivCenter>
      </DivInfo>
      <DivInfo>
        <DivCenter>{props.remark.remark_name}</DivCenter>
      </DivInfo>
      <DivInfo>
        <DivCenter>{props.remark.date.split("T")[0]}</DivCenter>
      </DivInfo>
      <DivInfo>
        <DivCenter>{props.remark.date_return.split("T")[0]}</DivCenter>
      </DivInfo>
    </Container>
  );
};

export default RemarkCards;
