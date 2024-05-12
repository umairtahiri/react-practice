import styled from "styled-components";
import Box from "@mui/material/Box";

export const NotificationContainer = styled(Box)`
  border: 1px solid #fdb022;
  border-radius: 24px;
  margin: 0px 160px 64px 160px;
  padding: 24px;
  background: #fffcf5;

  @media screen and (max-width: 768px) {
    margin: 0px 24px 32px 24px;
  }

  .MuiStack-root {
    @media screen and (max-width: 768px) {
      align-items: center !important;
    }
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    color: #dc6803;

    @media screen and (max-width: 402px) {
      font-size: 12px;
    }

    @media screen and (max-width: 311px) {
      font-size: 10px;
    }
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #dc6803;

    @media screen and (max-width: 402px) {
      font-size: 12px;
    }

    @media screen and (max-width: 311px) {
      font-size: 10px;
    }
  }
`;
