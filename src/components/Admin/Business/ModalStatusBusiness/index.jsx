import ButtonDefault from "../../../../assets/Buttons/ButtonDefault";
import { useFetchBusiness } from "../../../../hook/useFetchBusiness";
import { useBusinessContext } from "../../../../hook/useBusinessContent";

import {
  Container,
  Overlay,
  Content,
  DivSave,
  DivCancel,
  Circle,
  Span,
  ContainerFather,
} from "./styles";

const ModalStatusBusiness = (props) => {

  // Context and props 
  const { modalClose } = props;
  const { updateStatusBusiness } = useFetchBusiness();
  const { business: businessList } = useBusinessContext();
  const business = businessList.filter((item) => item.id === props.id)[0];
  const p = business.status === "ATIVO" ? "Deactivate" : "Active";

  // Managing confirmation modal (changing status)
  const span =
    business.status === "ATIVO"
      ? "Do you want do deactivate this card?"
      : "Do you want to activate this card?";

 
  // Button to change status   
  const handleAlterStatus = () => {
    updateStatusBusiness(business.id);
    modalClose();
  };

  // Button cancel in modalStatusBusiness
  const handleCancel = () => {
    modalClose();
    window.location.reload();
  };

  return (
    <ContainerFather>
      <Overlay>
        <Container>
          <Content>
            <Circle>
              <span>?</span>
            </Circle>
            <Span>{`${span}`}</Span>
            <DivSave onClick={handleAlterStatus}>
              <ButtonDefault
                type={"userSave"}
                sizeFont={"1rem"}
                name={`Yes, ${p}`}
              />
            </DivSave>
            <DivCancel onClick={handleCancel}>
              <ButtonDefault
                type={"cancelModalUser"}
                sizeFont={"1rem"}
                name={"Cancel"}
              />
            </DivCancel>
          </Content>
        </Container>
      </Overlay>
    </ContainerFather>
  );
};

export default ModalStatusBusiness;
