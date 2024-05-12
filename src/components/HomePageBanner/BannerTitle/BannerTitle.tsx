import Stack from "@mui/material/Stack";
import {
  BannerTitleContainer,
  Title,
  Subheading,
  StyledButton,
} from "./styles";

import ArrowImg from "../../../assets/Icon.svg";

const BannerTitle = () => {
  return (
    <BannerTitleContainer>
      <Stack direction="column" spacing={3} alignItems="flex-start">
        <Title>Werden Sie zum Stern Ihrer Branche</Title>
        <Subheading>
          Erhöhen Sie Ihre Sichtbarkeit und ziehen Sie Kunden magnetisch an.
        </Subheading>
        <StyledButton endIcon={<img src={ArrowImg} alt="#" />}>
          Beratungsgespräch vereinbaren
        </StyledButton>
      </Stack>
    </BannerTitleContainer>
  );
};

export default BannerTitle;
