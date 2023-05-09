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
  HeaderTags,
  TagsStatus,
  DivTagsSpan,
  DivImgTag,
  DivCenter,
  DivTag,
  DivContentTags,
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

  
  
  const { setModalEditRelease, setModalCreateRelease, 
    idRelease, setIdRelease,
    setModalStatusRelease} = useReleaseContext();
  const { openModal, openModalPopUp } = props;
  const {updateStatusRelease} = useFetchRelease();
  const { release: releaseList, updateRelease, setReleaseTarget} = useReleaseContext();
  const release = releaseList.filter((item) => item.id === props.id)[0];
  const [tagIcon, setTagIcon] = useState(false);
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
    setModalStatusRelease(true);
    props.setId(release.id);
    setIdRelease(release.id);
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
    setModalCreateRelease(false)
    setReleaseTarget(release)
  }

  return (
    <ContainerFather onClick={() => handleModal()}>
      <Container>
        <Card
          isActive={isActive}
          active={isActive}
          $mode={release.status}
          checked={isActive}
        >
          <Header name="Header Geral">
            <HeaderTags name="ButtonTags">
              <TagsStatus>
                {!tagIcon && (
                  <DivTagsSpan
                    onClick={() => setTagIcon(!tagIcon)}
                    isActive={isActive}
                    $mode={release.tags}
                  >
                    tags
                  </DivTagsSpan>
                )}
                {tagIcon && (
                  <DivImgTag isActive={isActive}>
                    <DivTagsSpan onClick={() => setTagIcon(!tagIcon)}>tags</DivTagsSpan>
                  </DivImgTag>
                )}
              </TagsStatus>
            </HeaderTags>
            <DivIcons name="Toggle">
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
            </DivIcons>
          </Header>
          <DivDadosCard onClick={() => setModalEditRelease(true)} name="DivDadosCard">
            {!tagIcon && (
              <>  <DivCenter>
                  <NameBusiness>{release.name}</NameBusiness>
                  <DivTeste>
                    <p>{release.code}</p>
                  </DivTeste>
                  </DivCenter>
              </>
            )}
            {tagIcon && (
              <DivTag>
                {release.tags.length > 0 ? (
                  release.tags.map((t, index) => {
                    if (index < 3) {
                      return (
                        <DivContentTags
                          key={index}
                          colorTag={isActive ? t.color : "#7a7a7a"}
                        >
                          {t.label}
                        </DivContentTags>
                      );
                    } else if (index === 3) {
                      return (
                        <Tippy key={index} content={tags}>
                          <DivContentTags
                            key={index}
                            colorTag={isActive ? t.color : "#7a7a7a"}
                          >
                            <p>see more tags</p>
                          </DivContentTags>
                        </Tippy>
                      );
                    }
                  })
                ) : (
                  <p>Does not have Tags</p>
                )}
              </DivTag>
            )}
          </DivDadosCard>
        </Card>
      </Container>
    </ContainerFather>
  );
};

export default ReleaseCard;