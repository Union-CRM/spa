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
} from "./styles";
import IconSystem from "../../../assets/IconSystem";
import Body from "../../../assets/FontSystem/Body";
import Subtitle from "../../../assets/FontSystem/Subtitle";
import { useClientContext } from "../../../hook/useClientContent";
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
              <Body type={"Body1"} name={client.client} />

              <Subtitle type={"TextDescription"} name={client.email} />

              <DivTagsStatus>
                <Status $mode={client.status}>{client.status}</Status>
                <TagsSpan $mode={client.tags}>
                  tags
                  <Tippy content={tags}>
                    <IconTag>
                      <IconSystem
                        icon={"TagWhite"}
                        width={"10px"}
                        height={"10px"}
                      />
                    </IconTag>
                  </Tippy>
                </TagsSpan>
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

              <IconEdit onClick={handleEdit}>
                <IconSystem icon={"Edit"} height={"15px"} width={"15px"} />
              </IconEdit>
            </DivIcons>
          </Header>
          <DivInfo>
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
                Release Train <span>|</span>{" "}
              </TitleInfo>
              <ValueInfo>{client.textRelease} </ValueInfo>
            </DivRelease>
          </DivInfo>
        </Card>
      </Container>
    </ContainerFather>
  );
};

export default ClientCard;
