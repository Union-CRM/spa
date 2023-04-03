import styled, { css } from "styled-components";

export const Button = styled.button`
  ${(props) => {
    switch (props.$mode) {
      case "adminSave":
        return css`
          background-color: #e41165;
          color: #e3e6ed;
          border: none;
        `;
      case "adminCancel":
        return css`
          background-color: #e3e6ed;
          color: #e41165;
          border: solid 1px #e41165;
        `;
      case "userSave":
        return css`
          background-color: #007bff;
          color: #e3e6ed;
          border: solid 1px #007bff;
        `;

      case "userCancel":
        return css`
          background-color: #e3e6ed;
          color: #007bff;
          border: solid 1px #007bff;
        `;
      case "cancelModalUser":
        return css`
          border: none;
          background-color: transparent;
          box-shadow: 0px 0px 0px 0px !important;
          color: #007bff;
        `;
      case "cancelModalAdmin":
        return css`
          color: #e41165;
        `;
      default:
        return css`
          background-color: #bebebe;
        `;
    }
  }}
  width: 200px;
  height: 30px;
  font-size: ${(props) => props.sizeFont || "12px"};
  font-weight: ${(props) => props.weightFont || "400"};
  border-radius: 0.5em;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  @media (min-width: 1600px) {
    height: 40px;
  }
`;
