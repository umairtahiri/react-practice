import styled from "styled-components";
import Box from "@mui/material/Box";

export const BannerContainer = styled(Box)`
  width: -webkit-fill-available;
  display: flex;
  padding: 30px 160px 64px 160px;

  @media screen and (max-width: 768px) {
    padding: 14px 24px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    padding: 44px 24px;
  }

  img {
    object-fit: contain;
  }
`;
