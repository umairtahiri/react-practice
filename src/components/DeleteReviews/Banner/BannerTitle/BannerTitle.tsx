import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { BannerTitleContainer } from "./styles";

import ArrowDownImg from "../../../../assets/arrowDown.svg";
import TickImg from "../../../../assets/tickImg.svg";
import GermanImg from "../../../../assets/germanFlag.svg";

const BannerTitle = () => {
  const steps = [
    {
      label: "Ab 19€ netto pro Bewertung",
      img: TickImg,
    },
    {
      label: "Löschquote von über 94%",
      img: TickImg,
    },
    {
      label: "Bezahlung erst nach erfolgreicher Löschung",
      img: TickImg,
    },
    {
      label: "Deutsches Unternehmen",
      img: GermanImg,
    },
  ];

  return (
    <BannerTitleContainer>
      <Stack direction="column" spacing={3}>
        <Box>
          <Typography variant="h3">
            Negative bewertungen? ihre suche endet hier.
          </Typography>
          {steps?.map((e) => {
            return (
              <Stack
                key={e.label}
                direction="row"
                spacing={1.2}
                alignItems="center"
                marginBottom={1.625}
              >
                <img src={e?.img} alt="#" />
                <Typography variant="h6">{e?.label}</Typography>
              </Stack>
            );
          })}
        </Box>
        <Box>
          <Button
            variant="contained"
            size="large"
            endIcon={<img src={ArrowDownImg} alt="" />}
          >
            Angebot einholen
          </Button>
        </Box>
      </Stack>
    </BannerTitleContainer>
  );
};

export default BannerTitle;
