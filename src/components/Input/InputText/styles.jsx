import styled from "styled-components";

export const TextArea = styled.textarea`
  width: ${(props) => props.widthText || "80%"};
  border-radius: 5px;
  border: 2px solid #888c95;
  background-color: rgba(0, 0, 0, 0);
  display: block;
  margin-top: 5px;
  padding-top: 10px;
  justify-content: space-between;
  position: relative;
  resize: none;
  padding-left: 10px;
`;

export const Container = styled.div`
  box-sizing: border-box;
  width: auto;
  height: auto;
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, 0);
`;

export const Label = styled.label`
  padding-left: 0px;
  margin-top: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.8);
`;
