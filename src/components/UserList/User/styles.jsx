import styled from "styled-components";


export const UserItem = styled.div`

display: flex;
flex-direction: row;
align-items: center;
padding: 12px 21px;
margin-bottom : 5%;
gap: 15px;

width: 512px;
height: 79px;

background: #FFFFFF;
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
border-radius: 8px;
`;


export const ImageUser = styled.div`

width:  65px;
height: 65px;
background-color: darkgray;
border-radius: 50%;

`;

export const NameUser = styled.h3`

font-family: 'Houschka Rounded Alt';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
color: rgba(0, 0, 0, 0.8);

`;

export const IdUser = styled.p`

font-family: 'Houschka Rounded Alt';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;

`;


