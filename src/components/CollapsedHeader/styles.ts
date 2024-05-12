import styled from "styled-components";
import Box from "@mui/material/Box";

export const HeaderContainer = styled(Box)`
  position: sticky;
  top: 0;
  z-index: 3;
  padding: 20px;
  width: -webkit-fill-available;

  .MuiStack-root {
    border-radius: 24px;
    border: 1px solid #fff;
    padding: 16px 10px;
    opacity: 0.9;
    backdrop-filter: blur(10px);
  }

  img {
    object-fit: contain;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  @media screen and (min-width: 998px) {
    display: none !important;
  }
`;

export const Menu = styled(Box)`
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
