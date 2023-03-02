import styled from "styled-components";

export const UserItem = styled.div`
  display: grid;
  grid-template-columns: 15% 100%;
  align-items: center;
  position: relative;
  padding: 15px 21px;
  margin-bottom: 1%;
  gap: 15px;

  width: 512px;
  height: 79px;

  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;
export const ImageUser = styled.div`
  position: relative;
  width: 65px;
  height: 65px;
  background-color: darkgray;
  border-radius: 50%;
`;
export const NameUser = styled.h3`
  position: relative;
  font-family: "Houschka Rounded Alt";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);
`;
export const IdUser = styled.p`
  position: relative;
  font-family: "Houschka Rounded Alt";
  font-style: normal;
  font-weight: 500;
  font-size: 12x;
  line-height: 16px;
`;
