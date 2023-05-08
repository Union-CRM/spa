import React from "react";
import {
  BoardStyle,
  CardsContainer,
  ContainerHeaderAndCards,
  DivButton,
  DivTitlePage,
  H1,
  HeaderContainerCards,
  HowManyClientList,
  LineDivisor,
  Top,
} from "./styles";
import { useState } from "react";
import { useGroupListContext } from "../../../../hook/useGroupListContext";
import Group from "./CardListView/index";
const abaStatus = {
  ACTIVE: "ATIVO",
  INACTIVE: "INATIVO",
};

const ContainerCardsGroup = () => {
  const { group } = useGroupListContext();

  const [active] = useState(abaStatus.ACTIVE);

  return (
    <>
      {
        <ContainerHeaderAndCards>
          <HeaderContainerCards>
            <Top>
              <DivTitlePage>
                <H1>Groups</H1>
                <HowManyClientList>
                  ({group.filter((item) => item.status === active).length})
                </HowManyClientList>{" "}
              </DivTitlePage>

              <DivButton></DivButton>
            </Top>
          </HeaderContainerCards>

          <CardsContainer>
            <LineDivisor />

            <BoardStyle>
              {group &&
                group
                  .filter((g) => g.status === active)
                  .map((g, index) => <Group key={index} id={g.id} />)}
            </BoardStyle>
          </CardsContainer>
        </ContainerHeaderAndCards>
      }
    </>
  );
};
export default ContainerCardsGroup;
