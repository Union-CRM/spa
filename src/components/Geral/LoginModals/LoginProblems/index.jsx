import React from 'react'
import { Container, Title,DivIcon,P,InputEmail,DivButton} from './styles';
import ButtonDefault from '../../../../assets/Buttons/ButtonDefault';
import IconSystem from '../../../../assets/IconSystem';
 


const LoginProblems = (props) =>{
  const iconType = props.typeUser=="adm"  ? "Lock2Adm" :"Lock2";
   const buttonType = props.typeUser=="adm" ? "adminSave" :"userSave";
  return (
    <Container>
      
        <Title>Problems logging in?</Title>
        <DivIcon>
        <IconSystem icon={iconType} width={"100px"} 
        height={"100px"}></IconSystem>
        </DivIcon>
     
        <P>Enter your email address and we'll send you a link to acess
           your account again.
        </P>
        <InputEmail></InputEmail>
        <DivButton>
            <ButtonDefault type={buttonType} name={"Send login link"} sizeWidth={"280px"} sizeHeight={"45px"} sizeFont={"20px"}></ButtonDefault>
        </DivButton>
       
    </Container>
  );
}

export default LoginProblems;