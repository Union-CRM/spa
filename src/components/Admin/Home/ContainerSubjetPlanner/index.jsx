import React from "react";
import {
  Container,
  TitleDiv,
  H1,
  BoxDone,
  BoxScheduled,
  TextBox,
  BoxCanceled,
  Box,
  Line,
} from "./styles";
import { useSubjectContext } from "../../../../hook/useSubjectContent";
import { usePlannerContext } from "../../../../hook/usePlannerContext";

const ContainerSubjectPlanner = () => {
  const { subject } = useSubjectContext();
  const { planner } = usePlannerContext();

  return (
    <Container>
      <TitleDiv>
        <H1>Subject</H1>
      </TitleDiv>
      <Box>
        <BoxDone>
          {subject ? subject.filter((s) => s.status === "FINISHED").length : 0}
        </BoxDone>
        <TextBox>Fineshed</TextBox>
      </Box>

      <Box>
        <BoxScheduled>
          {subject
            ? subject.filter((s) => s.status === "IN PROGRESS").length
            : 0}
        </BoxScheduled>
        <TextBox>In Progress</TextBox>
      </Box>
      <Box>
        <BoxCanceled>
          {subject ? subject.filter((s) => s.status === "CANCELED").length : 0}
        </BoxCanceled>
        <TextBox>Canceled</TextBox>
      </Box>
      <Line />

      <TitleDiv>
        <H1>Planner</H1>
      </TitleDiv>
      <Box>
        <BoxDone>
          {planner ? planner.filter((p) => p.status === "DONE").length : 0}
        </BoxDone>
        <TextBox>Done</TextBox>
      </Box>
      <Box>
        <BoxScheduled>
          {planner ? planner.filter((p) => p.status === "SCHEDULED").length : 0}
        </BoxScheduled>
        <TextBox>Scheduled</TextBox>
      </Box>
      <Box>
        <BoxCanceled>
          {planner ? planner.filter((p) => p.status === "CANCELED").length : 0}
        </BoxCanceled>
        <TextBox>Canceled</TextBox>
      </Box>
    </Container>
  );
};

export default ContainerSubjectPlanner;
