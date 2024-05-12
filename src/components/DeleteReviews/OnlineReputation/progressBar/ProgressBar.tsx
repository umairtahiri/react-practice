import React from "react";
import { Stack, Typography } from "@mui/material";
import { ProgressBarContainer } from "./styles";
export const ProgressBar = () => {
  return (
    <ProgressBarContainer>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="h5">5</Typography>
        <div className="progress-bar" />
        <div className="success-bar-5"/>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="h5">4</Typography>
        <div className="progress-bar" />
        <div className="success-bar-4"/>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="h5">3</Typography>
        <div className="progress-bar" />
        <div className="success-bar-3"/>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="h5">2</Typography>
        <div className="progress-bar" />
        <div className="success-bar-4"/>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="h5">1</Typography>
        <div className="progress-bar" />
        <div className="success-bar-1"/>
      </Stack>
    </ProgressBarContainer>
  );
};
