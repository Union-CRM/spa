import { useState } from "react";
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

// Style
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react";


import { useBusinessContext } from "../../../../../hook/useBusinessContent";

const BusinessCard = (props) => {

  // Context and props
  const { openModal, openModalPopUp } = props;
  const { business: businessList } = useBusinessContext();
  const business = businessList.filter((item) => item.id === props.id)[0];
  const { setModalEditBusiness, setModalCreateBusiness, setIdBusiness, setModalStatus, setBusinessTarget } = useBusinessContext();

  // UseState
  const [tagIcon, setTagIcon] = useState(false);
  const [isActive, setIsActive] = useState(business.status === "ATIVO");

  // Mapping the tags
  const [tags] = useState(
    business.tags ? business.tags.map((tag) => {
      return tag.label + "; ";
    }) : ""
  );

  // Function that is receiving the business id by props to change the status in toggle
  const handleClick = () => {
    setModalStatus(true)
    props.setId(business.id);
  };

  // Toggle function to change card status
  const handleToggle = () => {
    const newStatus = isActive ? "INATIVO" : "ATIVO";
    setIsActive(!isActive);
  };

  // Function to open edit release modal
  function handleModal(id) {
    setIdBusiness(id);
    props.openModal()
    setModalCreateBusiness(false)
    setBusinessTarget(business)
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
                    onClick={() => setTagIcon(!tagIcon)}
                    isActive={isActive}
                    $mode={business.tags}
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
                          colorTag={t.color}
                        >
                          {t.label}
                        </DivContentTags>
                      );
                    } else if (index === 3) {
                      return (
                        <Tippy key={index} content={tags}>
                          <DivContentTags
                            key={index}
                            colorTag={t.color}
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
