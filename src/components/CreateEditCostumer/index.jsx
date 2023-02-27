import React from "react";
import {
  Status,
  Tag,
  SpanTag,
  Container,
  PositionTitle,
  PositionCustomer,
  ButtonConfirm,
  ButtonCancel,
  PositionStatus,
  PositionTags,
} from "./styles";
import ButtonDefault from "../../assets/Buttons/ButtonDefault/index";
import InputPlaceHolder from "../Input/InputPlaceholder";
import SingleSelect from "../Input/SingleSelect";
import { MultiSelect } from "../Input/SelectMulti";
import Headline from "../FontSystem/Headline";
import Body from "../FontSystem/Body";

const values = [
  { value: 1, label: "active" },
  { value: 2, label: "disable" },
];

const status = [
  { value: 1, label: "AWS", color: "#3ddc97" },
  { value: 2, label: "Modernization", color: "#ACD4FF" },
  { value: 3, label: "Online Bank", color: "#FFE60082" },
];

const CreateCostumer = ({ Title }) => {
  return (
    <Container>
      <Headline type={"Headline3"} name={Title} />
      <PositionCustomer>
        <Body type={"Body2"} name={"Costumers Name"} />
        <InputPlaceHolder />
      </PositionCustomer>
      <PositionStatus>
        <SpanTag>
          <Body type={"Body2"} name={"Status"} />
        </SpanTag>
        <SingleSelect options={values} sizeSingle="240px" />
      </PositionStatus>
      <PositionTags>
        <Body type={"Body2"} name={"Tag"} />
        <MultiSelect options={status} widths="515px" />
      </PositionTags>
      <ButtonConfirm>
        <ButtonDefault type={"true"} name={"Confirm"} />
      </ButtonConfirm>
      <ButtonCancel>
        <ButtonDefault type={"false"} name={"Cancel"} />
      </ButtonCancel>
    </Container>
  );
};

export default CreateCostumer;
