import styled, { css } from "styled-components";

export const Button = styled.button`
  ${(props) => {
    switch (props.$mode) {
      case "true":
        return css`
          background-color: #e41165;
          color: #e3e6ed;
          border: none;
        `;
      case "false":
        return css`
          background-color: #e3e6ed;
          color: #e41165;
          border: solid 1px #e41165;
        `;
        case "col":
          return css`
          background-color: #007BFF;
          color: #e3e6ed;
          border: solid 1px #007BFF;
        `;

        case "col2":
          return css`
          background-color: #e3e6ed;
          color: #007BFF ;
          border: solid 1px #007BFF  ;
        `;
      default:
        return css`
          background-color: #bebebe;
        `;
    }
  }}
  width: 240px;
  height: 50px;
  margin-left: 8%;
  border-radius: 0.5em;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
