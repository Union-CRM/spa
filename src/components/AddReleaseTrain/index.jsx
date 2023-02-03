import ButtonDefault from "../../assets/Buttons/ButtonDefault";
import {Box, Title,H1, Input, SecondDiv, GuestBox, GuestItems1, GuestItems2, Content, ButtonDiv, ButtonDiv1, InputSmall, SelectGuest} from "./styles";

// ID: 0028 Add Release Train

function AddReleaseTrain (){
    const client = [
        { id : 1,  text : "Option 1"},
        { id : 2,  text : "Option 2"},
        { id : 3,  text : "Option 3"},
        { id : 4,  text : "Option 4"},
        { id : 5,  text : "Option 5"},
    ]
return(
    <Box> 
        <Content>
            <H1>Add Release Train</H1>
            <Title>Name</Title>
            <Input type="text"/>
            <SecondDiv>
                <Title>Code</Title>
                <Title>Status</Title>
                <InputSmall type="text"/>
                <SelectGuest>{client.map((item) => ( <option value={item.id}> {item.text} </option> ))}</SelectGuest>
            </SecondDiv>
            <Title>Business</Title>
            <Input type="text"/>
            <SecondDiv>
                <div>
                <Title>Tag</Title>
                <InputSmall type="text"/>
                </div>
                <GuestBox>
                    <GuestItems1>Online Banking</GuestItems1>
                    <GuestItems2>Modernization</GuestItems2>
                </GuestBox>
            </SecondDiv>
        <ButtonDiv1>
        <ButtonDefault type={"true"} name={"Confirm"}/>
        </ButtonDiv1>
        <ButtonDiv>
        <ButtonDefault type={"false"} name={"Cancel"}/>
        </ButtonDiv>
            </Content>
    </Box>
)
}
export default AddReleaseTrain;