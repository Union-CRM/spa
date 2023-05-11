import { React, useState, useEffect } from 'react'
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
  DivAtivo
} from "./styles"

import { useFetchTag } from '../../../../hook/useFetchTag';
import { TagComponent } from '../../../Geral/TagComponent';
import SingleSelect from '../../../Geral/Input/SingleSelect';
import { useFetchRelease } from '../../../../hook/useFetchRelease';
import ButtonDefault from '../../../../assets/Buttons/ButtonDefault';
import { useReleaseContext } from '../../../../hook/useReleaseContent';
import { useBusinessContext } from '../../../../hook/useBusinessContent';


const CreateEditRelease = (props) => {

  // Context and props
  const { business } = useBusinessContext();
  const { createRelease, updateRelease, updateStatusRelease } = useFetchRelease();
  const { setModalCreateRelease, setModalEditRelease, loadData, modalDiscard, modalEditRelease,
    idRelease, releaseTarget, setSucessRelease } = useReleaseContext();

  // UseStates
  const [tags, setTags] = useState("");
  const { tagList } = useFetchTag("Tag");
  const [flagName, setFlagName] = useState(false);
  const [flagCode, setFlagCode] = useState(false);
  const [releaseName, setReleaseName] = useState("");
  const [releaseCode, setReleaseCode] = useState("");
  const [businessList, setBusinessList] = useState("");
  const [flagStatus, setFlagStatus] = useState(false);
  const [releaseStatus, setReleaseStatus] = useState("");
  const [flagBusiness, setFlagBusiness] = useState(false);
  const [businessRelease, setBusinessRelease] = useState("");

  const status = [
    { id: 1, value: "ATIVO", label: "ATIVO" },
    { id: 2, value: "INATIVO", label: "INATIVO" },
  ];

  // BusinessList
  useEffect(() => {
    setBusinessList(
      business.map((item) => ({
        id: item.id,
        value: item.id,
        label: item.name,
      }))
    );

    if (props.title === "Edit Release") {
      setReleaseName(releaseTarget.name)
      setReleaseCode(releaseTarget.code)
      setReleaseStatus(releaseTarget.status)
      setBusinessRelease({ value: releaseTarget.businessID, label: releaseTarget.businessName })
      setTags(releaseTarget.tags)

    }
  }, [releaseTarget]);

  // Checking which modal is opened
  const handleSubmit = () => {
    if (!modalDiscard) {
      if (!modalEditRelease) {
        insertRelease()
      }
      else {
        editRelease()
      }
    }
  };

  // Insert new Release
  const insertRelease = () => {

    var tag = [];

    if (tags) {
      tag = tags.map((tag) => ({ tag_id: tag.value }));
    }

    if (!releaseName) {
      console.log("Sem nome")
      setFlagName(true);
    } else {
      setFlagName(false);
    }

    if (!releaseCode) {
      console.log("Sem code")
      setFlagCode(true);
    } else {
      setFlagCode(false);
    }

    if (!businessRelease.value) {
      console.log("Sem business")
      setFlagBusiness(true);
    } else {
      setFlagBusiness(false);
    }

    const newRelease = {
      release_name: releaseName,
      release_code: releaseCode,
      business_id: parseInt(businessRelease.value),
      tags: tag
    }

    if (releaseName && releaseCode && businessRelease.value) {
      createRelease(newRelease);
      loadData()
      setModalCreateRelease(false)
    }
  }

  // Edit selected business
  const editRelease = () => {

    var tag = [];

    if (tags) {
      tag = tags.map((tag) => ({ tag_id: tag.value }));
    }

    if (!releaseName) {
      console.log("Sem nome")
      setFlagName(true);
    } else {
      setFlagName(false);
    }

    if (!releaseCode) {
      console.log("Sem code")
      setFlagCode(true);
    } else {
      setFlagCode(false);
    }

    if (!businessRelease.value) {
      console.log("Sem business")
      setFlagBusiness(true);
    } else {
      setFlagBusiness(false);
    }

    const newRelease = {
      release_name: releaseName,
      release_code: releaseCode,
      release_status: releaseStatus,
      business_id: parseInt(businessRelease.value),
      tags: tag
    }

    if (releaseName && releaseCode && businessRelease.value) {
      setSucessRelease(true);
      updateRelease(newRelease, idRelease.id);
      if (newRelease.release_status != idRelease.status) {
        updateStatusRelease(idRelease.id);
      }
    }
  }

  // Button cancel in modalCreateRelease
  const handleCancel = () => {
    setModalCreateRelease(false)
    setModalEditRelease(false)
  };

  // Set business selected in modalEditRelease
  const handleSelectBusiness = (id) => {
    setBusinessRelease(businessList.filter(s => s.value === id)[0])
  }


  return (
    <ContainerCentral>
      <Container>
        <PositionTitle>
          <H1>{props.title}</H1>
        </PositionTitle>
        <Form>
          <DivBusinessName>

            <Label>Release Train Name</Label>
            {(
              <Input
                flag={flagName}
                name={releaseName}
                value={releaseName}
                widthInput={"98% !important"}
                onChange={(event) => setReleaseName(event.target.value)}
                placeholder={flagName && !releaseName ? "Required field" : ""}
                required
              />)}
          </DivBusinessName>
          <DivCodeStatus>
            <DivCode>
              <Label>Code</Label>
              {(
                <Input
                  widthInput={"98% !important"}
                  name={releaseCode}
                  flag={flagCode}
                  value={releaseCode}
                  onChange={(event) => setReleaseCode(event.target.value)}
                  placeholder={flagCode && !releaseCode ? "Required field" : ""}
                  required
                />
              )}
            </DivCode>
            <DivStatus>
              <Label>Status</Label>
              {modalEditRelease && (
                <SingleSelect
                  set={(releaseStatus) => setReleaseStatus(releaseStatus)}
                  placeholder={flagStatus && !releaseStatus ? "Required field" : ""}
                  options={status}
                  value={releaseStatus ? releaseStatus : ("")}
                  sizeSingle={"87%"}
                  sizeMenu={"100%"}
                  isDisabled={false}
                  required
                />
              )}
              {!modalEditRelease && (
                <>
                  <DivAtivo>
                    <Input placeholder="Status" value="Ativo" disabled />
                  </DivAtivo>
                </>
              )}
            </DivStatus>
          </DivCodeStatus>
          <DivSegment>
            <Label>Business</Label>
            {!modalEditRelease && (
              <SingleSelect
                set={(s) => handleSelectBusiness(s)}
                placeholder={flagBusiness && !businessRelease ? "Required field" : ""}
                options={businessList ? businessList : []}
                sizeSingle={"86.5%"}
                sizeMenu={"100%"}
                isDisabled={false}
                required
              />
            )}
            {modalEditRelease && (
              <SingleSelect
                set={(s) => handleSelectBusiness(s)}
                placeholder={flagBusiness && !businessRelease ? "Required field" : ""}
                options={businessList ? businessList : []}
                value={businessRelease.label}
                sizeSingle={"86.5%"}
                sizeMenu={"100%"}
                isDisabled={false}
                required
              />
            )}
          </DivSegment>
          <TagComponent
            options={tagList ? tagList : []}
            tags={tags}
            placeholder={""}
            label={"Tag"}
            width={"90%"}
            widths={"73.9%"}
            sizeHeight={"3.5vh"}
            heights={"12vh"}
            sizeMenuList={"10vw"}
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
  )
}

export default CreateEditRelease;
