import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { NotificationContainer } from "./styles";

import warningImg from "../../../assets/warningIcon.svg";

export const Notification = () => {
  return (
    <NotificationContainer>
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={1} alignItems="flex-start">
          <img src={warningImg} alt="#" />
          <Typography variant="h2">
            Sternehero prüft nicht den Inhalt einer Bewertung und bietet keine
            Rechtsdienstleistung/Rechtsberatung an.
          </Typography>
        </Stack>
        <Typography variant="h3">
          Die Dienstleistung beschränkt sich konkret auf die Weiterleitung Ihrer
          Beschwerde an das Bewertungsportal als reine Botenleistung mit dem
          Ziel die Echtheit der Bewertung überprüfen zu lassen. Das
          Bewertungsportal leitet sodann das Prüfverfahren ein und entscheidet
          im eigenen Ermessen über die Löschung der Bewertung. Sollten Sie an
          einer Rechtsberatung interessiert sein oder gar juristische
          Möglichkeiten in Betracht ziehen, so wenden Sie sich bitte an einen
          zugelassenen Anwalt
        </Typography>
      </Stack>
    </NotificationContainer>
  );
};
