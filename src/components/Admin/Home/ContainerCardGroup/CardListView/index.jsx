import React, { useEffect, useState } from "react";
import Body from "../../../../../assets/FontSystem/Body";
import {
  ContainerCards,
  DivInfo,
  NameGroup,
  DivPhoto,
  DivUserInformation,
  DivTextCard,
  ClientContent,
  UserContent,
  DivResponsible,
  DivNameEmail,
  NameUser,
  TitleDiv,
  H1,
} from "./styles";
import { Link } from "react-router-dom";
import { useGroupListContext } from "../../../../../hook/useGroupListContext";

const Group = (props) => {
  const {
    group: groupList,
    setModalInfo,
    setId,
    setInfoGroup,
    setToggleState,
    setActiveTab,
    countGroups,
  } = useGroupListContext();
  const group = groupList.filter((g) => g.id === props.id)[0];

  const handleClickViewGroup = () => {
    setInfoGroup(false);
    setToggleState(0);
    setActiveTab(0);
    setModalInfo(true);
    setId(group.id);
  };
  const [count, setCount] = useState();

  useEffect(() => {
    setCount(countGroups.filter((item) => item.group_id === group.id)[0]);
  }, [countGroups]);

  return (
    <>
      <Link
        to="/groups"
        onClick={() => handleClickViewGroup()}
        style={{ textDecoration: "none" }}
      >
        <ContainerCards>
          <ClientContent>
            <TitleDiv>
              <H1>{}</H1>
            </TitleDiv>
            <NameGroup>
              <Body type={"Body2"} name={group.group_name} />
            </NameGroup>
            <DivInfo>
              <Body
                type={"Body3"}
                name={`${group.textCustomer}  |`}
                colorFont={"rgba(0, 0, 0, 1)"}
              />
              <Body
                type={"Body3"}
                name={`|   ${count ? count.qnt : 0} Users`}
                colorFont={"rgba(0, 0, 0, 1)"}
              />
            </DivInfo>
            <DivTextCard></DivTextCard>
          </ClientContent>
          <UserContent>
            <DivResponsible>
              <Body
                type={"Body3"}
                name={"TCS Responsible"}
                colorFont={"rgba(0, 0, 0, 1)"}
              />
            </DivResponsible>
            <DivUserInformation>
              <DivPhoto>
                <Body type={"Body2"} name={Split(group.responsible_name)} />
              </DivPhoto>
              <DivNameEmail>
                <NameUser>{group.responsible_name}</NameUser>
              </DivNameEmail>
            </DivUserInformation>
          </UserContent>
        </ContainerCards>
      </Link>
    </>
  );
};
export default Group;

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
