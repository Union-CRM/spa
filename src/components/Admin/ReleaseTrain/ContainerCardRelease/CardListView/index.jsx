import { useState,useEffect } from "react";
import {
  Container,
  Card,
  Header,
  DivPhoto,
  DivPhotoI,
  DivDadosCard,
  Status,
  DivTagsStatus,
  TagsSpan,
  DivIcons,
  IconTag,
  IconEdit,
  DivToggle,
  InputToggle,
  LabelToggle,
  Span,
  DivInfo,
  DivRole,
  DivCustomer,
  DivBusiness,
  DivRelease,
  ValueInfo,
  TitleInfo,
  ContainerFather,
  ToggleContainer,
  ToggleButton,
  DivTeste,
  NameBusiness,
} from "./styles";
import Body from "../../../../../assets/FontSystem/Body";
import Subtitle from "../../../../../assets/FontSystem/Subtitle";
import { useReleaseContext } from "../../../../../hook/useReleaseContent";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {ReactComponent as Edit} from "../../../../../assets/svg/Edit.svg"

import styled, { css } from "styled-components";
import { useFetchRelease } from "../../../../../hook/useFetchRelease";

const ReleaseCard = (props) => {

  
  
  const { setModalEditRelease, setModalCreateRelease, idRelease, setIdRelease} = useReleaseContext();
  const { openModal, openModalPopUp } = props;
  const {updateStatusRelease} = useFetchRelease();
  const { release: releaseList, updateRelease} = useReleaseContext();
  const release = releaseList.filter((item) => item.id === props.id)[0];

  const [tags] = useState(
    release.tags.map((tag) => {
      return tag.label + "; ";
    })
  );

  const handleEdit = () => {
    openModal();
    props.setId(release.id);
  };

  const handleClick = () => {
    updateStatusRelease(release.id);

    openModalPopUp();
    props.setId(release.id);
  };


  // TESTE //
  const [isActive, setIsActive] = useState(release.status === "ATIVO");
  const [previousStatus, setPreviousStatus] = useState(release.status);
  const handleToggle = () => {
    const newStatus = isActive ? "INATIVO" : "ATIVO";
    setIsActive(!isActive);
    //updateBusiness(business.id, { ...business, status: newStatus });
    //console.log(business.id);
  };

  function handleModal(id){
    setIdRelease(id);
    props.openModal()
    setModalEditRelease(true)
    setModalCreateRelease(false)
  }
  

  return (
    <ContainerFather>
      <Container>
        <Card
          isActive={isActive}
          active={isActive}
          $mode={release.status}
          checked={isActive}
        >
          <Header>
            
            <DivDadosCard>
            <DivIcons>
                  <ToggleContainer
                    isActive={isActive}
                    $mode={release.status}
                    checked={isActive}
                  >
                    <InputToggle
                      type="checkbox"
                      id={release.status}
                      checked={release.status}
                      onChange={handleToggle}
                      onClick={() => handleClick()}
                    />
                    <ToggleButton checked={isActive} />
                    </ToggleContainer>
                    <Edit onClick={() => handleModal()}/>
              </DivIcons>
              <DivTeste >
                <Body type={"Body1"} name={release.code} />
                <TitleInfo>
                    <span> | </span>{" "}
                </TitleInfo>
                <Tippy content={tags}>
                    <TagsSpan $mode={release.status}>tags</TagsSpan>
                </Tippy>
              </DivTeste>
              
              <NameBusiness >
                    {release.name}
                </NameBusiness>

              <DivTagsStatus>
                <Status
                  isActive={isActive}
                  $mode={release.status}
                  checked={isActive}
                >
                  {release.status}
                </Status>
                
              </DivTagsStatus>
            </DivDadosCard>

            
          </Header>
        </Card>
      </Container>
    </ContainerFather>
  );
};

export default ReleaseCard;