import styled, { css } from "styled-components";

//* CONTAINER SUBJECT DETAILS *//
export const ContainerDetails = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 2%;
  padding-top: 1%;
  position: relative;
`;

/// INFO SUBJECTS ///

export const DivBetween = styled.div`
  display: flex;
  @media (min-width: 300px) and (max-width: 1699px) {
    display: block;
  }

`;

export const DivCustomer = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  display: block;
  padding-bottom: 1%;
  color: #000;
  span {
    display: block;
    font-size: 0.8rem;
    color: #656464;
  }
  @media (min-width: 1700px) and (max-width: 2500px) {
    font-size: 1.1rem;
    padding-bottom: 2%;
    span {
      font-size: 0.9rem;
    }
  }
`;

export const DivPlanner = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  padding-bottom: 1%;
  display:flex;

`;

export const PlannerCircle = styled.div`
${(props) => {
  switch (props.$mode) {
    case "ATIVO":
      return css`
      border: 3px solid #E41165;
      `;
    case "INATIVO":
      return css`
      border: 3px solid #7a7a7a;
      `;
    default:
      return css`
        background-color: #6e6b6b;
      `;
  }
}}
  background-color: #fff;
  width: 30px;
  height:30px;
  border-radius: 100%;
  display: flex;
  position: relative;
  left:2%;
  top:-5px;
  justify-content: center;
  align-items: center;
  font-size:0.9rem;
`;


export const DivSubjects = styled.div`
  width: 95%;
  height: 100%;
  display:flex;
  font-size: 1rem;
  padding-bottom: 1%;
`;

export const DivTags = styled.span`
height: fit-content;
font-size: 1rem;
display: flex;
padding-bottom: 1%;
padding-top:1%;
display:block;
`;

export const DivColors = styled.span`
background-color: ${(props) => props.colors};
text-transform:lowercase;
border-radius:5px;
padding:0.6%;
margin-right:1%;
position:relative;
height:auto;
margin-top:1%;
text-align:center;
font-size:0.9rem;
width:auto;
display: flex;
`;

export const TagsClient = styled.span`
display:flex;
flex-wrap: wrap;
`;

export const IconTag = styled.span`
  grid-column: 2;
  display: flex;
  height: 100%;
  justify-content: end;
`;

export const NoTags = styled.span`
display:block;
background-color:#F5F5F5;
font-size: 0.9rem;
color: #656464;
border-radius:5px;
padding:0.7%;
width:fit-content;
`;
