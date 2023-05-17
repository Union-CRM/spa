import React from "react";
import Body from "../../../../assets/FontSystem/Body";
import Headline from "../../../../assets/FontSystem/Headline";
import Subtitle from "../../../../assets/FontSystem/Subtitle";
import IconSystem from "../../../../assets/IconSystem";
import { useState, useEffect } from "react";
import { usePlannerContext } from "../../../../hook/usePlannerContext";
import {
  ContainerCards,
  DivStatus,
  Setor,
  ReleaseTrain,
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
  DivGuests,
  SpanGuests,
  NameUser,
} from "./styles";

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

const Card = (props) => {
  const { setModalPlanner } = usePlannerContext();
  //const [time, setTime] = useState(props.initial.split(" ")[1].split(":"));
  const [timeStart, setTimeStart] = useState();
  const handleEdit = () => {
    if(props.status === "SCHEDULED"){
      props.OpenModal();
      setModalPlanner(false);
    }
  };

  useEffect(() => {
    const time = props.initial.split(" ")[1].split(":");
    setTimeStart(`${time[0]}:${time[1]}`);
  }, [props.initial]);

  return (
    <>

      <ContainerCards $mode={whatsStatus} onClick={() => handleEdit()}>
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
                name={"Client"}
                colorFont={"#1E2222"}
              />
              <SpanGuests>{props.client}</SpanGuests>
            </TextClient>
            <TextEmail>
              <Subtitle
                type={"TextDescription"}
                name={"Email"}
                colorFont={"#1E2222"}
              />
              <SpanGuests>{props.emailClient}</SpanGuests>
            </TextEmail>
            {props.guests && (
              <TextGuests>
                <DivGuests>Guests</DivGuests>
                <SpanGuests>
                  {props.guests
                    ? props.guests.map((g) => {
                        return g.client_name + " , ";
                      })
                    : ""}
                </SpanGuests>
              </TextGuests>
            )}
          </DivTextCard>
        </ClientContent>
        <UserContent>
          {/*props.status === "SCHEDULED" && !props.home && (
            <DivIcon >
              <IconSystem icon={"Edit"} width={"11px"} height={"11px"} />
            </DivIcon>
          )*/}
          <DivStatusTime>
            <DivStatus $mode={props.status} />
            {timeStart} - {props.finish}
          </DivStatusTime>
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
