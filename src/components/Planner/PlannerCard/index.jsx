import React from "react";
import { DivP, Ddata, Header, DivPlanner,TextMonDay } from "./styles";
import Card from "./Card";
import Headline from "../../../assets/FontSystem/Headline";
import { useState } from 'react'
import { usePlannerContext } from "../../../hook/usePlannerContext";
import { datesAreOnSameDay } from "../Calendar/utils/utils"; 


const PlannerCard = ({ setOpenPlannerModal, date }) => {

  const { planner: plannerList, setPlanner: setPlannerList, setModalEdit} = usePlannerContext();

  const [plannerDay] = useState(plannerList.filter((planner)=> datesAreOnSameDay(planner.date, date)))
 


  const closePlanner = () => (
    setOpenPlannerModal(false)
  )

  const OpenEdit = () => (
    setModalEdit(false)
  )
  const monName = new Array ("January", "February", "March", "Abril", "May", "June", "July", "August", "September", "November", "December")
  return (

        <DivP>
          <Header>
            <DivPlanner>
              <Headline type={"Headline3"} name={"Planner Of Day"}/>
            </DivPlanner>
            <Ddata>
              <TextMonDay> {monName[date.getMonth()]+" " + date.getDate()+ "th"}</TextMonDay>
              
            </Ddata>
          </Header>
          {plannerDay.map((item) => (
            <Card
              key={item.id}
              subject={item.subject}
              releaseTrain={item.release_name}
              emailClient={item.client_email}
              emailUser={item.user_id}
              client={item.client_name}
              guests={""}
              userName={item.user_name}
              status={item.status}
              OpenModal={() => setModalEdit(item.id)}
            />
          ))}
        </DivP>
  );
};

export default PlannerCard;
