import { useState } from "react";
import {
  Container,
  ContainerFather,
  Card,
  CardContainer,
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
  NameClient,
  EmailClient,
} from "./styles";
import IconSystem from "../../../../assets/IconSystem";
import Body from "../../../../assets/FontSystem/Body";
import { useClientContext } from "../../../../hook/useClientContent";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ClientCard = (props) => {
  const { openModal, openModalPopUp } = props;

  const { client: clientList } = useClientContext();
  const client = clientList.filter((item) => item.id === props.id)[0];
  const [tags] = useState(
    client.tags.map((tag) => {
      return tag.label + "; ";
    })
  );
  //alphabetical order
  const sortedList = clientList.sort((a, b) =>
    a.client.localeCompare(b.client)
  );
  const handleEdit = () => {
    openModal();
    props.setId(client.id);
  };

  const handleClick = () => {
    openModalPopUp();
    props.setId(client.id);
  };

  return (
    <ContainerFather>
      <Container>
        <Card $mode={client.status}>
          <CardContainer>
            <Header>
              <DivPhoto>
                <DivPhotoI>
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
                <NameClient>
                  {client.client}
                  <span>{client.email}</span>
                </NameClient>

                <DivTagsStatus>
                  <Status $mode={client.status}>{client.status}</Status>
                  <Tippy content={tags}>
                    <TagsSpan $mode={client.tags}>
                      tags
                      <IconTag>
                        <IconSystem
                          icon={"TagWhite"}
                          width={"10px"}
                          height={"10px"}
                        />
                      </IconTag>
                    </TagsSpan>
                  </Tippy>
                </DivTagsStatus>
              </DivDadosCard>

              <DivIcons>
                <DivToggle $mode={client.status}>
                  <InputToggle
                    type="checkbox"
                    name="option"
                    id={client.id}
                    onClick={() => handleClick()}
                  />
                  <LabelToggle $mode={client.status} for="option">
                    <Span></Span>
                  </LabelToggle>
                </DivToggle>
              </DivIcons>
            </Header>

            <DivInfo onClick={handleEdit}>
              <DivRole>
                <TitleInfo>
                  Role <span> | </span>
                  {client.textRole}{" "}
                </TitleInfo>
              </DivRole>

              <DivCustomer>
                <TitleInfo>
                  Customer <span> | </span>
                  {client.textCustomer}{" "}
                </TitleInfo>
              </DivCustomer>

              <DivBusiness>
                <TitleInfo>
                  Business <span> | </span> {client.textBusiness}{" "}
                </TitleInfo>
              </DivBusiness>

              <DivRelease>
                <TitleInfo>
                  Release Train <span>|</span>
                  {client.textRelease}
                </TitleInfo>
              </DivRelease>
            </DivInfo>
          </CardContainer>
        </Card>
      </Container>
    </ContainerFather>
  );
};

export default ClientCard;
