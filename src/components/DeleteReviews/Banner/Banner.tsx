import Grid from "@mui/material/Grid";

import BannerTitle from "./BannerTitle/BannerTitle";
import BannerReview from "./BannerReviews/BannerReview";

import { BannerContainer } from "./styles";

export const ReviewBanner = () => {
  return (
    <BannerContainer>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <BannerTitle />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <BannerReview />
        </Grid>
      </Grid>
    </BannerContainer>
  );
};
