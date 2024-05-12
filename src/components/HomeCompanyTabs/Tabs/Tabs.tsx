import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowImg from "../../../assets/blackArrow.svg"
import { TabsContainer } from "./styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const ComapnyTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <TabsContainer>
      <Box sx={{ maxWidth: { xs: 320, sm: 480, md: "100%" } }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Bewertungen" {...a11yProps(0)} />
          <Tab label="Ihre Webseite" {...a11yProps(1)} />
          <Tab label="Google Map 3-Pack" {...a11yProps(2)} />
          <Tab label="Bewertungsmanagement" {...a11yProps(3)} />
          <Tab label="Social Media" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="tab-data">
          <Stack direction="column" alignItems="start" spacing={2}>
            <Box>
              <Typography variant="h5">{`Der Herzschlag Ihres Unternehmensrufs`}</Typography>
            </Box>
            <Box>
              <Typography variant="h5">
                {`Ihr Google-Bewertungsdurchschnitt spricht Bände. Ein starker Durchschnitt zieht neue Kunden an und verstärkt Ihren guten Ruf. Mit unserem gezielten Bewertungsmanagement eliminieren wir ungerechtfertigte negative Bewertungen und stärken die positiven Aspekte Ihres Online-Profils.`}
                 
              </Typography>
            </Box>
          </Stack>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="tab-data">
          <Stack direction="column" alignItems="start" spacing={2}>
            <Box>
              <Typography variant="h5">{`Das digitale Schaufenster`}</Typography>
            </Box>
            <Box>
              <Typography variant="h5">
                {`Ihre Webseite entscheidet innerhalb von Sekunden, ob ein Besucher bleibt. Eine benutzerfreundliche, modern gestaltete Webseite, die schnell lädt und leicht zu navigieren ist, vermittelt Professionalität und Vertrauenswürdigkeit.`}
              </Typography>
            </Box>
          </Stack>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="tab-data">
          <Stack direction="column" alignItems="start" spacing={2}>
            <Box>
              <Typography variant="h5">{`Stehen Sie auf dem virtuellen Podest`}</Typography>
            </Box>
            <Box>
              <Typography variant="h5">
                {`Eine Positionierung im Google Map 3-Pack erhöht Ihre lokale Sichtbarkeit drastisch. Diese prominente Platzierung steigert nicht nur Ihre Auffindbarkeit, sondern unterstreicht auch die Relevanz und Vertrauenswürdigkeit Ihres Unternehmens.`}
              </Typography>
            </Box>
          </Stack>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className="tab-data">
          <Stack direction="column" alignItems="start" spacing={2}>
            <Box>
              <Typography variant="h5">{`Jede Meinung zählt`}</Typography>
            </Box>
            <Box>
              <Typography variant="h5">
                {`Aktives Engagement bei Kundenbewertungen zeigt, dass Ihnen die Meinung Ihrer Kunden wichtig ist. Durch den Einsatz von NFC-Bewertungsaufstellern erleichtern wir Ihren Kunden, positives Feedback zu hinterlassen, was wiederum zu kontinuierlich guten Bewertungen führt.`}
              </Typography>
            </Box>
          </Stack>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <div className="tab-data">
          <Stack direction="column" alignItems="start" spacing={2}>
            <Box>
              <Typography variant="h5">{`Ihre digitale Bühne`}</Typography>
            </Box>
            <Box>
              <Typography variant="h5">
                {`Ein lebendiger Social-Media-Auftritt kann Ihre Sichtbarkeit signifikant erhöhen. Nutzen Sie diese Plattformen, um Ihre Marke zu stärken, den Dialog zu fördern und eine engagierte Community aufzubauen.`}
              </Typography>
            </Box>
          </Stack>
        </div>
      </CustomTabPanel>
      <Box>
        <Button
          variant="outlined"
          size="large"
          className="start-button"
          endIcon={<img src={ArrowImg} alt="" />}
        >
          Beratungsgespräch vereinbaren
        </Button>
      </Box>
    </TabsContainer>
  );
};

export default ComapnyTabs;
