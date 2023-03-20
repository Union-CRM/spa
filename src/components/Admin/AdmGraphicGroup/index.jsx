import React from "react";
import IconSystem from "../../assets/IconSystem";
import {
  PositionTitle,
  Container,
  TotalMembers,
  PositionIcon,
  PositionSpan,
  TotalGroups,
  PositionTotal,
  MembersPerGroup,
  PositionIconGroups,
  PositionSpanGroups,
  PositionQuantity,
} from "./styles";
import { Donut } from "./Donut";

const GraphicGroup = () => {
  const grupos = [
    {
      id: 1,
      group: 1,
    },
    {
      id: 2,
      group: 1,
    },
    {
      id: 3,
      group: 2,
    },
    {
      id: 4,
      group: 3,
    },
    {
      id: 5,
      group: 2,
    },
    {
      id: 6,
      group: 3,
    },
    {
      id: 7,
      group: 4,
    },
    {
      id: 8,
      group: 4,
    },
    {
      id: 9,
      group: 6,
    },
    {
      id: 10,
      group: 4,
    },
  ];

  const People = grupos.map((item) => {
    return item.id;
  });

  const uniqueGroups = [
    ...new Map(grupos.map((item) => [item["group"], item])).values(),
  ];

  return (
    <Container>
      <TotalGroups>
        <PositionIconGroups>
          <IconSystem icon={"PeopleTeams"} width={"44px"} height={"50px"} />
        </PositionIconGroups>
        <PositionSpanGroups>
          <p>Groups</p>
        </PositionSpanGroups>
        <PositionQuantity>
          <p>{uniqueGroups.length}</p>
        </PositionQuantity>
      </TotalGroups>
      <TotalMembers>
        <PositionIcon>
          <IconSystem icon={"PeopleTeams"} width={"57px"} height={"38px"} />
        </PositionIcon>
        <PositionSpan>
          <p>Total Members</p>
        </PositionSpan>
        <PositionTotal>
          <p>{People.length}</p>
        </PositionTotal>
      </TotalMembers>
      <MembersPerGroup>
        <PositionTitle>
          <p>Members Per Group</p>
        </PositionTitle>
        <Donut />
      </MembersPerGroup>
    </Container>
  );
};

export default GraphicGroup;
