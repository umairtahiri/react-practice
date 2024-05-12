import React from "react";
import Grid from "@mui/material/Grid";
import CallSteps from "./CallSteps";
import BookDate from "./BookDate";
import { HomeBookCallContainer } from "./styles";

export const HomeBookCall = () => {
  return (
    <HomeBookCallContainer>
      <Grid container spacing={10} alignItems="flex-start">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CallSteps />
        </Grid>
        {/* <Grid item xs={12} sm={12} md={6} lg={6}>
          <BookDate />
        </Grid> */}
      </Grid>
    </HomeBookCallContainer>
  );
};
