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
  DivLevel,
  Dot,
  DivRelease,
  ValueInfo,
  TitleInfo,
  ContainerFather,
  ToggleContainer,
  ToggleButton,
  PositionEdit,
} from "./styles";
import IconSystem from "../../../../../assets/IconSystem";
import Body from "../../../../../assets/FontSystem/Body";
import Subtitle from "../../../../../assets/FontSystem/Subtitle";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useUserContext } from "../../../../../hook/useUserContext";
import styled, { css } from "styled-components";
import { ClickButton, DivButton } from "../../AddEditUser/styles";
import ButtonDefault from "../../../../../assets/Buttons/ButtonDefault";

const ClientCard = (props) => {
  const { openModal, openModalPopUp, openUserProfile } = props;

  const { userList, setViewProfile, setUserTarget } = useUserContext();
  const user = userList.filter((u) => u.id === props.id)[0];

  const handleEdit = () => {
    openModal();
    //props.setId(client.id);
  };

  const handleClick = () => {
    setViewProfile(true);
    setUserTarget(user);
    //props.setId(client.id);
  };

  const [isActive, setIsActive] = useState(user.status === "ACTIVE");

  /*const handleToggle = () => {
    setIsActive(!isActive);
    updateClient(client.id, { ...client, status: isActive ? "Inactive" : "Active" });
  };*/

  // TESTE //
  //const [previousStatus, setPreviousStatus] = useState(client.status);
  const handleToggle = () => {
    //const newStatus = isActive ? "Inactive" : "Active";
    //setIsActive(!isActive);
    //updateClient(client.id, { ...client, status: newStatus });
  };
  /*
  const handleDeactivate = () => {
    updateClient(client.id, { ...client, status: "Inactive" });
    setIsActive(false);
    setPreviousStatus(client.status);
  };

  const handleDeactivateCancel = () => {
    setIsActive(client.status === "Active");
    updateClient(client.id, { ...client, status: previousStatus });
  };*/

  return (
    <ContainerFather>
      <Container>
        <Card
          isActive={isActive}
          active={isActive}
          $mode={user.status}
          checked={isActive}
        >
          <Header>
            <DivPhoto>
              <DivPhotoI>
                <Body type={"Body1"} name={Split(user.name)} />
              </DivPhotoI>
            </DivPhoto>

            <DivDadosCard>
              <Body type={"Body1"} name={user.name} />

              <Subtitle type={"TextDescription"} name={user.email} />
            </DivDadosCard>

            <DivIcons>
              <ToggleContainer
                isActive={isActive}
                $mode={user.status}
                checked={isActive}
              >
                <InputToggle
                  type="checkbox"
                  id={user.id}
                  checked={user.status}
                  onChange={handleToggle}
                  onClick={() => handleClick()}
                />
                <ToggleButton checked={isActive} />
              </ToggleContainer>

              <PositionEdit onClick={handleEdit}>
                <IconSystem icon={"Edit"} height={"15px"} width={"15px"} />
              </PositionEdit>
            </DivIcons>
          </Header>

          <DivInfo>
            <DivLevel>
              <Dot bgColor={"#e41165"}></Dot>
              <Dot bgColor={user.level > 1 ? "#e41165" : "#F5F7FA"}></Dot>
              <Dot bgColor={user.level > 2 ? "#e41165" : "#F5F7FA"}></Dot>
              <Dot bgColor={user.level > 3 ? "#e41165" : "#F5F7FA"}></Dot>
              <Dot bgColor={user.level > 4 ? "#e41165" : "#F5F7FA"}></Dot>
            </DivLevel>
            <DivButton onClick={handleClick}>
              <ButtonDefault
                onClick={() => handleClick()}
                type="adminSave"
                weightFont={"135"}
                sizeFont={"14px"}
                name={"View Profile"}
              />
            </DivButton>
          </DivInfo>
        </Card>
      </Container>
    </ContainerFather>
  );
};

export default ClientCard;

function Split(n) {
  const name = n ? n : "";
  var nameSplit = name.split(" ");
  var name2 =
    nameSplit[0].split("")[0] +
    " " +
    nameSplit[nameSplit.length - 1].split("")[0] +
    "";

  return name2.toUpperCase();
}
