import styled from "styled-components";
import Box from "@mui/material/Box";

export const CallStepsContainer = styled(Box)`
  h3 {
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.72px;
    text-align: left;
    color: #384250;
    margin-bottom: 24px;

    @media screen and (max-width: 768px) {
      font-size: 30px;
      line-height: 38px;
    }
  }

  h6 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #6c737f;
  }

  .MuiStepLabel-iconContainer {
    padding-right: 16px;
  }

  .MuiStepIcon-root {
    width: 32px;
    height: 32px;
    color: #4b8471;
  }

  .MuiStepIcon-root.Mui-active {
    width: 32px;
    height: 32px;
    color: #4b8471;
  }

  .MuiStepLabel-label.Mui-active {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #1f2a37;
  }

  .MuiStepLabel-label {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #1f2a37;
  }
`;
