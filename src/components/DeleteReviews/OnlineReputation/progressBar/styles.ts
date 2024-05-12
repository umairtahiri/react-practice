import styled from "styled-components";
import Box from "@mui/material/Box";

export const ProgressBarContainer = styled(Box)`
  h5 {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
  }
  .progress-bar {
    height: 9px;
    background-color: #f1f3f4;
    width: 100%;
    border-radius: 16px;
    position: relative;
  }
  .success-bar-5 {
    height: 9px;
    background-color: #fbbc04;
    width: 100%;
    border-radius: 16px;
    position: absolute;
    width: 8%;
  }
  .success-bar-4 {
    height: 9px;
    background-color: #fbbc04;
    width: 100%;
    border-radius: 16px;
    position: absolute;
    width: 4%;
  }
  .success-bar-3 {
    height: 9px;
    background-color: #fbbc04;
    width: 100%;
    border-radius: 16px;
    position: absolute;
    width: 3%;
  }
  .success-bar-1 {
    height: 9px;
    background-color: #fbbc04;
    width: 100%;
    border-radius: 16px;
    position: absolute;
    width: 1%;
  }
`;
