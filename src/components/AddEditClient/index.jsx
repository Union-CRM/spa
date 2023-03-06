import React from "react";
import {
  Container,
  PositionTitle,
  DivDouble,
  DivButton,
  ClickButton,
  DivSingle,
  DivDivisor,
  DivFather,
  DivTag,
} from "./styles";
import SingleSelect from "../Input/SingleSelect";
import ButtonDefault from "../../assets/Buttons/ButtonDefault";
import InputWithName from "../Input/InputWithName";
import { TagComponent } from "../TagComponent";
import Headline from "../../assets/FontSystem/Headline";

const options = [
  { value: 1, label: "Phellype Flaibam", color: "#3ddc97" },
  { value: 2, label: "Carlos Costa", color: "#ACD4FF" },
  { value: 3, label: "Alexandre Sarda", color: "#FFE60082" },
  { value: 4, label: "Patricia Melo", color: "#FFB2D1" },
  { value: 5, label: "Patricia Melo", color: "#FFE60082" },
  { value: 6, label: "Patricia Melo", color: "#3ddc97" },
  { value: 7, label: "Patricia Melo", color: "#ACD4FF" },
];

const realise = [
  { id: 1, value: "Pagamento Cartão", label: "Pagamento Cartão" },
  { id: 2, value: "Experiencia Digital", label: "Experiência Digital" },
  { id: 3, value: "Inteligencia Comercial", label: "Inteligencia Comercial" },
  { id: 4, value: "Jornada do Cliente", label: "Jornada do Cliente" },
  { id: 5, value: "Dados Onboarding", label: "Dados Onboarding" },
];
const costumers = [
  { id: 1, value: "Itáu", label: "Itaú" },
  { id: 2, value: "Bradesco", label: "Bradesco" },
  { id: 3, value: "Santander", label: "Santander" },
  { id: 4, value: "Nubank", label: "Nubank" },
  { id: 5, value: "Banco do Brasil", label: "Banco do Brasil" },
];

const role = [
  { id: 1, value: "Teach Lead", label: "Tech Lead" },
  { id: 2, value: "Scrum Master", label: "Scrum Master" },
  { id: 3, value: "Product Owner", label: "Product Owner" },
  { id: 4, value: "Project Manager", label: "Project Manager" },
  { id: 5, value: "Analyst DevOps", label: "Analyst DeveOps" },
];

const status = [
  { id: 1, value: "Active", label: "Active" },
  { id: 2, value: "Inactive", label: "Inactive" },
];
const AddEditClient = ({ title, setModal }) => {
  const closeModal = () => {
    setModal(false);
  };
  const saveModal = () => {
    setModal(false);
  };

  return (
    <Container>
      <DivFather>
        <PositionTitle>
          <Headline type={"Headline3"} colorFont={"#000"} name={title} />
        </PositionTitle>

        <InputWithName label="Client Name" widthInput={"85.8%"} />

        <DivDouble>
          <InputWithName label="Email" widthInput={"85.8%"} />

          <DivSingle>
            <SingleSelect
              label={"Role"}
              sizeSingle={"90%"}
              sizeMenu={"90%"}
              options={role}
            />
          </DivSingle>
        </DivDouble>

        <SingleSelect
          label={"Customer"}
          sizeSingle={"87.9%"}
          sizeMenu={"87.9%"}
          options={costumers}
        />
        <InputWithName label="Business" widthInput={"85.8%"} />

        <SingleSelect
          label={"Release Train"}
          sizeSingle={"87.9%"}
          sizeMenu={"87.9%"}
          sizeMenuList={"100%"}
          options={realise}
        />

        <DivTag>
          <TagComponent
            options={options}
            label={"Tag"}
            width={"34.6%"}
            left={"129%"}
            heights={"35px"}
            heightsValue={"126px"}
            widthValue={"170%"}
            heightMenu={"80px"}
            sizeMenu={"35%"}
            sizeMenuList={"100%"}
            topValue={"-3px"}
          />
        </DivTag>

        <DivDivisor>
          <SingleSelect
            label={"Status"}
            sizeSingle={"100%"}
            sizeMenu={"100%"}
            options={status}
          />
        </DivDivisor>
      </DivFather>

      <DivButton>
        <ClickButton onClick={saveModal}>
          <ButtonDefault
            type={"userSave"}
            weightFont={"500"}
            sizeFont={"18px"}
            name={"Save"}
          />
        </ClickButton>
        <ClickButton onClick={closeModal}>
          <ButtonDefault
            type={"userCancel"}
            weightFont={"500"}
            sizeFont={"18px"}
            name={"Cancel"}
          />
        </ClickButton>
      </DivButton>
    </Container>
  );
};

export default AddEditClient;
