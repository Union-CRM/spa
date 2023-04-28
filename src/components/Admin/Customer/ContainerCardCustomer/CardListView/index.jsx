import { useState } from "react";
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
} from "./styles";
import Body from "../../../../../assets/FontSystem/Body";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import IconSystem from "../../../../../assets/IconSystem";
import { useFetchCustomer } from "../../../../../hook/useFetchCustomer";
import { useCustomerContext } from "../../../../../hook/useCustomerContext";

const CustomerCard = (props) => {
  const { openModal, openModalPopUp } = props;
  const { customer: customerList, setCustomerTarget } = useCustomerContext();
  const customer = customerList.filter((item) => item.id === props.id)[0];
  const { updateStatusCustumer } = useFetchCustomer();
  const [tags] = useState(
    customer.tags
      ? customer.tags.map((tag) => {
          return tag.tag_name + ";";
        })
      : []
  );

  const handleEdit = () => {
    setCustomerTarget(customer);
    openModal();
  };

  const handleClick = () => {
    console.log("Clicou");
    updateStatusCustumer(customer.id);
    //openModalPopUp();
  };

  /*const handleToggle = () => {
    setIsActive(!isActive);
    updateClient(client.id, { ...client, status: isActive ? "Inactive" : "Active" });
  };*/

  // TESTE //
  const [isActive, setIsActive] = useState(customer.status === "ATIVO");

  const handleToggle = () => {
    const newStatus = isActive ? "INATIVO" : "ATIVO";
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
            <DivDadosCard isActive={isActive}>
              <Body type={"Body1"} name={customer.name} />
            </DivDadosCard>
            <DivTagsStatus>
              <Tippy content={tags}>
                <TagsSpan isActive={isActive} $mode={customer.tags}>
                  tags
                </TagsSpan>
              </Tippy>
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

              <PositionEdit onClick={handleEdit}>
                <IconSystem icon={"Edit"} height={"15px"} width={"15px"} />
              </PositionEdit>
            </DivIcons>
          </Header>
        </Card>
      </Container>
    </ContainerFather>
  );
};

export default CustomerCard;
