import React from "react";
import Body from "../../../assets/FontSystem/Body";
import Headline from "../../../assets/FontSystem/Headline";
import { FontSubtitle } from "../../../assets/FontSystem/styles";
import Subtitle from "../../../assets/FontSystem/Subtitle";
import IconSystem from "../../../assets/IconSystem";

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


const Card = (props) => {

  //const corStatus=
  return (
    <>
      <ContainerCards>
        <ClientContent>
          <Setor>
            <Headline type={"Headline5"} name={props.subject}/>
          </Setor>
          <ReleaseTrain>
            <Subtitle type={"TitleMed"} name={props.releaseTrain} colorFont={"#007BFF"}/>
          </ReleaseTrain>
          <DivTextCard>
            <TextClient>
              <Subtitle type={"TextDescription"} name={"Client:"} colorFont={"#1E2222"}/>
              <Subtitle type={"TextDescription"} name={props.client} colorFont={"#888888"}/>
            </TextClient>
            <TextEmail>
              <Subtitle type={"TextDescription"} name={"Email:"} colorFont={"#1E2222"}/>
              <Subtitle type={"TextDescription"} name={props.emailClient} colorFont={"#888888"}/>
            </TextEmail>
            <TextGuests>
              <Subtitle type={"TextDescription"} name={"Guests:"} colorFont={"#1E2222"}/>
              <Subtitle type={"TextDescription"} name={props.guests} colorFont={"#888888"}/>
            </TextGuests>
          </DivTextCard>
        </ClientContent>
          
        
        
        <UserContent>
          <DivIcon>
            <IconSystem icon={"Edit"} width={"11px"} height={"11px"}/>
          </DivIcon>
          <DivStatusTime>
            <DivStatus $mode={props.status}/>
            <Body type={"Body2"} name={"11:00 - 12:00"} colorFont={"#000000"}></Body> 
          </DivStatusTime>  
          <DivUserInformation>
              <DivPhoto>
                <Body type={"Body1"} name={props.userName.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')} />
              </DivPhoto>
              <DivNameEmail>
                <Subtitle type={"TitleMed"} name={props.userName}></Subtitle>
                <Subtitle type={"TextDescription"} name={props.emailUser} colorFont={"#888888"}></Subtitle>
                <Status $mode={props.status}>
                  <PositionStatus>
                      <Subtitle type={"TextDescription2"} name={props.status} colorFont={"#FFFFFF"}/>
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
