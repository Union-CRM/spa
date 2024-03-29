import React, { useState } from "react"; // Importar useState para criar estado para email e senha
import IconSystem from "../../assets/IconSystem";
import ButtonDefault from "../../assets/Buttons/ButtonDefault";
import LoginProblems from "../../components/Geral/LoginModals/LoginProblems";
import LoginInvalid from "../../components/Geral/LoginModals/LoginInvalid";
import AcessBlocked from "../../components/Geral/LoginModals/AcessBlocked";
import FirstLogin from "../../components/Geral/LoginModals/FirstLogin";
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
  EnterUser,
  ButtonEnterUser,
  ForgotPasswordADM,
  DivModal,
  DivDados,
} from "./styles";
import Headline from "../../assets/FontSystem/Headline";
import axios from "axios";
import { useUserContext } from "../../hook/useUserContext";

function LoginPage() {
  const [email, setEmail] = useState(""); // Criar estado para email com o hook useState
  const [password, setPassword] = useState(""); // Criar estado para senha com o hook useState
  const [invalid, setInvalid] = useState(false);
  const [loginQtd, setLoginQtd] = useState(1);
  const [loginProblems, setLoginProblems] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);
  const [changeModal, setChangeModal] = useState(false);
  const {user,loadUserMe, setToken, first, setFirst} = useUserContext();

  localStorage.setItem("token", "");

  async function handleLogin(event) {
    // Renomear função de teste para handleLogin e adicionar evento de submissão de formulário
    
    event.preventDefault(); // Impedir comportamento padrão de submissão do formulário

    if (email !== "" && password !== "" && loginQtd <= 3) {
      // Verificar email , senha preenchida e quantidade de tentativas.
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

          if (loginQtd === 3) {
            console.log("bloqueado");
            setIsActive(true);
            setBlocked(true);
            setInvalid(false);
            setLoginQtd(1);
            console.log(loginQtd);
            setChangeModal(true)
          } else {
            setLoginQtd(loginQtd + 1);
            console.log(loginQtd);
          }
        });
      if(data.firstAcess){
        localStorage.setItem("token", data.token);
        setFirst(true)
        setToken(localStorage.getItem("token"))
        loadUserMe()
      }else{
        localStorage.setItem("token", data.token);
        window.location.href = "/home";
      }
      
      //console.log(data.token)
      //localStorage.setItem("token", data.token);
      //window.location.href = "/home";
    } else if (!loginProblems) {
      console.log("Login ou senha incorreta ( Vazio )");
      event.preventDefault();
      setInvalid(true);
    }
    
    /*localStorage.setItem('token', "data.token");
      window.location.href = '/home';*/
  }

  function CloseModal() {
    setIsActive(false);
    setLoginQtd(1);
    setLoginProblems(false);
  }

  function forgot() {
    setChangeModal(true);
    setIsActive(true);
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
          {invalid && <LoginInvalid />}{" "}
          <Form onSubmit={handleLogin}>
         
            {/* Adicionar evento de submissão de formulário */}
            <Label>
              <Span>Email</Span>
              <Input
                type="email"
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
            <ForgotPasswordADM onClick={() => forgot()} >Forgot password?</ForgotPasswordADM>
         
            <LoginBt>
              <ButtonDefault
                name={"Login"}
                type={"adminSave"}
                sizeFont={"1.5em"}
              ></ButtonDefault>
            </LoginBt>
          </Form>
          <DivModal onClick={handleBackgroundClick} $mode={isActive}>
            {changeModal &&
              (blocked ? (
                <AcessBlocked
                  closeModal={() => setBlocked(false)}
                  active={() => setIsActive(false)}
                />
              ) : (
                [
                  <LoginProblems
                    typeUser={"user"}
                    closeModal={() => setBlocked(false)}
                    active={() => setIsActive(false)}
                    change={() => setChangeModal(false)}
                  />,
                ]
              ))}
          </DivModal>
          {/*<DivClose />*/}
          { first ?
            <FirstLogin />
            : []
            }
          {/*renderização condicional para veriricar se é primeiro login fazer aqui*/}
        </Content>
      </Container>
    </>
  );
}

export default LoginPage;