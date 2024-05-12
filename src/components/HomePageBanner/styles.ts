import styled from "styled-components";
import Box from "@mui/material/Box";

export const BannerContainer = styled(Box)`
  width: -webkit-fill-available;
  padding: 4px 104px 36px 160px;
  background: linear-gradient(180deg, #e7f0ed 0%, #fff 100%);
  @media screen and (max-width: 768px) {
    padding: 14px 24px 28px 24px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding: 44px 24px;
  }
`;
