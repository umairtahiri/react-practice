import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export const ReviewSearchContainer = styled(Box)`
  padding: 64px 375px;
  background-color: #f3f4f6;

  @media screen and (max-width: 768px) {
    padding: 44px 24px;
  }

  h1 {
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
`;
export const StyledTextField = styled(TextField)`
  z-index: 1;
  margin-top: 56px !important;

  @media screen and (max-width: 998px) {
    margin-top: 25px !important;
  }

  .MuiOutlinedInput-root {
    border-radius: 30px;
    background: #ffffff;
  }

  fieldset {
    border: 1px solid #4b8471;
  }

  svg {
    color: #000;
  }
`;
export const SuccessCard = styled(Box)`
  border-radius: 30px 30px 20px 20px;
  margin-top: 32px;
  background: #fff;
  padding: 24px;
  width: -webkit-fill-available;

  button {
    background: linear-gradient(90deg, #4b8471 0%, #59b194 100%);
    border-radius: 24px;
    padding: 10px 16px;
    text-align: center;

    &:hover {
      background-color: #4b8471;
    }
  }

  h3 {
    color: var(--Gray-neutral-800, #1f2a37);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 155.556% */
  }
  h4 {
    color: var(--Gray-neutral-500, #6c737f);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;
export const PlaceCard = styled(Box)`
  border-radius: 30px 30px 20px 20px;
  margin-top: 32px;
  background: #fff;
  ${({ theme }) =>
    theme.mixins.flex({ justify: "space-between", align: "center" })};
  @media screen and (max-width: 768px) {
    top: 25px;
    flex-wrap: wrap;
    ${({ theme }) => theme.mixins.padding({ ver: 3, hor: 3 })};
    justify-content: center;
    row-gap: 1px;
  }
  h2 {
    color: var(--Gray-neutral-900, var(--text-main-900, #0a0d14));
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 155.556% */
  }
  h5 {
    color: var(--Gray-neutral-500, #6c737f);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
`;
export const LeftCard = styled(Box)`
  background: #fff;
  padding: 16px;
  border-radius: 12px 0px 0px 12px;
  height: 442px;
  border-right: 1px solid #e5e7eb;
  flex: 1;
  @media screen and (max-width: 768px) {
    padding: 0px;
    height: fit-content;
    border-right: none;
  }
  h4 {
    color: var(--Brand-600, #4b8471);
    text-align: right;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    padding-bottom: 22px;
  }
  h3 {
    color: var(--Gray-neutral-800, #1f2a37);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 155.556% */
  }
`;
export const RightCard = styled(Box)`
  background: #fff;
  padding: 16px;
  flex: 1;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
  border-radius: 0px 12px 12px 0px;
  .MuiInput-root::before {
    border: none;
  }
  .MuiInput-root:hover:not::before {
    border: none;
  }
  .MuiInput-root::after {
    border: none;
  }
  .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before {
    border: none;
  }
  .Mui-checked {
    color: #5a9e87;
  }
  h3 {
    color: var(--text-main-900, #0a0d14);
    font-feature-settings: "ss11" on, "cv09" on, "liga" off, "calt" off;

    /* Label/Small */
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.084px;
  }
  .email-input {
    border: 1px solid #e5e7eb !important;
    background-color: white;
    padding: 10px 14px !important;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
  }
  .error-input {
    border: 1px solid red !important;
    padding: 10px 14px !important;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    @media screen and (min-width: 768px) {
      width: 329px;
    }
  }
  .error-message {
    font-size: 12px;
    font-weight: 400;
    color: red;
  }
  button {
    background: linear-gradient(90deg, #4b8471 0%, #59b194 100%);
    border-radius: 24px;
    padding: 10px 16px;
    text-align: center;
    &:hover {
      background-color: #4b8471;
    }
  }
  img {
    margin-right: 10px;
  }
`;
export const PlaceImage = styled(Box)`
  object-fit: contain;
  @media screen and (max-width: 400px) {
    height: 40px;
  }
`;
export const RatingNumber = styled(Typography)`
  h3 {
    color: var(--Gray-neutral-800, #1f2a37);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 155.556% */
  }
`;
export const RatingsContainer = styled(Box)`
  ${({ theme }) => theme.mixins.flex({ dir: "column", align: "flex-end" })};

  @media screen and (max-width: 998px) {
    ${({ theme }) => theme.mixins.flex({ dir: "column", align: "flex-start" })};
  }
`;
export const ReviewText = styled(Typography)`
  color: var(--Gray-neutral-800, #1f2a37);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
`;

export const FieldContainer = styled(Box)`
  position: relative;
  width: 100%;
`;

export const ListContainer = styled(Box)`
  max-height: 350px;
  border-radius: 16px;
  width: 100%;
  background: #fafafa;
  @media screen and (max-width: 998px) {
    top: 25px;
  }
`;

export const ItemsContainer = styled(Box)`
  max-height: 200px;
  overflow: auto;
  border-radius: 16px;
  box-shadow: 0px 8px 10px -6px rgba(0, 0, 0, 0.1),
    0px 20px 25px -5px rgba(0, 0, 0, 0.1);
  background: #fff;
  h3 {
    color: var(--Gray-neutral-600, #4d5761);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
  }
  h4 {
    color: var(--Gray-neutral-600, #4d5761);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;

export const Item = styled(Box)`
  padding: 18px 16px 8px 16px;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const SearchButton = styled(Box)`
  border-radius: 999px;
  border: 1px solid var(--Brand-600, #4b8471);
  background: linear-gradient(90deg, #4b8471 0%, #59b194 100%);
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background: linear-gradient(90deg, #4b8471 0%, #59b194 100%);
  color: #fff;
`;

export const BannerTitle = styled(Box)`
  font-size: 26px;
  font-weight: bold;
`;
