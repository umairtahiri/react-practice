import React from "react";
import CustomerBannerImg from "../../../assets/customerbanner.svg";
import { CustomerBannerContainer } from "./styles";


const CustomerBanner = () => {
  return (
    <CustomerBannerContainer>
      <img src={CustomerBannerImg} alt="#" />
    </CustomerBannerContainer>
  );
};

export default CustomerBanner;
