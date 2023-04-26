import React, { useState } from "react"; // Importar useState para criar estado para email e senha
import IconSystem from "../../assets/IconSystem";
import ButtonDefault from "../../assets/Buttons/ButtonDefault";
import {
  Container,
  DivTcs,
  Content,
  LogoDiv,
  Form,
  DivIcons,
  Label,
  Span,
  Input,
  DivTerms,
  DivWelcome,
  TextTerm,
  LoginBt,
  DivImgs,
  DivEmailIcon,
  DivPassWIcon,
  EnterAdmin,
  ForgotPassword,
  EnterAdminButton,
  DivModal,
} from "./styles";
import Headline from "../../assets/FontSystem/Headline";
import axios from "axios";
import LoginProblems from "../../components/Geral/LoginModals/LoginProblems";
import LoginInvalid from "../../components/Geral/LoginModals/LoginInvalid";
import AcessBlocked from "../../components/Geral/LoginModals/AcessBlocked";

function LoginPage() {
  const [email, setEmail] = useState(""); // Criar estado para email com o hook useState
  const [password, setPassword] = useState(""); // Criar estado para senha com o hook useState
  const [invalid, setInvalid] = useState(false);
  const [loginQtd, setLoginQtd] = useState(1);
  const [changeModal, setChangeModal] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [blocked, setBlocked] = useState(false);

  localStorage.setItem("token", "");

  async function handleLogin(event) {
    // Renomear função de teste para handleLogin e adicionar evento de submissão de formulário

    event.preventDefault(); // Impedir comportamento padrão de submissão do formulário

    /* console.log("acesso", blocked);
        setBlocked(true);
        console.log("acesso true", blocked);
        setBlocked(false)*/
    // O codigo abaixo representa a verificação do login via endpoint (FUNCIONANDO)
    //'http://ec2-18-230-74-206.sa-east-1.compute.amazonaws.com:8081/union/v1/users/login'
    // Só utilizar quando for apresentar ao Giba.

    //teste

    if (loginQtd == 1) {
      setBlocked(false);
      setChangeModal(false);
    }

    if (loginQtd >= 3) {
      setChangeModal(true);
      setIsActive(true);
      setBlocked(true);
      console.log(changeModal);
      setInvalid(false);
    } else if (email !== "" && password !== "") {
      // Verificar email e senha preenchidos e tamanho mínimo da senha
      const { data } = await axios
        .post(
          "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8081/union/v1/users/login",
          {
            email,

            password,
          }
        )
        .catch(function (error) {
          console.log("Login ou senha incorreta");
          setInvalid(true);
          setLoginQtd(loginQtd + 1);
          console.log(loginQtd);

          /*
                if (error.response) {
                // el.style.visibility = "visible";
                setEmail('');
                setPassword('');
                } else if (error.request) {
                console.error(error.request);
                } else {
                console.error('Error', error.message);
                }*/
        });

      localStorage.setItem("token", data.token);
      window.location.href = "/home";
    } else {
      console.log("Login ou senha incorreta ( Vazio )");
      event.preventDefault();
      setInvalid(true);
    }

    /*localStorage.setItem('token', "data.token");
      window.location.href = '/home';
      console.log("teste");*/
  }
  function loginAdm() {
    window.location.href = "/";
  }
  function CloseModal() {
    setIsActive(false);
    setLoginQtd(1);
  }

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      CloseModal();
    }
  };

  return (
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
            <Headline
              type={"Headline3"}
              name={"Welcome! CRM Plataform"}
              colorFont={"#E5F2FF"}
            />
          </DivWelcome>
          <DivTerms>
            <TextTerm>
              <Headline
                type={"Headline5"}
                name={
                  "Terms of Use | Browser and Display Compatibility Copyright © 2023 Tata Consultancy Services Entry to this is restricted to employees and affiliates."
                }
                colorFont={"#E5F2FF"}
              />
            </TextTerm>
          </DivTerms>
        </DivImgs>

        <Content>
          <LogoDiv>
            <IconSystem icon="LogoUnion" />
          </LogoDiv>
          {invalid && <LoginInvalid />}
          <Form onSubmit={handleLogin}>
            {" "}
            {/* Adicionar evento de submissão de formulário */}
            <Label>
              <Span>Email</Span>
              <Input
                placeholder="user@tcs.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <DivEmailIcon>
                <IconSystem icon="Email2" />
              </DivEmailIcon>
            </Label>
            <Label>
              <Span>Password</Span>
              <DivPassWIcon>
                <IconSystem icon="Lock" width={"20px"} height={"20px"} />
              </DivPassWIcon>
              <Input
                type="password"
                placeholder="●●●●●●●●"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Label>
            <ForgotPassword onClick={() => setIsActive(true)}>
              Forgot password?
            </ForgotPassword>
            <LoginBt>
              <ButtonDefault
                name={"Login"}
                type={"userSave"}
                sizeFont={"1.5em"}
              ></ButtonDefault>
            </LoginBt>
            <EnterAdmin>
              <EnterAdminButton onClick={loginAdm}>
                Enter Administrator
              </EnterAdminButton>
            </EnterAdmin>
          </Form>

          <DivModal onClick={handleBackgroundClick} $mode={isActive}>
            {changeModal ? (
              blocked && <AcessBlocked />
            ) : (
              <LoginProblems typeUser={"user"} />
            )}
          </DivModal>
        </Content>
      </Container>
    </>
  );
}

export default LoginPage;
