import React, { useState, useEffect } from "react";
import { FaRegCalendarAlt, FaChevronCircleDown } from "react-icons/fa";
import IconSystem from "../../../assets/IconSystem";
import { ReactComponent as RowDown } from "../../../assets/svg/RowDown.svg";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useRemarkContext } from "../../../hook/useRemarkContent";

import {
  ContainerRemark,
  ContainerCards,
  CardRemark,
  DivDate,
  DivDateReturn,
  
  DivDadosRemark,
  NameEmail,
  ContainerComplete,
  NoteText,
  IconOpenClose,
  Circle,
  DivGlobalCard,
  IconTag,
  NoteRemark,
} from "./styles";

const Remark = (props) => {
  const { subject: subjectsList } = useSubjectContext();
  const { remarkEdit, setRemarkEdit } = useRemarkContext();
  const { id } = useSubjectContext();
  const [status, setStatus] = useState();
  const {toggleState, setToggleState } = useSubjectContext();
  const [activeTab, setActiveTab] = useState(0);
  const [activeContent, setActiveContent] = useState(0);
  const [titleRemark, setTitleRemark] = useState();
  const [noteRemark, setNoteRemark] = useState();
  const [date, setDate] = useState();
  const [dateReturn, setDateReturn] = useState();

  useEffect(() => {
    if (props.title === "More Details Remark") {
      const subject = subjectsList.filter((item) => item.id === props.id)[0];
      setStatus(subject.status);
      
    }
  }, [id]);

  // REMARK //

  {/*
  const { remark: remarkList } = useRemarkContext();
  const remark = remarkList.filter((item) => item.id === props.id)[0];

 useEffect(() => {
  console.log(remarkList)
  if (props.title === "More Details Remark") {
      const remark = remarkList.filter((item) => item.id === props.id)[0];
      setTitleRemark(remark.remark_name)
      setNoteRemark(remark.text);
    }
  }, [id]);
  
*/}

  ////////////

  useEffect(() => {
    if (remarkEdit.date) {
      setDate(remarkEdit.date.split("T")[0]);
      setDateReturn(remarkEdit.date_return.split("T")[0]);
      setTitleRemark(remarkEdit.remark_name)
      setNoteRemark(remarkEdit.text);
    }
  }, [remarkEdit]);

  const toggleTab = (index) => {
    setToggleState(index);
    setActiveTab(index);
    setActiveContent(index);
  };

  const handleClick = () => {
    setToggleState(1);
  };

  return (
    <ContainerRemark>
      <ContainerCards>
        <CardRemark $mode={status}>
          <DivGlobalCard>
            <DivDate $mode={status}>
              <FaRegCalendarAlt $mode={status} />
              <span> Initial Date</span>

              <p>{date}</p>
            </DivDate>

            <DivDateReturn $mode={status}>
              <FaRegCalendarAlt $mode={status} />
              <span> Final Date</span>
              <p>{dateReturn}</p>
            </DivDateReturn>
            
              <IconTag onClick={() => toggleTab(5)}>
                <IconSystem icon={"Edit"} height={"16px"} width={"16px"} />
              </IconTag>
   
          </DivGlobalCard>

          <ContainerComplete>
            <NoteRemark>
              Remark title:
              <span>{remarkEdit.remark_name}</span>
            </NoteRemark>
            <NoteText>
              Note Text:
              <span>{remarkEdit.text}</span>
            </NoteText>
          </ContainerComplete>

          <IconOpenClose $mode={status} onClick={() => toggleTab(1)} >
            <Circle>
            <RowDown
            style={{
              fill:
              status === "IN PROGRESS"
                          ? "#00953B"
                          : status === "FINISHED"
                          ? "#008585"
                          : status === "CANCELED"
                          ? "#771300"
                          : status === "NOT STARTED"
                          ? "#51bfd3"
                          : status === "EXCELENT"
                          ? "rgb(0, 123, 255)"
                          : status === "NO ANSWERS"
                          ? "#d10e00"
                          : status === "NO INTEREST"
                          ? "#faa3b1"
                          : status === "GOOD"
                          ? "#680072"
                          : "",
            }}/>
            </Circle>
          </IconOpenClose>
        </CardRemark>
      </ContainerCards>
    </ContainerRemark>
  );
};

export default Remark;

function Split(n) {
  const user = n ? n : "";
  var userSplit = user.split(" ");
  var user2 =
    userSplit[0].split("")[0] +
    " " +
    userSplit[userSplit.length - 1].split("")[0] +
    "";

  return user2.toUpperCase();
}

