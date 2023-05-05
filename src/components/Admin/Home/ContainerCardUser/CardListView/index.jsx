import { useState } from "react";
import {
  Card,
  Container,
  ContainerFather,
  DivDadosCard,
  DivPhoto,
  DivPhotoI,
  Header,
} from "./styles";
import Body from "../../../../../assets/FontSystem/Body";
import Subtitle from "../../../../../assets/FontSystem/Subtitle";
import { useUserContext } from "../../../../../hook/useUserContext";

const UserCard = (props) => {
  const { userList } = useUserContext();

  const user = userList.filter((u) => u.id === props.id)[0];

  const [isActive, setIsActive] = useState(user.status === "ACTIVE");

  return (
    <ContainerFather>
      <Container>
        <Card
          isActive={isActive}
          active={isActive}
          $mode={user.status}
          checked={isActive}
        >
          <Header>
            <DivPhoto>
              <DivPhotoI isActive={isActive}>
                <Body type={"Body2"} name={Split(user.name)} />
              </DivPhotoI>
            </DivPhoto>
            <DivDadosCard>
              <Body type={"Body2"} name={user.name} />
              <Subtitle type={"TextDescription"} name={user.tcs_id} />
            </DivDadosCard>
          </Header>
        </Card>
      </Container>
    </ContainerFather>
  );
};

export default UserCard;

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
