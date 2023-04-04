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
import { useClientContext } from "../../../hook/useClientContent";
import { useEffect, useRef } from "react";
import axios from "axios";

const ModalPopUp = (props) => {
  const { modalClose } = props;

  const { client: clientList, setClient: setClientList } = useClientContext();

  const client = clientList.filter((item) => item.id === props.id)[0];

  const p = client.status === "Active" ? "Inactivate" : "Activate";

  const span =
    client.status === "Active"
      ? "Do you want do deactivate this card?"
      : "Do you want to activate this card?";

  const handleAlterStatus = () => {
    
    async function UpdateStatusClient(){


        axios.put(`http://localhost:8083/union/v1/clients/update/status/${client.id}`,{},        
        {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}})
        .then(function (response) {
            console.log(response);
    
        })
        .catch(function (error) {
            console.log(error.response);
        });
    
    }
    UpdateStatusClient();

    const noId = clientList.filter((item) => item.id !== client.id);
    client.status = client.status === "Active" ? "Inactive" : "Active";

    setClientList([...noId, client]);
    
    modalClose();
  };

  const handleCancel = () => {
    modalClose();
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

export default ModalPopUp;
