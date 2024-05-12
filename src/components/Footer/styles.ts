import styled from "styled-components";
import Box from "@mui/material/Box";

export const FooterContainer = styled(Box)`
  text-align: center;
  padding: 80px 160px 28px 160px;

  @media screen and (max-width: 768px) {
    padding: 0px 24px 8px 24px;
  }

  @media screen and (max-width: 520px) {
    .MuiStack-root {
      align-items: center;
    }

    .MuiGrid-root {
      justify-content: center;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding: 88px 24px;
  }

  .MuiInput-root::before {
    border: none;

    &:hover {
      border: none !important;
    }
  }

  .MuiInput-root::after {
    border: none !important;

    &:hover {
      border: none !important;
    }
  }

  .email-input {
    border: 1px solid #e5e7eb !important;
    background-color: white;
    padding: 10px 14px !important;
    width: 314px;
    border-radius: 80px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #6c737f;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  h4 {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #6c737f;
    cursor: pointer;

    .colored-text {
      color: #4b8471;
    }
  }

  a {
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #4d5761;
    .colored-mail-text {
      color: #5a9e87;
    }
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    text-align: left;
    color: #1f2a37;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      margin-top: 32px;
    }
  }

  h5 {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #4d5761;
    cursor: pointer;
  }

  button {
    background: linear-gradient(90deg, #4b8471 0%, #59b194 100%);
    border-radius: 24px;
    padding: 10px 16px;
    text-align: center;
    width: 314px;

    &:hover {
      background-color: #4b8471;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 32px;
    }
  }

  .MuiDivider-root {
    margin: 72px 0px 24px 0px;

    @media screen and (max-width: 768px) {
      margin: 32px 0px 24px 0px;
    }
  }
`;

export const OtherInfo = styled(Box)`
  column-gap: 40px;
  flex-wrap: wrap;
`;

export const LowerFooterContainer = styled(Box)`
  h3 {
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  h4 {
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  .MuiStack-root {
    @media screen and (max-width: 768px) {
      justify-content: center;
    }
  }
`;
