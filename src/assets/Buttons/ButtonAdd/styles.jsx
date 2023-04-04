import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.$mode || "#E41165"};

  border: none;
  width: ${(props) => props.$width || "fit - content"};
  height: ${(props) => props.$height || "50px"};
  padding: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 0.5em;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
export const IconAdd = styled.div`
  margin-right: 8px;
`;

export const SpanButton = styled.span`
  color: ${(props) => props.color || "#fffff"};
`;
export const Span = styled.span`
  color: ${(props) => props.color || "#fffff"};
  margin: 0 auto;
  font-size: 16px;
  margin-bottom: 3px;
  margin-right: 5px;
  font-family: "Houschka Rounded Alt";
  text-align: right;
`;
