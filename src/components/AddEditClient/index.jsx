import React from "react";
import {
  Container,
  PositionTitle,
  SpanTitle,
  DivDouble,
  DivButton,
  Buttton,
  DivSingle,
} from "./styles";

//inputs component
import SingleSelect from "../Input/SingleSelect";
import ButtonDefault from "../../assets/Buttons/ButtonDefault";
import InputWithName from "../Input/InputWithName";
import { TagComponent } from "../TagComponent";

const options = [
  { value: 1, label: "Phellype Flaibam", color: "#3ddc97" },
  { value: 2, label: "Carlos Costa", color: "#ACD4FF" },
  { value: 3, label: "Alexandre Sarda", color: "#FFE60082" },
  { value: 4, label: "Patricia Melo", color: "#FFB2D1" },
];

const option = [
  { id: 1, value: "True", label: "True" },
  { id: 2, value: "False", label: "False" },
];

const AddEditClient = ({ title, setModal, props }) => {
  const closeModal = () => {
    setModal(false);
  };
  const saveModal = () => {
    setModal(false);
  };

  return (
    <Container>
      <PositionTitle>
        <SpanTitle>{title}</SpanTitle>
      </PositionTitle>

      <InputWithName label="Client Name" widthInput={"77.5%"} />

      <DivDouble>
        <InputWithName label="Email" widthInput={"240px"} />

        <DivSingle>
          <SingleSelect label={"Role"} sizeSingle={"240px"} options={option} />
        </DivSingle>
      </DivDouble>

      <SingleSelect label={"Customer"} sizeSingle={"79.7%"} options={option} />

      <InputWithName label="Business" widthInput={"77.5%"} />

      <SingleSelect
        label={"Release Train"}
        sizeSingle={"79.7%"}
        options={option}
      />

      <TagComponent
        options={options}
        label={"Status"}
        widths={"289px"}
        width={"192px"}
        left={"220px"}
        heights={"35px"}
        topValue={"-3px"}
      />

      <SingleSelect label={"Status"} sizeSingle={"192px"} options={option} />

      <DivButton>
        <Buttton onClick={saveModal}>
          <ButtonDefault
            type={"userSave"}
            weightFont={"500"}
            sizeFont={"18px"}
            name={"Save"}
          />
        </Buttton>
        <Buttton onClick={closeModal}>
          <ButtonDefault
            type={"userCancel"}
            weightFont={"500"}
            sizeFont={"18px"}
            name={"Cancel"}
          />
        </Buttton>
      </DivButton>
    </Container>
  );
};

export default AddEditClient;
