import ButtonDefault from "../../assets/Buttons/ButtonDefault";
import {
  Box,
  Title,
  H1,
  Input,
  SecondDiv,
  GuestBox,
  GuestItems1,
  GuestItems2,
  Content,
  ButtonDiv,
  ButtonDiv1,
  InputSmall,
  SelectGuest,
} from "./styles";
import Headline from "../FontSystem/Headline";
import Body from "../FontSystem/Body";
import Subtitle from "../FontSystem/Subtitle";

// ID: 0028 Add Release Train

function AddReleaseTrain() {
  const client = [
    { id: 1, text: "Option 1" },
    { id: 2, text: "Option 2" },
    { id: 3, text: "Option 3" },
    { id: 4, text: "Option 4" },
    { id: 5, text: "Option 5" },
  ];
  return (
    <Box>
      <Content>
        <Headline type={"Headline3"} name={"Add Release Train"} />

        <Body type={"Body2"} name={"Name"} />
        <Input type="text" />
        <SecondDiv>
          <Body type={"Body2"} name={"Code"} />
          <Body type={"Body2"} name={"Status"} />
          <InputSmall type="text" />
          <SelectGuest>
            {client.map((item) => (
              <option value={item.id}> {item.text} </option>
            ))}
          </SelectGuest>
        </SecondDiv>
        <Body type={"Body2"} name={"Business"} />
        <Input type="text" />
        <SecondDiv>
          <div>
            <Body type={"Body2"} name={"Tag"} />
            <InputSmall type="text" />
          </div>
          <GuestBox>
            <GuestItems1>
              <Subtitle type={"Title-Med"} name={"Online Banking"} />
            </GuestItems1>
            <GuestItems2>
              {" "}
              <Subtitle type={"Title-Med"} name={"Modernization"} />
            </GuestItems2>
          </GuestBox>
        </SecondDiv>
        <ButtonDiv1>
          <ButtonDefault type={"true"} name={"Confirm"} />
        </ButtonDiv1>
        <ButtonDiv>
          <ButtonDefault type={"false"} name={"Cancel"} />
        </ButtonDiv>
      </Content>
    </Box>
  );
}
export default AddReleaseTrain;
