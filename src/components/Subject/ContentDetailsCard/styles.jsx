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

export const DivName = styled.div`
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

export const DivEmail = styled.div`
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

export const DivDescription = styled.div`
  width: 95%;
  height: 100%;
  font-size: 1rem;
  display: block;
  padding-bottom: 1%;
  span {
    height: 220px;
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

export const IconTag = styled.span`
  grid-column: 2;
  display: flex;
  height: 100%;
  justify-content: end;
`;
