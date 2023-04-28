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
  const { user, userTarget, setModalPassword } = useUserContext();
  const [newUser, setNewUser] = useState(entityUser);
  const { createUser } = useFetchUser();
  const [newPSW, setNewPSW] = useState();
  const levelOptions = levels
    .map((l) => {
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
      setNewUser(userTarget);
    }
  }, []);

  const handleCreateUser = () => {
    const u = {
      ...newUser,
      tcs_id: parseInt(newUser.tcs_id),
    };
    console.log(u);
    if (newUser.name && newUser.email && newUser.tcs_id && newUser.level) {
      createUser(u)
        .then(function (variavel) {
          setNewPSW(variavel);
          setModalPassword(variavel);
        })
        .catch(function (error) {
          console.error("Error at create an user!", error);
          return false;
        });
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

  const handleSetStatus = (s) => {
    setNewUser({
      ...newUser,
      status: s,
    });
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
              {props.title === "Create User" && (
                <Label>
                  Status
                  <Input
                    widthInput={"98% !important"}
                    placeholder={""}
                    value={"Active"}
                    disabled
                  />
                </Label>
              )}
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
  { id: 1, value: "ACTIVE", label: "ACTIVE" },
  { id: 2, value: "INACTIVE", label: "INACTIVE" },
];

const entityUser = {
  name: "",
  tcs_id: "",
  email: "",
  level: "",
};

const levels = [1, 2, 3, 4, 5];
