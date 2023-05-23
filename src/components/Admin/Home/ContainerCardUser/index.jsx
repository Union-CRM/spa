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
import ClientCard from "./CardListView/index";
import { useState, useEffect } from "react";
import { useUserContext } from "../../../../hook/useUserContext";

const ContainerCards = () => {
  const { loadUserList, userList } = useUserContext();
  const [active] = useState(abaStatus.ACTIVE);

  useEffect(() => {
    loadUserList();
  }, []);
  // States modal//
  return (
    <>
      <ContainerHeaderAndCards>
        <HeaderContainerCards>
          <Top>
            <DivTitlePage>
              <H1>Users </H1>
              <HowManyClientList>
                (
                {userList
                  ? userList.filter((item) => item.status === active).length
                  : 0}
                )
              </HowManyClientList>{" "}
            </DivTitlePage>

            <DivButton></DivButton>
          </Top>
        </HeaderContainerCards>

        <CardsContainer>
          <LineDivisor />

          <BoardStyle>
            {userList &&
              userList
                .filter((u) => u.status === active)
                .map((u) => <ClientCard key={u.id} id={u.id} />)}
          </BoardStyle>
        </CardsContainer>
      </ContainerHeaderAndCards>
    </>
  );
};
export default ContainerCards;

const abaStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
};
