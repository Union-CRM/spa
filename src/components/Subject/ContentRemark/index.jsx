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
  DivDateReturn,
  DivPhoto,
  DivPhotoII,
  Photo,
  DivDadosRemark,
  NameEmail,
  IconOpenClose,
  Circle,
  DivGlobalCard,
  ButtonAdd,
  DivNoRemark,
  Create,
} from "./styles";

const ContentRemarks = (props) => {
  // Tabs //

  const { toggleState, setToggleState } = useSubjectContext();
  const { setModalDetails } = useSubjectContext();
  const { subject: subjectsList } = useSubjectContext();
  const { id } = useSubjectContext();
  const [status, setStatus] = useState();

  //Remark Context //
  const [remark, setRemark] = useState([]);
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
      setRemark(remarkList.filter((r) => r.subject_id === props.id));
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

    return user2.toUpperCase();
  }

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
            <CardRemark $mode={status}>
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
                    {"Remark Title: "}
                    <span>{r.remark_name}</span>
                  </NameEmail>
                  <Create>
                    {" Create by: "}
                    <span>{SplitName(r.user_name)}</span>
                  </Create>
                </DivDadosRemark>
              </DivGlobalCard>

              <IconOpenClose $mode={status}>
                <Circle>
                  <RowDown
                    onClick={() => handleClick(r.id)}
                    style={{
                      fill:
                        status === "IN PROGRESS"
                          ? "#00953B"
                          : status === "FINISHED"
                          ? "#008585"
                          : status === "CANCELED"
                          ? "#771300"
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

function SplitName(n) {
  const user = n ? n : "";
  var userSplit = user.split(" ");
  var user1 = userSplit[0] + " " + userSplit[userSplit.length - 1] + "";

  return user1;
}
