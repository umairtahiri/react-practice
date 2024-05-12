import React from "react";
import { BannerReviewContainer } from "./styles";
import BannerImg from "../../../assets/bannerImg.svg";

const BannerReview = () => {
  return (
    <BannerReviewContainer>
      <img src={BannerImg} alt="#" />
    </BannerReviewContainer>
  );
};

export default BannerReview;
