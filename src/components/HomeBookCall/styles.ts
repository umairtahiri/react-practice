import styled from "styled-components";
import Box from "@mui/material/Box";

export const HomeBookCallContainer = styled(Box)`
  padding: 120px 160px;
  background: linear-gradient(0deg, #F3F4F6 0%, #FFF 100%);
  @media screen and (max-width: 768px) {
    padding: 64px 24px;
  
  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding: 88px 24px;
  }
`;
