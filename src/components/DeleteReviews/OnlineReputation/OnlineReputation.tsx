import Carousel from "react-material-ui-carousel";
import ArrowImg from "@/assets/Icon.svg";
import { ReputationContainer } from "./styles";
import { Box, Button, Stack, Typography } from "@mui/material";
import { RatingCard } from "./ratingCard/RatingCard";

export const OnlineReputation = () => {
  const OnlineReviews = [
    {
      id: 0,
      review:
        "“Professional and effective! Sternehero is the go-to for managing Google reviews”",
    },
    {
      id: 1,
      review:
        "“Professional and effective! Sternehero is the go-to for managing Google reviews”",
    },
    {
      id: 2,
      review:
        "“Effortlessly removed negative reviews with Sternehero.Excellent service!”",
    },
    {
      id: 3,

      review:
        "“Professional and effective! Sternehero is the go-to for managing Google reviews”",
    },
    {
      id: 4,
      review:
        "“Effortlessly removed negative reviews with Sternehero.Excellent service!”",
    },
  ];
  return (
    <ReputationContainer>
      <Box>
        <Typography variant="h3">Transform Your Online Reputation</Typography>
        <Typography variant="h4">
          Before and After Google Review Success!
        </Typography>
        <Carousel animation="slide" duration={1000} indicators={false}>
          {OnlineReviews?.map((e) => {
            return (
              <Stack direction="row" justifyContent="center" key={e.id}>
                <RatingCard />
              </Stack>
            );
          })}
        </Carousel>
        {/* <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <RatingCard />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <RatingCard />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <RatingCard />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <RatingCard />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <RatingCard />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <RatingCard />
          </Grid>
        </Grid> */}
        <Stack direction="column" alignItems="center" marginTop="32px">
          <Button
            variant="contained"
            size="large"
            endIcon={<img src={ArrowImg} alt="" />}
          >
            Get Started Now
          </Button>
        </Stack>
      </Box>
    </ReputationContainer>
  );
};
