import React, { useState } from "react";
import { Container, Title, DivIcon, P, InputEmail, DivButton } from "./styles";
import ButtonDefault from "../../../../assets/Buttons/ButtonDefault";
import IconSystem from "../../../../assets/IconSystem";
import { useFetchUser } from "../../../../hook/useFetchUser";
const LoginProblems = (props) => {

  const iconType = props.typeUser == "adm" ? "Lock2Adm" : "Lock2";
  const buttonType = props.typeUser == "adm" ? "adminSave" : "userSave";
  const [emailRecovery, setEmailRecovery] = useState(""); // Criar estado para email com o hook useState
  const { forgotPassword } = useFetchUser();
  const [recoveryF, setRecoveryF] = useState(false);
  const [isValid, setIsValid] = useState(false);

  function recovery() {
    setRecoveryF(true)
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(emailRecovery)) {
      setIsValid(true)
      var newEmail = {email: emailRecovery}
      forgotPassword(newEmail)
      props.closeModal();
      props.active();
      props.change();
    }
  }

  return (
    <Container>
      <Title>Problems logging in?</Title>
      <DivIcon>
        <IconSystem
          icon={iconType}
          width={"100px"}
          height={"100px"}
        ></IconSystem>
      </DivIcon>
      <P>
        Enter your email address and we'll send you a link to acess your account
        again.
      </P>
      {!isValid && recoveryF ? (
        <p style={{ padding: '0.5%',
        backgroundColor: 'rgba(187, 30, 0, 1)',
        color: '#FFF',
        fontSize: '20px',
        borderRadius: '8px'
      }}>O e-mail é inválido, insira um e-mail válido.</p>
      ) : (
        []
      )}
      <InputEmail
        type="email"
        placeholder="user@tcs.com"
        value={emailRecovery}
        onChange={(e) => setEmailRecovery(e.target.value)}
        required
      ></InputEmail>
      
      <DivButton>
        <ButtonDefault
          type={buttonType}
          name={"Send login link"}
          sizeWidth={"280px"}
          sizeHeight={"45px"}
          sizeFont={"20px"}
          onClick={recovery}
        ></ButtonDefault>
      </DivButton>
    </Container>
  );
};

export default LoginProblems;
