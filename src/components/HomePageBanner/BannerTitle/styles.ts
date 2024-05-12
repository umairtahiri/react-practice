import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const BannerTitleContainer = styled(Box)`
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    margin-bottom: 50px;
  }
`;

export const Title = styled(Typography)`
  color: var(--Brand-800, #2d4f44);
  font-size: 60px;
  font-style: normal;
  font-weight: 900;
  line-height: 72px; /* 120% */
  letter-spacing: -1.2px;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 48px;
    line-height: 60px;
  }
`;

export const Subheading = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #6c737f;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const StyledButton = styled(Button)`
  background: linear-gradient(90deg, #4b8471 0%, #59b194 100%);
  border-radius: 24px;
  padding: 10px 16px;
  text-align: center;
  text-transform: none;
  color: white;
  font-size: 16px;
  font-weight: 600;

  @media screen and (max-width: 400px) {
    font-size: 13px;
  }

  &:hover {
    background-color: #4b8471;
  }
`;
