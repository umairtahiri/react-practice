import styled from "styled-components";
import Box from "@mui/material/Box";

export const AblaufContainer = styled(Box)`
  padding: 64px 160px;
  background-color: white;

  @media screen and (max-width: 768px) {
    padding: 20px 24px 64px 24px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    padding: 88px 24px;
  }

  .MuiGrid-root {
    @media only screen and (max-width: 900px) {
      flex-flow: wrap-reverse !important;
    }
  }

  h3 {
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.02em;
    text-align: center;
    margin-bottom: 32px;
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
  }

  .selected-company-card {
    background-color: #d2d6db;
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 16px;
    cursor: pointer;
    box-shadow: none;
  }

  .company-card {
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 16px;
    cursor: pointer;
    background-color: #f9fafb;
    box-shadow: none;
  }

  .company-image-card-1 {
    background-color: #fdb022 !important;
    padding: 43px 120px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;

    @media only screen and (max-width: 596px) {
      img {
        width: 263px;
        height: 100%;
      }
    }

    @media only screen and (min-width: 900px) and (max-width: 1200px) {
      width: 363px;
    }
  }

  .company-image-card-2 {
    background-color: #805a9e;
    border-radius: 16px;
    width: fit-content;
    object-fit: contain;

    @media only screen and (max-width: 900px) {
      width: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .company-image-card-3 {
    background-color: #8f5252;
    border-radius: 16px;
    object-fit: contain;
    width: fit-content;

    @media only screen and (max-width: 900px) {
      width: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    h5 {
      color: var(--Base-White, #fff);
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 150% */
      padding: 24px 24px 0px 24px;
    }

    .image-1 {
      padding: 13px 24px;

      @media only screen and (max-width: 900px) {
        width: 83%;
      }
    }
  }

  .company-image-card-4 {
    background-color: #4b8471;
    border-radius: 16px;
    object-fit: contain;
    width: fit-content;
    padding: 43px 127px 42px 126px;

    img {
      width: 100%;
    }

    @media screen and (max-width: 768px) {
      padding: 23px 27px 23px 26px;
      width: 90%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    @media only screen and (min-width: 768px) and (max-width: 1200px) {
      padding: 23px 27px 23px 26px;
    }

    @media only screen and (min-width: 768px) and (max-width: 900px) {
      width: 93%;
    }
  }

  .image-card {
    background-color: #805a9e;
    padding: 0px 21px 0px 20px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
  }

  button {
    background: linear-gradient(90deg, #4b8471 0%, #59b194 100%);
    border-radius: 24px;
    padding: 10px 16px;
    text-align: center;
    margin-top: 32px;
    text-transform: none;

    &:hover {
      background-color: #4b8471;
    }
  }

  .serial-number {
    display: flex;
    width: 32px;
    height: 32px;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 90px;
    background: #1e624b;
    color: #fff;

    /* Text md/Semibold */
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */

    @media only screen and (max-width: 470px) {
      padding: 10px;
      width: 20px;
      height: 17px;
      font-size: 12px;
      border-radius: 50%;
    }
  }
`;
