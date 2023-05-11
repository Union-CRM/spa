import React from "react";
import {
  Container,
  TitleDiv,
  H1,
  BoxInactive,
  TextBox,
  BoxActive,
  Box,
  Line,
} from "./styles";
import { useReleaseContext } from "../../../../hook/useReleaseContent";
import { useBusinessContext } from "../../../../hook/useBusinessContent";

const ContainerCardInfo = () => {
  const { release } = useReleaseContext();
  const { business } = useBusinessContext();

  return (
    <Container>
      <TitleDiv>
        <H1>Release Train</H1>
      </TitleDiv>
      <Box>
        <BoxActive>
          {release ? release.filter((r) => r.status === "ATIVO").length : 0}
        </BoxActive>
        <TextBox>Active</TextBox>
      </Box>

      <Box>
        <BoxInactive>
          {release ? release.filter((r) => r.status === "INATIVO").length : 0}
        </BoxInactive>
        <TextBox>Inactive</TextBox>
      </Box>
      <Line />
      <TitleDiv>
        <H1>Business</H1>
      </TitleDiv>
      <Box>
        <BoxActive>
          {business ? business.filter((b) => b.status === "ATIVO").length : 0}
        </BoxActive>
        <TextBox>Active</TextBox>
      </Box>
      <Box>
        <BoxInactive>
          {business ? business.filter((b) => b.status === "INATIVO").length : 0}
        </BoxInactive>
        <TextBox>Inactive</TextBox>
      </Box>
    </Container>
  );
};

export default ContainerCardInfo;
