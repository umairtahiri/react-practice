import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ComapnyTabs from "./Tabs/Tabs";
import { HomeCompanyContainer } from "./styles";

export const HomeCompany = () => {
  return (
    <HomeCompanyContainer>
      <Stack direction="column" spacing={2} alignItems="center">        
        <Typography variant="h3">
          Wie wird Ihr Unternehmen unübersehbar?
        </Typography>
        <ComapnyTabs />
      </Stack>
    </HomeCompanyContainer>
  );
};

