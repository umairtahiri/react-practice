import styled from "styled-components";
import Box from "@mui/material/Box";

export const Content = styled(Box)`
  height: calc(100vh - 30px);
  padding: 15px;
  background: white;

  button {
    background-color: #4b8471;
    border-radius: 24px;
    padding: 10px 16px;
    text-align: center;
    text-transform: none;

    &:hover {
      background-color: #4b8471;
    }
  }

  a {
    display: block;
    text-decoration: none;
    border-bottom: 1px solid #fff;
    text-align: right;

    &:hover {
      color: #5a9e87;
    }

    h5 {
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      color: #384250;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const Item = styled(Box)`
  padding: 15px;
  cursor: pointer;

  &:hover {
    .MuiTypography-root {
      color: #000 !important;
    }
  }
`;
