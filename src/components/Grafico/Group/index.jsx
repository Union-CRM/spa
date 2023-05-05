import React from "react";
import Body from "../../../assets/FontSystem/Body";
import Subtitle from "../../../assets/FontSystem/Subtitle";
import { useState } from "react";

import {
  ContainerCards,
  DivInfo,
  NameGroup,
  DivPhoto,
  DivUserInformation,
  DivTextCard,
  TextSubject,
  ClientContent,
  UserContent,
  DivResponsible,
  DivNameEmail,
  NameUser,
  TitleDiv,
  H1,
  DivDonut,
} from "./styles";
import DonutChart from "./DonutChart";

function Split(n) {
  const name = n ? n : "";
  var nameSplit = name.split(" ");
  var name2 =
    nameSplit[0].split("")[0] +
    " " +
    nameSplit[nameSplit.length - 1].split("")[0] +
    "";
  return name2.toUpperCase();
}

const Group = (props) => {
  return (
    <>
      <ContainerCards>
        <ClientContent>
          <TitleDiv>
            <H1>Group</H1>
          </TitleDiv>
          <NameGroup>
            <Body type={"Body1"} name={"Fábrica Itaú - Torre 1 "} />
          </NameGroup>
          <DivInfo>
            <Body type={"Body3"} name={"Itaú"} colorFont={"rgba(0, 0, 0, 1)"} />
            <Body
              type={"Body3"}
              name={"Users"}
              colorFont={"rgba(0, 0, 0, 1)"}
            />
          </DivInfo>
          <DivTextCard>
            <TextSubject>
              <Subtitle
                type={"TextDescription"}
                name={"Subjects"}
                colorFont={"rgba(136, 136, 136, 1)"}
              />
              <DonutChart />
            </TextSubject>
            <TextSubject>
              <Subtitle
                type={"TextDescription"}
                name={"Planners"}
                colorFont={"rgba(136, 136, 136, 1)"}
              />
              <DivDonut>
                <DonutChart />
              </DivDonut>
            </TextSubject>
          </DivTextCard>
        </ClientContent>
        <UserContent>
          <DivResponsible>
            <Body
              type={"Body3"}
              name={"TCS Responsible"}
              colorFont={"rgba(0, 0, 0, 1)"}
            />
          </DivResponsible>
          <DivUserInformation>
            <DivPhoto>
              <Body type={"Body1"} name={Split(props.userName)} />
            </DivPhoto>
            <DivNameEmail>
              <NameUser>{props.userName}</NameUser>
              <Subtitle
                type={"TextDescription"}
                name={props.emailUser}
                colorFont={"#888888"}
              ></Subtitle>
            </DivNameEmail>
          </DivUserInformation>
        </UserContent>
      </ContainerCards>
    </>
  );
};
export default Group;
