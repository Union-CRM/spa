// Style - Css
import {
  Container,
  H1,
  TitleDiv,
  DivImg,
  SquareDiv,
  TextGraphic,
  SquareText,
  LateSquare,
  NearSquare,
  OnTimeSquare,
} from "./styles";
import Donut from "./Donut";

const Grafic = (props) => {
  const obj = [
    {
      titulo: "Subject",
      late: 10,
      new: 2,
      onTime: 8,
    },
    {
      titulo: "Planner",
      late: 7,
      new: 1,
      onTime: 2,
    },
  ];

  // numberOfPlanner [0]-canceled | [1]- Scheduled | [2] Done

  const value = props.value;
  return (
    <Container>
      <TitleDiv>
        <H1>{props.title}</H1>
      </TitleDiv>
      <SquareDiv>
        <SquareText>{props.legend[0]}</SquareText>
        <LateSquare>{props.value[0]}</LateSquare>
      </SquareDiv>
      <SquareDiv>
        <SquareText>{props.legend[1]}</SquareText>
        <NearSquare>{props.value[1]}</NearSquare>
      </SquareDiv>
      <SquareDiv>
        <SquareText>{props.legend[2]}</SquareText>
        <OnTimeSquare>{props.value[2]}</OnTimeSquare>
      </SquareDiv>
      <DivImg>
        <Donut></Donut>
      </DivImg>
    </Container>
  );
};

export default Grafic;
