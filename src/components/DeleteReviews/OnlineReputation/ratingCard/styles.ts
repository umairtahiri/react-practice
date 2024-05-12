import styled from "styled-components";
import Box from "@mui/material/Box";

export const CardContainer = styled(Box)`
  border-radius: 16px;
  border: 3px solid #e5e7eb;
  width: 392px;

  h2 {
    font-size: 72px;
    font-weight: 500;
    line-height: 90px;
    letter-spacing: -0.02em;
    text-align: left;
  }

  h4 {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
  }
`;
export const HeaderContainer = styled(Box)`
  background-color: #f3f4f6;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;

  h5 {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
  }
`;

export const DividerContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-item: center;
`;
