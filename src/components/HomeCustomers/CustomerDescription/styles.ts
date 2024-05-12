import styled from "styled-components";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

export const CustomerDescriptionContainer = styled(Box)`
  width: -webkit-fill-available;
`;

export const Title = styled(Typography)`
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #384250;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 38px;
  }
`;

export const Description = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #6c737f;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledButton = styled(Button)`
  background: linear-gradient(90deg, #4b8471 0%, #59b194 100%);
  border-radius: 24px;
  padding: 10px 16px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  text-transform: none;

  @media screen and (max-width: 400px) {
    font-size: 13px;
  }

  &:hover {
    background-color: #4b8471;
  }
`;
