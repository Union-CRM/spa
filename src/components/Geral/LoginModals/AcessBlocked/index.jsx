import React from 'react'
import { Container, Title,DivIcon,P,DivButton} from './styles';
import ButtonDefault from '../../../../assets/Buttons/ButtonDefault';
import IconSystem from '../../../../assets/IconSystem';
 


const AcessBlocked = () =>{
  return (
    <Container>
        <Title>Acess blocked</Title>
        <DivIcon>
        <IconSystem icon={"Lock2"} width={"100px"} height={"100px"}></IconSystem>
        </DivIcon>
     
        <P>You have the maximum number of attempts.
        Reset your password.
        </P>
       
        <DivButton>
            <ButtonDefault type={"userSave"} name={"Reset"} sizeWidth={"250px"} sizeHeight={"47px"} sizeFont={"20px"}></ButtonDefault>
        </DivButton>
       
    </Container>
  );
}

export default AcessBlocked;