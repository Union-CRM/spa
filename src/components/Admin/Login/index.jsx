import React, { useState } from 'react'; // Importar useState para criar estado para email e senha
import IconSystem from '../../../assets/IconSystem';
import ButtonDefault from '../../../assets/Buttons/ButtonDefault';
import { Container,DivTcs,Content,LogoDiv,Form,DivIcons,Label,Span,Input,DivTerms,
    DivWelcome,TextTerm,LoginBt,DivImgs,DivEmailIcon,DivPassWIcon,EnterUser,ButtonEnterUser,ForgotPasswordADM} from './styles';
import Headline from '../../../assets/FontSystem/Headline'
import axios from 'axios';

function LoginPageAdmin() {

  const [email, setEmail] = useState(''); // Criar estado para email com o hook useState
  const [password, setPassword] = useState(''); // Criar estado para senha com o hook useState

    localStorage.setItem("token","");

    async function handleLogin(event) { // Renomear função de teste para handleLogin e adicionar evento de submissão de formulário
      
      event.preventDefault(); // Impedir comportamento padrão de submissão do formulário
        

        // O codigo abaixo representa a verificação do login via endpoint (FUNCIONANDO)
        //'http://ec2-18-230-74-206.sa-east-1.compute.amazonaws.com:8081/union/v1/users/login'
        // Só utilizar quando for apresentar ao Giba.

        //teste
     
        if (email !== "" && password !== "") { // Verificar email e senha preenchidos e tamanho mínimo da senha
            const { data } = await axios.post('http://ec2-15-229-154-134.sa-east-1.compute.amazonaws.com:8081/union/v1/users/login', {
                email,
                password,
  
            }).catch(function (error) {
             
                if (error.response) {
                // el.style.visibility = "visible";
                setEmail('');
                setPassword('');
                } else if (error.request) {
                console.error(error.request);
                } else {
                console.error('Error', error.message);
                }
            });
            

            localStorage.setItem('token', data.token);
            window.location.href = '/home';
        }
      
      /*localStorage.setItem('token', "data.token");
      window.location.href = '/home';
      console.log("teste");*/

    }

    function loginClient(){
      window.location.href = '/loginClient';
    }
  
  return(
    <>
    <Container>
        <DivImgs>
          <DivTcs>
            <IconSystem icon="LogoTataWhite" width={"100%"} height={"100%"} />
          </DivTcs>
          <DivIcons>
            <IconSystem icon="LoginIcons" width={"100%"} height={"100%"} />
          </DivIcons>
          <DivWelcome>
            <Headline type={"Headline3"} name={"Welcome! CRM Plataform"} colorFont={"#E5F2FF"} />
          </DivWelcome>
          <DivTerms>
            <TextTerm>
              <Headline type={"Headline5"} name={"Terms of Use | Browser and Display Compatibility Copyright © 2023 Tata Consultancy Services Entry to this is restricted to employees and affiliates."} colorFont={"#E5F2FF"} />
            </TextTerm>
          </DivTerms>
        </DivImgs>
        <Content>
          <LogoDiv>
            <IconSystem icon="LogoUnion" />
          </LogoDiv>
          <Form onSubmit={handleLogin}> {/* Adicionar evento de submissão de formulário */}
            <Label>
              <Span>Email</Span>
              <Input placeholder='user@tcs.com' value={email} onChange={(e) => setEmail(e.target.value)} />
              <DivEmailIcon>
                <IconSystem icon="Email2" />
              </DivEmailIcon>
            </Label>
           <Label>
              <Span>Password</Span>
              <DivPassWIcon>
                <IconSystem icon="Lock" width={"20px"} height={"20px"} />
              </DivPassWIcon>
              <Input type="password" placeholder= '●●●●●●●●' value={password} onChange={(e) => setPassword(e.target.value)} />
           </Label>  

           < ForgotPasswordADM>Forgot password?</ForgotPasswordADM>

           <LoginBt>
                    <ButtonDefault name={"Login"} type={"adminSave"} sizeFont={"1.5em"}></ButtonDefault>
            </LoginBt>
            <EnterUser>
                <ButtonEnterUser onClick={loginClient}>Enter User</ButtonEnterUser>
            </EnterUser>
        </Form>
    </Content>
 </Container> 
                      
</>
);
}

   
export default LoginPageAdmin;