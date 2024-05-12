import styled from "styled-components";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";

export const FaqContainer = styled(Box)`
  padding: 120px 160px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 64px 24px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding: 88px 24px;
  }

  background: linear-gradient(0deg, #ffffff 0%, #f3f4f6 100%);

  h1 {
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.72px;
    text-align: center;
    color: #384250;
    margin-bottom: 48px;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    color: #1f2a37;
  }

  h4 {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #1f2a37;
  }
`;

export const FaqAccordion = styled(Accordion)`
  border-radius: 0 !important;
  box-shadow: none !important;
  border-bottom: 1px solid var(--Gray-neutral-500, #6c737f);
  width: 800px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  background-color: #f8f9fa;
  padding: 16px 0px;

  .MuiAccordionDetails-root {
    padding: 0px;
  }

  .MuiAccordionSummary-root {
    padding: 0px;
  }

  &:before {
    display: none;
  }

  &.Mui-expanded {
    margin: 16px 0;
    margin-top: 16px !important;
    margin-bottom: 16px !important;
    background-color: #f7f8f9;

    h3 {
      color: #4b8471;
    }
  }
`;
