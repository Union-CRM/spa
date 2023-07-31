import { React, useState, useEffect } from "react";
import { useFetchTag } from "../../../../hook/useFetchTag";
import { TagComponent } from "../../../Geral/TagComponent";
import { useFetchSegment } from "../../../../hook/useFetchSegment";
import { useFetchBusiness } from "../../../../hook/useFetchBusiness";
import { useBusinessContext } from "../../../../hook/useBusinessContent";

import {
  Container,
  ContainerCentral,
  PositionTitle,
  Form,
  H1,
  DivButton,
  ClickButton,
  PositionButtonCancel,
  DivBusinessName,
  Label,
  Input,
  DivCodeStatus,
  DivCode,
  DivStatus,
  DivSegment,
  DivAtivo,
} from "./styles";

import SingleSelect from "../../../Geral/Input/SingleSelect";
import ButtonDefault from "../../../../assets/Buttons/ButtonDefault";

const CreateEditBusiness = (props) => {
  // Context and props
  const { tagBusinessList } = useFetchTag("Tag");
  const { segmentList } = useFetchSegment("Seg");
  const { createBusiness, updateBusiness, updateStatusBusiness } =
    useFetchBusiness();
  const {
    setModalCreateBusiness,
    setModalEditBusiness,
    loadData,
    modalDiscard,
    modalEditBusiness,
    idBusiness,
    businessTarget,
    setSucessBusiness,
  } = useBusinessContext();

  // UseStates
  const [tags, setTags] = useState("");
  const [flag, setFlag] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [businessCode, setBusinessCode] = useState("");
  const [businessStatus, setBusinessStatus] = useState("");
  const [businessSegment, setBusinessSegment] = useState("");

  // Status Options
  const status = [
    { id: 1, value: "ATIVO", label: "ATIVO" },
    { id: 2, value: "INATIVO", label: "INATIVO" },
  ];

  // If edit Modal, set BusinessTarget in Business
  useEffect(() => {
    if (props.title === "Edit Business") {
      setBusinessName(businessTarget.name);
      setBusinessCode(businessTarget.code);
      setBusinessStatus(businessTarget.status);
      setBusinessSegment({
        value: businessTarget.segment_id,
        label: businessTarget.segment_description,
      });
      setTags(businessTarget.tags);
    }
  }, [businessTarget]);

  // Checking which modal is opened
  const handleSubmit = () => {
    if (!modalDiscard) {
      if (!modalEditBusiness) {
        insertBusiness();
      } else {
        editBusiness();
      }
    }
  };

  //  CREATE AND EDIT ANOTATION

  // Insert new Business
  const insertBusiness = () => {
    var tag = [];

    if (tags) {
      tag = tags.map((tag) => ({ tag_id: tag.value }));
    }

    const newBusiness = {
      business_name: businessName,
      business_code: businessCode,
      segment_id: businessSegment,
      tags: tag,
    };
    console.log(newBusiness);

    if (businessName && businessCode && businessSegment) {
      createBusiness(newBusiness);
      loadData();
    } else {
      setFlag(true);
    }
  };

  // Edit selected business
  const editBusiness = () => {
    var tag = [];

    if (tags) {
      tag = tags.map((tag) => ({ tag_id: tag.value }));
    }

    const newBusiness = {
      business_name: businessName,
      business_code: businessCode,
      segment_id: parseInt(businessSegment.value),
      status: businessStatus,
      tags: tag,
    };

    if (businessName && businessCode && businessSegment.value) {
      setSucessBusiness(true);
      updateBusiness(newBusiness, idBusiness);

      if (newBusiness.status !== idBusiness.status) {
        updateStatusBusiness(idBusiness.id);
      }
    }
  };
  //15-05
  // Button cancel in modalCreateBusiness
  const handleCancel = () => {
    setModalCreateBusiness(false);
    setModalEditBusiness(false);
  };

  // Set segment selected in modalEditBusiness
  const handleSelectedSegment = (id) => {
    setBusinessSegment(segmentList.filter((s) => s.value === id)[0]);
  };

  return (
    <ContainerCentral>
      <Container>
        <PositionTitle>
          <H1>{props.title}</H1>
        </PositionTitle>
        <Form>
          <DivBusinessName>
            <Label>Business Name</Label>
            {
              <Input
                widthInput={"98% !important"}
                name={businessName}
                flag={flag}
                value={businessName ? businessName : ""}
                onChange={(event) => setBusinessName(event.target.value)}
                required
              />
            }
          </DivBusinessName>
          <DivCodeStatus>
            <DivCode>
              <Label>Code</Label>
              {
                <Input
                  widthInput={"98% !important"}
                  name={businessCode}
                  flag={flag}
                  value={businessCode ? businessCode : ""}
                  onChange={(event) => setBusinessCode(event.target.value)}
                  required
                />
              }
            </DivCode>
            <DivStatus>
              <Label>Status</Label>
              {modalEditBusiness && (
                <SingleSelect
                  set={(businessStatus) => setBusinessStatus(businessStatus)}
                  onChange={(event) => setBusinessStatus(event.target.value)}
                  placeholder={flag && !businessStatus ? "Required field" : ""}
                  options={status}
                  value={businessStatus ? businessStatus : ""}
                  sizeSingle={"87%"}
                  sizeMenu={"87%"}
                  isDisabled={false}
                  required
                />
              )}
              {!modalEditBusiness && (
                <>
                  <DivAtivo>
                    <Input placeholder="Status" value="Ativo" disabled />
                  </DivAtivo>
                </>
              )}
            </DivStatus>
          </DivCodeStatus>
          <DivSegment>
            <Label>Segment</Label>
            {!modalEditBusiness && (
              <SingleSelect
                set={(s) => setBusinessSegment(s)}
                placeholder={flag && !businessSegment ? "Required field" : ""}
                options={segmentList ? segmentList : []}
                sizeSingle={"87%"}
                sizeMenu={"87%"}
                isDisabled={false}
                required
              />
            )}
            {modalEditBusiness && (
              <SingleSelect
                set={(bs) => handleSelectedSegment(bs)}
                placeholder={flag && !businessSegment ? "Required field" : ""}
                options={segmentList ? segmentList : []}
                value={businessSegment ? businessSegment.label : ""}
                sizeSingle={"86.5%"}
                sizeMenu={"86.5%"}
                isDisabled={false}
                required
              />
            )}
          </DivSegment>
          <TagComponent
            options={tagBusinessList ? tagBusinessList : []}
            tags={tags}
            placeholder={""}
            label={"Tag"}
            width={"90%"}
            widths={"82%"}
            sizeHeight={"3.5vh"}
            heights={"12vh"}
            sizeMenuList={"11vw"}
            sizeMenu={"35%"}
            set={(t) => setTags(t)}
          />
        </Form>
        <DivButton>
          <ClickButton onClick={() => handleSubmit()}>
            <ButtonDefault
              type="adminSave"
              weightFont={"500"}
              sizeFont={"18px"}
              name={"Save"}
            />
          </ClickButton>
          <PositionButtonCancel onClick={() => handleCancel()}>
            <ButtonDefault type="adminCancel" name={"Cancel"} />
          </PositionButtonCancel>
        </DivButton>
      </Container>
    </ContainerCentral>
  );
};

export default CreateEditBusiness;
