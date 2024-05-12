import { Card, Stack, Typography, Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import { ProgressBar } from "../progressBar/ProgressBar";
import arrowDownImg from "@/assets/greenArrow.svg";
import companyLogo from "../../../../public/assets/category1.svg";
import { CardContainer, HeaderContainer, DividerContainer } from "./styles";

export const RatingCard = () => {
  return (
    <CardContainer>
      <Card>
        <HeaderContainer>
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <img src={companyLogo} alt="#" />
            <Typography variant="h5">
              Services in Berlin deleted 40 from 240 reviews in 2 weeks
            </Typography>
          </Stack>
        </HeaderContainer>
        <Grid padding="6px 24px" container spacing={1} alignItems="center">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ProgressBar />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack direction="column" spacing={1} alignItems="center">
              <Typography variant="h2">4.5</Typography>
              <Rating
                name="simple-controlled"
                value={4.5}
                readOnly
                precision={0.5}
              />
              <Typography variant="h4">240 Berichte</Typography>
            </Stack>
          </Grid>
        </Grid>
        <DividerContainer>
          <Stack>
            <Image src={arrowDownImg} alt="#" />
          </Stack>
        </DividerContainer>
        <Grid padding="6px 24px" container spacing={1} alignItems="center">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ProgressBar />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack direction="column" spacing={1} alignItems="center">
              <Typography variant="h2">4.6</Typography>
              <Rating
                name="simple-controlled"
                value={4.5}
                readOnly
                precision={0.5}
              />
              <Typography variant="h4">200 Berichte</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </CardContainer>
  );
};
