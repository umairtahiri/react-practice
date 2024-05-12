import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { CallStepsContainer } from "./styles";

export const CallSteps = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const steps = [
    {
      label: "Set up meeting schedule",
    },
    {
      label: "Submit Removal Requests",
    },
    {
      label: "Monitor Progress and Follow Up",
    },
    {
      label:
        "Review the Successful Removals and Celebrate Your Restored Reputation",
    },
  ];

  return (
    <CallStepsContainer>
      <Stack direction="column" alignItems="start" spacing={3}>
        <Box>
          <Typography variant="h3">Schneller zur Sichtbarkeit</Typography>
          <Typography variant="h6">
            Buchen Sie jetzt Ihr unverbindliches Beratungsgespräch! (Keine
            Rechtsberatung) Entdecken Sie, wie wir auch Ihr Unternehmen zum
            Leuchten bringen.
          </Typography>
        </Box>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps?.map((step, index) => (
            <Step key={step?.label}>
              <StepLabel>{step?.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
    </CallStepsContainer>
  );
};
