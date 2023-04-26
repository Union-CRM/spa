import React from 'react'
import { Container, Title,DivIcon,P,DivButton} from './styles';
import ButtonDefault from '../../../../assets/Buttons/ButtonDefault';
import IconSystem from '../../../../assets/IconSystem';
 


const AcessBlocked = (props) =>{
  const iconType = props.typeUser=="adm"  ? "Lock2Adm" :"Lock2";
  const buttonType = props.typeUser=="adm" ? "adminSave" :"userSave";

  function reset(){
    window.location.href = '/';
   }


  return (
    <Container>
        <Title>Acess blocked</Title>
        <DivIcon>
        <IconSystem icon={iconType} width={"100px"} height={"100px"}></IconSystem>
        </DivIcon>
     
        <P>You have the maximum number of attempts.
        Reset your password.
        </P>
       
        <DivButton>
            <ButtonDefault type={buttonType} name={"Reset"} sizeWidth={"250px"} sizeHeight={"47px"} sizeFont={"20px"} onClick={reset}></ButtonDefault>
        </DivButton>
       
    </Container>
  );
}

export default AcessBlocked;