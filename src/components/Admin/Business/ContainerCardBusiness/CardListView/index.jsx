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
  ImgTag,
  DivTag,
  DivContentTags,
  DivCenter,
} from "./styles";
import Body from "../../../../../assets/FontSystem/Body";
import Subtitle from "../../../../../assets/FontSystem/Subtitle";
import { useBusinessContext } from "../../../../../hook/useBusinessContent";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {ReactComponent as Edit} from "../../../../../assets/svg/Edit.svg"

import styled, { css } from "styled-components";
import { useFetchBusiness } from '../../../../../hook/useFetchBusiness';
const BusinessCard = (props) => {

  const { setModalEditBusiness, setModalCreateBusiness,idBusiness,setIdBusiness, setModalStatus, setBusinessTarget} = useBusinessContext();
  const { openModal, openModalPopUp } = props;
  const { updateStatusBusiness} = useFetchBusiness();
  const { business: businessList} = useBusinessContext();
  const [tagIcon, setTagIcon] = useState(false);
  const business = businessList.filter((item) => item.id === props.id)[0];

  const [tags] = useState(
    business.tags ? business.tags.map((tag) => {
      return tag.label + "; ";
    }) : ""
  );

  const handleEdit = () => {
    openModal();
    props.setId(business.id);
  };

  const handleClick = () => {
    
    setModalStatus(true)
    props.setId(business.id);
    //updateStatusBusiness(business.id);
  };

  // TESTE //
  const [isActive, setIsActive] = useState(business.status === "ATIVO");
  const [previousStatus, setPreviousStatus] = useState(business.status);
  const handleToggle = () => {
    const newStatus = isActive ? "INATIVO" : "ATIVO";
    setIsActive(!isActive);
    //updateBusiness(business.id, { ...business, status: newStatus });
    //console.log(business.id);
  };

  function handleModal(id){

    setIdBusiness(id);
    props.openModal() 
    setModalCreateBusiness(false)
    setBusinessTarget(business)
    console.log(business)
  }

  const handleTags = () => {
    setModalEditBusiness(false)
    setTagIcon(!tagIcon)
  }
  

  return (
    <ContainerFather onClick={() => handleModal()}>
      <Container>
        <Card
          isActive={isActive}
          active={isActive}
          $mode={business.status}
          checked={isActive}
        >
          <Header name="Header Geral">
            <HeaderTags name="ButtonTags">
              <TagsStatus>
                {!tagIcon && (
                  <DivTagsSpan
                    onClick={() => handleTags()}
                    isActive={isActive}
                    $mode={business.tags}
                  >
                    tags
                  </DivTagsSpan>
                )}
                {tagIcon && (
                  <DivImgTag isActive={isActive}>
                    <DivTagsSpan onClick={() => handleTags()}>tags</DivTagsSpan>
                  </DivImgTag>
                )}
              </TagsStatus>
            </HeaderTags>
            <DivIcons name="Toggle">
              <ToggleContainer
                isActive={isActive}
                $mode={business.status}
                checked={isActive}
              >
                <InputToggle
                  type="checkbox"
                  id={business.status}
                  checked={business.status}
                  onChange={handleToggle}
                  onClick={() => handleClick()}
                />
                <ToggleButton checked={isActive} />
              </ToggleContainer>
            </DivIcons>
          </Header>
          <DivDadosCard onClick={() => setModalEditBusiness(true)} name="DivDadosCard">
            {!tagIcon && (
              <>  <DivCenter>
                  <NameBusiness>{business.name}</NameBusiness>
                  <DivTeste>
                    <p>{business.code}</p>
                  </DivTeste>
                  </DivCenter>
              </>
            )}
            {tagIcon && (
              <DivTag>
                {business.tags.length > 0 ? (
                  business.tags.map((t, index) => {
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

export default BusinessCard;
