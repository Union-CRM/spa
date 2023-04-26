import React, { useState, useEffect, useRef } from "react";

import {
  ContainerCentral,
  Container,
  PositionTitle,
  H1,
  Input,
  Form,
  Label,
  DivName,
  DivEmail,
  DivStatus,
  DivButton,
  ClickButton,
  PositionButtonCancel,
  DivId,
} from "./styles";
import SingleSelect from "../../../Geral/Input/SingleSelect";
import ButtonDefault from "../../../../assets/Buttons/ButtonDefault";
import { useUserContext } from "../../../../hook/useUserContext";
import { useFetchUser } from "../../../../hook/useFetchUser";

const AddEditUser = (props) => {
  const { user } = useUserContext();
  const [newUser, setNewUser] = useState(entityUser);
  const { createUser } = useFetchUser();

  const [status, setStatus] = useState({ value: "Active" });
  const levelOptions = levels
    .map((l, index) => {
      if (l < user.level) {
        return { value: l, label: l };
      }
    })
    .filter((l) => l);

  const [flag, setFlag] = useState(false);
  const { setModal, id } = props;

  const closeModal = () => {
    setModal(false);
  };

  const handleSubmit = () => {
    if (props.title === "Edit User") {
      editUser();
    } else {
      handleCreateUser();
    }
  };

  useEffect(() => {
    if (props.title === "Edit User") {
    }
  }, []);

  const handleCreateUser = () => {
    const u = {
      ...newUser,
      tcs_id: parseInt(newUser.tcs_id),
    };
    console.log(u);
    if (newUser.name && newUser.email && newUser.tcs_id && newUser.level) {
      createUser(u);
      closeModal();
    } else {
      setFlag(true);
    }
  };

  const editUser = () => {
    const newUser2 = {
      name: "Luan Saatos",
      tcs_id: 3134256,
      email: "luansantos@tcs.com",
      level: 1,
    };

    if (true) {
      setModal(false);
    } else {
      setFlag(true);
    }
  };

  const handleSelectLevel = (l) => {
    setNewUser({
      ...newUser,
      level: l,
    });
  };

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <ContainerCentral>
        <Container>
          <PositionTitle>
            <H1>{props.title} </H1>
          </PositionTitle>
          <Form>
            <DivName>
              <Label>
                User Name
                <Input
                  name="name"
                  widthInput={"98% !important"}
                  placeholder={flag && !newUser.name ? "Required field" : ""}
                  value={newUser.name}
                  required
                  onChange={(event) => handleChange(event)}
                />
              </Label>
            </DivName>

            <DivId>
              <SingleSelect
                key="1"
                set={(level) => handleSelectLevel(level)}
                placeholder={flag && !newUser.level ? "Required field" : ""}
                name="level"
                value={newUser.level}
                required
                label={"Level"}
                sizeSingle={"90%"}
                sizeMenu={"90%"}
                options={levelOptions}
              />
              <Label>
                TCS Id
                <Input
                  widthInput={"98% !important"}
                  name="tcs_id"
                  value={newUser.tcs_id}
                  placeholder={flag && !newUser.tcs_id ? "Required field" : ""}
                  required
                  onChange={(event) => handleChange(event)}
                />
              </Label>
            </DivId>

            <DivEmail>
              <Label>
                Email
                <Input
                  widthInput={"98% !important"}
                  name="email"
                  value={newUser.email}
                  placeholder={flag && !newUser.email ? "Required field" : ""}
                  required
                  onChange={(event) => handleChange(event)}
                />
              </Label>
            </DivEmail>

            <DivStatus>
              <SingleSelect
                key="2"
                sizeSingle={"100%"}
                required
                sizeMenu={"100%"}
                set={(status) => setStatus(status)}
                label={"Status"}
                value={status}
                placeholder={flag && !status ? "Required field" : ""}
                options={status_mok}
                disabled
              />
            </DivStatus>
          </Form>{" "}
          <DivButton>
            <ClickButton onClick={handleSubmit}>
              <ButtonDefault
                type="adminSave"
                weightFont={"500"}
                sizeFont={"18px"}
                name={"Save"}
              />
            </ClickButton>
            <PositionButtonCancel onClick={closeModal}>
              <ButtonDefault type="adminCancel" name={"Cancel"} />
            </PositionButtonCancel>
          </DivButton>
        </Container>
      </ContainerCentral>
    </>
  );
};

export default AddEditUser;

const status_mok = [
  { id: 1, value: "Active", label: "Active" },
  { id: 2, value: "Inactive", label: "Inactive" },
];

const entityUser = {
  name: "",
  tcs_id: "",
  email: "",
  level: "",
};

const levels = [1, 2, 3, 4, 5];
