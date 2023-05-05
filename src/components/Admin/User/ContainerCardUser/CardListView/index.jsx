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
  DivInfo,
  DivLevel,
  Dot,
  ContainerFather,
  ToggleContainer,
  ToggleButton,
} from "./styles";
import Body from "../../../../../assets/FontSystem/Body";
import Subtitle from "../../../../../assets/FontSystem/Subtitle";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useUserContext } from "../../../../../hook/useUserContext";
import styled, { css } from "styled-components";
import { ClickButton, DivButton } from "../../AddEditUser/styles";
import { useFetchUser } from "../../../../../hook/useFetchUser";
import ButtonDefault from "../../../../../assets/Buttons/ButtonDefault";

const UserCard = (props) => {
  const { openModal, openModalPopUp, openUserProfile } = props;
  const { userList, setViewProfile, setUserTarget } = useUserContext();
  const { updateStatusUser } = useFetchUser();
  const user = userList.filter((u) => u.id === props.id)[0];

  const handleClickViewProfile = () => {
    setViewProfile(true);
    setUserTarget(user);
    //props.setId(client.id);
  };

  const [isActive, setIsActive] = useState(user.status === "ACTIVE");

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  // TESTE //
  //const [previousStatus, setPreviousStatus] = useState(client.status);

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
  const handleClickAlterStatus = () => {
    updateStatusUser(props.id);
  };

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
              <DivPhotoI isActive={isActive}>
                <Body type={"Body2"} name={Split(user.name)} />
              </DivPhotoI>
            </DivPhoto>

            <DivDadosCard>
              <Body type={"Body2"} name={user.name} />

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
                  onClick={() => handleClickAlterStatus()}
                />
                <ToggleButton checked={isActive} />
              </ToggleContainer>
            </DivIcons>
          </Header>

          <DivInfo>
            <DivLevel>
              <Dot
                isActive={isActive}
                bgColor={user.status === "ACTIVE" ? "#e41165" : "#7a7a7a"}
              ></Dot>
              <Dot
                bgColor={
                  user.level > 1 && user.status === "ACTIVE"
                    ? "#e41165"
                    : user.level > 1
                    ? "#7a7a7a"
                    : "#F5F7FA"
                }
              ></Dot>
              <Dot
                bgColor={
                  user.level > 2 && user.status === "ACTIVE"
                    ? "#e41165"
                    : user.level > 2
                    ? "#7a7a7a"
                    : "#F5F7FA"
                }
              ></Dot>{" "}
              <Dot
                bgColor={
                  user.level > 3 && user.status === "ACTIVE"
                    ? "#e41165"
                    : user.level > 3
                    ? "#7a7a7a"
                    : "#F5F7FA"
                }
              ></Dot>{" "}
              <Dot
                bgColor={
                  user.level > 4 && user.status === "ACTIVE"
                    ? "#e41165"
                    : user.level > 4
                    ? "#7a7a7a"
                    : "#F5F7FA"
                }
              ></Dot>
            </DivLevel>
            <DivButton>
              <ButtonDefault
                isActive={isActive}
                onClick={() => handleClickViewProfile()}
                type={user.status === "ACTIVE" ? "adminSave" : "userDisable"}
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

export default UserCard;

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
