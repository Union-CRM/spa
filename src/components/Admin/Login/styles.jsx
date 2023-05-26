import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100% 100%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const DivImgs = styled.div`
  display: grid;
  grid-template-rows: 10% 60% 15% 15%;
  background-color: #e41165;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
`;

export const LogoDiv = styled.div``;

export const Form = styled.form`
  width: 60%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const DivTcs = styled.div`
  display: flex;
  position: relative;
  max-width: 208px;
  margin: 0 auto;
`;

export const DivIcons = styled.div`
  display: flex;
  height: 100%;
  margin: 0 auto;
`;
export const DivTerms = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 2%;
`;
export const DivWelcome = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
  position: relative;
  width: 100%;
`;
export const TextTerm = styled.div`
  width: 80%;
`;

export const Label = styled.label`
  display: grid;
  margin-bottom: 5%;
  grid-template-columns: 100%;
  max-width: 100%;
  height: 100%;
`;

export const Span = styled.span`
  position: relative;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  border-radius: 5px;
  width: 100%;
  height: 35px;
  border: 1px solid #888c95;
  padding-left: 40px;
  box-sizing: border-box;
  :placeholder-shown {
    border-color: #888c95;
  }
`;

export const DivEmailIcon = styled.div`
  position: absolute;
  opacity: 0.6;
  margin-top: 30px;
  margin-left: 8px;
`;

export const ForgotPassword = styled.button`
  color: rgba(0, 0, 0, 1);
  font-family: "Houschka Rounded Alt";
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  font-weight: bold;
  display: flex;
  justify-content: right;
  margin-bottom: 50px;
  cursor: pointer;
`;

export const LoginBt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivPassWIcon = styled.div`
  position: absolute;
  opacity: 0.8;
  margin-top: 30px;
  margin-left: 8px;
`;

export const AdministratorEnter = styled.button`
  color: rgba(0, 0, 0, 1);
  font-family: "Houschka Rounded Alt";
  font-size: 15px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  font-weight: bold;
  float: right;
  margin-top: 40px;
  cursor: pointer;
`;

export const Slink = styled.link`
  padding: 0;
  margin: 0;
  text-decoration: none;
`;

export const EnterUser = styled.div`
  display: flex;
  margin-top: 10%;
  align-items: center;
  justify-content: center;
`;
export const ButtonEnterUser = styled.button`
  background-color: rgba(255, 255, 255, 0);
  font-family: "Houschka Rounded Alt";
  border: none;
  font-size: 15px;
  cursor: pointer;
`;

export const ForgotPasswordADM = styled.button`
  color: rgba(0, 0, 0, 1);
  font-family: "Houschka Rounded Alt";
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  font-weight: bold;
  display: flex;
  justify-content: right;
  margin-bottom: 30px;
  position: relative;
  top: -50px;
  cursor: pointer;
`;
export const DivModal = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case true:
        return css`
          z-index: 0;
          display: flex;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        `;
      case false:
        return css`
          display: none;
        `;
      default:
        return css`
          display: none;
        `;
    }
  }}
`;
