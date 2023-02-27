import React from "react";
import IconSystem from "../../assets/IconSystem";
import {
  DivForm,
  Title,
  DivUser,
  DivCenter,
  DivStatus,
  InputUser,
  InputEmail,
  SelectStatus,
  SelectLevel,
  TitleEmail,
  TitleLevel,
  DivEmail,
  DivLevel,
  Button1,
  Button2,
} from "./styles.jsx";

import ButtonDefault from "../../assets/Buttons/ButtonDefault";
import Headline from "../FontSystem/Headline";
import Body from "../FontSystem/Body";
import InputWithName from "../Input/InputWithName";

import SingleSelect from "../Input/SingleSelect";

const option = [
  { id: 1, value: "1", label: "1" },
  { id: 2, value: "2", label: "2" },
  { id: 3, value: "3", label: "3" },
  { id: 4, value: "4", label: "4" },
  { id: 5, value: "5", label: "5" },
];

const status = [
  { id: 1, value: "Ativo", label: "Ativo" },
  { id: 1, value: "Inativo", label: "Inativo" },
];
function EditUser() {
  return (
    <DivForm>
      <Title>
        <Headline type={"Headline3"} name={"Edit User"} />
      </Title>

      <DivUser>
        <Body type={"Body2"} name={"User Name"} />
        <InputWithName type={"text"} />
      </DivUser>

      <DivCenter>
        <DivEmail>
          <Body type={"Body2"} name={"Email"} />
          <InputWithName widthInput={"240px"} />
        </DivEmail>
        <DivLevel>
          <Body type={"Body2"} name={"Level"} />

          <SingleSelect sizeSingle={"240px"} options={option} />
        </DivLevel>
      </DivCenter>

      <DivStatus>
        <Body type={"Body2"} name={"Status"} />
        <SingleSelect sizeSingle={"510px"} options={status} />
      </DivStatus>

      <Button1>
        <ButtonDefault name="Save" type="true"></ButtonDefault>
      </Button1>
      <Button2>
        <ButtonDefault
          name="Cancel"
          type="false"
          width={"1000px"}
        ></ButtonDefault>
      </Button2>
    </DivForm>
  );
}
export default EditUser;
