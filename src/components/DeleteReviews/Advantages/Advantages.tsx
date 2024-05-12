import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ComapnyTabs from "./Tabs/Tabs";
import { AdvantagesContainer } from "./styles";

export const Advantages = () => {
  return (
    <AdvantagesContainer>
      <Stack direction="column" spacing={2} alignItems="center">
        <Typography variant="h6">Vorteile</Typography>
        <ComapnyTabs />
      </Stack>
    </AdvantagesContainer>
  );
};
