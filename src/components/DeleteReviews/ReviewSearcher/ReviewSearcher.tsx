import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import mapIcon from "../../../assets/mapIcon.svg";
import tickImg from "../../../assets/tickIcon.svg";
import userIcon from "../../../assets/userIcon.svg";
import mailIcon from "../../../assets/emailIcon.svg";
import rightImg from "../../../assets/rightIcon.svg";

import { Place } from "./types";

import {
  Item,
  ReviewSearchContainer,
  StyledTextField,
  PlaceCard,
  RatingNumber,
  ReviewText,
  FieldContainer,
  ListContainer,
  SearchButton,
  ItemsContainer,
  RightCard,
  LeftCard,
  SuccessCard,
} from "./styles";
import { Input } from "@mui/material";

export const ReviewSearcher = () => {
  const [selectedBusiness, setSelectedBusiness] = useState<Place | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");
  const [reviewSuccess, setReviewSuccess] = useState(false);
  const [token, setToken] = useState(false);

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name ist erforderlich"),
    email: yup
      .string()
      .email("Ungültige E-mail Adresse")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
        "Ungültige E-mail Adresse"
      )
      .required("E-Mail ist erforderlich"),
    phone: yup
      .string()
      .matches(
        /^(?:\+49|0)(?:[ ]?\d{3,4}){2}$/,
        "Ungültige deutsche Telefonnummer"
      )
      .required("Telefonnummer ist erforderlich"),
  });

  interface FormValues {
    phone: string;
    name: string;
    email: string;
    token: string;
  }

  const formik = useFormik<FormValues>({
    initialValues: {
      phone: "",
      name: "",
      email: "",
      token: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //@ts-ignore
      placeRequest(values);
      setSearchTerm("");
      setSearchResults([]);
      setSelectedBusiness(null);
      formik.resetForm();
    },
  });

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      setError("Please enter a search term.");
      return;
    }
    setError("");
    try {
      if (searchResults.length) {
        setSearchResults([]);
      }
      if (selectedBusiness) {
        setSelectedBusiness(null);
      }
      const response = await fetch(
        `http://localhost:3000/api/places/${searchTerm}`
        // `https://sternehero.de/api/places/${searchTerm}`
      );
      const data = await response.json();
      if (data.status === "OK") {
        setSearchResults(data.results);
      } else {
        setError("Error fetching search results. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  const handleSuccess = () => {
    setReviewSuccess(true);
    setSearchResults([]);
    setSelectedBusiness(null);
  };

  const placeRequest = async (values: Record<string, string>) => {
    try {
      const url =
        "https://flow.zoho.eu/20098388674/flow/webhook/incoming?zapikey=1001.07bc8ad95a30cc308537be56a4c72b6b.dc1bada9b9794ff37ec1404bfa05c3e3&isdebug=false";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data.status === "OK") {
        handleSuccess();
      } else {
        setError("Error fetching search results. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  const handleSearchText = (text: string) => {
    setError("");
    setSearchResults([]);
    setSelectedBusiness(null);
    setSearchTerm(text);
    setReviewSuccess(false);
  };

  const handleFinish = () => {
    setSearchResults([]);
    setSelectedBusiness(null);
    setReviewSuccess(false);
  };

  return (
    <ReviewSearchContainer id="reviewsearcher">
      <Typography variant="h1" color="black" textAlign="center">
        Unverbindliches Angebot anfordern!
      </Typography>
      {/* <Typography variant="h3" color="black" textAlign="center">
        Find and select your Google My Business listing
      </Typography> */}
      <FieldContainer>
        <StyledTextField
          placeholder="Unternehmensname eingeben"
          variant="outlined"
          fullWidth
          onBlur={() => setError("")}
          onChange={(e) => handleSearchText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          error={!!error}
          helperText={error}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/* <SearchOutlinedIcon /> */}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <SearchButton onClick={handleSearch}>Suchen</SearchButton>
              </InputAdornment>
            ),
          }}
        />
        {searchResults.length > 0 && !selectedBusiness && (
          <ListContainer onMouseLeave={() => setSearchResults([])}>
            <ItemsContainer>
              {searchResults?.map((place: Place) => {
                const { place_id, name, rating, formatted_address } = place;
                return (
                  <Item
                    key={place_id}
                    onClick={() => setSelectedBusiness(place)}
                  >
                    <Stack direction="row" alignItems="center">
                      <Typography variant="h3">{name},</Typography>
                      <Typography variant="h4">{formatted_address}</Typography>
                    </Stack>
                  </Item>
                );
              })}
            </ItemsContainer>
          </ListContainer>
        )}
        {selectedBusiness && (
          <PlaceCard>
            <LeftCard>
              <Stack direction="column" rowGap={1.5} alignItems="flex-start">
                <img
                  alt="placeimg"
                  src={selectedBusiness?.icon}
                  width={260}
                  height={180}
                />
                <Stack direction="column" rowGap={2}>
                  <Typography variant="h2">{selectedBusiness?.name}</Typography>
                  <Stack direction="row" alignItems="center" columnGap={2}>
                    <RatingNumber variant="h3">
                      {selectedBusiness?.rating}
                    </RatingNumber>
                    <Rating
                      name="read-only"
                      value={selectedBusiness?.rating}
                      readOnly
                    />
                    <ReviewText>
                      ({selectedBusiness?.user_ratings_total})
                    </ReviewText>
                  </Stack>
                  <Stack direction="row" alignItems="center" columnGap={1.2}>
                    <img src={mapIcon} alt="" />
                    <Typography variant="h5" color="black" maxWidth="250px">
                      {selectedBusiness?.formatted_address}
                    </Typography>
                  </Stack>
                </Stack>
                <Typography variant="h4">Unternehmen ändern</Typography>
              </Stack>
            </LeftCard>
            <RightCard>
              <form onSubmit={formik.handleSubmit}>
                <Stack direction="column" rowGap={2} alignItems="stretch">
                  <Stack direction="column" alignItems="start" rowGap={0.5}>
                    <Typography variant="h3">Vor- und Nachname</Typography>
                    <Input
                      placeholder="Name"
                      className={
                        formik.errors.name ? "error-input" : "email-input"
                      }
                      startAdornment={<img src={userIcon} alt="#" />}
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      name="name"
                      fullWidth
                    />
                    {formik.errors.name && (
                      <div className="error-message">{formik.errors.name}</div>
                    )}
                  </Stack>
                  <Stack direction="column" alignItems="start" rowGap={0.5}>
                    <Typography variant="h3">Email Addresse *</Typography>
                    <Input
                      placeholder="Email"
                      className={
                        formik.errors.email ? "error-input" : "email-input"
                      }
                      startAdornment={<img src={mailIcon} alt="#" />}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      name="email"
                      fullWidth
                    />
                    {formik.errors.email && (
                      <div className="error-message">{formik.errors.email}</div>
                    )}
                  </Stack>
                  <Stack direction="column" alignItems="start" rowGap={0.5}>
                    <Typography variant="h3">Telefonnummer</Typography>
                    <Input
                      placeholder="+123456"
                      className={
                        formik.errors.phone ? "error-input" : "email-input"
                      }
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      name="phone"
                      fullWidth
                    />
                    {formik.errors.phone && (
                      <div className="error-message">{formik.errors.phone}</div>
                    )}
                  </Stack>
                  <Stack direction="column" alignItems="start" rowGap={0.5}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Gutscheincode einlösen"
                      onChange={() => setToken(!token)}
                    />
                    <Input
                      placeholder="Gutscheincode"
                      className="email-input"
                      value={formik.values.token}
                      onChange={formik.handleChange}
                      name="token"
                      disabled={token}
                      fullWidth
                    />
                  </Stack>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<img src={rightImg} alt="" />}
                    type="submit"
                  >
                    Angebot einholen
                  </Button>
                </Stack>
              </form>
              {/* <form onSubmit={formik.handleSubmit} autoComplete="off">
                <Stack direction="column" rowGap={2} alignItems="flex-start">
                  <Stack direction="column" alignItems="start" rowGap={0.5}>
                    <Typography variant="h3">Vor- und Nachname</Typography>
                    <Input
                      placeholder="Name"
                      className="email-input"
                      startAdornment={<img src={userIcon} alt="#" />}
                    />
                  </Stack>
                  <Stack direction="column" alignItems="start" rowGap={0.5}>
                    <Typography variant="h3">Email Addresse *</Typography>
                    <Input
                      placeholder="Email"
                      className="email-input"
                      startAdornment={<img src={mailIcon} alt="#" />}
                    />
                  </Stack>
                  <Stack direction="column" alignItems="start" rowGap={0.5}>
                    <Typography variant="h3">Telefonnummer</Typography>
                    <Input
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      placeholder="+123456"
                      className="email-input"
                      id="phone"
                    />
                    {formik.errors && <div>Error Occured</div>}
                  </Stack>
                  <Stack direction="column" alignItems="start" rowGap={0.5}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Gutscheincode einlösen"
                    />
                    <Input
                      placeholder="Gutscheincode"
                      className="email-input"
                    />
                  </Stack>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<img src={rightImg} alt="" />}
                    type="submit"
                  >
                    Angebot einholen
                  </Button>
                </Stack>
              </form> */}
            </RightCard>
          </PlaceCard>
        )}
        {reviewSuccess && (
          <SuccessCard>
            <Stack direction="column" alignItems="center" rowGap={3}>
              <img src={tickImg} alt="" />
              <Stack direction="column" alignItems="center" rowGap={0.5}>
                <Typography variant="h3">
                  Vielen Dank für Ihre Anfrage!
                </Typography>
                <Typography variant="h4">
                  Sie erhalten in kürze Ihr Angebot!
                </Typography>
              </Stack>
              <Button
                variant="contained"
                size="large"
                onClick={() => handleFinish()}
              >
                Zur Startseite
              </Button>
            </Stack>
          </SuccessCard>
        )}
      </FieldContainer>
    </ReviewSearchContainer>
  );
};
