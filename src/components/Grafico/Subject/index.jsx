// Style - Css
import Body from "../../../assets/FontSystem/Body";
import {
  Container,
  TitleDiv,
  SquareDiv,
  SquareText,
  LateSquare,
  NearSquare,
  OnTimeSquare,
  H1,
  Subject,
  Planner,
  DivSeparete,
  Line,
} from "./styles";

const Grafic = (props) => {
  return (
    <Container>
      <TitleDiv>
        <H1>Subject</H1>
      </TitleDiv>
      <SquareDiv>
        <LateSquare>{props.numberOfSubjeccts[0]}</LateSquare>
        <SquareText>Canceled</SquareText>
      </SquareDiv>

      <SquareDiv>
        <NearSquare>{props.numberOfSubjeccts[1]}</NearSquare>
        <SquareText>Finished</SquareText>
      </SquareDiv>
      <SquareDiv>
        <OnTimeSquare>{props.numberOfSubjeccts[2]}</OnTimeSquare>
        <SquareText>In Progress</SquareText>
      </SquareDiv>
      <Line />

      <TitleDiv>
        <H1>Planner</H1>
      </TitleDiv>
      <SquareDiv>
        <LateSquare>{props.numberOfPlanner[0]}</LateSquare>
        <SquareText>Canceled</SquareText>
      </SquareDiv>

      <SquareDiv>
        <NearSquare>{props.numberOfPlanner[1]}</NearSquare>
        <SquareText>Scheduled</SquareText>
      </SquareDiv>
      <SquareDiv>
        <OnTimeSquare>{props.numberOfPlanner[2]}</OnTimeSquare>
        <SquareText>Done</SquareText>
      </SquareDiv>
      <Line />
      <TitleDiv>
        <H1>Remark</H1>
      </TitleDiv>
      <SquareDiv>
        <LateSquare>{props.numberOfRemark[0]}</LateSquare>
        <SquareText>Canceled</SquareText>
      </SquareDiv>

      <SquareDiv>
        <NearSquare>{props.numberOfRemark[1]}</NearSquare>
        <SquareText>Finished</SquareText>
      </SquareDiv>
      <SquareDiv>
        <OnTimeSquare>{props.numberOfRemark[2]}</OnTimeSquare>
        <SquareText>Active</SquareText>
      </SquareDiv>
    </Container>
  );
};

export default Grafic;
