import { useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import CompanyImg from "../../../assets/company1.svg";
import CompanyImg2 from "../../../assets/company2.svg";
import companyImg4 from "../../../assets/company4.svg";
import company3Img1 from "../../../assets/company3Img1.svg";
import company3Img2 from "../../../assets/company3Img2.svg";
import company3Img3 from "../../../assets/company3Img3.svg";
import company3Img4 from "../../../assets/company3Img4.svg";

import { AblaufContainer } from "./styles";

export const Ablauf = () => {
  const [selectedCompany, setSelectedCompany] = useState(1);
  const AllCompanies = [
    {
      id: 1,
      title: "KOSTENLOSES ANGEBOT EINHOLEN",
      img: CompanyImg,
    },
    {
      id: 2,
      title: "ZU LÖSCHENDE BEWERTUNGEN AUSWÄHLEN",
      img: CompanyImg2,
    },
    {
      id: 3,
      title: "ZURÜCKLEHNEN & STATUS MITVERFOLGEN",
      img: CompanyImg,
    },
    {
      id: 4,
      title: "BEZAHLUNG ERST NACH ERFOLGREICHER LÖSCHUNG",
      img: companyImg4,
    },
  ];
  return (
    <AblaufContainer>
      <Typography variant="h3">Unser Ablauf</Typography>
      <Grid container spacing={4} alignItems="flex-start">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {AllCompanies?.map((e) => {
            return e?.id === selectedCompany ? (
              <Card className="selected-company-card" key={e?.id}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <div className="serial-number">0{e?.id}</div>
                  <Typography variant="h4">{e?.title}</Typography>
                </Stack>
              </Card>
            ) : (
              <Card
                onClick={() => setSelectedCompany(e?.id)}
                className="company-card"
                key={e?.id}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <div className="serial-number">0{e?.id}</div>
                  <Typography variant="h4">{e?.title}</Typography>
                </Stack>
              </Card>
            );
          })}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {AllCompanies?.map((e) => {
            if (e?.id === selectedCompany && e?.id === 1) {
              return (
                <Card className="company-image-card-1" key={e?.id}>
                  <img src={e?.img} alt="#" />
                </Card>
              );
            } else if (e?.id === selectedCompany && e?.id === 2) {
              return (
                <Card className="company-image-card-2" key={e?.id}>
                  <img src={e?.img} alt="#" />
                </Card>
              );
            } else if (e?.id === selectedCompany && e?.id === 3) {
              return (
                <Card className="company-image-card-3" key={e?.id}>
                  <Stack direction="column">
                    <Typography variant="h5">
                      44 Bewertungen eingereicht
                    </Typography>
                    <img src={company3Img1} alt="#" className="image-1" />
                    <img src={company3Img2} alt="#" className="image-1" />
                    <img src={company3Img3} alt="#" className="image-3" />
                    <img src={company3Img4} alt="#" className="image-1" />
                  </Stack>
                </Card>
              );
            } else if (e?.id === selectedCompany && e?.id === 4) {
              return (
                <Card className="company-image-card-4" key={e?.id}>
                  <img src={e?.img} alt="#" />
                </Card>
              );
            }
          })}
        </Grid>
      </Grid>
      <Stack alignItems="center">
        <Button variant="contained" size="large">
          Angebot anfordern
        </Button>
      </Stack>
    </AblaufContainer>
  );
};
