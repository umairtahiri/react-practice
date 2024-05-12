import React from "react";
import CustomerBanner from "./CustomerBanner/CustomerBanner";
import CustomerDescription from "./CustomerDescription/CustomerDescription";
import Grid from "@mui/material/Grid";
import { HomeCustomerContainer } from "./styles";

export const HomeCustomers = () => {
  return (
    <HomeCustomerContainer>
      <Grid container alignItems="center" spacing={8}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CustomerBanner />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CustomerDescription />
        </Grid>
      </Grid>
    </HomeCustomerContainer>
  );
};
