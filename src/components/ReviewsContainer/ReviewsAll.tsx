import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Carousel from "../Carousel";
import { ReviewsAllContainer, ReviewsCard } from "./styles";

export const ReviewsAll = () => {
  const [reviews, setReviews] = React.useState([]);

  const fetchReviews = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/reviews`
        // `https://sternehero.de/api/reviews`
      );
      const data = await response.json();
      if (data.status === "OK") {
        setReviews(data.result.reviews);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <ReviewsAllContainer>
      <Box>
        <Carousel>
          {reviews?.map((review) => {
            const { profile_photo_url, text } = review;
            return (
              <ReviewsCard key={profile_photo_url}>
                <Card>
                  <CardContent className="review-card-content">
                    <Stack direction="row" columnGap={1} alignItems="start">
                      <img
                        src={profile_photo_url}
                        width={50}
                        height={50}
                        alt="#"
                        className="user-img"
                      />
                      <Stack
                        direction="column"
                        rowGap={2}
                        alignItems="flex-start"
                      >
                        <Box>
                          <Typography variant="h4">{text}</Typography>
                        </Box>
                        <Box>
                          <Rating name="simple-controlled" value={5} readOnly />
                        </Box>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </ReviewsCard>
            );
          })}
        </Carousel>
      </Box>
    </ReviewsAllContainer>
  );
};
