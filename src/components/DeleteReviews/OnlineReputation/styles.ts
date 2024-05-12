import styled from "styled-components";
import Box from "@mui/material/Box";

export const ReputationContainer = styled(Box)`
  padding: 64px 160px;
  @media screen and (max-width: 768px) {
    padding: 64px 24px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding: 88px 24px;
  }
  h3 {
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.02em;
    text-align: center;
    color: #384250;
    @media screen and (max-width: 768px) {
      font-size: 30px;
      line-height: 38px;
    }
  }
  h4 {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    color:#384250;
    margin-bottom:32px;
  }
  button {
    background: linear-gradient(90deg, #4B8471 0%, #59B194 100%);
    border-radius: 24px;
    padding: 10px 16px;
    text-align: center;    
    &:hover {
      background-color: #4b8471;
    }
`;
