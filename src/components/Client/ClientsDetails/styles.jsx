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
  @media (min-width: 900px) and (max-width: 1699px) {
    display: flex;
  }
  @media (min-width: 1700px) and (max-width: 2500px) {
    display: block;
  }
`;

export const DivEmail = styled.div`
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

export const DivRole = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  display: block;
  padding-bottom: 1%;
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

export const DivCustomer = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  display: block;
  padding-bottom: 1%;
  span {
    display: block;
    font-size: 0.7rem;
    color: #656464;
    width:80%;
  }
  @media (min-width: 1700px) and (max-width: 2500px) {
    font-size: 1.1rem;
    padding-bottom: 2%;
    span {
      font-size: 0.9rem;
    }
  }
`;

export const DivRelease = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  display: block;
  padding-bottom: 1%;
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

export const DivBusiness = styled.div`
  width: 95%;
  height: 100%;
  font-size: 1rem;
  display: block;
  padding-bottom: 1%;
  span {
    display: block;
    text-align: justify;
    color: #656464;
    font-size: 0.8rem;
    padding-right: 2%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track-piece {
      background-color: transparent;
      margin-top: 5px;
    }

    &::-webkit-scrollbar-thumb {
      height: 80%;
      background-color: #dfdfdf;
    }
  }
  @media (min-width: 1700px) and (max-width: 2500px) {
    font-size: 1.1rem;
    text-align: left;
    span {
      font-size: 0.9rem;
    }
  }
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
