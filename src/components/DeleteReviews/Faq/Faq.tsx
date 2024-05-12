import { useState } from "react";
import { Fade } from "react-awesome-reveal";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import { FaqContainer, FaqAccordion } from "./styles";

const faqList = [
  {
    question: "Gegen welche negativen Bewertungen kann ich mich wehren?",
    answer:
      "Grundsätzlich kann jede negative Bewertung gemeldet werden. In ca. 80-90 % der Fälle erfolgt eine Löschung durch den Plattformbetreiber.",
  },
  {
    question: "Warum sind Bewertungen so wichtig?",
    answer:
      "Für potenzielle Kunden sind Online-Bewertungen ein zentrales Entscheidungskriterium bei ihrer Kaufentscheidung. Eine positive Bewertungsbilanz weckt Vertrauen beim Nutzer und lässt dich im Ranking vor anderen Unternehmen erscheinen.",
  },
  {
    question: "Wie lange dauert eine Löschung?",
    answer:
      "In den allermeisten Fällen erfolgt die Löschung innerhalb von 2-3 Wochen, in seltenen Ausnahmefällen kann es zu Verzögerungen kommen. Sollte eine Löschung nicht möglich sein, tragen Sie keinerlei Kosten.",
  },
  {
    question: "Was passiert, wenn die Bewertung nicht gelöscht wurde?",
    answer:
      "Sollten wir bei der Löschung keinen Erfolg haben, entstehen Ihnen natürlich keinerlei Kosten. Unser Service ist und bleibt erfolgsbasiert.",
  },
  {
    question:
      "Was passiert, wenn nach der Löschung die gleiche Person mich wieder negativ bewertet?",
    answer:
      "Die gleiche Person kann Sie mit dem gleichen Profil kein zweites Mal bewerten. Sofern eine Bewertung gelöscht wird, wird dieses Profil für eine weitere Bewertung gesperrt.",
  },
];

export default function BasicAccordion() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleChange = (panel: string) => (event: any, isExpanded: boolean) => {
    if (event) {
      setExpanded(isExpanded ? panel : null);
    }
  };

  return (
    <FaqContainer id="faq">
      <Typography variant="h1" align="center">
        Häufig gestellte Fragen (FAQs)
      </Typography>
      <Fade direction="left" cascade duration={500} triggerOnce={true}>
        {faqList.map((faq, index) => (
          <FaqAccordion
            key={faq?.question}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography variant="h3">{faq?.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h4">{faq?.answer}</Typography>
            </AccordionDetails>
          </FaqAccordion>
        ))}
      </Fade>
    </FaqContainer>
  );
}
