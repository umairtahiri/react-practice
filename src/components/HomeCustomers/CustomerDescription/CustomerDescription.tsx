import React from "react";
import Stack from "@mui/material/Stack";
import ArrowImg from "../../../assets/Icon.svg";
import {
  CustomerDescriptionContainer,
  Title,
  Description,
  StyledButton,
} from "./styles";

const CustomerDescription = () => {
  return (
    <CustomerDescriptionContainer>
      <Stack direction="column" alignItems="start" rowGap={3}>
        <Title>
          Warum Sichtbarkeit für potenzielle Kunden entscheidend ist
        </Title>
        <Description>
          Kunden suchen effizient und gezielt nach Dienstleistungen wie der
          Ihren. Eine hohe Online-Sichtbarkeit vereinfacht diesen Prozess enorm.
          Ohne sie könnten potenzielle Kunden an Ihnen vorbeisuchen, selbst wenn
          Sie genau das anbieten, wonach sie suchen.
        </Description>
        <StyledButton
          variant="contained"
          size="large"
          endIcon={<img src={ArrowImg} alt="" />}
        >
          Beratungsgespräch vereinbaren
        </StyledButton>
      </Stack>
    </CustomerDescriptionContainer>
  );
};

export default CustomerDescription;
