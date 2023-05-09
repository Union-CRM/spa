import { useState, useEffect } from "react";
import {
  Container,
  Card,
  Header,
  DivDadosCard,
  DivTagsStatus,
  TagsSpan,
  DivIcons,
  InputToggle,
  ContainerFather,
  ToggleContainer,
  ToggleButton,
  PositionEdit,
  DivContentTags,
  DivTag,
  DivImg,
  Img,
  DivImgTag,
  ImgTag,
} from "./styles";
import Body from "../../../../../assets/FontSystem/Body";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import IconSystem from "../../../../../assets/IconSystem";
import { useFetchCustomer } from "../../../../../hook/useFetchCustomer";
import { useCustomerContext } from "../../../../../hook/useCustomerContext";

const CustomerCard = (props) => {
  const { openModal } = props;
  const { customer: customerList, setCustomerTarget } = useCustomerContext();
  const customer = customerList.filter((item) => item.id === props.id)[0];
  const { updateStatusCustumer } = useFetchCustomer();
  const [tagIcon, setTagIcon] = useState(false);
  const [moreTags] = useState(
    customer.tags
      ? customer.tags
          .map((t, index) => {
            if (index >= 3) {
              return t.tag_name + "; ";
            }
          })
          .filter((t) => t)
      : ""
  );
  const [Image, setImage] = useState("");

  useEffect(() => {
    try {
      setImage(
        require(`../../../../../assets/Image/${customer.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .split(" ")[0]
          .toLowerCase()}.png`)
      );
    } catch {
      setImage(require(`../../../../../assets/Image/customer.png`));
    }
  }, []);

  const handleEdit = () => {
    setCustomerTarget(customer);
    openModal();
  };

  const handleClick = () => {
    updateStatusCustumer(customer.id);
  };

  const [isActive, setIsActive] = useState(customer.status === "ATIVO");

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <ContainerFather>
      <Container>
        <Card
          isActive={isActive}
          active={isActive}
          $mode={customer.status}
          checked={isActive}
        >
          <Header>
            <DivTagsStatus>
              {!tagIcon && (
                <TagsSpan
                  onClick={() => setTagIcon(!tagIcon)}
                  isActive={isActive}
                  $mode={customer.tags}
                >
                  tags
                </TagsSpan>
              )}
              {tagIcon && (
                <DivImgTag isActive={isActive}>
                  <ImgTag
                    onClick={() => setTagIcon(!tagIcon)}
                    src={Image}
                    alt=""
                  />
                </DivImgTag>
              )}
            </DivTagsStatus>

            <DivIcons>
              <ToggleContainer
                isActive={isActive}
                $mode={customer.status}
                checked={isActive}
              >
                <InputToggle
                  type="checkbox"
                  id={customer.id}
                  checked={customer.status}
                  onChange={handleToggle}
                  onClick={() => handleClick()}
                />
                <ToggleButton checked={isActive} />
              </ToggleContainer>
            </DivIcons>
          </Header>

          {!tagIcon && (
            <DivDadosCard onClick={handleEdit} isActive={isActive}>
              <DivImg isActive={isActive}>
                <Img img src={Image} alt="" />
              </DivImg>
              <Body type={"Body1"} name={customer.name} />
            </DivDadosCard>
          )}
          {tagIcon && (
            <DivTag>
              {customer.tags ? (
                customer.tags.map((t, index) => {
                  if (index < 3) {
                    return (
                      <DivContentTags
                        key={index}
                        colorTag={isActive ? colors[index] : "#7a7a7a"}
                      >
                        {t.tag_name}
                      </DivContentTags>
                    );
                  } else if (index === 3) {
                    return (
                      <Tippy key={index} content={moreTags}>
                        <DivContentTags
                          key={index}
                          colorTag={isActive ? colors[index] : "#7a7a7a"}
                        >
                          see more tags
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
        </Card>
      </Container>
    </ContainerFather>
  );
};

export default CustomerCard;

const colors = [
  "#836FFF",
  "#00BFFF",
  "#7FFFD4",
  "#00FA9A",
  "#00FF00",
  "#ADFF2F",
  "#BDB76B",
  "#FFDEAD",
  "#DEB887",
  "#9370DB",
  "#EE82EE",
  "#FFB6C1",
  "#F08080",
  "#FA8072",
  "#FFA07A",
  "#FFFF00",
  "#7B68EE",
  "#BC8F8F",
];
