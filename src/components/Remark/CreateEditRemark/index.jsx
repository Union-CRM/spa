import React, { useState, useEffect } from "react";
import {
  Input,
  ContainerCentral,
  Container,
  PositionTitle,
  H1,
  Form,
  Label,
  DivName,
  DivEmail,
  DivBusiness,
  DivButton,
  ClickButton,
  PositionButtonCancel,
  DivDescription,
  TextArea,
  DivDate,
  DivDateAll,
  DivTitle,
} from "./styles";

import SingleSelect from "../../Geral/Input/SingleSelect";
import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useRemarkContext } from "../../../hook/useRemarkContent";
import { useUserContext } from "../../../hook/useUserContext";
import { useFetchRemark } from "../../../hook/useFetchRemark";

const CreateEditRemark = (props) => {
  const [newRemark, setNewRemark] = useState(remarkEntity);
  const { createRemark, updateRemark, updateStatusRemark } = useFetchRemark();
  const { remarkTarget } = useRemarkContext();
  const [flag, setFlag] = useState(false);
  const { userTarget } = useUserContext();
  const [selectedSubject, setSelectedSubject] = useState(null);
  const { subject: subjectList } = useSubjectContext();
  const [subjectOption, setSubjectOption] = useState([]);
  const [status, setStatus] = useState();
  const [prevStatus, setPrevStatus] = useState(false);
  // CLOSE E SAVE ////////////
  const closeModal = () => {
    props.setModal(false);
  };

  useEffect(() => {
    if (props.title === "Edit Remark") {
      const subjectObj = subjectList.filter(
        (s) => s.id === remarkTarget.subject_id
      )[0];
      setNewRemark({
        ...newRemark,
        ...remarkTarget,
        status_id: StatusOption.filter(
          (s) => s.label === remarkTarget.status_description
        )[0].value,
        client_email: subjectObj ? subjectObj.client_email : "",
      });
      setPrevStatus(remarkTarget.status_description);
      setSelectedSubject(remarkTarget.subject_name);
      setStatus(remarkTarget.status);
    }
  }, []);

  useEffect(() => {
    setSubjectOption(
      subjectList
        .filter(
          (s) => s.status === "IN PROGRESS" && s.user_id === userTarget.id
        )
        .map((s) => ({ id: s.id, value: s.id, label: s.subject_title }))
    );
  }, [subjectList, userTarget]);

  const handleSubmit = () => {
    if (props.title === "Create Remark") {
      handleCreateRemark();
    } else {
      handleEditRemark();
    }
  };

  const handleCreateRemark = () => {
    if (
      newRemark.remark_name &&
      newRemark.subject_id &&
      newRemark.date &&
      newRemark.date_return &&
      newRemark.text
    ) {
      createRemark({ ...newRemark, user_id: userTarget.id });
      props.setModal(false);
    } else {
      setFlag(true);
    }
  };
  // status 19: Finished,  20: canceled, 21: Active
  const handleEditRemark = () => {
    console.log({
      ...newRemark,
      date: newRemark.date.split("T")[0] + "T12:00:00.000Z",
      date_return: newRemark.date_return.split("T")[0] + "T12:00:00.000Z",
    });
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
        },
        newRemark.id
      );
      props.setModal(false);
    } else {
      setFlag(true);
    }
  };

  const handleSelectSubject = (id) => {
    const subjectObj = subjectList.filter((s) => s.id === id)[0];
    setNewRemark({
      ...newRemark,
      subject_id: subjectObj.id,
      subject_name: subjectObj.subject_title,
      client_id: subjectObj.client_id,
      release_id: subjectObj.release_id,
      release_name: subjectObj.release,
      client_name: subjectObj.client,
      client_email: subjectObj.client_email,
      business_name: subjectObj.business,
    });
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
  //return true if date 1 is before at date 2
  const dateIsValid = (date1, date2) => {
    const d1 = new Date(date1.split("T")[0].split(" ")[0]);
    const d2 = new Date(date2.split("T")[0].split(" "));
    return d1 <= d2;
  };

  return (
    <>
      <ContainerCentral>
        <Container>
          <PositionTitle>
            <H1>{props.title} </H1>
          </PositionTitle>
          <Form>
            <DivTitle>
              <Label>
                Title
                <Input
                  widthInput={"98% !important"}
                  name="remark_name"
                  placeholder={
                    flag && !newRemark.remark_name ? "Required field" : ""
                  }
                  value={newRemark.remark_name}
                  required={flag && !newRemark.remark_name ? true : false}
                  onChange={(event) => handleChange(event)}
                />
              </Label>
            </DivTitle>
            <DivName>
              <Label>
                Subject
                <SingleSelect
                  set={(s) => handleSelectSubject(s)}
                  placeholder={
                    flag && !newRemark.subject_name ? "Required field" : ""
                  }
                  //placeholder={flag && !role.id ? "Required field" : ""}
                  required
                  sizeSingle={"100%"}
                  sizeMenu={"100%"}
                  options={subjectOption}
                  value={newRemark.subject_name}
                />
              </Label>
            </DivName>

            <DivBusiness>
              <Label>
                Client Name
                <Input
                  widthInput={"90% !important"}
                  value={newRemark.client_name}
                  disabled
                />
              </Label>

              <Label>
                Email
                <Input
                  widthInput={"98% !important"}
                  value={newRemark.client_email}
                  disabled
                />
              </Label>
            </DivBusiness>

            <DivEmail>
              <Label>
                Business
                <Input
                  widthInput={"90% !important"}
                  value={newRemark.business_name}
                  disabled
                />
              </Label>

              <Label>
                Release Train
                <Input
                  widthInput={"98% !important"}
                  value={newRemark.release_name}
                  disabled
                />
              </Label>
            </DivEmail>
            <DivDateAll>
              <DivDate>
                <span>Date </span>
                <Input
                  widthInput={"80%"}
                  type="date"
                  name={"date"}
                  required={flag && !newRemark.date ? true : false}
                  value={newRemark.date.split("T")[0]}
                  onChange={(event) => handleChangeDate(event)}
                />
              </DivDate>
              <DivDate>
                <span>Date Return </span>
                <Input
                  widthInput={"80%"}
                  type="date"
                  value={newRemark.date_return.split("T")[0]}
                  required={flag && !newRemark.date_return ? true : false}
                  name={"date_return"}
                  onChange={(event) => handleChangeDate(event)}
                />
              </DivDate>
              <DivDate>
                {prevStatus === "ACTIVE" && (
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
                )}
              </DivDate>
            </DivDateAll>

            <DivDescription>
              <Label>
                Note Text
                <TextArea
                  widthInput={"98% !important"}
                  placeholder={flag && !newRemark.text ? "Required field" : ""}
                  name={"text"}
                  value={newRemark.text}
                  onChange={(event) => handleChange(event)}
                  required={flag && !newRemark.text ? true : false}
                  rows="4"
                />
              </Label>
            </DivDescription>
          </Form>

          <DivButton>
            <ClickButton onClick={handleSubmit}>
              <ButtonDefault
                type={"userSave"}
                weightFont={"500"}
                sizeFont={"1rem"}
                name={"Save"}
              />
            </ClickButton>

            <PositionButtonCancel onClick={closeModal}>
              <ButtonDefault
                type="userCancel"
                name={"Cancel"}
                weightFont={"500"}
                sizeFont={"1rem"}
              />
            </PositionButtonCancel>
          </DivButton>
        </Container>
      </ContainerCentral>
    </>
  );
};

const StatusOption = [
  { id: 21, value: 21, label: "ACTIVE" },
  { id: 19, value: 19, label: "FINISHED" },
  { id: 20, value: 20, label: "CANCELED" },
];

export default CreateEditRemark;
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

/*
business_id

client_id
client_name
date:"2023-01-09T19:29:25.925Z"
date_return:"2023-03-09T19:29:25.925Z"
id
release_id
release_name
remark_name
status_description
subject_id
subject_name
text
user_id
user_name
*/
