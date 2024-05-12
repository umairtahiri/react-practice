import Box from "@mui/material/Box";

import { BannerReviewContainer } from "./styles";

import BannerImg from "../../../../assets/banner2.svg";

const BannerReview = () => {
  return (
    <BannerReviewContainer>
      <Box>
        <img src={BannerImg} alt="#" />
      </Box>
    </BannerReviewContainer>
  );
};

export default BannerReview;
