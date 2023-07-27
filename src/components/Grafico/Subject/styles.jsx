import styled from "styled-components";

export const Container = styled.div`
  margin-left: 1vw;
  background-color: #ffffff;
  height: 20vh;
  width: 90vw;
  border: 1px groove;
  border-radius: 12px;
  display: flex;
  margin-bottom: 10%;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  filter: drop-shadow;
`;

export const H1 = styled.h1`
  font-family: Houschka Rounded Alt;
  line-height: 36px;
  font-size: 30px;
  font-weight: 600;
  margin-left: 1.3em;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 0.4rem;
`;

export const TitleDiv = styled.div`
  width: 1%;
  height: fit-content;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const SquareDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 37%;
`;

export const SquareText = styled.h1`
  font-family: Houschka Rounded Alt;
  color: #000000;
  display: flex;
  margin: 0;
  text-align: center;
  justify-content: center;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;

export const LateSquare = styled.div`
  position: relative;
  display: flex;
  margin: auto;
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

export const NearSquare = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  background-color: #ffd012;
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

export const OnTimeSquare = styled.div`
  position: relative;
  display: flex;
  margin: auto;
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

export const Line = styled.div`
  height: 15vh;
  align-items: center;
  justify-content: center;
  border: 1px solid #787777;
  margin-top: 2%;
`;
