import styled from "styled-components";

export const Div = styled.div`
  border-left: solid 20px #e41165;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgb(0, 0, 0, 0.5);
  height: 800px;
  width: 544.47px;
  grid-area: 1 / 2 / 2 / 3;
`;
export const InputWithName = styled.div`
  font-family: Houschka Rounded Alt;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;
export const Title = styled.h1`
  font-family: Houschka Rounded Alt;
  font-size: 32px;
  margin-top: 5%;
  margin-bottom: 70px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 4%;
  display: inline-block;
`;
export const SubTitle = styled.p`
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 0px;
  margin-top: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.8);
`;
export const DivBNameStatus = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 150px;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  margin-left: 20px;
  height: 9%;
`;
export const DivStatus = styled.div`
  grid-area: 1 / 2 / 2 / 2;
  margin-top: 12px;
`;
export const DivBName = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 5;
`;
export const DivCodeSeguiment = styled.div`
  margin-bottom: 10%;
  margin-left: 4%;
`;
export const DivTag = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 150px;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  margin-left: 4%;
`;
export const DivButton = styled.div`
  justify-content: center;
  display: grid;
  grid-row-gap: 20px;
  width: 100%;
  margin-top: 10%;
`;
export const DivCode = styled.div`
  margin-left: 20px;
`;
export const HowManyActive = styled.span`
  color: #00953b;
`;
export const HowManyInactive = styled.span`
  color: #771300;
`;
export const HowManySubjectList = styled.span`
  color: #525b75;
`;
export const HowManyCancel = styled.div`
  margin-left: 20px;
`;
export const Finished = styled.div`
  margin-left: 20px;
`;
export const ButtonFinished = styled.div`
  margin-left: 20px;
`;
export const HowManyAll = styled.div`
  margin-left: 20px;
`;
export const ButtonProgress = styled.button`
  margin-left: 20px;
`;
export const Canceled = styled.div`
  margin-left: 20px;
`;
export const H1 = styled.span`
  width: 100%;
  font-family: "Houschka Rounded Alt";
  font-size: 24px;
  margin-top: 10px;
`;
