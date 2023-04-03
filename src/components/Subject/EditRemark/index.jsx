import React, { useState, useEffect } from "react";
import { FaRegCalendarAlt, FaChevronCircleDown } from "react-icons/fa";
import IconSystem from "../../../assets/IconSystem";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useRemarkContext } from "../../../hook/useRemarkContent";

import {
  ContainerRemark,
  ContainerCards,
  CardRemark,
  DivDate,
  DivDateReturn,
  DivPhoto,
  DivPhotoII,
  Photo,
  DivDadosRemark,
  NameEmail,
  ContainerComplete,
  NoteText,
  DivGlobalCard,
  Input,
  TextArea,
  ButtonCreateRemark,
  ButtonAdd,
} from "./styles";

const EditRemark = (props) => {
  // Subject status

  const { subject: subjectsList, setSubject: setSubjectList } =
    useSubjectContext();

  const { id } = useSubjectContext();

  const [status, setStatus] = useState();

  useEffect(() => {
    if (props.title === "Edit Remark") {
      const subject = subjectsList.filter((item) => item.id === props.id)[0];
      setStatus(subject.status);
    }
  }, [id]);

  // Tabs
  const { toggleState, setToggleState } = useSubjectContext();

  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
    setActiveTab(index);
    setActiveContent(index);
  };
  const [activeContent, setActiveContent] = useState(0);

  // Remark //

  const { remark: remarkList, setRemark: setRemarkList } = useRemarkContext();

  const { idRemark, setIdRemark } = useRemarkContext();

  const [date, setDate] = useState();
  const [dateReturn, setDateReturn] = useState();
  const [noteText, setNoteText] = useState();

  useEffect(() => {
    if (props.title === "Edit Remark") {
      const remark = remarkList.filter(
        (item) => item.idRemark === props.idRemark
      )[0];
      setDate(remark.date);
      setDateReturn(remark.dateReturn);
      setNoteText(remark.noteText);
    }
  }, [idRemark]);

  const editRemark = () => {
    const newRemark = {
      id: id,
      date: date,
      dateReturn: dateReturn,
      noteText: noteText,
    };
    if (date && dateReturn && noteText) {
      const noId = remarkList.filter((item) => item.idRemark !== idRemark);
      setRemarkList([...noId, newRemark]);
      setToggleState(3);
    }
  };

  const handleSubmit = () => {
    if (props.title === "Edit Remark") {
      editRemark();
    }
  };

  return (
    <ContainerRemark>
      <ContainerCards>
        <CardRemark $mode={status}>
          <DivGlobalCard>
            <DivDate $mode={status}>
              <FaRegCalendarAlt $mode={status} />
              <span> Date </span>
              <p onChange={(event) => setDate(event.target.value)}>{date}</p>
            </DivDate>

            <DivDateReturn $mode={status}>
              <FaRegCalendarAlt $mode={status} />
              <span> Date Return </span>
              <Input
                type="date"
                onChange={(event) => setDateReturn(event.target.value)}
              />
            </DivDateReturn>

            <DivPhoto>
              <DivPhotoII>
                <Photo $mode={status}>GA</Photo>
              </DivPhotoII>
            </DivPhoto>

            <DivDadosRemark>
              <NameEmail>
                Gilberto Anderson Teste
                <span>2534659</span>
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
              </NameEmail>
            </DivDadosRemark>
          </DivGlobalCard>

          <ContainerComplete>
            <NoteText>
              Note Text:
              <TextArea onChange={(event) => setNoteText(event.target.value)}>
                {noteText}
              </TextArea>
            </NoteText>
          </ContainerComplete>
        </CardRemark>
      </ContainerCards>
    </ContainerRemark>
  );
};

export default EditRemark;
