import { useState,useEffect } from "react";
import {
  Container,
  Card,
  Header,
  DivDadosCard,
  DivIcons,
  InputToggle,
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

// Style
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react";

import { useFetchRelease } from "../../../../../hook/useFetchRelease";
import { useReleaseContext } from "../../../../../hook/useReleaseContent";

const ReleaseCard = (props) => {

  
  // Context and props
  const { openModal, openModalPopUp } = props;
  const { setModalEditRelease, setModalCreateRelease,setIdRelease,
    setModalStatusRelease} = useReleaseContext();
  const { release: releaseList, setReleaseTarget} = useReleaseContext();
  const release = releaseList.filter((item) => item.id === props.id)[0];

  // UseState
  const [tagIcon, setTagIcon] = useState(false);
  const [tags] = useState(
    release.tags.map((tag) => {
      return tag.label + "; ";
    })
  );

  // Function that is receiving the release id by props to change the status in toggle
  const handleClick = () => {
    setModalStatusRelease(true);
    props.setId(release.id);
    setIdRelease(release.id);
  };

  const [isActive, setIsActive] = useState(release.status === "ATIVO");

  // Toggle function to change card status
  const handleToggle = () => {
    const newStatus = isActive ? "INATIVO" : "ATIVO";
    setIsActive(!isActive);
  };

  // Function to open edit release modal
  function handleModal(id){
    setIdRelease(id);
    props.openModal();
    setModalCreateRelease(false);
    setReleaseTarget(release);
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

export default ReleaseCard;
