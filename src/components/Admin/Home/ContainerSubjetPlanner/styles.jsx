import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  height: 20vh;
  width: 37vw;
  border-radius: 12px;
  display: flex;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  justify-content: center;
`;

export const H1 = styled.h1`
  font-family: Houschka Rounded Alt;
  line-height: 36px;
  font-size: 26px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  padding-left: 50%;
  display: inline;
  word-spacing: normal;
`;

export const TitleDiv = styled.div`
  width: 1%;
  height: fit-content;
  display: flex;
  align-items: center;
  top: 5%;
  margin-left: 5%;
  white-space: nowrap;
`;

export const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 35%;
`;

export const TextBox = styled.h1`
  font-family: Houschka Rounded Alt;
  color: #000000;
  display: flex;
  position: relative;
  text-align: center;
  margin-left: 10%;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;

export const BoxCanceled = styled.div`
  position: relative;
  display: flex;
  background-color: #ff2b02;
  width: 4.5vw;
  height: 57px;
  border-radius: 9px;
  color: white;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  justify-content: center;
  align-items: center;
  padding-bottom: 2%;
`;
export const BoxDone = styled.div`
  position: relative;
  display: flex;
  background-color: #07d95a;
  width: 4.5vw;
  height: 57px;
  border-radius: 9px;
  color: white;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  padding-bottom: 2%;

  justify-content: center;
  align-items: center;
`;

export const BoxScheduled = styled.div`
  position: relative;
  display: flex;
  background-color: #ffd012;
  width: 4.5vw;
  height: 57px;
  border-radius: 9px;
  color: white;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  padding-bottom: 2%;

  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  height: 100px;
  align-items: center;
  justify-content: center;
  border: 1px solid #787777;
  margin-top: 3%;
`;
