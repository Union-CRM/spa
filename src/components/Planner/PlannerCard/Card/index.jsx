import React from "react";
import Body from "../../../../assets/FontSystem/Body";
import Headline from "../../../../assets/FontSystem/Headline";
import { FontSubtitle } from "../../../../assets/FontSystem/styles";
import Subtitle from "../../../../assets/FontSystem/Subtitle";
import IconSystem from "../../../../assets/IconSystem";
import { useState } from 'react'

import {
  ContainerCards,
  DivStatus,
  Time,
  Setor,
  ReleaseTrain,
  EmailUser,
  Status,
  DivPhoto,
  DivUserInformation,
  PositionStatus,
  DivTextCard,
  TextClient,
  TextEmail,
  TextGuests,
  ClientContent,
  UserContent,
  DivStatusTime,
  DivNameEmail,
  DivIcon,
} from "./styles";

function Split(n) {
  const name= n? n:""
  var nameSplit=name.split(" ")
  var name2=nameSplit[0].split("")[0]+" "+nameSplit[nameSplit.length-1].split("")[0]+"";
  return name2.toUpperCase();
}

const Card = (props) => {
  const time=props.initial.split(" ")[1].split(":");
  const [timeStart] = useState(`${time[0]}:${time[1]}`);
  
  
  
  //const corStatus=
  return (
    <>
      <ContainerCards>
        <ClientContent>
          <Setor>
            <Headline type={"Headline5"} name={props.subject} />
          </Setor>
          <ReleaseTrain>
            <Subtitle
              type={"TitleMed"}
              name={props.releaseTrain}
              colorFont={"#007BFF"}
            />
          </ReleaseTrain>
          <DivTextCard>
            <TextClient>
              <Subtitle
                type={"TextDescription"}
                name={"Client:"}
                colorFont={"#1E2222"}
              />
              <Subtitle
                type={"TextDescription"}
                name={props.client}
                colorFont={"#888888"}
              />
            </TextClient>
            <TextEmail>
              <Subtitle
                type={"TextDescription"}
                name={"Email:"}
                colorFont={"#1E2222"}
              />
              <Subtitle
                type={"TextDescription"}
                name={props.emailClient}
                colorFont={"#888888"}
              />
            </TextEmail>
            <TextGuests>
              <Subtitle
                type={"TextDescription"}
                name={"Guests:"}
                colorFont={"#1E2222"}
              />
              {props.guests}
            </TextGuests>
          </DivTextCard>
        </ClientContent>
        <UserContent>
          {props.status === "SCHEDULED" && (
            <DivIcon  onClick={()=> props.OpenModal()}>
            <IconSystem icon={"Edit"} width={"11px"} height={"11px"}/>
          </DivIcon >
          )}
          <DivStatusTime>
            <DivStatus $mode={props.status} />
            {timeStart} - {props.finish}
          </DivStatusTime>
          <DivUserInformation>
            <DivPhoto>
              <Body
                type={"Body1"}
                name={Split(props.userName)
                 /* props.userName
                  .split(/\s/)
                  .reduce(
                    (response, word) => (response += word.slice(0, 1)),
                    ""
                  )*/}
              />
            </DivPhoto>
            <DivNameEmail>
              <Subtitle type={"TitleMed"} name={props.userName}></Subtitle>

              <Subtitle
                type={"TextDescription"}
                name={props.emailUser}
                colorFont={"#888888"}
              ></Subtitle>

              <Status $mode={props.status}>
                <PositionStatus>
                  <Subtitle
                    type={"TextDescription2"}
                    name={props.status}
                    colorFont={"#FFFFFF"}
                  />
                </PositionStatus>
              </Status>
            </DivNameEmail>
          </DivUserInformation>
        </UserContent>
      </ContainerCards>
    </>
  );
};
export default Card;
