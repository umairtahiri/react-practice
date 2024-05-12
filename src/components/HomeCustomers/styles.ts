import styled from "styled-components";
import Box from "@mui/material/Box";

export const HomeCustomerContainer = styled(Box)`
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
  padding: 120px 160px;
  @media screen and (max-width: 768px) {
    padding: 64px 24px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding: 88px 24px;
  }
  .MuiGrid-root {
    @media screen and (max-width: 768px) {
      flex-flow: wrap-reverse !important;
    }
  }
`;
