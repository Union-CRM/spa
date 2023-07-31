import React, { useState } from "react";
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
  DivSubject,
  DivStatus,
  DivButton,
  ClickButton,
  PositionButtonCancel,
  DivDescription,
  TextArea,
} from "./styles";
import SingleSelect from "../../Geral/Input/SingleSelect";
import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import { useClientContext } from "../../../hook/useClientContent";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useUserContext } from "../../../hook/useUserContext";
import { useFetchSubject } from "../../../hook/useFetchSubject";

const Subject = (props) => {
  const { title } = props;
  const {
    client: clientList,
    setModalInfo,
    setModalCreateSubject,
    setToggleState,
    clientTarget,
  } = useClientContext();
  const { userTarget } = useUserContext();
  const [subject, setSubject] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const [flag, setFlag] = useState(false);
  const { insertSubject } = useFetchSubject();
  const { loadData } = useSubjectContext();

  const handleSubmit = () => {
    if (props.title === "Create Subject") {
      createSubject();
      setModalInfo(true);
      setModalCreateSubject(false);
      setToggleState(1);
    }
  };

  // CLOSE E SAVE ////////////
  const closeModal = () => {
    setModalInfo(true);
    setModalCreateSubject(false);
    setToggleState(1);
  };

  const createSubject = () => {
    const newSubject = {
      client: clientTarget.id,
      release_id: clientTarget.release_id,
      subject_title: subject,
      subject_text: description,
    };
    if (subject && description) {
      insertSubject(newSubject, userTarget.id);
      loadData();
    } else {
      setFlag(true);
    }
  };

  return (
    <>
      <ContainerCentral>
        <Container>
          <PositionTitle>
            <H1>{title}</H1>
          </PositionTitle>
          <Form onSubmit={handleSubmit}>
            <DivName>
              <Label>
                Client Name
                <Input
                  widthInput={"98% !important"}
                  value={clientTarget.client}
                  backgroundInput={"#D9D9D9"}
                  disabled
                />
              </Label>
            </DivName>

            <DivBusiness>
              <Label>
                Business
                <Input
                  widthInput={"90% !important"}
                  backgroundInput={"#D9D9D9"}
                  value={clientTarget.textBusiness}
                  disabled
                />
              </Label>

              <Label>
                ReleaseTrain
                <Input
                  widthInput={"98% !important"}
                  value={clientTarget.textRelease}
                  disabled
                />
              </Label>
            </DivBusiness>

            <DivEmail>
              <Label>
                Email
                <Input
                  widthInput={"98% !important"}
                  backgroundInput={"#D9D9D9"}
                  value={clientTarget.email}
                  disabled
                />
              </Label>
            </DivEmail>

            <DivSubject>
              <Label>
                Subject
                <Input
                  widthInput={"98% !important"}
                  name={subject}
                  value={subject}
                  set={(subject) => setSubject(subject)}
                  onChange={(event) => setSubject(event.target.value)}
                  placeholder={flag && !subject ? "" : ""}
                  required
                />
              </Label>
            </DivSubject>

            <DivStatus>
              <Label>
                Status
                <SingleSelect
                  sizeMenu={"100%"}
                  sizeSingle={"100%"}
                  options={status_mok}
                  onChange={(event) => setStatus(event.target.value)}
                  set={(status) => setStatus(status)}
                  value={status}
                  placeholder={flag && !status ? "" : ""}
                />
              </Label>
            </DivStatus>

            <DivDescription>
              <Label>
                Description
                <TextArea
                  widthInput={"98% !important"}
                  name={description}
                  value={description}
                  placeholder={flag && !description ? "Required field" : ""}
                  set={(description) => setDescription(description)}
                  onChange={(event) => setDescription(event.target.value)}
                  required
                  rows="4"
                />
              </Label>
            </DivDescription>
          </Form>

          <DivButton>
            <ClickButton onClick={() => handleSubmit()}>
              <ButtonDefault
                type={"userSave"}
                weightFont={"500"}
                sizeFont={"1rem"}
                name={"Save"}
                s
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

export default Subject;

const status_mok = [
  { id: 1, value: "IN PROGRESS", label: "IN PROGRESS" },
  { id: 2, value: "FINISHED", label: "FINISHED" },
  { id: 3, value: "CANCELED", label: "CANCELED" },
];
