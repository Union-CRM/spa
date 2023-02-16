import styled, { css } from "styled-components";

export const Frame = styled.div`
  box-sizing: border-box;
  display: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 44px 17px;
  gap: 10px;
  position: relative;
  width: 495.38px;
  height: 513.09px;
  background: #ffffff;
  border: 3px solid #808386;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const Header = styled.div`
  border-radius: nullpx;
  top: 44px;
  left: 17px;
  font-size: 22.9052px;
  line-height: 27px;
  display: flex;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: 30% 40% 30%;
  background-color: #ffffff;
  padding-left: 10px;
  grid-row: 1;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const Box = styled.div`
  grid-column: 2;
  display: flex;
  grid-template-columns: 20% 60% 20%;
`;

export const ButtonLeft = styled.div`
  cursor: pointer;
  grid-column: 1;
  padding-top: 18px;
`;

export const ButtonRight = styled.div`
  cursor: pointer;
  grid-column: 3;
  padding-top: 18px;
`;

export const Months = styled.div`
  grid-column: 2;
  padding-top: 15px;
  padding-left: 30px;
  padding-right: 30px;
  font-family: Houschka Rounded Alt;
  height: 40.9px;
  size: 22.91px;
  line-height: 26.84px;
  border-radius: nullpx;
  padding-bottom: 10px;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 22.9052px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;
  position: center;
  ant {
    color: #6e7781;
    opacity: 0.6;
  }
  p {
    color: #6e7781;
    font-size: 19.633px;
  }
`;
export const Day = styled.div`
  width: 14.2%;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font: "Roboto";

  color: #000000;

  ${(props) =>
    props.isSelected &&
    css`
      background: #73b6ff;
      color: #ffffff;
    `}
  ${(props) =>
    props.state === "nonPertenceMonth" &&
    css`
      opacity: 0.3;
      cursor: default;
    `}
`;
