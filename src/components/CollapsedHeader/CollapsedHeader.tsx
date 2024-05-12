import { useState } from "react";

import Stack from "@mui/material/Stack";

import OptionsDrawer from "../Drawer/Drawer";

import { HeaderContainer, Menu } from "./styles";

import CompanyLogo from "../../assets/Logo.svg";
import menuIcon from "../../assets/burgerIcon.svg";

export const CollapsedHeader = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = () => setShowDrawer(!showDrawer);
  return (
    <HeaderContainer>
      <Stack
        direction="row"
        width="-webkit-fill-available"
        alignItems="center"
        justifyContent="space-between"
      >
        <img src={CompanyLogo} alt="logo" width={150} />

        <Menu onClick={toggleDrawer}>
          <img src={menuIcon} alt="#" />
        </Menu>
        <OptionsDrawer open={showDrawer} toggleDrawer={toggleDrawer} />
      </Stack>
    </HeaderContainer>
  );
};
