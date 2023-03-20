import styled, { css } from "styled-components";

export const Card = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "Finished":
        return css`
          border-left: 7px solid #00953b;
        `;
      case "Progress":
        return css`
          border-left: 7px solid #008585;
        `;
      case "Canceled":
        return css`
          border-left: 7px solid #771300;
        `;
      default:
        return css`
          border-left: 7px solid #6e6b6b;
        `;
    }
  }}
  width: 265px;
  height: 207px;
  border-radius: 8px;
  margin-top: 30px;
  margin-left: 40px;
  display: block;
  background-color: #f5f7fa;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;
export const Status = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "Finished":
        return css`
          background-color: #00953b;
        `;
      case "Progress":
        return css`
          background-color: #008585;
        `;
      case "Canceled":
        return css`
          background-color: #771300;
        `;
      default:
        return css`
          background-color: #6e6b6b;
        `;
    }
  }}
  width: 83px;
  height: 15px;
  border-radius: 8px;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const StatusSpan = styled.div`
  color: #ffffff;
  font-size: 10;
  font-family: "Inter", sans-serif;
  margin-left: 22px;
  margin-top: 1px;
`;
export const Title = styled.div`
  font-family: "Houschka Rounded Alt";
  font-size: 14px;
  margin-bottom: 34px;
  margin-left: 10px;
  margin-top: 3px;
`;
export const Name = styled.div`
  font-size: 12px;
  font-family: "Houschka Rounded Alt";
  font-style: normal;
  color: #000000;
`;
export const Topic = styled.div`
  margin-left: 10px;
  font-size: 12px;
  margin-bottom: 18px;
  font-family: "Houschka Rounded Alt";
`;
export const Client = styled.span`
  width: 191px;
  height: 29px;
  border: 1px solid #888c95;
  border-radius: 8px;
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
  font-family: "Houschka Rounded Alt";
`;
export const ClientName = styled.div`
  color: #656464;
  margin-left: 22px;
  margin-top: 7px;
  font-size: 12px;
`;
export const Type = styled.div`
  color: #000000;
  margin-top: 7px;
  margin-left: 10px;
  font-size: 12px;
  font-weight: bold;
  font-family: "Houschka Rounded Alt";
`;
export const Line = styled.div`
  width: 0px;
  height: 16px;
  border: 1px solid #888c95;
  transform: rotate(180deg);
  margin-left: 15px;
  margin-top: 5px;
`;
export const Header = styled.div`
  display: flex;
`;
export const PositionEdit = styled.div`
  width: 12px;
  height: 12px;
  margin-left: 140px;
  margin-top: 8px;
  cursor: pointer;
  display: flex;
`;

export const Container = styled.div``;
