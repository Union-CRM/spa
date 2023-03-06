import styled, { css } from "styled-components";

export const FontHeadline = styled.p`
  ${(props) => {
    switch (props.$mode) {
      case "Headline1":
        return css`
          font-size: 56px;
          font-style: normal;
          font-weight: 500;
          line-height: 64px;
        `;

      case "Headline2":
        return css`
          font-size: 48px;
          font-style: normal;
          font-weight: 500;
          line-height: 52px;
        `;

      case "Headline3":
        return css`
          font-size: 32px;
          font-style: normal;
          font-weight: 600;
          line-height: 36px;
        `;

      case "Headline4":
        return css`
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 28px;
        `;

      case "Headline5":
        return css`
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px;
        `;

      default:
    }
  }}
  
  color: ${(props) => props.colorFont || "#141824"};

`;

export const FontBody = styled.p`
  ${(props) => {
    switch (props.$mode) {
      case "Body1":
        return css`
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 22x;
        `;

      case "Body2":
        return css`
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 22px;
        `;

      default:
    }
  }}
  color: ${(props) => props.colorFont || "#141824"};
`;

export const FontSubtitle = styled.p`
  ${(props) => {
    switch (props.$mode) {
      case "TitleMed":
        return css`
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: 16px;
        `;

      case "TextDescription":
        return css`
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: 16px;
        `;

      case "TextDescription2":
        return css`
          font-size: 10px;
          font-style: normal;
          font-weight: 500;
          line-height: 16px;
        `;

      default:
    }
  }}
  color: ${(props) => props.colorFont || "#141824"};
`;
