import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Content, Item } from "./styles";

type OptionsDrawerPropTypes = {
  open: boolean;
  toggleDrawer: () => void;
};

export default function OptionsDrawer({
  open,
  toggleDrawer,
}: OptionsDrawerPropTypes) {
  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer}>
      <Box
        sx={{ width: "85vw" }}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <Content>
          <Item>
            <Typography variant="h5">Home</Typography>
          </Item>

          <Item>
            <Typography variant="h5">Bewertungen Löschen</Typography>
          </Item>

          <Box>
            <Button variant="contained" size="large">
              Angebot einholen
            </Button>
          </Box>
        </Content>
      </Box>
    </Drawer>
  );
}
