import styled from "styled-components";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export const HeaderContainer = styled(Box)`
  position: sticky;
  top: 0;
  z-index: 5;
  width: -webkit-fill-available;
  display: flex;
  padding: 24px 160px;

  @media only screen and (min-width: 768px) and (max-width: 1140px) {
    padding: 20px 24px;
  }

  img {
    object-fit: contain;
    padding-left: 16px;
  }

  a {
    text-decoration: none;
  }

  h2 {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    color: #384250;
    padding: 26px 0px;
    cursor: pointer !important;
    border-bottom: 3px solid transparent;

    &:hover {
      color: #5a9e87;
      border-bottom: 3px solid #5a9e87;
    }
  }

  h3 {
    color: #5a9e87;
    border-bottom: 3px solid #5a9e87;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    padding: 26px 0px;
    cursor: pointer !important;
  }

  button {
    background: linear-gradient(90deg, #4b8471 0%, #59b194 100%);
    border-radius: 24px;
    padding: 10px 16px;
    text-align: center;
    margin-right: 16px;
    text-transform: none;

    &:hover {
      background-color: #4b8471;
    }
  }

  @media screen and (max-width: 998px) {
    display: none !important;
  }
`;

export const HeaderMainWrapper = styled(Stack)`
  border-radius: 24px;
  border: 1px solid #fff;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.4);
`;

export const NavItemsContainer = styled(Box)`
  .MuiStack-root {
    border-radius: 24px;
    border: 0px solid #fff;
  }
`;
