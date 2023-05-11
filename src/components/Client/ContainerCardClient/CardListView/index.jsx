import { useState, useEffect } from "react";
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
} from "./styles";
import Body from "../../../../assets/FontSystem/Body";
import Subtitle from "../../../../assets/FontSystem/Subtitle";
import { useClientContext } from "../../../../hook/useClientContent";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import styled, { css } from "styled-components";

const ClientCard = (props) => {
  const { openModal, openModalPopUp } = props;
  const [manager, setManager] = useState();
  const { toggleState, setToggleState } = useClientContext();
  const { activeTab, setActiveTab } = useClientContext();

  const { client: clientList, updateClient } = useClientContext();
  const client = clientList.filter((item) => item.id === props.id)[0];
  const [tags] = useState(
    client.tags.map((tag) => {
      return tag.label + "; ";
    })
  );
  const handleEdit = () => {
    openModal();
    setToggleState(0);
    setActiveTab(0);
    props.setId(client.id);
  };

  const handleClick = () => {
    openModalPopUp();
    props.setId(client.id);
  };




  const [isActive, setIsActive] = useState(client.status === "Active");
  const [previousStatus, setPreviousStatus] = useState(client.status);
  const handleToggle = () => {
    const newStatus = isActive ? "Inactive" : "Active";
    setIsActive(!isActive);
    updateClient(client.id, { ...client, status: newStatus });
  };

  
  return (
    <ContainerFather>
      <Container>
        <Card
          isActive={isActive}
          active={isActive}
          $mode={client.status}
          checked={isActive}
        >
          <Header>
            <DivPhoto>
              <DivPhotoI
               isActive={isActive}
               active={isActive}
               $mode={client.status}
               checked={isActive}>
                <Body
                  type={"Body1"}
                  name={client.client
                    .match(/(^\S\S?|\b\S)?/g)
                    .join("")
                    .match(/(^\S|\S$)?/g)
                    .join("")
                    .toUpperCase()}
                />
              </DivPhotoI>
            </DivPhoto>

            <DivDadosCard>
              <Body type={"Body2"} name={client.client} />

              <Subtitle type={"TextDescription"} name={client.email} />

              <DivTagsStatus>
                <Status
                  isActive={isActive}
                  $mode={client.status}
                  checked={isActive}
                >
                  {client.status}
                </Status>
    
                <Tippy content= {tags && tags.length === 0 ? (
     "It has no tags" ) : (tags)}>
    
    
                <TagsSpan
                $mode={client.tags}
                isActive={isActive}
               active={isActive}
               checked={isActive}>tags</TagsSpan>
                </Tippy>


              </DivTagsStatus>
 
            </DivDadosCard>

            <DivIcons>
              <ToggleContainer
                isActive={isActive}
                $mode={client.status}
                checked={isActive}
              >
                <InputToggle
                  type="checkbox"
                  id={client.id}
                  checked={client.status}
                  onChange={handleToggle}
                  onClick={() => handleClick()}
                />
                <ToggleButton checked={isActive} />
              </ToggleContainer>
            </DivIcons>
          </Header>
          <DivInfo  onClick={handleEdit}>
            <DivRole>
              <TitleInfo>
                Role <span> | </span>{" "}
              </TitleInfo>
              <ValueInfo>{client.textRole} </ValueInfo>
            </DivRole>

            <DivCustomer>
              <TitleInfo>
                Customer <span> | </span>{" "}
              </TitleInfo>
              <ValueInfo>{client.textCustomer}</ValueInfo>
            </DivCustomer>

            <DivBusiness>
              <TitleInfo>
                Business <span> | </span>{" "}
              </TitleInfo>
              <ValueInfo>{client.textBusiness} </ValueInfo>
            </DivBusiness>

            <DivRelease>
              <TitleInfo>

                Manager <span>|</span>{" "}
              </TitleInfo>
              <ValueInfo>{SplitName(client.user_name)}</ValueInfo>

            </DivRelease>
          </DivInfo>
        </Card>
      </Container>
    </ContainerFather>
  );
};

export default ClientCard;

function SplitName(n) {
  const user = n ? n : "";
  var userSplit = user.split(" ");
  var user1 = userSplit[0] + " " + userSplit[userSplit.length - 1] + "";

  return user1;
}
