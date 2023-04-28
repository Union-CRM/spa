import React, { useState, useEffect } from "react";

import {
  ContainerCentral,
  Container,
  PositionTitle,
  H1,
  Input,
  Form,
  Label,
  DivName,
  DivStatus,
  DivTag,
  DivButton,
  ClickButton,
  PositionButtonCancel,
} from "./styles";

import SingleSelect from "../../../Geral/Input/SingleSelect";
import ButtonDefault from "../../../../assets/Buttons/ButtonDefault";
import { TagComponent } from "../../../Geral/TagComponent";
import { useCustomerContext } from "../../../../hook/useCustomerContext";
import { useFetchTag } from "../../../../hook/useFetchTag";
import { useFetchCustomer } from "../../../../hook/useFetchCustomer";

const AddEditClient = (props) => {
  const [newCustomer, setNewCustomer] = useState(entityCustomer);
  const [status, setStatus] = useState({ value: "ATIVO" });
  const { tagList } = useFetchTag("Tag");
  const { createCustomer, updateCustomer } = useFetchCustomer();
  const { customerTarget } = useCustomerContext();
  const [tags, setTags] = useState([]);
  const [flag, setFlag] = useState(false);
  const { setModal } = props;

  const closeModal = () => {
    setModal(false);
  };

  const handleSubmit = () => {
    if (props.title === "Edit Customer") {
      editCustomer();
    } else if (props.title === "Create Customer") {
      handleCreateCustomer();
    }
  };

  useEffect(() => {
    if (props.title === "Edit Customer") {
      setNewCustomer(customerTarget);
      setTags(
        customerTarget.tags
          ? customerTarget.tags.map((item) => ({
              value: item.tag_id,
              label: item.tag_name,
              color: colors[Math.floor(Math.random() * (colors.length - 1))],
            }))
          : []
      );
    }
  }, []);

  const handleCreateCustomer = () => {
    if (newCustomer.name) {
      //to do create customer
      createCustomer({
        name: newCustomer.name,
        tags: tags ? tags.map((t) => ({ tag_id: t.value })) : [],
      });
      setModal(false);
    } else {
      setFlag(true);
    }
  };

  const editCustomer = () => {
    if (newCustomer.name) {
      updateCustomer(customerTarget.id, {
        ...newCustomer,
        tags: tags ? tags.map((t) => ({ tags_id: t.value })) : [],
      });
      setModal(false);
    } else {
      setFlag(true);
    }
  };

  const handleChange = (e) => {
    setNewCustomer({
      ...newCustomer,
      [e.name]: e.value,
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
                Customer Name
                <Input
                  widthInput={"98% !important"}
                  placeholder={
                    flag && !newCustomer.name ? "Required field" : ""
                  }
                  value={newCustomer.name}
                  name="name"
                  required
                  onChange={(event) => handleChange(event.target)}
                />
              </Label>
            </DivName>
            <DivTag>
              <TagComponent
                set={(tags) => setTags(tags)}
                tags={tags}
                label={"Tags"}
                placeholder={flag && !tags ? "Required field" : ""}
                sizeSingle={"40%"}
                required
                sizeMenu={"40%"}
                options={tagList ? tagList : []}
              />
            </DivTag>
            <DivStatus>
              {props.title === "Edit Customer" && (
                <SingleSelect
                  set={(status) => setStatus(status)}
                  label={"Status"}
                  value={newCustomer.status}
                  placeholder={
                    flag && !newCustomer.status ? "Required field" : ""
                  }
                  sizeSingle={"100%"}
                  required
                  sizeMenu={"100%"}
                  options={status_mok}
                />
              )}
              {props.title === "Create Customer" && (
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

export default AddEditClient;

const status_mok = [
  { id: 1, value: "Active", label: "Active" },
  { id: 2, value: "Inactive", label: "Inactive" },
];

const colors = [
  "#836FFF",
  "#00BFFF",
  "#7FFFD4",
  "#00FA9A",
  "#00FF00",
  "#ADFF2F",
  "#BDB76B",
  "#FFDEAD",
  "#DEB887",
  "#9370DB",
  "#EE82EE",
  "#FFB6C1",
  "#F08080",
  "#FA8072",
  "#FFA07A",
  "#FFFF00",
  "#7B68EE",
  "#BC8F8F",
];

const entityCustomer = {
  id: "",
  name: "",
  tags: [],
};
