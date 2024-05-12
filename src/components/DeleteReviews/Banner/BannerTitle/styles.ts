import styled from "styled-components";
import Box from "@mui/material/Box";

export const BannerTitleContainer = styled(Box)`
  @media screen and (max-width: 1200px) {
    margin-bottom: 50px;
  }

  button {
    background: linear-gradient(90deg, #4b8471 0%, #59b194 100%);
    border-radius: 24px;
    padding: 10px 16px;
    text-align: center;
    text-transform: none;

    &:hover {
      background-color: #4b8471;
    }
  }

  h3 {
    color: var(--Brand-800, #2d4f44);
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 72px; /* 120% */
    letter-spacing: -1.2px;
    text-transform: uppercase;
    margin-bottom: 24px;

    @media screen and (max-width: 768px) {
      font-size: 40px;
      line-height: 60px;
      text-align: left;
    }

    @media screen and (max-width: 340px) {
      font-size: 30px;
      line-height: 40px;
      text-align: left;
    }

    @media only screen and (min-width: 768px) and (max-width: 1199px) {
      margin-bottom: 20px;
    }
  }

  h6 {
    color: var(--Gray-neutral-500, #6c737f);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;
