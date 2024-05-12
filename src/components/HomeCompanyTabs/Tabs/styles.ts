import styled from "styled-components";
import Box from "@mui/material/Box";

export const TabsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .MuiTabs-root {
    background-color: #1e352d;
  }

  .MuiTab-root {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    color: #5a9e87;
  }

  .MuiTabs-indicator {
    background-color: #1e352d;
    width: 0px;
    height: 0px;
  }

  .Mui-selected {
    background-color: #f79009;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    color: white !important;
    border-radius: 32px;
    padding: 12px 24px;

    @media screen and (max-width: 600px) {
      font-size: 13px;
      padding: 8px 16px;
    }
  }

  .MuiBox-root {
    padding: 0px;
  }

  .tab-data {
    padding: 32px 48px;
    background-color: #2d4f44;
    border-radius: 24px;
    margin-top: 24px;
  }

  h5 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #e5e7eb;
  }

  .start-button {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: #384250;
    background-color: #ffffff;
    border-radius: 24px;
    padding: 10px 16px;
    text-align: center;
    border: none;
    margin-top: 42px;
    text-transform: none;

    @media screen and (max-width: 400px) {
      font-size: 13px;
    }

    &:hover {
      background-color: #ffffff;
    }
  }
`;
