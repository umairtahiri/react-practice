import styled from "styled-components";
import Box from "@mui/material/Box";

export const HomeCompanyContainer = styled(Box)`
  background-color: #1e352d;
  padding: 120px 160px;

  @media screen and (max-width: 768px) {
    padding: 64px 24px;
  }

  @media screen and (max-width: 1080px) {
    padding: 88px 24px;
  }

  h6 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: #9da4ae;
  }

  h3 {
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.02em;
    text-align: center;
    color: #ffffff;

    @media screen and (max-width: 768px) {
      font-size: 30px;
      line-height: 38px;
    }
  }
`;
