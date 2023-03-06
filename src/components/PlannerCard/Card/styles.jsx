import styled, {css} from "styled-components";

export const ContainerCards = styled.li`
  background: #ffffff;
  height: 103px;
  width: 546px;
  left: 35px;
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 65% 35%;
  grid-column:2;
  position: relative;
  transition: 0.5s;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  &:hover {
    border: 2px solid #ccc;
  }
`;

export const DivStatus = styled.div`
${(props) => {
  switch (props.$mode) {
    case "finished":
      return css`
        background-color: #07D95A;

        ;
      `;
    case "scheduled":
      return css`
        background-color: #FFD012;
        ;
      `;
    case "canceled":
      return css`
        background-color: #771300;
        ;
      `;
    default:
      return css`
        background-color: 7px solid #6e6b6b;
      `;
  }

}}

  width: 8px;
  height: 8px;
  margin-right:9px;
  border-radius: 50%;
  font-weight: bold;
`;

export const Setor = styled.p`
  position: absolute;
  left: 15px;
  top: 5px;
`;

export const Guests = styled.p`
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

export const UserName = styled.p`
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
 
`;

export const Client = styled.p`

`

export const Status = styled.div`
${(props) => {
  switch (props.$mode) {
    case "finished":
      return css`
        background-color: #07D95A;
        ;
      `;
    case "scheduled":
      return css`
        background-color: #FFD012;
        ;
      `;
    case "canceled":
      return css`
        background-color: #771300;
        ;
      `;
    default:
      return css`
        background-color: 7px solid #6e6b6b;
      `;
  }
}}
    border-radius: 5px;
    width: 64px;
    height: 17px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    margin-top:5px;
`

export const DivPhoto = styled.div`
  border-radius: 50%;
  border: 3.96px solid #007BFF;
  width: 33px;
  height: 33px;
  background-color: #D9D9D9;
  margin: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ReleaseTrain = styled.p`
  position: absolute;
  left: 15px;
  top: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
`;

export const PositionStatus = styled.div`
 display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`

export const DivTextCard = styled.div`
  align-items: left;
  margin-top: 50px;
  margin-left: 15px;
  margin-right:0;
  display: grid;
`;
 
 export const TextClient = styled.div`
  display: inline-flex;
`;

export const TextEmail = styled.div`
    display: inline-flex;
   `;

export const TextGuests = styled.div`
    display: inline-flex;
  `;

  export const ClientContent = styled.div`
    display: grid;
  `

  export const UserContent = styled.div`
  margin-top: 10px;
  `

  export const DivStatusTime = styled.div`
    display: inline-flex;
    position: relative;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    top: 0;
  `

export const DivUserInformation = styled.div`
  display: grid;
  grid-template-columns: 23% 1fr ;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`

export const DivNameEmail = styled.div`
  display: block;
`

export const DivIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10px;
  right: 0;
  cursor: pointer;
  position: absolute;
`
