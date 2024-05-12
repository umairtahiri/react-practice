import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowImg from "../../../../assets/blackArrow.svg";
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
          <Tab label="Kundenvertrauen" {...a11yProps(0)} />
          <Tab label="Online-Sichtbarkeit" {...a11yProps(1)} />
          <Tab label="Wettbewerbsvorteil" {...a11yProps(2)} />
          <Tab label="Umsatzsteigerung" {...a11yProps(3)} />
          <Tab label="Kundentreue" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="tab-data">
          <Stack direction="column" alignItems="start" spacing={2}>
            <Box>
              <Typography variant="h5">{`Steigerung der Kundenvertrauens`}</Typography>
            </Box>
            <Box>
              <Typography variant="h5">
                {`Studien zeigen, dass etwa 80% der potenziellen Kunden Online-Bewertungen prüfen, bevor sie sich für einen Besuch oder Kauf entscheiden. Ein hoher Bewertungsdurchschnitt signalisiert Zuverlässigkeit und Qualität, was das Vertrauen neuer Kunden gewinnt.`}
              </Typography>
            </Box>
          </Stack>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="tab-data">
          <Stack direction="column" alignItems="start" spacing={2}>
            <Box>
              <Typography variant="h5">{`Erhöhung der Online-Sichtbarkeit`}</Typography>
            </Box>
            <Box>
              <Typography variant="h5">
                {`Google bevorzugt Unternehmen mit höheren Bewertungen bei der Anzeige von Suchergebnissen. Eine verbesserte Bewertung kann also direkt zu einer erhöhten Sichtbarkeit in den Suchmaschinen führen, was mehr Klicks und Besuche auf Ihrer Webseite bedeutet.`}
              </Typography>
            </Box>
          </Stack>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="tab-data">
          <Stack direction="column" alignItems="start" spacing={2}>
            <Box>
              <Typography variant="h5">{`Wettbewerbsvorteil gegenüber lokalen Mitbewerbern`}</Typography>
            </Box>
            <Box>
              <Typography variant="h5">
                {`In einem Markt, in dem sich viele lokale Unternehmen ähnliche Dienstleistungen anbieten, kann ein überlegener Bewertungsdurchschnitt Ihnen einen entscheidenden Vorteil verschaffen. Kunden neigen dazu, sich für das Unternehmen mit den besseren Bewertungen zu entscheiden.`}
              </Typography>
            </Box>
          </Stack>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className="tab-data">
          <Stack direction="column" alignItems="start" spacing={2}>
            <Box>
              <Typography variant="h5">{`Umsatzsteigerung durch positives Kundenfeedback`}</Typography>
            </Box>
            <Box>
              <Typography variant="h5">
                A
                {`Positive Bewertungen beeinflussen nicht nur die Wahrnehmung, sondern auch die Kaufentscheidungen. Eine von BrightLocal durchgeführte Studie ergab, dass die Verbesserung Ihres Bewertungsdurchschnitts um nur eine Sternbewertung Ihren Umsatz um bis zu 5-9% steigern kann.`}
              </Typography>
            </Box>
          </Stack>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <div className="tab-data">
          <Stack direction="column" alignItems="start" spacing={2}>
            <Box>
              <Typography variant="h5">{`Stärkung der Kundentreue und Steigerung der Wiederverkaufsrate`}</Typography>
            </Box>
            <Box>
              <Typography variant="h5">
                {`Durch das proaktive Management von Bewertungen, insbesondere durch die Aufmerksamkeit und Reaktion auf kritisches Feedback, demonstrieren Sie Kundennähe und die Bereitschaft zur Verbesserung. Dies nicht nur verbessert das Image Ihres Unternehmens, sondern fördert auch die Kundentreue. Zufriedene Kunden sind eher geneigt, wiederzukehren und weitere Käufe zu tätigen, was die Wiederverkaufsrate signifikant erhöht.`}
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
          Angebot anfordern
        </Button>
      </Box>
    </TabsContainer>
  );
};

export default ComapnyTabs;
