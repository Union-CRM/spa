import React, { useState, useEffect } from "react";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useRemarkContext } from "../../../hook/useRemarkContent";
import { ReactComponent as Timer } from "../../../assets/svg/Timer.svg";
import { ReactComponent as Calendar } from "../../../assets/svg/Calendar.svg";
import { ReactComponent as RowDown } from "../../../assets/svg/RowDown.svg";
import {
  ContainerRemark,
  ContainerCards,
  CardRemark,
  ButtonCreateRemark,
  DivDate,
  DivDadosRemark,
  NameEmail,
  IconOpenClose,
  Circle,
  DivGlobalCard,
  ButtonAdd,
  DivNoRemark,
  NoteTextRemark,
} from "./styles";
import Remark from "../Remark";

const ContentRemarks = (props) => {
  // Tabs //

  const { toggleState, setToggleState } = useSubjectContext();
  const { setModalDetails } = useSubjectContext();
  const { subject: subjectsList } = useSubjectContext();
  const { id } = useSubjectContext();
  const [status, setStatus] = useState();

  //Remark Context //
  const [remark, setRemark] = useState([]);
  const [ordenada, setOrdenada] = useState([]);
  const { remark: remarkList, setRemark: setRemarkList } = useRemarkContext();

  const { setModalRemark } = useRemarkContext();
  const { remarkEdit, setRemarkEdit } = useRemarkContext([]);
  const [date, setDate] = useState();
  const [dateReturn, setDateReturn] = useState();
  const [noteText, setNoteText] = useState();

  const [activeTab, setActiveTab] = useState(1);
  const [activeContent, setActiveContent] = useState(0);

  useEffect(() => {
    if (remarkList) {
      
      // setRemark()
     
        organizarData(remarkList.filter((r) => r.subject_id === props.id))
        console.log(remark)

    }
  }, [remarkList]);

  useEffect(() => {
    if (props.title === "Remark") {
      const subject = subjectsList.filter((item) => item.id === props.id)[0];
      
      setStatus(subject.status);
    }
  }, [id]);

  const toggleTab = (index) => {
    setToggleState(index);
    setActiveTab(index);
    setActiveContent(index);
  };


  // Remark //

  const RemarkModal = () => {
    setModalRemark(true);
    setModalDetails(false);
  };
  
 

  const handleClick = (remark_id) => {
    setToggleState(3);
    props.setIdRemark(remark.idRemark);
    setRemarkEdit(remark.filter((r) => r.id === remark_id)[0]);
  };

  function Split(n) {
    const user = n ? n : "";
    var userSplit = user.split(" ");
    var user2 =
      userSplit[0].split("")[0] +
      " " +
      userSplit[userSplit.length - 1].split("")[0] +
      "";

    return user2.toLowerCase();
  }

  const organizarData = (r) => {
    
    setRemark([...r].sort((a, b) => {
      // console.log(remark)
      return new Date(a.date) - new Date(b.date);
    }).slice().reverse());

  };

  return (
    <ContainerRemark>
      <ButtonCreateRemark>
        {status !== "FINISHED" && status !== "CANCELED" && (
          <ButtonAdd
            onClick={() => RemarkModal()}
            $mode={status}
            width="130px"
            padding="0"
            sizeFont="0.9rem"
            boxShadow="none"
            margin="none"
          >
            {" "}
            <span>Create Remark</span>
          </ButtonAdd>
        )}
      </ButtonCreateRemark>

      {remark && remark.length === 0 ? (
        <DivNoRemark>
          <span>There are no existing remarks.</span>
        </DivNoRemark>
      ) : (
        <ContainerCards>
          {remark.map((r) => (
            <CardRemark $mode={status} onClick={() => handleClick(r.id)}>
              <DivGlobalCard>
                <DivDate $mode={status}>
                  <Calendar
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
                    }}
                  />
                  <span> Initial Date </span>
                  <p onChange={(event) => setDate(event.target.value)}>
                    {r.date.split("T")[0]}
                  </p>
                </DivDate>

                <DivDadosRemark>
                <NameEmail>
                    <span>{r.remark_name}</span>
                  </NameEmail> 
                  <NoteTextRemark>
                    <span>{remarkEdit.text}</span>
                  </NoteTextRemark>
                  
                  
                </DivDadosRemark>
              </DivGlobalCard>

              <IconOpenClose $mode={status}>
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
                    }}
                  />
                </Circle>
              </IconOpenClose>
            </CardRemark>
          ))}
        </ContainerCards>
      )}
    </ContainerRemark>
  );
};

export default ContentRemarks;


