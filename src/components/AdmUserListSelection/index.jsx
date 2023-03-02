import ButtonDefault from "../../assets/Buttons/ButtonDefault";
import {
  Box,
  Title,
  DivH1,
  Input,
  InputDate,
  SecondDiv,
  GuestBox,
  GuestItems,
  Content,
  Select,
  SelectGuest,
  ButtonDiv,
} from "./styles";

function UserListSelection() {
  const client = [
    { id: 1, text: "João da Silva" },
    { id: 2, text: "Pedro da Silva" },
    { id: 3, text: "Luiz da Silva" },
    { id: 4, text: "Carlos da Silva" },
    { id: 5, text: "Felipe da Silva" },
  ];
  return (
    <Box>
      <Content>
        <DivH1>Create Planner</DivH1>
        <Title>Subject</Title>
        <Input type="text" />
        <Title>Client name</Title>
        <Input type="text" />
        <Title> Email </Title>
        <Input type="text" />
        <Title> Business </Title>
        <Select>
          {" "}
          {client.map((item) => (
            <option value={item.id}> {item.text} </option>
          ))}{" "}
        </Select>
        <Title> Release train </Title>
        <Input type="text" />
        <SecondDiv>
          <Title>Date</Title>
          <Title>Guest</Title>
          <InputDate type="date" />
          <SelectGuest>
            {client.map((item) => (
              <option value={item.id}> {item.text} </option>
            ))}
          </SelectGuest>
        </SecondDiv>
        <SecondDiv>
          <div>
            <Title> Start </Title>
            <InputDate type="date" />
            <Title> finish </Title>
            <InputDate type="date" />
          </div>
          <GuestBox>
            <GuestItems>Levi Ackerman</GuestItems>
            <GuestItems>Santorini Bartholomeu</GuestItems>
          </GuestBox>
        </SecondDiv>
        <ButtonDiv>
          <ButtonDefault type={"true"} name={"Save"} />
        </ButtonDiv>
        <ButtonDiv>
          <ButtonDefault type={"false"} name={"Cancel"} />
        </ButtonDiv>
      </Content>
    </Box>
  );
}
export default UserListSelection;
