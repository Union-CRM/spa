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
  DivStatus
} from "./styles";

const EditRemark = (props) => {
  const [newRemark, setNewRemark] = useState(remarkEntity);
  const { updateRemark } = useFetchRemark();
  const { remarkTarget } =
    useRemarkContext();
  const { setToggleState } = useSubjectContext();
  const [setActiveTab] = useState(0);

  const [flag, setFlag] = useState(false);
  const { subject: subjectList } = useSubjectContext();
  const [status, setStatus] = useState();
  const [date, setDate] = useState();
  
  
  useEffect(() => {
    if (props.title === "Edit Remark" && remarkTarget) {
      setDate(remarkTarget.date.split("T")[0]);
      setStatus(remarkTarget.status_description);   
      setNewRemark({
        ...newRemark,
        ...remarkTarget,
        status_id: StatusOption.filter(
          (s) => s.label === remarkTarget.status_description
        )[0].value,
        status_description: remarkTarget.status_description,
      });
      
    }
  }, [remarkTarget]);

  //return true if date 1 is before at date 2
  const dateIsValid = (date1, date2) => {
    const d1 = new Date(date1.split("T")[0].split(" ")[0]);
    const d2 = new Date(date2.split("T")[0].split(" "));
    return d1 <= d2;
  };

  const closeModal = () => {
    //setModalEdit(false);
   
      setToggleState(3);
      setActiveTab(3);
      console.log("ok")
  };

  const handleSubmit = () => {
    if (props.title === "Edit Remark") {
      handleEditRemark();
      
    }
  };
 
  // status 19: Finished,  20: canceled, 21: Active
  const handleEditRemark = () => {
    if (
      newRemark.remark_name &&
      newRemark.subject_id &&
      newRemark.date &&
      newRemark.date_return &&
      newRemark.text
    ) {
      updateRemark(
        {
          ...newRemark,
          date: newRemark.date.split("T")[0] + "T12:00:00.000Z",
          date_return: newRemark.date_return.split("T")[0] + "T12:00:00.000Z",
          title: newRemark.title,
          noteText: newRemark.noteText,
          status_description: newRemark.status_description
        },
        newRemark.id
      );
      closeModal();
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

  const handleChange = (event) => {
    setNewRemark({
      ...newRemark,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeDate = (event) => {
    if (event.target.name === "date") {
      if (newRemark.date_return) {
        if (dateIsValid(event.target.value, newRemark.date_return)) {
          setNewRemark({
            ...newRemark,
            [event.target.name]: event.target.value,
          });
        } else {
          setNewRemark({
            ...newRemark,
            [event.target.name]: event.target.value,
            date_return: "",
          });
        }
      } else {
        setNewRemark({
          ...newRemark,
          [event.target.name]: event.target.value,
        });
      }
    } else if (event.target.name === "date_return") {
      if (dateIsValid(newRemark.date, event.target.value)) {
        setNewRemark({
          ...newRemark,
          [event.target.name]: event.target.value,
        });
      }
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
              <p onChange={(event) => setDate(newRemark.date.split("T")[0])}>{date}</p>
            </DivDate>

            <DivDateReturn $mode={status}>
              <FaRegCalendarAlt $mode={status} />
              <span> Final Date </span>
              <Input
                  widthInput={"85%"}
                  type="date"
                  value={newRemark.date_return.split("T")[0]}
                  required={flag && !newRemark.date_return ? true : false}
                  name={"date_return"}
                  onChange={(event) => handleChangeDate(event)}
                />
            </DivDateReturn>

               
              
          </DivGlobalCard>

          <ContainerComplete>
            <DivTitle $mode={status}>
              <span>
                Title
                <Input
                  widthInput={"79%"}
                  name="remark_name"
                  placeholder={
                    flag && !newRemark.remark_name ? "Required field" : ""
                  }
                  value={newRemark.remark_name}
                  required={flag && !newRemark.remark_name ? true : false}
                  onChange={(event) => handleChange(event)}
                />{" "}
              </span>
            </DivTitle>
            <NoteText>
              Note Text:
              <TextArea
                  widthInput={"98% !important"}
                  placeholder={flag && !newRemark.text ? "Required field" : ""}
                  name={"text"}
                  value={newRemark.text}
                  onChange={(event) => handleChange(event)}
                  required={flag && !newRemark.text ? true : false}
                  rows="4"
                />
            </NoteText>
            
            <DivStatus>
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
            </DivStatus>

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
  else
  return dateReturn
}



const remarkEntity = {
  remark_name: "",
  text: "",
  date: "",
  date_return: "",
  subject_id: "",
  subject_name: "",
  status_description:"",
  client_id: "",
  release_id: "",
  release_name: "",
  user_id: "",
  client_name: "",
  client_email: "",
  business_name: "",
};
