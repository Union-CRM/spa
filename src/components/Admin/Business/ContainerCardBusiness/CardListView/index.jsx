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
import { useBusinessContext } from "../../../../../hook/useBusinessContent";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {ReactComponent as Edit} from "../../../../../assets/svg/Edit.svg"

import styled, { css } from "styled-components";
import { useFetchBusiness } from '../../../../../hook/useFetchBusiness';
const BusinessCard = (props) => {

  const { setModalEditBusiness, setModalCreateBusiness,idBusiness,setIdBusiness, setModalStatus} = useBusinessContext();
  const { openModal, openModalPopUp } = props;
  const { updateStatusBusiness} = useFetchBusiness();
  const { business: businessList} = useBusinessContext();

  const business = businessList.filter((item) => item.id === props.id)[0];

  const [tags] = useState(
    business.tags.map((tag) => {
      return tag.label + "; ";
    })
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
    setModalEditBusiness(true)
    setModalCreateBusiness(false)
  }
  

  return (
    <ContainerFather>
      <Container>
        <Card
          isActive={isActive}
          active={isActive}
          $mode={business.status}
          checked={isActive}
        >
          <Header>
            
            <DivDadosCard>
            <DivIcons>
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
                    <Edit onClick={() => handleModal()}/>
              </DivIcons>
              <DivTeste >
                <Body type={"Body1"} name={business.code} />
                <TitleInfo>
                    <span> | </span>{" "}
                </TitleInfo>
                <Tippy content={tags}>
                    <TagsSpan $mode={business.status}>tags</TagsSpan>
                </Tippy>
              </DivTeste>
              
              <NameBusiness >
                    {business.name}
                </NameBusiness>

              <DivTagsStatus>
                <Status
                  isActive={isActive}
                  $mode={business.status}
                  checked={isActive}
                >
                  {business.status}
                </Status>
                
              </DivTagsStatus>
            </DivDadosCard>

            
          </Header>
        </Card>
      </Container>
    </ContainerFather>
  );
};

export default BusinessCard;
