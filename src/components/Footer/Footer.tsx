import { FooterContainer, OtherInfo, LowerFooterContainer } from "./styles";
import CompanyLogo from "../../assets/Logo.svg";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import phoneIcon from "../../assets/callIcon.svg";
import mailIcon from "../../assets/mailIcon.svg";

import { Button, Grid, Input } from "@mui/material";

export const Footer = () => {
  return (
    <FooterContainer>
      <Grid container alignItems="flex-start" justifyContent="space-between">
        <Grid item>
          <Stack direction="column" alignItems="self-start" rowGap={3}>
            <div style={{ cursor: "pointer" }}>
              <img src={CompanyLogo} alt="companyLogo" />
              {/* <img src={CompanyLogo} alt="CompanyLogo" width={300} /> */}
            </div>

            <Typography variant="h3">
              Mit uns werden Sie zum Stern Ihrer Branche!
            </Typography>
            <a href="mailto:mail@sternhero.com">
              <Stack direction="row" columnGap={1} alignItems="center">
                <img src={mailIcon} alt="companyLogo" />
                <span className="colored-mail-text">info@sternehero.de</span>
              </Stack>
            </a>
            <a href="tel:+4915203119191" target="_blank">
              <Stack direction="row" columnGap={1} alignItems="center">
                <img src={phoneIcon} alt="companyLogo" />
                +49 152 0311 9191
              </Stack>
            </a>
          </Stack>
        </Grid>
        <Grid item>
          <Stack direction="column" alignItems="self-start" rowGap={2}>
            <Typography variant="h2">Seitenaufbau</Typography>

            <Typography variant="h5">Home</Typography>

            <Typography variant="h5">Bewertungen Löschen</Typography>

            {/* <Typography variant="h5">Online Shop</Typography> */}
          </Stack>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={6} lg={2.5}>
          <Stack direction="column" alignItems="self-start" rowGap={2}>
            <Typography variant="h2">Resources</Typography>
            <Typography variant="h5">Newsletter</Typography>
            <Typography variant="h5">Events</Typography>
            <Typography variant="h5">Help centre</Typography>
            <Typography variant="h5">Support</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3.5}>
          <Stack direction="column" alignItems="self-start" rowGap={2}>
            <Typography variant="h2">Subscribe the Newsletter</Typography>
            <Box>
              <Input className="email-input" placeholder="Enter your email" />
            </Box>
            <Box>
              <Button variant="contained" size="large">
                Subscribe
              </Button>
            </Box>
          </Stack>
        </Grid> */}
      </Grid>
      <Divider color="white" />
      <LowerFooterContainer>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <Typography variant="h4">
              © 2024 <span className="colored-text">Sternehero.</span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Stack
              direction="row"
              columnGap={2}
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography variant="h3">Impressum</Typography>

              <Typography variant="h3">Datenschutz</Typography>
            </Stack>
          </Grid>
        </Grid>
      </LowerFooterContainer>
    </FooterContainer>
  );
};
