import React, { useState, useEffect } from "react";
import { FaRegCalendarAlt, FaChevronCircleDown } from "react-icons/fa";
import IconSystem from "../../../assets/IconSystem";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useRemarkContext } from "../../../hook/useRemarkContent";
import { useUserContext } from "../../../hook/useUserContext";

import { useFetchRemark } from "../../../hook/useFetchRemark";
import SingleSelect from "../../Geral/Input/SingleSelect";
import {
  ContainerRemark,
  ContainerCards,
  CardRemark,
  DivDate,
  DivDateReturn,
  ContainerComplete,
  NoteText,
  DivGlobalCard,
  Input,
  TextArea,
  ButtonCreateRemark,
  ButtonAdd,
  DivTitle,
} from "./styles";

const EditRemark = (props) => {
  // Subject status
  const { subject: subjectsList } = useSubjectContext();
  const { remarkEdit, setRemarkEdit,remarkTarget,loadRemarkList} = useRemarkContext();
  const { id } = useSubjectContext();
  const [status, setStatus] = useState();
  const [statusRemark, setStatusRemark] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [dateReturn, setDateReturn] = useState();
  const [noteText, setNoteText] = useState();
  const { setToggleState } = useSubjectContext();
  const [setActiveTab] = useState(0);
  const [flag, setFlag] = useState(false);
  const { updateRemark } = useFetchRemark();
  const [newRemark, setNewRemark] = useState(remarkEntity);
  const { subject: subjectList } = useSubjectContext();
  const [prevStatus, setPrevStatus] = useState(false);
  const [subjectOption, setSubjectOption] = useState([]);
  const { userTarget } = useUserContext();


  useEffect(() => {
    if (props.title === "Edit Remark") {
      setNewRemark({
        ...newRemark,
        ...remarkTarget,
        status_id: StatusOption.filter(
          (s) => s.label === remarkTarget.status_description
        )[0].value,
       
      });
      setPrevStatus(remarkTarget.status_description);
    }
  }, []);
  // useEffect(() => {
  //   if (props.title === "Edit Remark") {
  //     setSubjectOption(
  //       subjectList
  //         .filter((s) => s.user_id === userTarget.id)
  //         .map((s) => ({ id: s.id, value: s.id, label: s.subject_title }))
  //         .sort((a, b) => (a.label || "").localeCompare(b.label || ""))
  //     );
  //   } else {
  //     setSubjectOption(
  //       subjectList
  //         .filter((s) => s.user_id === userTarget.id)
  //         .map((s) => ({ id: s.id, value: s.id, label: s.subject_title }))
  //         .sort((a, b) => (a.label || "").localeCompare(b.label || ""))
  //     );
  //   }
  // }, [subjectList, userTarget]);
  useEffect(() => {
    if (props.title === "Edit Remark") {
      const subject = subjectsList.filter((item) => item.id === props.id)[0];
      setStatus(subject.status);
      setStatusRemark(remarkEdit.status_description)
    }
  }, [id]);

  // Remark //

  useEffect(() => {
    if (remarkEdit.date) {
      setDate(remarkEdit.date.split("T")[0]);
      setDateReturn(remarkEdit.date_return.split("T")[0]);
      setTitle(remarkEdit.remark_name);
      setNoteText(remarkEdit.text);
      setStatusRemark(remarkEdit.status)
    }
  }, [remarkEdit]);

  const editRemark = () => {
    const newRemark = {
      remark_name: title,
      text: noteText,
      date: date + "T10:00:00.000Z",
      date_return: dateReturn + "T10:00:00.000Z",
      subject_id: remarkEdit.subject_id,
      client_id: remarkEdit.client_id,
      release_id: remarkEdit.release_id,
      user_id: remarkEdit.user_id,
      user_name: remarkEdit.user_name,
      status_id: 21,
    };
    if (
      newRemark.remark_name &&
      newRemark.date &&
      newRemark.date_return &&
      newRemark.text
    ) {
      setRemarkEdit(newRemark)
      updateRemark(newRemark, remarkEdit.id).then(loadRemarkList());
      loadRemarkList();
    } else {
      setFlag(true);
    }
  };

  const handleSelectStatus = (status) => {
    setNewRemark({
      ...newRemark,
      status_id: status,
      status_description: StatusOption.filter((s) => s.value === status)[0]
        .label,
    });
  };
  const handleSubmit = () => {
    if (props.title === "Edit Remark") {
      editRemark();
      setToggleState(3);
      setActiveTab(3);
      console.log("ok")
    }
  };

  return (
    <ContainerRemark>
      <ContainerCards>
        <CardRemark $mode={status}>
          <DivGlobalCard>
            <DivDate $mode={status}>
              <FaRegCalendarAlt $mode={status} />
              <span> Initial Date </span>
              <p onChange={(event) => setDate(event.target.value)}>{date}</p>
            </DivDate>

            <DivDateReturn $mode={status}>
              <FaRegCalendarAlt $mode={status} />
              <span> Final Date </span>
              <Input
                widthInput={"80%"}
                type="date"
                required={flag && !date ? true : false}

                value={dateCorrect(dateReturn)}
                onChange={(event) => setDateReturn(event.target.value)}
              />
            </DivDateReturn>

               
              
          </DivGlobalCard>

          <ContainerComplete>
            <DivTitle $mode={status}>
              <span>
                Title
                <Input
                  widthInput={"80%"}
                  value={title}
                  required={flag && !title ? true : false}
                  onChange={(event) => setTitle(event.target.value)}
                />{" "}
              </span>
            </DivTitle>

            <NoteText>
              Note Text:
              <TextArea
                onChange={(event) => setNoteText(event.target.value)}
                value={noteText}
                required={flag && !noteText ? true : false}
              />
            </NoteText>
            <SingleSelect
                  placeholder={""}
                  set={(s) => handleSelectStatus(s)}
                  options={StatusOption}
                  value={newRemark.status_description}
                  sizeSingle={"100%"}
                  sizeMenuList={"100%"}
                  label={"Status"}
                  sizeMenu={"100%"}
                  isDisabled={false}
                  sizeHeight={"3.5vh"}
                />

            <ButtonCreateRemark onClick={handleSubmit}>
                  <ButtonAdd
                    $mode={status}
                    width="130px"
                    padding="0"
                    sizeFont="0.9rem"
                    boxShadow="none"
                    margin="none"
                  >
                    {" "}
                    <span>Save</span>
                  </ButtonAdd>
                </ButtonCreateRemark>
          </ContainerComplete>

          
        </CardRemark>
      </ContainerCards>
    </ContainerRemark>
  );
};

const StatusOption = [
  { id: 21, value: 21, label: "ACTIVE" },
  { id: 19, value: 19, label: "FINISHED" },
  { id: 20, value: 20, label: "CANCELED" },
];

export default EditRemark;
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

function SplitName(n) {
  const user = n ? n : "";
  var userSplit = user.split(" ");
  var user1 = userSplit[0] + " " + userSplit[userSplit.length - 1] + "";

  return user1;
}
function dateCorrect (dateReturn, date) {
  if (dateReturn > date){
    return 'Insira uma data válida!'
  }
}



const remarkEntity = {
  remark_name: "",
  text: "",
  date: "",
  date_return: "",
  subject_id: "",
  subject_name: "",
  client_id: "",
  release_id: "",
  release_name: "",
  user_id: "",
  client_name: "",
  client_email: "",
  business_name: "",
};
