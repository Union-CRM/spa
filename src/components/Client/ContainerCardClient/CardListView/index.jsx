import { useState, useEffect } from "react";
import {
  Container,
  Card,
  Header,
  DivPhoto,
  DivPhotoI,
  NameClient,
  DivDadosCard,
  Status,
  DivTagsStatus,
  TagsSpan,
  DivIcons,
  InputToggle,
  DivInfo,
  DivRole,
  DivCustomer,
  DivBusiness,
  DivManager,
  TitleInfo,
  ValueInfo,
  ContainerFather,
  ToggleContainer,
  ToggleButton,
} from "./styles";
import Body from "../../../../assets/FontSystem/Body";
import Subtitle from "../../../../assets/FontSystem/Subtitle";
import { useClientContext } from "../../../../hook/useClientContent";
import { useFetchClient } from "../../../../hook/useFetchClient";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ClientCard = (props) => {
  const { openModal } = props;

  const { updateStatusClient } = useFetchClient();
  const { setToggleState, setClientTarget } = useClientContext();
  const { setActiveTab } = useClientContext();

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
    setClientTarget(client);
    props.setId(client.id);
  };

  const handleClick = () => {
    updateStatusClient(client.id);
    props.setId(client.id);
  };

  /*const handleToggle = () => {
    setIsActive(!isActive);
    updateClient(client.id, { ...client, status: isActive ? "Inactive" : "Active" });
  };*/
  const [isActive, setIsActive] = useState(client.status === "Active");

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

            <DivPhoto onClick={handleEdit}>
              <DivPhotoI
                isActive={isActive}
                active={isActive}
                $mode={client.status}
                checked={isActive}
              >
                <Body
                  onClick={handleEdit}
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

            <DivDadosCard onClick={handleEdit}>
              <NameClient>
                {/*<span>{SplitClientName(client.client)}</span>{" "}*/}
                <span>{client.client}</span>{" "}
              </NameClient>

              <Subtitle type={"TextDescription"} name={client.email} />

              <DivTagsStatus onClick={handleEdit}>
                <Status
                  isActive={isActive}
                  $mode={client.status}
                  checked={isActive}
                >
                  {client.status}
                </Status>

                <Tippy
                  content={tags && tags.length === 0 ? "It has no tags" : tags}
                >
                  <TagsSpan
                    $mode={client.tags}
                    isActive={isActive}
                    active={isActive}
                    checked={isActive}
                  >
                    tags
                  </TagsSpan>
                </Tippy>
              </DivTagsStatus>
            </DivDadosCard>
          </Header>

          <DivInfo onClick={handleEdit}>
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

            <DivManager>
              <TitleInfo>
                Manager <span>|</span>{" "}
              </TitleInfo>
              <ValueInfo>{SplitName(client.user_name)}</ValueInfo>
            </DivManager>
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
