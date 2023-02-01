import styled from "styled-components"

export const Box = styled.div`
padding: 1.2em;
background-color: #ffffff;
margin-top: 4em;
width: 595px; height: 830px;
border-radius: 5px;
border-left-style: solid; border-left-width: 18px; border-left-color: #007BFF;
`;

export const Title = styled.div`
font-size: 16px;
margin-bottom: 0.4em;
width: 500px;
`;

export const H1 = styled.div`
font-weight: bold;
font-size: 32px;
margin-top: 0.8em;
margin-bottom: 0.6em;
width: 300px;
`;

export const Input = styled.input`
    margin-bottom: 1em;
    width: 500px;
    height: 35px;
    border-radius: 5px; 
`;
export const InputDate = styled.input`
    margin-bottom: 0.6em;
    width: 150px;
    height: 35px;
    border-radius: 5px;
`;
export const InputGuest = styled.input`
    margin-bottom: 0.6em;
    width: 337px;
    height: 35px;
    border-radius: 5px;
`;
export const GuestBox = styled.div`
    margin-top: 1.5em;
    margin-bottom: 0.6em;
    width: 337px;
    height: 104px;
    border-radius: 5px;
    border-color: #000000;
    border-style: solid;
    border-width: 0.1em;
`;

export const GuestItems = styled.div`
    margin: 10px 10px;
    max-width: 160px;
    height: 25px;
    color: #888888;
    background-color: #d9d9d9;
    border-radius: 10px;
    text-align: center;
    padding-top: 6px;
    font-size: 14px;
`;

export const SecondDiv = styled.div`
  display: grid;
  grid-template-columns: 164px 338px;
`;

export const ButtonSave = styled.button`
    margin-top: 1.4em;
    height: 50px;
    width: 256px;
    border-radius: 8px;
    background-color: #007BFF;
    border-color: #007BFF;
    color: #ffffff;
    margin-left: 120px;
    font-size: 18px;
`;
export const ButtonCancel = styled.button`
    margin-top: 1.4em;
    height: 50px;
    width: 256px;
    border-radius: 8px;
    background-color: #ffffff;
    color: #007BFF;
    border-color: #007BFF;
    margin-left: 120px;
    font-size: 18px;
`;

export const Content = styled.div`
    margin-left: 30px;
`;

export const Select = styled.select`
  margin-bottom: 0.6em;
  width: 501px;
  height: 35px;
  border-radius: 5px;
  background: white;
  color: gray;
  font-size: 14px;
  border-width: 0.1em;
       option {
         color: black;
         background: white;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
       }`

export const SelectGuest = styled.select`
  margin-bottom: 0.6em;
  width: 341px;
  height: 35px;
  border-radius: 5px;
  background: white;
  color: gray;
  font-size: 14px;
  border-width: 0.1em;
       option {
         color: black;
         background: white;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
       }`
;






