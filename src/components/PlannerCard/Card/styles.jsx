import styled from "styled-components";

export const ContainerCards = styled.li`
  background: #ffffff;
  height: 82px;
  top: 8px;
  width: 423px;
  left: 35px;
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    border: 2px solid #ccc;
  }
`;
export const DivStatus = styled.div`
  background: #00953b;
  position: absolute;
  width: 8px;
  top: 14px;
  height: 8px;
  border-radius: 50%;
  right: 75px;
`;
export const Horas = styled.p`
  position: absolute;
  white-space: nowrap;
  width: 88px;
  height: 12px;
  margin-top: 13px;
  font-size: 10px;
  font-weight: 600;
  right: -15px;
  color: #000000;
  font-family: "Inter";
`;
export const Setor = styled.h2`
  position: absolute;
  left: 15px;
  top: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;
export const NameClient = styled.p`
  position: absolute;
  width: 162px;
  height: 24px;
  left: 15px;
  top: 35px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #888888;

  white-space: nowrap;
`;
export const NameUser = styled.p`
  position: absolute;
  white-space: nowrap;
  width: 88px;
  height: 12px;
  right: 85px;
  margin-top: 35px;
  font-size: 10px;
  font-family: "Inter";
  color: #888888;
  font-weight: 600;
`;
export const EmailClient = styled.p`
  position: absolute;
  width: 162px;
  height: 24px;
  left: 15px;
  top: 60px;
  font-family: "Inter";
  font-size: 14px;
  line-height: 8px;
  color: #888888;

  white-space: nowrap;
`;
export const EmailUser = styled.p`
  position: absolute;
  font-size: 10px;
  font-family: "Inter";
  white-space: nowrap;
  width: 88px;
  height: 12px;
  right: 85px;
  margin-top: 35px;
  top: 11px;
  color: #888888;
`;
