import React from "react";
import {
  DivP,
  Ddata,
  Header,
  DivRemark,
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
import { useRemarkContext } from "../../../hook/useRemarkContent";

const RemarkCard = (props) => {
  const { planner, setPlannerEdit } = usePlannerContext();
  const { user, userTarget } = useUserContext();
  const [plannerList, setPlannerList] = useState();
  const [remarkList, setRemarkList] = useState();
  const {remark,setRemarkEdit, setModalEdit} = useRemarkContext();
  console.log(remarkList)
  
  useEffect(() => {
    if (props.adminList) {
      setRemarkList(
        remark ? remark.filter((p) => p.user_id === userTarget.id)
        .sort((a, b) => (a.status_description || "").localeCompare(b.status_description || "")) : []
      );
    } else {
      setRemarkList(
        remark ? remark.filter((p) => p.user_id === user.id)
        .sort((a, b) => (a.status_description || "").localeCompare(b.status_description || "")) : []
      );
    }
  }, [remark]);
  // .sort((a, b) => (b.status || "").localeCompare(a.status || ""))
  // console.log();
  const [plannerDay, setPlannerDay] = useState();
  const [remarkDay, setRemarkDay] = useState();

  useEffect(() => {
    if (remarkList) {
      setRemarkDay(
        remarkList.filter((remark) =>
          datesAreOnSameDay(new Date(remark.date_return.split("T")[0]+" 12:00"), props.date)
        )
      );
    }
  }, [remarkList]);

  const handleEdit = (id) => {
    setRemarkEdit(remarkList.filter((p) => p.id === id)[0]);
    setModalEdit(id);
  };

  return (
    <DivP $mode={remarkDay ? remarkDay.length : 0}>
      <Header>
        <DivRemark>
          <Headline type={"Headline3"} name={"Remark Of Day"} />
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
        </DivRemark>
        <Ddata>
          <TextMonDay>
            {" "}
            {month[props.date.getMonth()] + " " + props.date.getDate() + "th"}
          </TextMonDay>
        </Ddata>
      </Header>
      <DivCard>
        {remarkDay &&
          remarkDay.map((item) => (
            <Card
              // home={props.home}
              key={item.id}
              remark={item}
              //subject={item.subject_name}
              //releaseTrain={item.release_name}
              // emailClient={item.client_email}
              // emailUser={item.user_id}
              
              // guests={
              //   item.guest
              //     ? item.guest.map((g) => ({ client_name: g.client_name }))
              //     : false
              // }
              //initial={item.date}
              // //finish={item.date_return}
              // userName={item.user}
              // status={item.status}
              OpenModal={() => handleEdit(item.id)}
            />
          ))}
      </DivCard>
    </DivP>
  );
};

export default RemarkCard;
