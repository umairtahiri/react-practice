import styled from "styled-components";
import Box from "@mui/material/Box";

export const ReviewsAllContainer = styled(Box)`
  padding: 100px 160px;
  background: linear-gradient(0deg, #fff 0%, #f3f4f6 100%);
  @media screen and (max-width: 768px) {
    padding: 48px 24px 1px 24px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding: 88px 24px;
  }
`;
export const ReviewsCard = styled(Box)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 20px;

  .MuiCard-root {
    border-radius: 32px;
    box-shadow: 0px 20px 25px -5px #3842501a;
    box-shadow: 0px 8px 10px -6px #38425033;
    width: 320px;
    margin-bottom: 12px;
  }

  .MuiCardContent-root {
    padding: 32px;
    color: #1f2a37;
  }

  h4 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }
`;
