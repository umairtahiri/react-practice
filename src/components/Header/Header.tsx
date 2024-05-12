import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CollapsedHeader from "../CollapsedHeader";
import {
  HeaderContainer,
  NavItemsContainer,
  HeaderMainWrapper,
} from "./styles";
import CompanyLogo from "../../assets/Logo.svg";

import Button from "@mui/material/Button";

export const Header: React.FC<{ pathname?: string }> = ({ pathname }) => {
  // const { width } = useWindowSize();
  const isActive = (path: string) => {
    return pathname === path;
  };
  const navigate = useNavigate();
  return (
    <>
      <HeaderContainer>
        <HeaderMainWrapper
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="-webkit-fill-available"
        >
          <NavItemsContainer>
            <Stack direction="row" columnGap={2} sx={{ cursor: "pointer" }}>
              <img
                alt="CompanyLogo"
                src={CompanyLogo}
                width={163}
                onClick={() => navigate("/")}
              />
            </Stack>
          </NavItemsContainer>

          <NavItemsContainer>
            <Stack direction="row" alignItems="center" spacing={4}>
              <Box>
                <Typography
                  variant={isActive("/") ? "h3" : "h2"}
                  whiteSpace="nowrap"
                  onClick={() => navigate("/")}
                >
                  Home
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant={isActive("/bewertungen-löschen") ? "h3" : "h2"}
                  whiteSpace="nowrap"
                  onClick={() => navigate("/delete-reviews")}
                >
                  Bewertungen Löschen
                </Typography>
              </Box>

              {/* <Link href="/#OnlineShop">
              <Box>
                <Typography variant="h2" whiteSpace="nowrap">
                  Online Shop
                </Typography>
              </Box>
            </Link> */}

              <Box>
                <Button variant="contained" size="large">
                  Angebot einholen
                </Button>
              </Box>
            </Stack>
          </NavItemsContainer>
        </HeaderMainWrapper>
      </HeaderContainer>
      <CollapsedHeader />
    </>
  );
};
