import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
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
import { useBusinessContext } from "../../../hook/useBusinessContent";
import { useFetchBusiness } from "../../../hook/useFetchBusiness";
import { useEffect } from "react";

const ModalStatusBusiness = (props) => {
  const { modalClose } = props;
  const { business: businessList } = useBusinessContext();
  const { updateStatusBusiness } = useFetchBusiness();
  const business = businessList.filter((item) => item.id === props.id)[0];
  const p = business.status === "ATIVO" ? "Inativo" : "Ativo";

  useEffect(() => {
    console.log(business.status);
  }, []);

  const span =
    business.status === "ATIVO"
      ? "Do you want do deactivate this card?"
      : "Do you want to activate this card?";
 
  const handleAlterStatus = () => {
    updateStatusBusiness(business.id);
    modalClose();
  };

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
