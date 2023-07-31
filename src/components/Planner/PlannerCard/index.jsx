import React from "react";
import {
  DivP,
  Ddata,
  Header,
  DivPlanner,
  TextMonDay,
  DivCard,
  DivInfo,
} from "./styles";
import Card from "./Card";
import Headline from "../../../assets/FontSystem/Headline";
import { useState, useEffect } from "react";
import { usePlannerContext } from "../../../hook/usePlannerContext";
import { useUserContext } from "../../../hook/useUserContext";
import { datesAreOnSameDay } from "../Calendar/utils/utils";
import { month } from "../Calendar/utils/conts";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { ReactComponent as Info } from "../../../assets/svg/Info.svg";

const PlannerCard = (props) => {
  const { planner, setPlannerEdit, setModalEdit } = usePlannerContext();
  const { user, userTarget } = useUserContext();
  const [plannerList, setPlannerList] = useState();

  useEffect(() => {
    if (props.adminList) {
      setPlannerList(
        planner
          ? planner
              .filter((p) => p.user_id === userTarget.id)
              .sort(
                (a, b) =>
                  (b.status || "").localeCompare(a.status || "") ||
                  (a.date || "").localeCompare(b.date || "")
              )
          : []
      );
    } else {
      setPlannerList(
        planner
          ? planner
              .filter((p) => p.user_id === user.id)
              .sort(
                (a, b) =>
                  (b.status || "").localeCompare(a.status || "") ||
                  (a.date || "").localeCompare(b.date || "")
              )
          : []
      );
    }
  }, [planner]);

  const [plannerDay, setPlannerDay] = useState();

  useEffect(() => {
    if (plannerList) {
      setPlannerDay(
        plannerList.filter((planner) =>
          datesAreOnSameDay(new Date(planner.date), props.date)
        )
      );
    }
  }, [plannerList]);

  const handleEdit = (id) => {
    setPlannerEdit(plannerList.filter((p) => p.id === id)[0]);
    setModalEdit(id);
  };

  return (
    <DivP $mode={plannerDay ? plannerDay.length : 0}>
      <Header>
        <DivPlanner>
          <Headline type={"Headline3"} name={"Planner Of Day"} />
          {!props.home && (
            <Tippy content="Agenda, calendar with activites and appointments of the day">
              <DivInfo>
                <Info
                  width="25px"
                  style={{
                    fill: "#007BFF",
                  }}
                />
              </DivInfo>
            </Tippy>
          )}
        </DivPlanner>
        <Ddata>
          <TextMonDay>
            {" "}
            {month[props.date.getMonth()] + " " + props.date.getDate() + "th"}
          </TextMonDay>
        </Ddata>
      </Header>
      <DivCard>
        {plannerDay &&
          plannerDay.map((item) => (
            <Card
              home={props.home}
              key={item.id}
              client={item.client}
              subject={item.subject}
              releaseTrain={item.release}
              emailClient={item.client_email}
              emailUser={item.user_id}
              guests={
                item.guest
                  ? item.guest.map((g) => ({ client_name: g.client_name }))
                  : false
              }
              initial={item.date}
              finish={item.duration}
              userName={item.user}
              status={item.status}
              OpenModal={() => handleEdit(item.id)}
            />
          ))}
      </DivCard>
    </DivP>
  );
};

export default PlannerCard;
