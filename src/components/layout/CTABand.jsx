import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEye } from "@fortawesome/free-solid-svg-icons";
import { profile } from "../../data/content";
import { Container, Eyebrow, Button, Reveal } from "../ui";

export default function CTABand({
  eyebrow = profile.objective,
  title = "Looking for finance leadership that protects the balance sheet.",
}) {
  return (
    <section className="bg-ink text-paper">
      <Container className="py-20 text-center sm:py-24">
        <Reveal>
          <Eyebrow className="justify-center text-champagne">{eyebrow}</Eyebrow>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-[2rem] sm:text-[2.7rem] leading-tight text-paper text-balance">
            {title}
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/contact" icon={<FontAwesomeIcon icon={faArrowRight} className="text-[0.72rem]" />}>Start a conversation</Button>
            <Button to="/resume" variant="ghostLight" icon={<FontAwesomeIcon icon={faEye} className="text-[0.72rem]" />}>View the CV</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
