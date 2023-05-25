import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  height: fit-content;
  background: #ffffff;
  z-index: 5;
  border-radius: 8px;
  display: grid;
  flex-direction: column;

  align-items: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  border-left: 20px solid #e41165;

  transform: translate(-100%, -100%);
`;

export const InputPassword = styled.input`
  border-radius: 5px;
  width: 100%;
  height: 35px;
  border: 1px solid #888c95;
  padding-left: 40px;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
`;

export const DivPassword = styled.div`
  display: grid;
  margin: 0 auto;
  margin-bottom: 15px;
`;
export const Label = styled.label`
  position: relative;
  margin-bottom: 5px;
`;

export const DivPassIcon = styled.div`
  position: absolute;
  opacity: 0.8;
  margin-top: 32px;
  margin-left: 5px;
`;

export const Title = styled.div`
  padding-bottom: 1%;
  padding-top: 1%;
  border-bottom: 2px solid #e41165;
  height: fit-content;
  width: fit-content;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 5%;
`;

export const ButtonConfirm = styled.button`
  width: 50%;
  height: 25px;
  background: #e41165;
  border: none;
  border-radius: 0.5em;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
  border-radius: 8px;
  margin: 0 auto;
  margin-bottom: 5%;
  color: #ffffff;
`;

export const DivMessage = styled.div`
  margin: 0 auto;
`;
