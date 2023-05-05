import styled, { css } from "styled-components";

export const ContainerCards = styled.div`
  
  margin-top: 15px;
  margin-left: 8%;
  margin-right: 8%;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  display: grid;
  height: fit-content;
  width: 30vw;  
  max-width: 100%;
  grid-template-columns: 60% 39%;
  grid-column-gap: 1%;
  box-shadow: 2px 2px 5px rgba(233, 203, 203, 0.25);
  padding-bottom: 3%;
  padding-top: 3%;
  margin-bottom: 2%;
  
  &:hover {
    border: 2px solid #ccc;
  
  }
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  &:hover {
    border: 2px solid #ccc;
  }
`;

export const DivStatus = styled.div`

${(props) => {
  switch (props.$mode) {
    case "DONE":
      return css`
        background-color: #07D95A;
    
        ;
      `;
    case "SCHEDULED":
      return css`
        background-color: #FFD012;
        ;
      `;
    case "CANCELED":
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
  margin-right: 9px;
  border-radius: 50%;
  font-weight: bold;
`;

export const Setor = styled.div`
  position: relative;
  margin-left: 15px;
`;

export const Guests = styled.p`
  position: relative;
  width: 162px;
  height: 24px;
  left: 15px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #888888;
  white-space: nowrap;
`;

export const UserName = styled.p``;

export const EmailClient = styled.p`
  position: relative;
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
export const EmailUser = styled.p``;

export const Client = styled.p``;

export const Status = styled.div`
${(props) => {
  switch (props.$mode) {
    case "DONE":
      return css`
        background-color: #07D95A;
        ;
      `;
    case "SCHEDULED":
      return css`
        background-color: #FFD012;
        ;
      `;
    case "CANCELED":
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
    margin-bottom: 3%;
    margin-top:5px;
`

export const DivPhoto = styled.div`
  border-radius: 50%;
  border: 3.96px solid #007bff;
  width: 33px;
  height: 33px;
  background-color: #d9d9d9;
  margin: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ReleaseTrain = styled.div`
  position: relative;
  margin-left: 4%;
  
`;

export const PositionStatus = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-area: 2 / 1 / 3 / 2;
  justify-content: right;
`

export const DivTextCard = styled.div`
  align-items: left;
  margin-top: 2%;
  margin-left: 4%;
  margin-right:0;
  display: grid;
  box-sizing: border-box;
`;

export const TextClient = styled.div`
  display: inline-flex;
  box-sizing: border-box;
`;

export const TextEmail = styled.div`

    display: inline-flex;
    box-sizing: border-box;
    position: relative;
    grid-template-rows: auto;
   `;

export const TextGuests = styled.div`
    display: flex;
  `;


export const ClientContent = styled.div`
  display: grid;
`;

  export const UserContent = styled.div`
  display: grid;
  position: relative;
  height:  fit-content;
  width: auto;
  max-width: 100%;
  align-items: right;
  
  `
  export const DivIconTitle = styled.div`
  display: flex;
  margin-left: 1%;
  width: fit-content;
  height: 100%;
`;

export const DivStatusTime = styled.div`
  display: inline-flex;
  position: relative;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  top: 0;
`;

export const DivUserInformation = styled.div`
  display: grid;
  grid-template-columns: auto 78%;
  grid-column-gap: 6%;
  grid-area: 2 / 1 / 3 / 2; 
  height: fit-content;
  margin-top: 3%;
  max-width: 100%;
  width: fit-content;
  
`



export const DivNameEmail = styled.div`
width: fit-content;
grid-template-rows: 30% 70%;


`
export const Email = styled.div`
  overflow-x: auto;
  width: auto;
  
  &::-webkit-scrollbar {
    width: auto;
    height: 8px;
}

  &::-webkit-scrollbar-track {
    border-radius: 10px;
}

  &::-webkit-scrollbar-track-piece {
    background-color: #949494;
    border-radius: 10px;
}

  &::-webkit-scrollbar-thumb {
    height: 50%;
    background-color: #4b4b4b;
    width: 15px;
    border-radius: 10px;
}

  
p {
  text-align: justify;
  position: relative;
  font-size:0.8rem;
  
}

`
export const Email2 = styled.p`

`

export const DivIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10px;
  right: 0;
  cursor: pointer;
  position: absolute;
  z-index: 5;
`

export const DivGuests = styled.div`
  width: fit-content;
  color: #1E2222;
  font-size: 12px;
`

export const SpanGuests = styled.span`
  color: #888888;
  font-size: 12px;
  margin-left: 1%;
`

export const NameUser = styled.div`
  font-size: 12px;
`