import React, { useState } from 'react'; // Importar useState para criar estado para email e senha
import IconSystem from '../../assets/IconSystem';
import ButtonDefault from '../../assets/Buttons/ButtonDefault';
import { Container,DivTcs,Content,LogoDiv,Form,DivIcons,Label,Span,Input,ForgotPassword,DivTerms,
    DivWelcome,TextTerm,LoginBt,AdministratorEnter,DivImgs,DivEmailIcon,DivPassWIcon} from './styles';
import Headline from '../../assets/FontSystem/Headline';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState(''); // Criar estado para email com o hook useState
  const [password, setPassword] = useState(''); // Criar estado para senha com o hook useState

    async function handleLogin(event) { // Renomear função de teste para handleLogin e adicionar evento de submissão de formulário
        event.preventDefault(); // Impedir comportamento padrão de submissão do formulário

        if (email !== "" && password !== "" && password.length >= 8) { // Verificar email e senha preenchidos e tamanho mínimo da senha
            const { data } = await axios.post('http://localhost:8081/union/v1/users/login', {
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

           <LoginBt>
                    <ButtonDefault name={"Login"} type={"userSave"} sizeFont={"1.5em"}></ButtonDefault>
            </LoginBt>
        </Form>
    </Content>
 </Container> 
                      
</>
);
}

   
export default LoginPage;
