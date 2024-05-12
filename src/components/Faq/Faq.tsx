import { useState } from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import addImg from "@/assets/addIcon.svg";
import { Stack } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import { FaqContainer, FaqAccordion } from "./styles";
import Image from "next/image";

const faqList = [
  {
    question:
      "Warum ist eine hohe Online-Sichtbarkeit für mein lokales Unternehmen so wichtig?",
    answer:
      "Hohe Online-Sichtbarkeit ermöglicht es potenziellen Kunden, Ihr Unternehmen schnell und einfach zu finden, wenn sie nach Ihren Produkten oder Dienstleistungen suchen. Dies erhöht die Wahrscheinlichkeit, dass sie sich für Ihr Angebot entscheiden.",
  },
  {
    question:
      "Was kann ich tun, wenn ich negative Bewertungen auf Google habe?",
    answer:
      "Zuerst analysieren wir den Ursprung und die Berechtigung jeder negativen Bewertung. Unser Team arbeitet dann daran, diese durch proaktives Engagement und das Sammeln positiver Bewertungen auszugleichen und Ihr Online-Image zu verbessern.",
  },
  {
    question: "Wie oft sollte ich meine Webseite aktualisieren?",
    answer:
      "Wir empfehlen, Ihre Webseite mindestens einmal im Jahr zu überprüfen und bei Bedarf zu aktualisieren, um sicherzustellen, dass die Inhalte aktuell, die Funktionen benutzerfreundlich und die Designs ansprechend bleiben.",
  },
  {
    question: "Was ist das Google Map 3-Pack und wie kann ich dort erscheinen?",
    answer:
      "Das Google Map 3-Pack zeigt die drei top platzierten lokalen Unternehmen direkt auf der Google-Suchergebnisseite. Unsere Optimierungsstrategien für Ihr Google-Maps-Profil können Ihre Chancen erhöhen, in dieser begehrten Position gelistet zu werden.",
  },
  {
    question: "Wie wichtig ist das Management von Kundenbewertungen?",
    answer:
      "Sehr wichtig. Aktives Bewertungsmanagement hilft Ihnen nicht nur, Ihr Online-Reputation zu stärken, sondern auch direktes Feedback von Kunden zu erhalten und darauf zu reagieren, was wiederum Kundenbindung und -zufriedenheit fördert.",
  },
  {
    question: "Welchen Vorteil bietet ein NFC-Bewertungsaufsteller?",
    answer:
      "Ein NFC-Bewertungsaufsteller vereinfacht das Hinterlassen von Bewertungen. Kunden können einfach ihr Smartphone nutzen, um durch eine Berührung sofort Feedback zu geben, was zu einer höheren Rate an positiven Bewertungen führen kann.",
  },
  {
    question:
      "Was ist der erste Schritt, um meine Online-Präsenz zu verbessern?",
    answer:
      "Der erste Schritt ist ein unverbindliches Beratungsgespräch mit uns, bei dem wir Ihre aktuellen Online-Aktivitäten analysieren und einen maßgeschneiderten Plan entwickeln, um Ihre Sichtbarkeit und Ihren Online-Erfolg zu maximieren.",
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
