import ButtonDefault from "../../../../assets/Buttons/ButtonDefault";
import {
  Container,
  Overlay,
  Content,
  DivAdd,
  Circle,
  Span,
  ContainerFather,
} from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import IconSystem from "../../../../assets/IconSystem";
import { useUserContext } from "../../../../hook/useUserContext";

const ModalPassword = (props) => {
  const { modalPassword, setModalPassword } = useUserContext();
  /*const [aux,setAux]=useState()
  useEffect(()=>{
    setAux(modalPassword)
    setModalPassword(true)
  },[])*/
  return (
    <ContainerFather>
      <Container user={props.user}>
        <Content>
          <Circle>
            <span>
              <IconSystem icon={"CheckWhite"} />{" "}
            </span>
          </Circle>
          <Span> {`Successfuly Created`}</Span>
          <Span> {`Password: ${modalPassword}`}</Span>
          <DivAdd>
            <Link to="/groups" onClick={() => setModalPassword(false)}>
              <ButtonDefault
                type={"adminSave"}
                sizeFont={"1rem"}
                name={"Add User To a Group"}
              />
            </Link>
          </DivAdd>
        </Content>
      </Container>
    </ContainerFather>
  );
};

export default ModalPassword;
